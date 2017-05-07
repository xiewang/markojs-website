$_mod.def("/marko$4.2.8/taglibs/core/util/createLoopNode", function(require, exports, module, __filename, __dirname) { var parseFor = require('/marko$4.2.8/taglibs/core/util/parseFor'/*'./parseFor'*/);

function createLoopNode(str, body, builder) {
    var forDef = parseFor(str);

    forDef.body = body;

    if (forDef.loopType === 'ForEach') {
        return builder.forEach(forDef);
    } else if (forDef.loopType === 'ForRange') {
        return builder.forRange(forDef);
    } else if (forDef.loopType === 'ForEachProp') {
        return builder.forEachProp(forDef);
    } else if (forDef.loopType === 'For') {
        return builder.forStatement(forDef);
    } else {
        throw new Error('Unsupported loop type: ' + forDef.loopType);
    }
}

module.exports = createLoopNode;

});