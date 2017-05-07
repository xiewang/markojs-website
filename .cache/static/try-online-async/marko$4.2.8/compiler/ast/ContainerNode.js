$_mod.def("/marko$4.2.8/compiler/ast/ContainerNode", function(require, exports, module, __filename, __dirname) { 'use strict';

var Node = require('/marko$4.2.8/compiler/ast/Node'/*'./Node'*/);

class ContainerNode extends Node {
    constructor(type) {
        super(type);
        this.body = this.makeContainer([]);
    }

    generateCode(codegen) {
        return codegen.generateCode(this.body);
    }

    walk(walker) {
        this.body = walker.walk(this.body);
    }
}

module.exports = ContainerNode;
});