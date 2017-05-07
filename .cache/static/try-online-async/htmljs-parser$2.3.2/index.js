$_mod.def("/htmljs-parser$2.3.2/index", function(require, exports, module, __filename, __dirname) { var Parser = require('/htmljs-parser$2.3.2/Parser'/*'./Parser'*/);

exports.createParser = function(listeners, options) {
    var parser = new Parser(listeners, options || {});
    return parser;
};

});