$_mod.def("/marko$4.2.8/compiler/ast/HtmlElement/html/EndTag", function(require, exports, module, __filename, __dirname) { 'use strict';

var Node = require('/marko$4.2.8/compiler/ast/Node'/*'../../Node'*/);

class EndTag extends Node {
    constructor(def) {
        super('EndTag');
        this.tagName = def.tagName;
    }

    generateCode(codegen) {
        var tagName = this.tagName;
        var builder = codegen.builder;

        return [
            builder.htmlLiteral('</'),
            builder.html(tagName),
            builder.htmlLiteral('>')
        ];
    }
}

module.exports = EndTag;
});