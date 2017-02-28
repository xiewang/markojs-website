var fs = require('~/browser-shims/fs');
var path = require('path');
var resolveFrom = require('resolve-from');
var nativeRequire = require;

function virtualRequire(target) {
    // First see if it is a native module
    var resolved;

    try {
        resolved = nativeRequire.resolve(target);
    } catch(e) {}

    if (resolved) {
        return nativeRequire(resolved);
    }

    var module = loadFile(target);
    return module.exports;
}

function virtualResolveFrom(from, target) {
    return path.resolve(from, target);
}

if (typeof window !== 'undefined') {
    var markoModules = require('marko/compiler/modules');

    markoModules.require = virtualRequire;

    markoModules.resolveFrom = virtualResolveFrom;

    markoModules.resolve = function(absolutePath) {
        // First try a native resolve
        var resolved;

        try {
            resolved = nativeRequire.resolve(absolutePath);
        } catch(e) {}

        if (resolved) {
            return resolved;
        }

        // Then try our virtual resolve...
        return resolveFrom(path.dirname(absolutePath), absolutePath);
    };

    markoModules.deresolve = function(targetFilename, from) {
        return targetFilename;
    };
}


var markoCompiler = require('marko/compiler');
var READ_OPTIONS = { encoding: 'utf8' };

var extensions = {
    '.marko': function(src, filePath) {
        var outputFile = filePath + '.js';

        var compiled;

        try {
            compiled = markoCompiler.compileForBrowser(
                src,
                filePath,
                {
                    meta: true
                });
        } catch(err) {
            return {
                exports: {
                    error: err
                }
            };
        }


        var compiledSrc = compiled.code;
        var module = loadSource(compiledSrc, outputFile);
        module.exports.path = filePath;
        return module;
    },
    '.js': function(src, filePath) {
        return loadSource(src, filePath);
    },
    '.json': function(src, filePath) {

        var parsed = JSON.parse(src);

        return {
            exports: parsed
        };
    }
};

var cache = {};

function loadFile(filePath) {
    var cached = cache[filePath];
    if (cached) {
        return cached;
    }

    var src = fs.readFileSync(filePath, READ_OPTIONS);
    var ext = path.extname(filePath);
    var compiler = extensions[ext];
    var loadedModule = compiler(src, filePath);
    loadedModule.id = filePath;
    return loadedModule;
}

function loadSource(src, filePath) {
    var dir = path.dirname(filePath);
    var wrappedSource = '(function(require, exports, module, __filename, __dirname) { ' + src + ' })';
    var factoryFunc = eval(wrappedSource);
    var exports = {};
    var module = {
        require: function(target) {
            var loaded;

            try {
                loaded = require(target);
            } catch(e) {}


            var resolved = resolveFrom(dir, target);
            if (resolved) {
                var loadedModule = loadFile(resolved);
                return loadedModule.exports;
            }

            return nativeRequire(target);
        },
        exports: exports,
        id: filePath
    };

    factoryFunc(module.require, exports, module, filePath, dir);

    cache[filePath] = module;

    module.source = src;
    return module;
}

function clearCache(filter) {
    Object.keys(cache).forEach((cacheKey) => {
        var module = cache[cacheKey];
        if (filter(module.id)) {
            delete cache[cacheKey];
        }
    });
}

function clearFileCache(filePath) {
    delete cache[filePath];
}

exports.loadFile = loadFile;
exports.cache = cache;
exports.clearCache = clearCache;
exports.clearFileCache = clearFileCache;
exports.require = virtualRequire;
exports.resolveFrom = virtualResolveFrom;
