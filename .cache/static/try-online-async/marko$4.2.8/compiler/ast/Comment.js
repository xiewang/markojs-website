$_mod.def("/marko$4.2.8/compiler/ast/Comment", function(require, exports, module, __filename, __dirname) { 'use strict';

const Node = require('/marko$4.2.8/compiler/ast/Node'/*'./Node'*/);

function _isMultilineComment(comment) {
    return comment && comment.indexOf('\n') !== -1;
}

class Comment extends Node {
    constructor(def) {
        super('Comment');

        const comment = def.comment;

        if (_isMultilineComment(comment)) {
            this.comment = `/*\n${comment}\n*/`;
        } else {
            this.comment = `// ${comment}`;
        }
    }

    generateCode(codegen) {
        return this;
    }

    writeCode(writer) {
        var name = this.comment;
        writer.write(name);
    }

    toString() {
        return this.comment;
    }
}

module.exports = Comment;

});