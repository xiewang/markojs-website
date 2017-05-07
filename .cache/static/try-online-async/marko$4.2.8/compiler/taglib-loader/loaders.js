$_mod.def("/marko$4.2.8/compiler/taglib-loader/loaders", function(require, exports, module, __filename, __dirname) { var types = require('/marko$4.2.8/compiler/taglib-loader/types'/*'./types'*/);

function isSupportedAttributeProperty(propertyName) {
    return exports.loadAttributeFromProps.isSupportedProperty(propertyName);
}

function isSupportedTagProperty(propertyName) {
    return exports.loadTagFromProps.isSupportedProperty(propertyName);
}

function createTaglib(taglibPath) {
    return new types.Taglib(taglibPath);
}

exports.createTaglib = createTaglib;
exports.loadAttributeFromProps = require('/marko$4.2.8/compiler/taglib-loader/loadAttributeFromProps'/*'./loadAttributeFromProps'*/);
exports.loadTagFromProps = require('/marko$4.2.8/compiler/taglib-loader/loadTagFromProps'/*'./loadTagFromProps'*/);
exports.loadTagFromFile = require('/marko$4.2.8/compiler/taglib-loader/loadTagFromFile'/*'./loadTagFromFile'*/);
exports.loadTaglibFromProps = require('/marko$4.2.8/compiler/taglib-loader/loadTaglibFromProps'/*'./loadTaglibFromProps'*/);
exports.loadTaglibFromFile = require('/marko$4.2.8/compiler/taglib-loader/loadTaglibFromFile'/*'./loadTaglibFromFile'*/);
exports.loadAttributes = require('/marko$4.2.8/compiler/taglib-loader/loadAttributes'/*'./loadAttributes'*/);
exports.isSupportedAttributeProperty = isSupportedAttributeProperty;
exports.isSupportedTagProperty = isSupportedTagProperty;
});