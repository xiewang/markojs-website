$_mod.def("/marko$4.2.8/compiler/ast/Text/html/generateCode", function(require, exports, module, __filename, __dirname) { 'use strict';

var escapeXml = require('/marko$4.2.8/runtime/html/helpers'/*'../../../../runtime/html/helpers'*/).x;
var Literal = require('/marko$4.2.8/compiler/ast/Literal'/*'../../Literal'*/);

module.exports = function(node, codegen) {
    var context = codegen.context;
    var argument = codegen.generateCode(node.argument);
    var escape = node.escape !== false;

    var htmlArray = [];

    function append(argument) {
        if (argument instanceof Literal) {
            if (!argument.value) {
                return;
            }

            if (context.isFlagSet('SCRIPT_BODY') || context.isFlagSet('STYLE_BODY')) {
                escape = false;
            }

            if (escape === true) {
                argument.value = escapeXml(argument.value.toString());
            }

            htmlArray.push(argument);
        } else {
            let builder = codegen.builder;

            if (escape) {
                let escapeIdentifier = context.helper('escapeXml');

                if (context.isFlagSet('SCRIPT_BODY')) {
                    escapeIdentifier = context.helper('escapeScript');
                }

                if (context.isFlagSet('STYLE_BODY')) {
                    escapeIdentifier = context.helper('escapeStyle');
                }

                // TODO Only escape the parts that need to be escaped if it is a compound expression with static
                //      text parts
                argument = builder.functionCall(
                    escapeIdentifier,
                    [argument]);
            } else {
                argument = builder.functionCall(context.helper('str'), [ argument ]);
            }
            htmlArray.push(argument);
        }
    }

    if (Array.isArray(argument)) {
        argument.forEach(append);
    } else {
        append(argument);
    }

    if (htmlArray.length) {
        return codegen.builder.html(htmlArray);
    } else {
        return null;
    }
};
});