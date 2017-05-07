$_mod.def("/marko$4.2.8/compiler/util/parseJavaScriptArgs", function(require, exports, module, __filename, __dirname) { 'use strict';

var ok = require('/assert$1.4.1/assert'/*'assert'*/).ok;

function parseJavaScriptArgs(args, builder) {
    ok(typeof args === 'string', '"args" should be a string');
    ok(builder, '"builder" is required');

    var parsed = builder.parseExpression('[' + args + ']');
    return parsed.elements;
}

module.exports = parseJavaScriptArgs;
});