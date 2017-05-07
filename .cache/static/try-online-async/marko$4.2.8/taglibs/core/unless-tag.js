$_mod.def("/marko$4.2.8/taglibs/core/unless-tag", function(require, exports, module, __filename, __dirname) { module.exports = function nodeFactory(elNode, context) {
    var argument = elNode.argument;

    if (!argument) {
        context.addError('Invalid <unless> tag. Argument is missing. Example; <unless(foo === true)>');
        return elNode;
    }

    var attributes = elNode.attributes;

    if (attributes.length) {
        context.addError('Invalid <unless> tag. Attributes not allowed.');
        return;
    }

    var builder = context.builder;

    var test;
    try {
        test = builder.parseExpression(argument);
    } catch(e) {
        test = builder.literalFalse();
        context.addError('Invalid expression for unless statement:\n' + e.message);
    }

    return context.builder.ifStatement(builder.negate(test));
};
});