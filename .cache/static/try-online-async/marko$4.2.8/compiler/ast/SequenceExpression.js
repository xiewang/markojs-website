$_mod.def("/marko$4.2.8/compiler/ast/SequenceExpression", function(require, exports, module, __filename, __dirname) { 'use strict';

var Node = require('/marko$4.2.8/compiler/ast/Node'/*'./Node'*/);

class SequenceExpression extends Node {
    constructor(def) {
        super('SequenceExpression');
        this.expressions = def.expressions;
    }

    generateCode(codegen) {
        this.expressions = codegen.generateCode(this.expressions);
        return this;
    }

    writeCode(writer) {

        for (var i=0; i<this.expressions.length; i++) {
            var expression = this.expressions[i];

            if (i !== 0) {
                writer.write(', ');
            }

            writer.write(expression);
        }
    }

    isCompoundExpression() {
        return true;
    }

    toJSON() {
        return {
            type: 'SequenceExpression',
            expressions: this.expressions
        };
    }

    walk(walker) {
        this.expressions = walker.walk(this.expressions);
    }

    toString() {
        var code = '';

        for (var i=0; i<this.expressions.length; i++) {
            var expression = this.expressions[i];

            if (i !== 0) {
                code += ', ';
            }

            code += expression;
        }

        return code;
    }
}

module.exports = SequenceExpression;
});