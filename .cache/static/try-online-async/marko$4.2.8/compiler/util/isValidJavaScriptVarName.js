$_mod.def("/marko$4.2.8/compiler/util/isValidJavaScriptVarName", function(require, exports, module, __filename, __dirname) { var reservedWords = require('/marko$4.2.8/compiler/util/javaScriptReservedWords'/*'./javaScriptReservedWords'*/);
var varNameRegExp = /^[$A-Z_][0-9A-Z_$]*$/i;

module.exports = function isValidJavaScriptVarName(varName) {
    if (reservedWords[varName]) {
        return false;
    }

    return varNameRegExp.test(varName);
};

});