$_mod.def("/marko$4.2.8/compiler/util/PosInfo", function(require, exports, module, __filename, __dirname) { 'use strict';var process=require("process"); 

var path = require('/path-browserify$0.0.0/index'/*'path'*/);

function getRelativePath(absolutePath) {
    if (typeof window === 'undefined') {
        absolutePath = path.resolve(process.cwd(), absolutePath);
        return path.relative(process.cwd(), absolutePath);
    } else {
        return absolutePath;
    }
}

class PosInfo {
    constructor(path, line, column) {
        this.path = getRelativePath(path);
        this.line = line;
        this.column = column;
    }

    toString() {
        return this.path + (this.line != null ? (":" + this.line + ":" + this.column) : '');
    }
}

module.exports = PosInfo;
});