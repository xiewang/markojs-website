$_mod.def("/marko$4.2.8/compiler/util/html-elements", function(require, exports, module, __filename, __dirname) { 
var lassoPackageRoot = require('/lasso-package-root$1.0.1/src/index'/*'lasso-package-root'*/);
var path = require('/path-browserify$0.0.0/index'/*'path'*/);
var lassoCachingFS = require('/lasso-caching-fs$1.0.2/src/index'/*'lasso-caching-fs'*/);
var fs = require('/markojs-website$1.0.0/browser-shims/fs/index'/*'fs'*/);
var stripJsonComments = require('/strip-json-comments$2.0.1/index'/*'strip-json-comments'*/);
var fsReadOptions = { encoding: 'utf8' };

function parseJSONFile(path) {
    var json = fs.readFileSync(path, fsReadOptions);

    try {
        var taglibProps = JSON.parse(stripJsonComments(json));
        return taglibProps;
    } catch(e) {
        throw new Error('Unable to parse JSON file at path "' + path + '". Error: ' + e);
    }
}


function loadTags(file) {

    var raw = parseJSONFile(file);
    var tags = {};

    for (var k in raw) {
        if (raw.hasOwnProperty(k)) {
            if (k.charAt(0) === '<' && k.charAt(k.length - 1) === '>') {
                var tagName = k.substring(1, k.length - 1);
                tags[tagName] = true;
            }
        }
    }

    return tags;
}


var cache = {};

function getPackageRootDir(dirname) {
    try {
        return lassoPackageRoot.getRootDir(dirname);
    } catch(e) {
        return undefined;
    }
}

function isRegisteredElement(tagName, dir) {
    var packageRootDir = getPackageRootDir(dir);

    var currentDir = dir;

    while (true) {
        var filePath = path.join(currentDir, 'html-elements.json');
        if (lassoCachingFS.existsSync(filePath)) {
            var tags = cache[filePath];
            if (!tags) {
                tags = cache[filePath] = loadTags(filePath);
            }

            if (tags[tagName]) {
                return true;
            }
        }


        var parentDir = path.dirname(currentDir);
        if (!parentDir || parentDir === currentDir || parentDir === packageRootDir) {
            break;
        }
        currentDir = parentDir;
    }

    return false;
}

exports.isRegisteredElement = isRegisteredElement;
});