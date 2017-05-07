$_mod.def("/marko$4.2.8/taglibs/core/var-tag", function(require, exports, module, __filename, __dirname) { var isValidJavaScriptVarName = require('/marko$4.2.8/compiler/util/isValidJavaScriptVarName'/*'../../compiler/util/isValidJavaScriptVarName'*/);

module.exports = function nodeFactory(el, context) {
    context.deprecate('The "<var>" tag is deprecated. Please use "$ <js_code>" for JavaScript in the template. See: https://github.com/marko-js/marko/wiki/Deprecation:-var-assign-invoke-tags');

    var vars;

    try {
        vars = context.builder.parseStatement(el.tagString);
    } catch(e) {}

    if (vars) {
        return vars;
    }

    var builder = context.builder;
    var hasError = false;

    var declarations = el.attributes.map((attr) => {
        var varName = attr.name;

        if (!isValidJavaScriptVarName(varName)) {
            context.addError('Invalid JavaScript variable name: ' + varName, 'INVALID_VAR_NAME');
            hasError = true;
            return;
        }

        var id = builder.identifier(varName);
        var init = attr.value;

        return {
            id: id,
            init
        };
    });

    if (hasError) {
        return el;
    }

    return context.builder.vars(declarations);
};

});