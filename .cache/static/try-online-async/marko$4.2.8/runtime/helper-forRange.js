$_mod.def("/marko$4.2.8/runtime/helper-forRange", function(require, exports, module, __filename, __dirname) { module.exports = function forRangeHelper(from, to, step, callback) {
    if (step == null) {
        step = from <= to ? 1 : -1;
    }

    var i;

    if (step > 0) {
        for (i=from; i<=to; i += step) {
            callback(i);
        }
    } else {
        for (i=from; i>=to; i += step) {
            callback(i);
        }
    }

};
});