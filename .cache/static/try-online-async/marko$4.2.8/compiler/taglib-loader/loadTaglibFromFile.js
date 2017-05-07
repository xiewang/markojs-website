$_mod.def("/marko$4.2.8/compiler/taglib-loader/loadTaglibFromFile", function(require, exports, module, __filename, __dirname) { var jsonFileReader = require('/marko$4.2.8/compiler/taglib-loader/json-file-reader'/*'./json-file-reader'*/);
var types = require('/marko$4.2.8/compiler/taglib-loader/types'/*'./types'*/);
var cache = require('/marko$4.2.8/compiler/taglib-loader/cache'/*'./cache'*/);
var loaders = require('/marko$4.2.8/compiler/taglib-loader/loaders'/*'./loaders'*/);

var ok = require('/assert$1.4.1/assert'/*'assert'*/).ok;

function loadFromFile(filePath) {
    ok(filePath, '"filePath" is required');

    var taglib = cache.get(filePath);

    // Only load a taglib once by caching the loaded taglibs using the file
    // system file path as the key
    if (!taglib) {
        taglib = new types.Taglib(filePath);
        cache.put(filePath, taglib);

        var taglibProps = jsonFileReader.readFileSync(filePath);
        loaders.loadTaglibFromProps(taglib, taglibProps);
    }

    return taglib;
}

module.exports = loadFromFile;
});