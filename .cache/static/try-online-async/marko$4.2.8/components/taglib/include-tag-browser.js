$_mod.def("/marko$4.2.8/components/taglib/include-tag-browser", function(require, exports, module, __filename, __dirname) { var normalInclude = require('/marko$4.2.8/taglibs/core/include-tag'/*'../../taglibs/core/include-tag'*/).$__doInclude;
var componentsUtil = require('/marko$4.2.8/components/util-browser'/*'../util'*/);
var getElementById = componentsUtil.$__getElementById;

var getComponentsContext = require('/marko$4.2.8/components/ComponentsContext'/*'../ComponentsContext'*/).$__getComponentsContext;

module.exports = function include(input, out) {
    if (!normalInclude(input, out)) {
        var elId = input._elId;

        // There's no body content so let's see if we should reuse
        // the existing body content in the DOM
        var existingEl = getElementById(out.$__document, elId);
        if (existingEl) {
            var componentsContext = getComponentsContext(out);
            componentsContext.$__globalContext.$__preserveDOMNode(elId, true /* body only */);
        }
    }
};

});