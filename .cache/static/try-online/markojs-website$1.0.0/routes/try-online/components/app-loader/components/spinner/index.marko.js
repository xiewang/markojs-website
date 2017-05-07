$_mod.def("/markojs-website$1.0.0/routes/try-online/components/app-loader/components/spinner/index.marko", function(require, exports, module, __filename, __dirname) { // Compiled using marko@4.2.8 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require('/marko$4.2.8/vdom'/*"marko/vdom"*/).t(),
    marko_helpers = require('/marko$4.2.8/runtime/vdom/helpers'/*"marko/runtime/vdom/helpers"*/),
    marko_createElement = marko_helpers.e,
    marko_const = marko_helpers.const,
    marko_const_nextId = marko_const("b42d73"),
    marko_node0 = marko_createElement("DIV", {
        "class": "try-loader-container"
      }, 1, 0, {
        c: marko_const_nextId()
      })
      .e("DIV", {
          "class": "try-loader"
        }, 1)
        .e("SPAN", {
            "class": "green-loader"
          }, 0);

function render(input, out) {
  var data = input;

  out.n(marko_node0);
}

marko_template._ = render;

});