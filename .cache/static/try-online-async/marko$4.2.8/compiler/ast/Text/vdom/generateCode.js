$_mod.def("/marko$4.2.8/compiler/ast/Text/vdom/generateCode", function(require, exports, module, __filename, __dirname) { 'use strict';

var TextVDOM = require('/marko$4.2.8/compiler/ast/Text/vdom/TextVDOM'/*'./TextVDOM'*/);
var Literal = require('/marko$4.2.8/compiler/ast/Literal'/*'../../Literal'*/);
var he = require('/he$1.1.1/he'/*'he'*/); // Used for dealing with HTML entities

module.exports = function(node, codegen, vdomUtil) {
    var argument = codegen.generateCode(node.argument);
    var escape = node.escape !== false;
    var isStatic = null;

    if (codegen.context.isFlagSet('SCRIPT_BODY')) {
        escape = true;
    }

    if (argument instanceof Literal) {
        var literalValue = argument.value;
        if (literalValue == null || literalValue === '') {
            // Don't add empty text nodes to the final tree
            return null;
        }

        if (escape === false) {
            escape = true;

            if (typeof literalValue === 'string') {
                if (literalValue.indexOf('<') !== -1) {
                    escape = false;
                } else if (literalValue.indexOf('&') !== -1) {
                    argument = codegen.builder.literal(he.decode(literalValue));
                }
            }
        }

    }

    isStatic = isStatic == null ? vdomUtil.isStaticValue(argument) : isStatic;
    return new TextVDOM({ argument, isStatic, escape });
};
});