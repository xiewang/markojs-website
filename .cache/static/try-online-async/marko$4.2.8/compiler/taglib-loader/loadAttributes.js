$_mod.def("/marko$4.2.8/compiler/taglib-loader/loadAttributes", function(require, exports, module, __filename, __dirname) { var ok = require('/assert$1.4.1/assert'/*'assert'*/).ok;
var forEachEntry = require('/raptor-util$3.2.0/forEachEntry'/*'raptor-util/forEachEntry'*/);
var loaders = require('/marko$4.2.8/compiler/taglib-loader/loaders'/*'./loaders'*/);

module.exports = function loadAttributes(value, parent, dependencyChain) {
    ok(parent);
    ok(dependencyChain);

    forEachEntry(value, (attrName, attrProps) => {
        var attr = loaders.loadAttributeFromProps(
            attrName,
            attrProps,
            dependencyChain.append('@' + attrName));

        parent.addAttribute(attr);
    });
};
});