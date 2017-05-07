$_mod.def("/markojs-website$1.0.0/components/heading/getAnchorName", function(require, exports, module, __filename, __dirname) { module.exports = function getAnchorName(title, out) {
    var anchorCache = out.global.anchorCache || (out.global.anchorCache = {});
    var anchorName = title.replace(/[ \-]+/g, '-').replace(/[^A-Z0-9\-]+/gi, '').toLowerCase();
    var repeat = anchorCache[anchorName] != null ? ++anchorCache[anchorName] : (anchorCache[anchorName] = 0);
    if(repeat) {
        anchorName += '_' + repeat;
    }
    return anchorName;
};

});