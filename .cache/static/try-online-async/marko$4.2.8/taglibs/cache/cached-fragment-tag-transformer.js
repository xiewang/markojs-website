$_mod.def("/marko$4.2.8/taglibs/cache/cached-fragment-tag-transformer", function(require, exports, module, __filename, __dirname) { var defaultCacheManagerPath = require.resolve('/marko$4.2.8/taglibs/cache/default-cache-manager'/*'./default-cache-manager'*/);

module.exports = function(el, context) {
    if (!el.hasAttribute('cache-manager')) {
        var requirePath = context.getRequirePath(defaultCacheManagerPath);
        var defaultCacheManagerVar = context.importModule('__defaultCacheManager', requirePath);
        el.setAttributeValue('cache-manager', defaultCacheManagerVar);
    }
};
});