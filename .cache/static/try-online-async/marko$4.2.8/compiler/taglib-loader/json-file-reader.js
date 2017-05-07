$_mod.def("/marko$4.2.8/compiler/taglib-loader/json-file-reader", function(require, exports, module, __filename, __dirname) { var fs = require('/markojs-website$1.0.0/browser-shims/fs/index'/*'fs'*/);
var stripJsonComments = require('/strip-json-comments$2.0.1/index'/*'strip-json-comments'*/);
var fsReadOptions = { encoding: 'utf8' };

exports.readFileSync = function (path) {
    var json = fs.readFileSync(path, fsReadOptions);

    try {
        var taglibProps = JSON.parse(stripJsonComments(json));
        return taglibProps;
    } catch(e) {
        throw new Error('Unable to parse JSON file at path "' + path + '". Error: ' + e);
    }
};

});