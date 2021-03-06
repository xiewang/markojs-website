$_mod.def("/marko$4.2.8/compiler/ast/Return", function(require, exports, module, __filename, __dirname) { 'use strict';

var Node = require('/marko$4.2.8/compiler/ast/Node'/*'./Node'*/);

class Return extends Node {
    constructor(def) {
        super('Return');
        this.argument = def.argument;
    }

    generateCode(codegen) {
        if (!codegen.inFunction) {
            throw new Error('"return" not allowed outside a function body');
        }

        this.argument = codegen.generateCode(this.argument);
        return this;
    }

    writeCode(writer) {
        var argument = this.argument;

        if (argument) {
            writer.write('return ');
            writer.write(argument);
        } else {
            writer.write('return');
        }
    }

    walk(walker) {
        this.argument = walker.walk(this.argument);
    }
}

module.exports = Return;
});