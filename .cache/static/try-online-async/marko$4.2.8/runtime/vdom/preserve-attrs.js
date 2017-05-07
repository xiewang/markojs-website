$_mod.def("/marko$4.2.8/runtime/vdom/preserve-attrs", function(require, exports, module, __filename, __dirname) { var extend = require('/raptor-util$3.2.0/extend'/*'raptor-util/extend'*/);

function removePreservedAttributes(attrs, props, clone) {
    var preservedAttrs = props && props.noupdate;
    if (preservedAttrs) {
        if (clone) {
            attrs = extend({}, attrs);
        }
        preservedAttrs.forEach(function(preservedAttrName) {
            delete attrs[preservedAttrName];
        });
    }

    return attrs;
}

require('/marko$4.2.8/runtime/vdom/VElement'/*'./VElement'*/).$__removePreservedAttributes = removePreservedAttributes;

});