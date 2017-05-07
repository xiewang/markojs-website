$_mod.def("/marko$4.2.8/runtime/helper-forEachProperty", function(require, exports, module, __filename, __dirname) { var isArray = Array.isArray;

/**
 * Internal helper method for looping over the properties of any object
 * @private
 */
module.exports = function forEachPropertyHelper(o, func) {
    if (!o) {
        return;
    }

    if (isArray(o)) {
        for (var i=0; i<o.length; i++) {
            func(i, o[i]);
        }
    } else if (typeof Map && o instanceof Map) {
        o.forEach(function(v, k) {
            func(k, v);
        });
    } else {
        for (var k in o) {
            if (o.hasOwnProperty(k)) {
                func(k, o[k]);
            }
        }
    }
};
});