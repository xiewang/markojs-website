$_mod.def("/marko$4.2.8/runtime/helper-mergeNestedTags", function(require, exports, module, __filename, __dirname) { /**
 * Merges nested tags by rendering the body
 * @param  {[type]} object [description]
 * @param  {[type]} source [description]
 * @return {[type]}        [description]
 */
function mergeNestedTags(input) {
    if (input.renderBody) {
        input.renderBody(null, input);
    }
    input.renderBody = null;
    return input;
}

module.exports = mergeNestedTags;
});