$_mod.def("/marko$4.2.8/compiler/util/isValidJavaScriptIdentifier", function(require, exports, module, __filename, __dirname) { var idRegExp = /^[$A-Z_][0-9A-Z_$]*$/i;

module.exports = function isValidJavaScriptIdentifier(varName) {
    return idRegExp.test(varName);
};

});