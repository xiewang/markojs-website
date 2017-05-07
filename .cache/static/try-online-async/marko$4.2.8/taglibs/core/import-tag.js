$_mod.def("/marko$4.2.8/taglibs/core/import-tag", function(require, exports, module, __filename, __dirname) { var isValidJavaScriptVarName = require('/marko$4.2.8/compiler/util/isValidJavaScriptVarName'/*'../../compiler/util/isValidJavaScriptVarName'*/);
var parseImport = require('/marko$4.2.8/taglibs/core/util/parseImport'/*'./util/parseImport'*/);

module.exports = function codeGenerator(el, codegen) {
    var builder = codegen.builder;
    var args = parseImport(el.tagString);
    var vars = {};

    args.forEach(arg => {
        var varName = arg.name;

        if (!isValidJavaScriptVarName(varName)) {
            codegen.addError('Invalid JavaScript variable name: ' + varName, 'INVALID_VAR_NAME');
            return;
        }

        if (arg.module) {
            // needs to be require()'d
            var result = builder.require(builder.literal(arg.value));

            if (varName) {
                // saves identifier
                vars[varName] = codegen.addStaticVar(varName, result);
            } else {
                codegen.addStaticCode(result);
            }
        } else {
            // ie: { bar } from "./bar"
            var modIdentifier = vars[arg.value.object];
            if (!modIdentifier) {
                codegen.addError('Variable not found: ' + arg.value.object);
                return;
            }

            codegen.addStaticVar(varName, builder.memberExpression(
                modIdentifier,
                builder.identifier(arg.value.property)
            ));
        }
    });

    return [];
};

});