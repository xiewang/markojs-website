$_mod.def("/marko$4.2.8/compiler/ast/Code", function(require, exports, module, __filename, __dirname) { 'use strict';

var Node = require('/marko$4.2.8/compiler/ast/Node'/*'./Node'*/);
var adjustIndent = require('/marko$4.2.8/compiler/util/adjustIndent'/*'../util/adjustIndent'*/);

class Code extends Node {
    constructor(def) {
        super('Code');
        this.value = def.value;
    }

    generateCode(codegen) {
        return this;
    }

    writeCode(writer) {
        var code = this.value;

        if (!code) {
            return;
        }

        code = adjustIndent(code, writer.currentIndent);

        writer.write(code);
    }
}

module.exports = Code;
});