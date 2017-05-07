$_mod.def("/markojs-website$1.0.0/routes/try-online/components/app/components/collapse-icon/index.marko", function(require, exports, module, __filename, __dirname) { // Compiled using marko@4.2.8 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require('/marko$4.2.8/vdom'/*"marko/vdom"*/).t(),
    marko_component = {
        onCreate: function(input) {
          this.state = {
              collapsed: false
            };
        },
        onInput: function(input) {
          this.state.collapsed = input.collapsed === true;
        },
        toggle: function() {
          this.state.collapsed = !this.state.collapsed;

          this.emit("toggle", {
              isCollapsed: this.state.collapsed
            });
        }
      },
    marko_components = require('/marko$4.2.8/components/index-browser'/*"marko/components"*/),
    marko_registerComponent = marko_components.rc,
    marko_componentType = marko_registerComponent("/markojs-website$1.0.0/routes/try-online/components/app/components/collapse-icon/index.marko", function() {
      return module.exports;
    }),
    marko_helpers = require('/marko$4.2.8/runtime/vdom/helpers'/*"marko/runtime/vdom/helpers"*/),
    marko_classAttr = marko_helpers.ca;

var expandLookup = {
    'down': 'expand-up',
    'up': 'expand-down'
};

function render(input, out, __component, component, state) {
  var data = input;

  function getCollapseDirection() {
      if (state.collapsed) {
          return expandLookup[input.direction];
      } else {
          return 'collapse-' + input.direction;
      }
  }

  out.e("DIV", {
      "class": marko_classAttr([
          "collapse-icon",
          getCollapseDirection()
        ]),
      id: __component.id
    }, 0, 4, {
      onclick: __component.d("toggle")
    });
}

marko_template._ = marko_components.r(render, {
    type: marko_componentType
  }, marko_component);

marko_template.Component = marko_components.c(marko_component, marko_template._);

});