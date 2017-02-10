var fs = require('~/browser-shims/fs');
var path = require('path');
var resolveFrom = require('resolve-from');
var Module = require('module');

function virtualRequire(target) {
    // First see if it is a native module
    var resolved;

    try {
        resolved = nativeRequire.resolve(target);
    } catch(e) {};

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
        } catch(e) {};

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
var nativeRequire = require;

var READ_OPTIONS = { encoding: 'utf8' };
var nativeRequire = require;

var extensions = {
    '.marko': function(src, filePath) {
        var outputFile = filePath + '.js';
        var compiled = markoCompiler.compileForBrowser(
            src,
            filePath,
            {
                meta: true
            });

        var src = compiled.code;
        var module = loadSource(src, outputFile);
        module.exports.path = filePath;
        return module;
    },
    '.js': function(src, filePath) {
        return loadSource(src, filePath);
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

function clearCache() {
    Object.keys(cache).forEach((cacheKey) => {
        delete cache[cacheKey];
    });
}

exports.loadFile = loadFile;
exports.cache = cache;
exports.clearCache = clearCache;
exports.require = virtualRequire;
exports.resolveFrom = virtualResolveFrom;