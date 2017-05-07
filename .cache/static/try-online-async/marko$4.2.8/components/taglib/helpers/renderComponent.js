$_mod.def("/marko$4.2.8/components/taglib/helpers/renderComponent", function(require, exports, module, __filename, __dirname) { module.exports = function renderCompontent(tagRenderer, input, out, componentArgs) {
    out.$c = componentArgs;
    tagRenderer(input, out);
    out.$c = null;
};

});