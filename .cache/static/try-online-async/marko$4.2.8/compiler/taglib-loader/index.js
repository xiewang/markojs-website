$_mod.def("/marko$4.2.8/compiler/taglib-loader/index", function(require, exports, module, __filename, __dirname) { var cache = require('/marko$4.2.8/compiler/taglib-loader/cache'/*'./cache'*/);

var types = require('/marko$4.2.8/compiler/taglib-loader/types'/*'./types'*/);
var loaders = require('/marko$4.2.8/compiler/taglib-loader/loaders'/*'./loaders'*/);
var DependencyChain = require('/marko$4.2.8/compiler/taglib-loader/DependencyChain'/*'./DependencyChain'*/);

function loadTaglibFromProps(taglib, taglibProps) {
    return loaders.loadTaglibFromProps(taglib, taglibProps);
}

function loadTaglibFromFile(filePath) {
    return loaders.loadTaglibFromFile(filePath);
}

function clearCache() {
    cache.clear();
}

function createTaglib(filePath) {
    return new types.Taglib(filePath);
}

function loadTag(tagProps, filePath) {
    var tag = new types.Tag(filePath);
    loaders.loadTagFromProps(tag, tagProps, new DependencyChain(filePath ? [filePath] : []));
    return tag;
}

exports.clearCache = clearCache;
exports.createTaglib = createTaglib;
exports.loadTaglibFromProps = loadTaglibFromProps;
exports.loadTaglibFromFile = loadTaglibFromFile;
exports.loadTag = loadTag;
});