$_mod.def("/markojs-website$1.0.0/routes/try-online/components/tree-view/components/tree-view-file/index.marko", function(require, exports, module, __filename, __dirname) { // Compiled using marko@4.2.8 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require('/marko$4.2.8/vdom'/*"marko/vdom"*/).t(),
    marko_helpers = require('/marko$4.2.8/runtime/vdom/helpers'/*"marko/runtime/vdom/helpers"*/),
    marko_classList = marko_helpers.cl,
    marko_component = ({
    onCreate: function () {
        this.state = { focused: false };
    },
    onInput: function (input) {
        var file = input.file;
        this.state.focused = file.path === app.focusedFile;
    },
    onMount: function () {
        var file = this.input.file;
        this.subscribeTo(app).on('focus:change', focusedFile => {
            this.state.focused = file.path === focusedFile;
        });
    },
    handleClick: function (event) {
        event.stopPropagation();
        var file = this.input.file;
        if (!this.state.focused) {
            app.focusFile(file.path);
        }
    }
}),
    marko_components = require('/marko$4.2.8/components/index-browser'/*"marko/components"*/),
    marko_registerComponent = marko_components.rc,
    marko_componentType = marko_registerComponent("/markojs-website$1.0.0/routes/try-online/components/tree-view/components/tree-view-file/index.marko", function() {
      return module.exports;
    }),
    app = require('/markojs-website$1.0.0/routes/try-online/app/index'/*"~/routes/try-online/app"*/),
    path = require('/path-browserify$0.0.0/index'/*"path"*/),
    marko_classAttr = marko_helpers.ca;

function render(input, out, __component, component, state) {
  var data = input;

  var file = input.file;

  var ext = path.extname(file.path).substring(1);

  out.e("LI", {
      "class": marko_classAttr(marko_classList([
        "file",
        [
            state.focused && "focused",
            ext
          ]
      ])),
      id: __component.id
    }, 1, 4, {
      onclick: __component.d("handleClick")
    })
    .e("SPAN", null, 1)
      .t(file.name);
}

marko_template._ = marko_components.r(render, {
    type: marko_componentType
  }, marko_component);

marko_template.Component = marko_components.c(marko_component, marko_template._);

});