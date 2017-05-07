$_mod.def("/marko$4.2.8/taglibs/core/class-tag", function(require, exports, module, __filename, __dirname) { module.exports = function functionCodeGenerator(el, codegen) {
    if(el.parentNode.type !== 'TemplateRoot') {
        codegen.addError('class is a static tag and can only be declared at the template root');
    }
    codegen.addStaticCode(codegen.builder.expression(el.tagString));
    return null;
};
});