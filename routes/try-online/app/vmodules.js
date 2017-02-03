var fs = require('~/browser-shims/fs');
var path = require('path');
var resolveFrom = require('resolve-from');
var markoCompiler = require('marko/compiler');

var READ_OPTIONS = { encoding: 'utf8' };
var nativeRequire = require;

var extensions = {
    '.marko': function(src, filePath) {
        var outputFile = filePath + '.marko.js';
        var compiled = markoCompiler.compileForBrowser(src, filePath, { sourceOnly: true });
        return loadSource(compiled, outputFile);
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


            var resolved;

            if (target.charAt('.')) {
                resolved = resolveFrom(dir, target);
                if (!resolved) {
                    throw new Error('Module not found: ' + target + ' (from: ' + dir + ')');
                }

                return loadFile(resolved);
            } else {
                return nativeRequire(target);
            }


        },
        exports: exports,
        id: filePath
    };

    factoryFunc(require, exports, module, filePath, dir);

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