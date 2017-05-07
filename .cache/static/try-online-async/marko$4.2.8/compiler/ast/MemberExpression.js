$_mod.def("/marko$4.2.8/compiler/ast/MemberExpression", function(require, exports, module, __filename, __dirname) { 'use strict';

var Node = require('/marko$4.2.8/compiler/ast/Node'/*'./Node'*/);
var isCompoundExpression = require('/marko$4.2.8/compiler/util/isCompoundExpression'/*'../util/isCompoundExpression'*/);
var ok = require('/assert$1.4.1/assert'/*'assert'*/).ok;

class MemberExpression extends Node {
    constructor(def) {
        super('MemberExpression');
        this.object = def.object;
        this.property = def.property;
        this.computed = def.computed;

        ok(this.object, '"object" is required');
        ok(this.property, '"property" is required');
    }

    generateCode(codegen) {
        this.object = codegen.generateCode(this.object);
        this.property = codegen.generateCode(this.property);
        return this;
    }

    writeCode(writer) {
        var object = this.object;
        var property = this.property;
        var computed = this.computed;

        var wrapWithParens = isCompoundExpression(object);

        if (wrapWithParens) {
            writer.write('(');
        }

        writer.write(object);

        if (wrapWithParens) {
            writer.write(')');
        }

        if (computed) {
            writer.write('[');
            writer.write(property);
            writer.write(']');
        } else {
            writer.write('.');
            writer.write(property);
        }
    }

    toJSON() {
        return {
            type: 'MemberExpression',
            object: this.object,
            property: this.property,
            computed: this.computed
        };
    }

    walk(walker) {
        this.object = walker.walk(this.object);
        this.property = walker.walk(this.property);
    }

    toString() {
        var object = this.object;
        var property = this.property;
        var computed = this.computed;

        var result = object.toString();

        if (computed) {
            result += '[' + property + ']';
        } else {
            result += '.' + property;
        }

        return result;
    }
}

module.exports = MemberExpression;
});