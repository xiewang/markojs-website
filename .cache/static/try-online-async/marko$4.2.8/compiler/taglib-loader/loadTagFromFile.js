$_mod.def("/marko$4.2.8/compiler/taglib-loader/loadTagFromFile", function(require, exports, module, __filename, __dirname) { var jsonFileReader = require('/marko$4.2.8/compiler/taglib-loader/json-file-reader'/*'./json-file-reader'*/);
var types = require('/marko$4.2.8/compiler/taglib-loader/types'/*'./types'*/);
var cache = require('/marko$4.2.8/compiler/taglib-loader/cache'/*'./cache'*/);
var loaders = require('/marko$4.2.8/compiler/taglib-loader/loaders'/*'./loaders'*/);

var ok = require('/assert$1.4.1/assert'/*'assert'*/).ok;

function loadTagFromFile(filePath) {
    ok(filePath, '"filePath" is required');

    var tag = cache.get(filePath);

    // Only load a tag once by caching the loaded tags using the file
    // system file path as the key
    if (!tag) {
        tag = new types.Tag(filePath);
        cache.put(filePath, tag);

        var tagProps = jsonFileReader.readFileSync(filePath);
        loaders.loadTagFromProps(tag, tagProps);

    }

    return tag;
}

module.exports = loadTagFromFile;
});