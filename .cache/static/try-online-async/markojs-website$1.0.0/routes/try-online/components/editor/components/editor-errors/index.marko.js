$_mod.def("/markojs-website$1.0.0/routes/try-online/components/editor/components/editor-errors/index.marko", function(require, exports, module, __filename, __dirname) { // Compiled using marko@4.2.8 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require('/marko$4.2.8/vdom'/*"marko/vdom"*/).t(),
    marko_component = ({
    handleErrorClick: function (error, event) {
        this.emit('errorSelected', error);
        event.preventDefault();
    },
    getTemplateErrors: function () {
        var error = this.input.error;
        var file = this.input.file;
        if (error.templateFile !== file.path) {
            return;
        }
        return error.templateErrors;
    }
}),
    marko_components = require('/marko$4.2.8/components/index-browser'/*"marko/components"*/),
    marko_registerComponent = marko_components.rc,
    marko_componentType = marko_registerComponent("/markojs-website$1.0.0/routes/try-online/components/editor/components/editor-errors/index.marko", function() {
      return module.exports;
    }),
    marko_helpers = require('/marko$4.2.8/runtime/vdom/helpers'/*"marko/runtime/vdom/helpers"*/),
    marko_forEach = marko_helpers.f,
    marko_attrs0 = {
        "class": "message"
      },
    marko_attrs1 = {
        href: "#line",
        "class": "loc"
      },
    marko_attrs2 = {
        "class": "stack"
      };

function render(input, out, __component, component, state) {
  var data = input;

  var templateErrors = component.getTemplateErrors();

  out.be("DIV", {
      "class": "editor-errors",
      id: __component.id
    }, null, 4);

  if (templateErrors) {
    out.be("UL");

    marko_forEach(templateErrors, function(error) {
      out.be("LI");

      out.e("SPAN", marko_attrs0, 1)
        .t(error.message);

      if (error.pos) {
        out.e("A", marko_attrs1, 4, 0, {
            onclick: __component.d("handleErrorClick", [
                error
              ])
          })
          .t("at line ")
          .t(error.pos.line)
          .t(" col ")
          .t(error.pos.column);
      }

      out.ee();
    });

    out.ee();
  } else {
    out.be("DIV");

    var error = input.error;
    var stack;
    if (error.friendlyMessage) {
        stack = error.friendlyMessage;
    } else if (error.stack){
        stack = error.stack.toString();
    } else {
        stack = error.toString();
    }

    if (error.friendlyLabel) {
      out.e("HEADER", null, 2)
        .t(error.friendlyLabel)
        .t(":");
    }

    out.e("PRE", marko_attrs2, 1)
      .t(stack);

    out.ee();
  }

  out.ee();
}

marko_template._ = marko_components.r(render, {
    type: marko_componentType
  }, marko_component);

marko_template.Component = marko_components.c(marko_component, marko_template._);

});