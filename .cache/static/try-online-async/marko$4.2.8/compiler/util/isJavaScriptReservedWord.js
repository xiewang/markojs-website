$_mod.def("/marko$4.2.8/compiler/util/isJavaScriptReservedWord", function(require, exports, module, __filename, __dirname) { var reservedWords = require('/marko$4.2.8/compiler/util/javaScriptReservedWords'/*'./javaScriptReservedWords'*/);

module.exports = function isJavaScriptReservedWord(varName) {
    return reservedWords[varName] === true;
};

});