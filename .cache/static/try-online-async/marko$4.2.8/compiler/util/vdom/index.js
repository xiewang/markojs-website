$_mod.def("/marko$4.2.8/compiler/util/vdom/index", function(require, exports, module, __filename, __dirname) { 'use strict';

const VDOMOptimizer = require('/marko$4.2.8/compiler/util/vdom/VDOMOptimizer'/*'./VDOMOptimizer'*/);
const isStaticValue = require('/marko$4.2.8/compiler/util/vdom/isStaticValue'/*'./isStaticValue'*/);

const OPTIMIZER_ADDED_KEY = Symbol();

function registerOptimizer(context) {
    var data = context.data;
    if (!data[OPTIMIZER_ADDED_KEY]) {
        data[OPTIMIZER_ADDED_KEY] = true;

        context.addOptimizer(new VDOMOptimizer());
    }
}

exports.registerOptimizer = registerOptimizer;
exports.isStaticValue = isStaticValue;
exports.registerOptimizer = registerOptimizer;
});