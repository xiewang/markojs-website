$_mod.def("/markojs-website$1.0.0/routes/try-online/components/tree-view/index.marko", function(require, exports, module, __filename, __dirname) { // Compiled using marko@4.2.8 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require('/marko$4.2.8/vdom'/*"marko/vdom"*/).t(),
    marko_component = {},
    marko_components = require('/marko$4.2.8/components/index-browser'/*"marko/components"*/),
    marko_registerComponent = marko_components.rc,
    marko_componentType = marko_registerComponent("/markojs-website$1.0.0/routes/try-online/components/tree-view/index.marko", function() {
      return module.exports;
    }),
    app = require('/markojs-website$1.0.0/routes/try-online/app/index'/*"~/routes/try-online/app"*/),
    marko_helpers = require('/marko$4.2.8/runtime/vdom/helpers'/*"marko/runtime/vdom/helpers"*/),
    marko_forEach = marko_helpers.f,
    tree_view_item_template = require('/markojs-website$1.0.0/routes/try-online/components/tree-view/components/tree-view-item/index.marko'/*"./components/tree-view-item"*/),
    marko_loadTag = marko_helpers.t,
    tree_view_item_tag = marko_loadTag(tree_view_item_template);

function isExpanded(file) {
    return file.name === 'components';
};

function render(input, out, __component, component, state) {
  var data = input;

  out.be("DIV", {
      "class": "tree-view",
      id: __component.id
    }, null, 4);

  out.be("UL");

  marko_forEach(input.rootDir.sortedFiles, function(file) {
    if (!app.isHiddenFile(file)) {
      tree_view_item_tag({
          file: file,
          expanded: isExpanded(file)
        }, out);
    }
  });

  out.ee();

  out.ee();
}

marko_template._ = marko_components.r(render, {
    type: marko_componentType
  }, marko_component);

marko_template.Component = marko_components.c(marko_component, marko_template._);

});