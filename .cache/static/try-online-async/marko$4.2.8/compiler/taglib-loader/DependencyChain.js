$_mod.def("/marko$4.2.8/compiler/taglib-loader/DependencyChain", function(require, exports, module, __filename, __dirname) { 'use strict';

class DependencyChain {
    constructor(array) {
        this.array = array || [];
    }

    append(str) {
        return new DependencyChain(this.array.concat(str));
    }

    toString() {
        return '[' + this.array.join(' → ') + ']';
    }
}

module.exports = DependencyChain;
});