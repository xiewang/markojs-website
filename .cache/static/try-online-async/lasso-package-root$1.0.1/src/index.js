$_mod.def("/lasso-package-root$1.0.1/src/index", function(require, exports, module, __filename, __dirname) { var nodePath = require('/path-browserify$0.0.0/index'/*'path'*/);
var lassoCachingFS = require('/lasso-caching-fs$1.0.2/src/index'/*'lasso-caching-fs'*/);

var rootPackagesCache = {};

function getRootPackage(dirname) {
    var rootPkg = rootPackagesCache[dirname];
    if (rootPkg) {
        return rootPkg;
    }

    var currentDir = dirname;
    while (true) {
        var packagePath = nodePath.join(currentDir, 'package.json');
        var pkg = lassoCachingFS.readPackageSync(packagePath);
        if (pkg && (pkg.name || pkg.dependencies || pkg.version || pkg.devDependencies || pkg.peerDependencies)) {
            rootPkg = pkg;
            break;
        }

        var parentDir = nodePath.dirname(currentDir);
        if (!parentDir || parentDir === currentDir) {
            break;
        }
        currentDir = parentDir;
    }

    rootPackagesCache[dirname] = rootPkg || null;

    return rootPkg;
}


function getRootDir(path) {
    var rootPkg = getRootPackage(path);
    return rootPkg && rootPkg.__dirname;
}

exports.getRootPackage = getRootPackage;
exports.getRootDir = getRootDir;
});