$_mod.def("/markojs-website$1.0.0/routes/try-online/components/tree-view/components/tree-view-item/index.marko", function(require, exports, module, __filename, __dirname) { // Compiled using marko@4.2.8 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require('/marko$4.2.8/vdom'/*"marko/vdom"*/).t(),
    marko_getCurrentComponent = require('/marko$4.2.8/components/taglib/helpers/getCurrentComponent'/*"marko/components/taglib/helpers/getCurrentComponent"*/),
    marko_renderComponent = require('/marko$4.2.8/components/taglib/helpers/renderComponent'/*"marko/components/taglib/helpers/renderComponent"*/),
    tree_view_directory_template = require('/markojs-website$1.0.0/routes/try-online/components/tree-view/components/tree-view-directory/index.marko'/*"../tree-view-directory"*/),
    marko_helpers = require('/marko$4.2.8/runtime/vdom/helpers'/*"marko/runtime/vdom/helpers"*/),
    marko_loadTag = marko_helpers.t,
    tree_view_directory_tag = marko_loadTag(tree_view_directory_template),
    tree_view_file_template = require('/markojs-website$1.0.0/routes/try-online/components/tree-view/components/tree-view-file/index.marko'/*"../tree-view-file"*/),
    tree_view_file_tag = marko_loadTag(tree_view_file_template);

function render(input, out) {
  var data = input;

  var __component = marko_getCurrentComponent(out);

  var file = input.file;

  var expanded = input.expanded;

  if (file.isDirectory()) {
    marko_renderComponent(tree_view_directory_tag, {
        dir: file,
        expanded: expanded
      }, out, [
      __component,
      file.path
    ]);
  } else {
    marko_renderComponent(tree_view_file_tag, {
        file: file
      }, out, [
      __component,
      file.path
    ]);
  }
}

marko_template._ = render;

});