$_mod.def("/marko$4.2.8/compiler/util/replacePlaceholderEscapeFuncs", function(require, exports, module, __filename, __dirname) { var AttributePlaceholder = require('/marko$4.2.8/compiler/ast/AttributePlaceholder'/*'../ast/AttributePlaceholder'*/);

module.exports = function replacePlaceholderEscapeFuncs(node, context) {
    var walker = context.createWalker({
        exit: function(node, parent) {
            if (node.type === 'FunctionCall' &&
                node.callee.type === 'Identifier') {

                if (node.callee.name === '$noEscapeXml') {
                    return new AttributePlaceholder({escape: false, value: node.args[0]});
                } else if (node.callee.name === '$escapeXml') {
                    return new AttributePlaceholder({escape: true, value: node.args[0]});
                }
            }
        }
    });

    return walker.walk(node);
};
});