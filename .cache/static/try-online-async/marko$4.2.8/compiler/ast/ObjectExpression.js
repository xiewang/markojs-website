$_mod.def("/marko$4.2.8/compiler/ast/ObjectExpression", function(require, exports, module, __filename, __dirname) { 'use strict';

var Node = require('/marko$4.2.8/compiler/ast/Node'/*'./Node'*/);

class ObjectExpression extends Node {
    constructor(def) {
        super('ObjectExpression');
        this.properties = def.properties;
    }

    generateCode(codegen) {
        this.properties = codegen.generateCode(this.properties);

        return this;
    }

    writeCode(writer) {
        var properties = this.properties;

        if (!properties || !properties.length) {
            writer.write('{}');
            return;
        }

        writer.incIndent();
        writer.write('{\n');
        writer.incIndent();

        properties.forEach((prop, i) => {
            writer.writeLineIndent();
            writer.write(prop);

            if (i < properties.length - 1) {
                writer.write(',\n');
            } else {
                writer.write('\n');
            }
        });

        writer.decIndent();
        writer.writeLineIndent();
        writer.write('}');
        writer.decIndent();
    }

    toJSON() {
        return {
            type: 'ObjectExpression',
            properties: this.properties
        };
    }

    walk(walker) {
        this.properties = walker.walk(this.properties);
    }

    toString(codegen) {
        var properties = this.properties;

        if (!properties || !properties.length) {
            return '{}';
        }

        let result = '{';

        properties.forEach((prop, i) => {
            if (i !== 0) {
                result += ', ';
            }
            result += prop;
        });

        return result + '}';    }
}

module.exports = ObjectExpression;
});