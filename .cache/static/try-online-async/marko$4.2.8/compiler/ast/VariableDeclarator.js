$_mod.def("/marko$4.2.8/compiler/ast/VariableDeclarator", function(require, exports, module, __filename, __dirname) { 'use strict';

var Node = require('/marko$4.2.8/compiler/ast/Node'/*'./Node'*/);
var Identifier = require('/marko$4.2.8/compiler/ast/Identifier'/*'./Identifier'*/);
var isValidJavaScriptVarName = require('/marko$4.2.8/compiler/util/isValidJavaScriptVarName'/*'../util/isValidJavaScriptVarName'*/);

class VariableDeclarator extends Node {
    constructor(def) {
        super('VariableDeclarator');
        this.id = def.id;
        this.init = def.init;

        let name = this.id.name;
        if (!name) {
            throw new Error('"name" is required');
        }

        if (!isValidJavaScriptVarName(name)) {
            var error = new Error('Invalid JavaScript variable name: ' + name);
            error.code = 'INVALID_VAR_NAME';
            throw error;
        }
    }

    generateCode(codegen) {
        this.id = codegen.generateCode(this.id);
        this.init = codegen.generateCode(this.init);
        return this;
    }

    writeCode(writer) {
        var id = this.id;
        var init = this.init;

        if (!(id instanceof Identifier) && typeof id !== 'string') {
            throw new Error('Invalid variable name: ' + id);
        }

        writer.write(id);

        if (init != null) {
            writer.write(' = ');
            writer.write(init);
        }
    }

    walk(walker) {
        this.id = walker.walk(this.id);
        this.init = walker.walk(this.init);
    }
}

module.exports = VariableDeclarator;
});