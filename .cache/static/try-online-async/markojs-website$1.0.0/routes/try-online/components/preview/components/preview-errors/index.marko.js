$_mod.def("/markojs-website$1.0.0/routes/try-online/components/preview/components/preview-errors/index.marko", function(require, exports, module, __filename, __dirname) { // Compiled using marko@4.2.8 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require('/marko$4.2.8/vdom'/*"marko/vdom"*/).t(),
    marko_attrs0 = {
        "class": "preview-errors"
      };

function render(input, out) {
  var data = input;

  var stack = input.error.stack;

  out.e("DIV", marko_attrs0, 2)
    .e("HEADER", null, 3)
      .t("Unable to render ")
      .t(input.file.path)
      .t(":")
    .e("PRE", null, 1)
      .t(stack ? stack.toString() : input.error.toString());
}

marko_template._ = render;

});