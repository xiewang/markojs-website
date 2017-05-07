$_mod.def("/marko$4.2.8/compiler/ast/Text/index", function(require, exports, module, __filename, __dirname) { 'use strict';

var ok = require('/assert$1.4.1/assert'/*'assert'*/).ok;
var Node = require('/marko$4.2.8/compiler/ast/Node'/*'../Node'*/);
var Literal = require('/marko$4.2.8/compiler/ast/Literal'/*'../Literal'*/);

var generateHTMLCode = require('/marko$4.2.8/compiler/ast/Text/html/generateCode'/*'./html/generateCode'*/);
var generateVDOMCode = require('/marko$4.2.8/compiler/ast/Text/vdom/generateCode'/*'./vdom/generateCode'*/);
var vdomUtil = require('/marko$4.2.8/compiler/util/vdom/index'/*'../../util/vdom'*/);

class Text extends Node {
    constructor(def) {
        super('Text');
        this.argument = def.argument;
        this.escape = def.escape !== false;
        this.normalized = false;
        this.isFirst = false;
        this.isLast = false;
        this.preserveWhitespace = def.preserveWhitespace === true;

        ok(this.argument, 'Invalid argument');
    }

    generateHTMLCode(codegen) {
        return generateHTMLCode(this, codegen);
    }

    generateVDOMCode(codegen) {
        return generateVDOMCode(this, codegen, vdomUtil);
    }

    isLiteral() {
        return this.argument instanceof Node && this.argument.type === 'Literal';
    }

    isWhitespace() {
        var argument = this.argument;
        return (argument instanceof Literal) &&
            (typeof argument.value === 'string') &&
            (argument.value.trim() === '');
    }

    toJSON() {
        return {
            type: this.type,
            argument: this.argument
        };
    }
}

module.exports = Text;
});