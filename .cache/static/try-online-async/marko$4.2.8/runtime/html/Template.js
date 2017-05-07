$_mod.def("/marko$4.2.8/runtime/html/Template", function(require, exports, module, __filename, __dirname) { 'use strict';
var AsyncStream = require('/marko$4.2.8/runtime/html/AsyncStream'/*'./AsyncStream'*/);
var makeRenderable = require('/marko$4.2.8/runtime/renderable'/*'../renderable'*/);

function Template(path, renderFunc, options) {
    this.path = path;
    this._ = renderFunc;
    this.$__shouldBuffer = !options || options.shouldBuffer !== false;
    this.meta = undefined;
}

function createOut(globalData, parent, state, buffer) {
    return new AsyncStream(globalData, parent, state, buffer);
}

Template.prototype = {
    createOut: createOut,
    stream: function() {
        throw new Error('You must require("marko/stream")');
    }
};

makeRenderable(Template.prototype);

module.exports = Template;

});