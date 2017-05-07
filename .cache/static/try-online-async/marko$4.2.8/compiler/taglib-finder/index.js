$_mod.def("/marko$4.2.8/compiler/taglib-finder/index", function(require, exports, module, __filename, __dirname) { 'use strict';var process=require("process"); 
var taglibLoader = require('/marko$4.2.8/compiler/taglib-loader/index'/*'../taglib-loader'*/);
var nodePath = require('/path-browserify$0.0.0/index'/*'path'*/);
var lassoPackageRoot = require('/lasso-package-root$1.0.1/src/index'/*'lasso-package-root'*/);
var resolveFrom = require('/resolve-from$2.0.0/index'/*'resolve-from'*/);
var scanTagsDir = require('/marko$4.2.8/compiler/taglib-loader/scanTagsDir'/*'../taglib-loader/scanTagsDir'*/);
var DependencyChain = require('/marko$4.2.8/compiler/taglib-loader/DependencyChain'/*'../taglib-loader/DependencyChain'*/);
var lassoCachingFS = require('/lasso-caching-fs$1.0.2/src/index'/*'lasso-caching-fs'*/);

var findCache = {};
var excludedDirs = {};
var excludedPackages = {};
var taglibsForNodeModulesDirCache = {};

/**
 * Reset all internal state to the default state. This
 * was added for testing purposes.
 */
function reset() {
    lassoCachingFS.clearCaches();
    findCache = {};
    excludedDirs = {};
    excludedPackages = {};
    taglibsForNodeModulesDirCache = {};
}

function existsCached(path) {
    return lassoCachingFS.existsSync(path);
}

function getModuleRootPackage(dirname) {
    try {
        return lassoPackageRoot.getRootPackage(dirname);
    } catch(e) {
        return undefined;
    }
}

function getAllDependencyNames(pkg) {
    var map = {};

    if (pkg.dependencies) {
        Object.keys(pkg.dependencies).forEach((name) => {
            map[name] = true;
        });
    }

    if (pkg.peerDependencies) {
        Object.keys(pkg.peerDependencies).forEach((name) => {
            map[name] = true;
        });
    }

    if (pkg.devDependencies) {
        Object.keys(pkg.devDependencies).forEach((name) => {
            map[name] = true;
        });
    }

    return Object.keys(map);
}

function find(dirname, registeredTaglibs) {
    var found = findCache[dirname];
    if (found) {
        return found;
    }

    found = [];

    var added = {};

    var helper = {
        alreadyAdded: function(taglibPath) {
            return added.hasOwnProperty(taglibPath);
        },
        addTaglib: function(taglib) {
            if (added[taglib.path]) {
                return;
            }

            added[taglib.path] = true;
            found.push(taglib);
        },
        foundTaglibPackages: {}
    };

    var rootDirname = process.cwd(); // Don't search up past this directory
    var rootPkg = getModuleRootPackage(dirname);
    if (rootPkg) {
        rootDirname = rootPkg.__dirname; // Use the package's root directory as the top-level directory
    }


    // First walk up the directory tree looking for marko.json files or components/ directories
    let curDirname = dirname;
    while(true) {
        if(!excludedDirs[curDirname]) {
            let taglibPath = nodePath.join(curDirname, 'marko.json');
            let taglib;

            if (existsCached(taglibPath)) {
                taglib = taglibLoader.loadTaglibFromFile(taglibPath);
                helper.addTaglib(taglib);
            }

            if (!taglib || taglib.tagsDir === undefined) {
                let componentsPath = nodePath.join(curDirname, 'components');

                if (existsCached(componentsPath) && !excludedDirs[componentsPath] && !helper.alreadyAdded(componentsPath)) {
                    let taglib = taglibLoader.createTaglib(componentsPath);
                    scanTagsDir(componentsPath, nodePath.dirname(componentsPath), './components', taglib, new DependencyChain([componentsPath]));
                    helper.addTaglib(taglib);
                }
            }

        }

        if (curDirname === rootDirname) {
            break;
        }

        let parentDirname = nodePath.dirname(curDirname);
        if (!parentDirname || parentDirname === curDirname) {
            break;
        }
        curDirname = parentDirname;
    }

    if (rootPkg) {
        // Now look for `marko.json` from installed packages
        getAllDependencyNames(rootPkg).forEach((name) => {
            if (!excludedPackages[name]) {
                let taglibPath = resolveFrom(rootPkg.__dirname, name + '/marko.json');
                if (taglibPath) {
                    var taglib = taglibLoader.loadTaglibFromFile(taglibPath);
                    helper.addTaglib(taglib);
                }
            }
        });
    }

    found = found.concat(registeredTaglibs);

    findCache[dirname] = found;

    return found;
}

function clearCache() {
    lassoCachingFS.clearCaches();
    findCache = {};
    taglibsForNodeModulesDirCache = {};
}

function excludeDir(dir) {
    excludedDirs[dir] = true;
}

function excludePackage(name) {
    excludedPackages[name] = true;
}

exports.reset = reset;
exports.find = find;
exports.clearCache = clearCache;
exports.excludeDir = excludeDir;
exports.excludePackage = excludePackage;
});