$_mod.def("/marko$4.2.8/runtime/html/helper-attrs", function(require, exports, module, __filename, __dirname) { var attrHelper = require('/marko$4.2.8/runtime/html/helper-attr'/*'./helper-attr'*/);

function attrs(arg) {
    if (typeof arg === 'object') {
        var out = '';
        for (var attrName in arg) {
            out += attrHelper(attrName, arg[attrName]);
        }
        return out;
    } else if (typeof arg === 'string') {
        return arg;
    }
    return '';
}

module.exports = attrs;
});