$_mod.def("/marko$4.2.8/components/taglib/body-transformer", function(require, exports, module, __filename, __dirname) { 'use strict';

module.exports = function transform(el, context) {
    let initComponentsNode = context.createNodeForEl('init-components');
    el.appendChild(initComponentsNode);

    // Make <await-reorderer> optional. Automatically insert it before the
    // body tag.
    let awaitReorderer = context.createNodeForEl('await-reorderer');
    el.appendChild(awaitReorderer);
};

});