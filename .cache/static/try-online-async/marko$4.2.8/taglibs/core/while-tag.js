$_mod.def("/marko$4.2.8/taglibs/core/while-tag", function(require, exports, module, __filename, __dirname) { module.exports = function codeGenerator(elNode, codegen) {
    var argument = elNode.argument;
    if (!argument) {
        codegen.addError('Invalid <while> tag. Argument is missing. Example: <while(i < 4)>');
        return elNode;
    }

    var builder = codegen.builder;

    return builder.whileStatement(builder.parseExpression(argument), elNode.body);
};
});