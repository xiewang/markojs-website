$_mod.def("/markojs-website$1.0.0/routes/index/components/counter-example/index.marko", function(require, exports, module, __filename, __dirname) { // Compiled using marko@4.2.8 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require('/marko$4.2.8/vdom'/*"marko/vdom"*/).t(),
    marko_component = {
        onCreate: function() {
          this.state = {
              count: 0
            };
        },
        increment: function() {
          this.state.count++;
        }
      },
    marko_components = require('/marko$4.2.8/components/index-browser'/*"marko/components"*/),
    marko_registerComponent = marko_components.rc,
    marko_componentType = marko_registerComponent("/markojs-website$1.0.0/routes/index/components/counter-example/index.marko", function() {
      return module.exports;
    });

function render(input, out, __component, component, state) {
  var data = input;

  out.e("DIV", {
      "class": "count",
      id: __component.elId("_r0")
    }, 1, 4)
    .t(state.count);

  out.e("BUTTON", {
      "class": "example-button",
      id: __component.elId("_r1")
    }, 1, 4, {
      onclick: __component.d("increment")
    })
    .t("Click me!");
}

marko_template._ = marko_components.r(render, {
    type: marko_componentType,
    roots: [
      "_r0",
      "_r1"
    ]
  }, marko_component);

marko_template.Component = marko_components.c(marko_component, marko_template._);

});