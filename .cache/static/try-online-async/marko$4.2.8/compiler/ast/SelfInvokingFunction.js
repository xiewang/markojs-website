$_mod.def("/marko$4.2.8/compiler/ast/SelfInvokingFunction", function(require, exports, module, __filename, __dirname) { 'use strict';

var Node = require('/marko$4.2.8/compiler/ast/Node'/*'./Node'*/);

class SelfInvokingFunction extends Node {
    constructor(def) {
        super('SelfInvokingFunction');
        this.params = def.params;
        this.args = def.args;
        this.body = this.makeContainer(def.body);
    }

    generateCode(codegen) {
        var params = this.params || [];
        var args = this.args || [];
        var oldInFunction = codegen.inFunction;
        codegen.inFunction = true;
        var body = codegen.generateCode(this.body);
        codegen.inFunction = oldInFunction;

        var functionDeclaration = codegen.builder.functionDeclaration(null, params, body);
        var functionCall = codegen.builder.functionCall(functionDeclaration, args);

        return functionCall;
    }

    walk(walker) {
        this.params = walker.walk(this.params);
        this.args = walker.walk(this.args);
        this.body = walker.walk(this.body);
    }
}

module.exports = SelfInvokingFunction;
});