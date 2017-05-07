$_mod.def("/marko$4.2.8/compiler/ast/HtmlAttribute/index", function(require, exports, module, __filename, __dirname) { 'use strict';

var Node = require('/marko$4.2.8/compiler/ast/Node'/*'../Node'*/);
var Literal = require('/marko$4.2.8/compiler/ast/Literal'/*'../Literal'*/);
var ok = require('/assert$1.4.1/assert'/*'assert'*/).ok;
var compiler = require('/marko$4.2.8/compiler/index'/*'../../'*/);
var generateHTMLCode = require('/marko$4.2.8/compiler/ast/HtmlAttribute/html/generateCode'/*'./html/generateCode'*/);
var generateVDOMCode = require('/marko$4.2.8/compiler/ast/HtmlAttribute/vdom/generateCode'/*'./vdom/generateCode'*/);
var vdomUtil = require('/marko$4.2.8/compiler/util/vdom/index'/*'../../util/vdom'*/);

function beforeGenerateCode(event) {
    event.codegen.isInAttribute = true;
}

function afterGenerateCode(event) {
    event.codegen.isInAttribute = false;
}

class HtmlAttribute extends Node {
    constructor(def) {
        super('HtmlAttribute');

        ok(def, 'Invalid attribute definition');
        this.type = 'HtmlAttribute';
        this.name = def.name;
        this.value = def.value;
        this.rawValue = def.rawValue;
        this.escape = def.escape;

        if (typeof this.value === 'string') {
            this.value = compiler.builder.parseExpression(this.value);
        }

        if (this.value && !(this.value instanceof Node)) {
            throw new Error('"value" should be a Node instance');
        }

        this.argument = def.argument;

        this.def = def.def; // The attribute definition loaded from the taglib (if any)

        this.on('beforeGenerateCode', beforeGenerateCode);
        this.on('afterGenerateCode', afterGenerateCode);
    }

    generateHTMLCode(codegen) {
        return generateHTMLCode(this, codegen);
    }

    generateVDOMCode(codegen) {
        return generateVDOMCode(this, codegen, vdomUtil);
    }

    isLiteralValue() {
        return this.value instanceof Literal;
    }

    isLiteralString() {
        return this.isLiteralValue() &&
            typeof this.value.value === 'string';
    }

    isLiteralBoolean() {
        return this.isLiteralValue() &&
            typeof this.value.value === 'boolean';
    }

    walk(walker) {
        this.value = walker.walk(this.value);
    }

    get literalValue() {
        if (this.isLiteralValue()) {
            return this.value.value;
        } else {
            throw new Error('Attribute value is not a literal value. Actual: ' + JSON.stringify(this.value, null, 2));
        }
    }
}

HtmlAttribute.isHtmlAttribute = function(attr) {
    return (attr instanceof HtmlAttribute);
};

module.exports = HtmlAttribute;
});