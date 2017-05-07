$_mod.def("/marko$4.2.8/compiler/ast/ThisExpression", function(require, exports, module, __filename, __dirname) { 'use strict';

var Node = require('/marko$4.2.8/compiler/ast/Node'/*'./Node'*/);

class ThisExpression extends Node {
    constructor(def) {
        super('ThisExpression');
    }

    generateCode(codegen) {
        return this;
    }

    writeCode(writer) {
        writer.write('this');
    }

    toString() {
        return 'this';
    }
}

module.exports = ThisExpression;
});