$_mod.def("/marko$4.2.8/compiler/ast/Identifier", function(require, exports, module, __filename, __dirname) { 'use strict';

var Node = require('/marko$4.2.8/compiler/ast/Node'/*'./Node'*/);

class Identifier extends Node {
    constructor(def) {
        super('Identifier');
        this.name = def ? def.name : undefined;
    }

    generateCode(codegen) {
        return this;
    }

    writeCode(writer) {
        var name = this.name;
        writer.write(name);
    }

    toString() {
        return this.name;
    }
}

module.exports = Identifier;
});