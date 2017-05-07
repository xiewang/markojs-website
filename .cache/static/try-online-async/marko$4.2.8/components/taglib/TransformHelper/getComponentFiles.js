$_mod.def("/marko$4.2.8/components/taglib/TransformHelper/getComponentFiles", function(require, exports, module, __filename, __dirname) { 'use strict';

var fs = require('/markojs-website$1.0.0/browser-shims/fs/index'/*'fs'*/);
var path = require('/path-browserify$0.0.0/index'/*'path'*/);

function getComponentFiles(filename) {
    var ext = path.extname(filename);
    if (ext === '.js') {
        return null;
    }

    var nameNoExt = path.basename(filename, ext);

    var isEntry = 'index' === nameNoExt;

    var fileMatch = '('+nameNoExt.replace(/\./g, '\\.') + '\\.' + (isEntry ? '|' : '') + ')';
    var styleMatch = new RegExp('^'+fileMatch+'style\\.\\w+$');
    var componentMatch = new RegExp('^'+fileMatch+'component\\.\\w+$');
    var splitComponentMatch = new RegExp('^'+fileMatch+'component-browser\\.\\w+$');

    var dirname = path.dirname(filename);

    var foundFiles = {
        styles: [],
        file: null,
        browserFile: null
    };

    var dirFiles = fs.readdirSync(dirname);
    dirFiles.sort();

    for (let i=dirFiles.length - 1; i>=0; i--) {
        let file = dirFiles[i];

        if (styleMatch.test(file)) {
            foundFiles.styles.push(file);
        } else if (splitComponentMatch.test(file)) {
            foundFiles.browserFile = file;
        } else if (componentMatch.test(file)) {
            foundFiles.file = file;
        }
    }

    return foundFiles;
}

module.exports = getComponentFiles;

});