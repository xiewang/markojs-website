$_mod.def("/marko$4.2.8/compiler/ast/Expression", function(require, exports, module, __filename, __dirname) { 'use strict';

var Node = require('/marko$4.2.8/compiler/ast/Node'/*'./Node'*/);
var ok = require('/assert$1.4.1/assert'/*'assert'*/).ok;

class Expression extends Node {
    constructor(def) {
        super('Expression');
        this.value = def.value;
        ok(this.value != null, 'Invalid expression');
    }

    generateCode(codegen) {
        return this;
    }

    writeCode(writer) {
        writer.write(this.value);
    }

    isCompoundExpression() {
        return true;
    }

    toString() {
        return this.value;
    }
}

module.exports = Expression;
});