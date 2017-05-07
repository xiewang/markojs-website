$_mod.def("/marko$4.2.8/taglibs/core/for-tag", function(require, exports, module, __filename, __dirname) { var createLoopNode = require('/marko$4.2.8/taglibs/core/util/createLoopNode'/*'./util/createLoopNode'*/);

module.exports = function codeGenerator(elNode, codegen) {
    var argument = elNode.argument;
    if (!argument) {
        codegen.addError('Invalid <for> tag. Argument is missing. Example: <for(color in colors)>');
        return elNode;
    }

    var builder = codegen.builder;

    try {
        var loopNode = createLoopNode(argument, elNode.body, builder);
        return loopNode;
    } catch(e) {
        if (e.code === 'INVALID_FOR') {
            codegen.addError(e.message);
        } else {
            throw e;
        }
    }

};
});