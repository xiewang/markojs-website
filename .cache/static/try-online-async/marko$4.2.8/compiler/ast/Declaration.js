$_mod.def("/marko$4.2.8/compiler/ast/Declaration", function(require, exports, module, __filename, __dirname) { 'use strict';
var Node = require('/marko$4.2.8/compiler/ast/Node'/*'./Node'*/);

class Declaration extends Node {
    constructor(def) {
        super('Declaration');
        this.declaration = def.declaration;
    }

    generateHTMLCode(codegen) {
        var builder = codegen.builder;

        return [
            builder.htmlLiteral('<?'),
            codegen.generateCode(builder.text(this.declaration)),
            builder.htmlLiteral('?>')
        ];
    }

    toJSON() {
        return {
            type: this.type,
            value: this.value
        };
    }
}

module.exports = Declaration;
});