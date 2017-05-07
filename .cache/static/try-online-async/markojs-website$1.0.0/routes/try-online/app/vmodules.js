$_mod.def("/markojs-website$1.0.0/routes/try-online/app/vmodules", function(require, exports, module, __filename, __dirname) { 'use strict';

const fs = require('/markojs-website$1.0.0/browser-shims/fs/index'/*'~/browser-shims/fs'*/);
const path = require('/path-browserify$0.0.0/index'/*'path'*/);
const resolveFrom = require('/resolve-from$2.0.0/index'/*'resolve-from'*/);
const nativeRequire = require;

function virtualRequire(target) {
    // First see if it is a native module
    let resolved;

    try {
        resolved = nativeRequire.resolve(target);
    } catch(e) {}

    if (resolved) {
        return nativeRequire(resolved);
    }

    let module = loadFile(target);
    return module.exports;
}

function virtualResolveFrom(from, target) {
    return path.resolve(from, target);
}

if (typeof window !== 'undefined') {
    let markoModules = require('/marko$4.2.8/compiler/modules'/*'marko/compiler/modules'*/);

    markoModules.require = virtualRequire;

    markoModules.resolveFrom = virtualResolveFrom;

    markoModules.resolve = function(absolutePath) {
        // First try a native resolve
        let resolved;

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


let markoCompiler = require('/marko$4.2.8/compiler/index'/*'marko/compiler'*/);
let READ_OPTIONS = { encoding: 'utf8' };

let extensions = {
    '.marko': function(src, filePath) {
        let outputFile = filePath + '.js';

        let compiled;

        try {
            compiled = markoCompiler.compileForBrowser(
                src,
                filePath,
                {
                    meta: true
                });
        } catch(err) {
            if (err.errors) {
                err.templateFile = filePath;
                err.templateErrors = err.errors;
            }
            return {
                error: err,
                exports: {}
            };
        }

        let compiledSrc = compiled.code;

        let templateModule = loadSource(compiledSrc, outputFile);
        templateModule.exports.path = filePath;
        return templateModule;
    },
    '.js': function(src, filePath) {
        return loadSource(src, filePath);
    },
    '.json': function(src, filePath) {

        let parsed;

        try {
            parsed = JSON.parse(src);
        } catch(err) {
            err.friendlyMessage = err.toString();
            return {
                error: err
            };
        }

        return {
            exports: parsed
        };
    },
    '.css': function(src, filePath) {
        return {
            exports: {}
        };
    }
};

let cache = {};

function loadFile(filePath) {
    let cached = cache[filePath];
    if (cached) {
        if (cached.error) {
            throw cached.error;
        }
        return cached;
    }

    let src = fs.readFileSync(filePath, READ_OPTIONS);
    let ext = path.extname(filePath);
    let compiler = extensions[ext];

    let loadedModule;


    try {
        loadedModule = compiler(src, filePath);
    } catch(error) {
        let finalError = error;
        if (!finalError.friendlyLabel) {
            finalError = Object.create(finalError);
            finalError.friendlyLabel = `Unable to load "${filePath}"`;
        }
        loadedModule = {
            error: finalError
        };
    }

    loadedModule.id = filePath;

    cache[filePath] = loadedModule;

    if (loadedModule.error) {
        setTimeout(() => {
            if (cache[filePath] === loadedModule) {
                delete cache[filePath];
            }
        }, 10);
        throw loadedModule.error;
    }

    return loadedModule;
}

function loadSource(src, filePath) {
    let dir = path.dirname(filePath);
    let wrappedSource = '(function(require, exports, module, __filename, __dirname) { ' + src + ' })';
    let factoryFunc;

    let exports = {};
    let loadedModule = {
        require: function(target) {
            let loaded;

            try {
                loaded = require(target);
            } catch(e) {}

            let resolved = resolveFrom(dir, target);
            if (resolved) {
                let importedModule;

                try {
                    importedModule = loadFile(resolved);
                } catch(error) {
                    let finalError = error;
                    if (!finalError.friendlyLabel) {
                        finalError = Object.create(error);
                        finalError.friendlyLabel = `Unable to import "${target}" from "${filePath}"`;
                    }
                    throw finalError;
                }

                return importedModule.exports;
            } else {
                try {
                    return nativeRequire(target);
                } catch(error) {
                    let finalError = error;
                    if (!finalError.friendlyLabel) {
                        finalError = Object.create(error);
                        finalError.friendlyLabel = `Unable to import "${target}" from "${filePath}"`;
                    }
                    throw finalError;
                }
            }
        },
        exports: exports,
        id: filePath
    };

    try {
        factoryFunc = eval(wrappedSource);
    } catch(error) {
        let finalError = error;
        if (!finalError.friendlyLabel) {
            finalError = Object.create(error);
            finalError.friendlyLabel =  `Unable to load "${filePath}": ${error.toString()}`;
        }
        throw finalError;
    }

    if (!loadedModule.error) {
        try {
            factoryFunc(loadedModule.require, exports, loadedModule, filePath, dir);
        } catch(error) {
            let finalError = error;
            if (!finalError.friendlyLabel) {
                finalError = Object.create(error);
                finalError.friendlyLabel =  `Unable to load "${filePath}"`;
            }
            throw finalError;
        }
    }

    loadedModule.source = src;
    return loadedModule;
}

function clearCache(filter) {
    Object.keys(cache).forEach((cacheKey) => {
        let module = cache[cacheKey];
        if (!filter || filter(module.id)) {
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

});