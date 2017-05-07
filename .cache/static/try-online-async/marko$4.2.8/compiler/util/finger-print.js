$_mod.def("/marko$4.2.8/compiler/util/finger-print", function(require, exports, module, __filename, __dirname) { var sha1 = require('/simple-sha1$2.1.0/browser'/*'simple-sha1'*/);

module.exports = function(str) {
    return sha1.sync(str);
};
});