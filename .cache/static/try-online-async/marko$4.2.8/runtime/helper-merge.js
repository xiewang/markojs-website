$_mod.def("/marko$4.2.8/runtime/helper-merge", function(require, exports, module, __filename, __dirname) { /**
 * Merges object properties
 * @param  {[type]} object [description]
 * @param  {[type]} source [description]
 * @return {[type]}        [description]
 */
function merge(into, source) {
    for (var k in source) {
        if (source.hasOwnProperty(k) && !into.hasOwnProperty(k)) {
            into[k] = source[k];
        }
    }
    return into;
}

module.exports = merge;
});