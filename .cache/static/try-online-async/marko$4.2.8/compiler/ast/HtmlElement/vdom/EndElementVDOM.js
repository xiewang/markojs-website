$_mod.def("/marko$4.2.8/compiler/ast/HtmlElement/vdom/EndElementVDOM", function(require, exports, module, __filename, __dirname) { 'use strict';
const Node = require('/marko$4.2.8/compiler/ast/Node'/*'../../Node'*/);

class EndElementVDOM extends Node {
    constructor() {
        super('EndElementVDOM');
    }

    writeCode(writer) {
        writer.write('out.ee()');
    }
}

module.exports = EndElementVDOM;
});