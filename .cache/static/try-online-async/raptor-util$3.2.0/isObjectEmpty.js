$_mod.def("/raptor-util$3.2.0/isObjectEmpty", function(require, exports, module, __filename, __dirname) { module.exports = function isObjectEmpty(o) {
    if (!o) {
        return true;
    }
    
    for (var k in o) {
        if (o.hasOwnProperty(k)) {
            return false;
        }
    }
    return true;
};
});