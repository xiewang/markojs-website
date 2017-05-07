$_mod.def("/marko$4.2.8/runtime/html/helper-attr", function(require, exports, module, __filename, __dirname) { var escape = require('/marko$4.2.8/runtime/html/escape'/*'./escape'*/);
var escapeString = escape.escapeString;
var escapeXmlAttr = escape.escapeXmlAttr;

var stringifiedAttrTest = /[&\'\n]/;
var stringifiedAttrReplace = /[&\'\n]/g;

function attr(name, value, shouldEscape) {
    shouldEscape = shouldEscape !== false;
    var type = typeof value;

    if (type === 'string') {
        return ' ' + name + '="' + (shouldEscape ? escapeXmlAttr(value) : value) + '"';
    } else if (value === true) {
        return ' ' + name;
    } else if (value == null || value === false) {
        return '';
    } else if (type === 'object') {
        value = JSON.stringify(value);
        if (shouldEscape) {
            value = escapeString(value, stringifiedAttrTest, stringifiedAttrReplace);
        }

        return ' ' + name + "='" + value + "'";
    } else {
        return ' ' + name + '=' + value; // number (doesn't need quotes)
    }
}

module.exports = attr;

});