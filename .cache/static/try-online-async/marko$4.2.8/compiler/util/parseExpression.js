$_mod.def("/marko$4.2.8/compiler/util/parseExpression", function(require, exports, module, __filename, __dirname) { var parseJavaScript = require('/marko$4.2.8/compiler/util/parseJavaScript'/*'./parseJavaScript'*/);

module.exports = function(src, builder) {
    return parseJavaScript(src, builder, true /* isExpression */ );
};
});