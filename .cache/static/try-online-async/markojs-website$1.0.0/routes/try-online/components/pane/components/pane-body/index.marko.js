$_mod.def("/markojs-website$1.0.0/routes/try-online/components/pane/components/pane-body/index.marko", function(require, exports, module, __filename, __dirname) { // Compiled using marko@4.2.8 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require('/marko$4.2.8/vdom'/*"marko/vdom"*/).t(),
    marko_helpers = require('/marko$4.2.8/runtime/vdom/helpers'/*"marko/runtime/vdom/helpers"*/),
    marko_classList = marko_helpers.cl,
    marko_getCurrentComponent = require('/marko$4.2.8/components/taglib/helpers/getCurrentComponent'/*"marko/components/taglib/helpers/getCurrentComponent"*/),
    marko_renderComponent = require('/marko$4.2.8/components/taglib/helpers/renderComponent'/*"marko/components/taglib/helpers/renderComponent"*/),
    app = require('/markojs-website$1.0.0/routes/try-online/app/index'/*"~/routes/try-online/app"*/),
    preview_template = require('/markojs-website$1.0.0/routes/try-online/components/preview/index.marko'/*"../../../preview"*/),
    marko_loadTag = marko_helpers.t,
    preview_tag = marko_loadTag(preview_template),
    w_preserve_tag = marko_loadTag(require('/marko$4.2.8/components/taglib/preserve-tag'/*"marko/components/taglib/preserve-tag"*/)),
    editor_template = require('/markojs-website$1.0.0/routes/try-online/components/editor/index.marko'/*"../../../editor"*/),
    editor_tag = marko_loadTag(editor_template),
    marko_classAttr = marko_helpers.ca;

function render(input, out) {
  var data = input;

  var __component = marko_getCurrentComponent(out);

  var focused = input.focused;

  var active = input.active;

  var file = input.file;

  var outputMode = input.outputMode || 'preview';

  out.be("DIV", {
      "class": marko_classAttr(marko_classList([
        "pane-body",
        [
            focused && "focused",
            active && "active"
          ]
      ]))
    }, null, 4);

  if (file.output) {
    var __componentId0 = __component.elId((("preview-" + file.path) + "-") + outputMode);

    w_preserve_tag({
        id: __componentId0,
        renderBody: function renderBody(out) {
          marko_renderComponent(preview_tag, {
              file: file,
              outputMode: outputMode
            }, out, [
            __component,
            "#" + __componentId0
          ]);
        }
      }, out);
  } else {
    var __componentId1 = __component.elId("editor-" + file.path);

    w_preserve_tag({
        id: __componentId1,
        renderBody: function renderBody(out) {
          marko_renderComponent(editor_tag, {
              file: file
            }, out, [
            __component,
            "#" + __componentId1
          ]);
        }
      }, out);
  }

  out.ee();
}

marko_template._ = render;

});