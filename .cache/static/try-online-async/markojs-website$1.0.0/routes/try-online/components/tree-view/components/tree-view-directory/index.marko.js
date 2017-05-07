$_mod.def("/markojs-website$1.0.0/routes/try-online/components/tree-view/components/tree-view-directory/index.marko", function(require, exports, module, __filename, __dirname) { // Compiled using marko@4.2.8 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require('/marko$4.2.8/vdom'/*"marko/vdom"*/).t(),
    marko_helpers = require('/marko$4.2.8/runtime/vdom/helpers'/*"marko/runtime/vdom/helpers"*/),
    marko_classList = marko_helpers.cl,
    marko_component = ({
    onCreate: function (input) {
        var focusedFile = app.focusedFile;
        var expanded = false;
        var focused = false;
        if (focusedFile) {
            if (focusedFile === input.dir.path) {
                expanded = true;
                focused = true;
            } else if (focusedFile.startsWith(input.dir.path + '/')) {
                expanded = true;
            }
        }
        if (input.expanded) {
            expanded = true;
        }
        this.state = {
            focused: focused,
            expanded: expanded
        };
    },
    onMount: function () {
        var dir = this.input.dir;
        this.subscribeTo(app).on('focus:change', focusedFile => {
            var isFocused = dir.path === focusedFile;
            if (!isFocused && focusedFile.startsWith(dir.path + '/')) {
                this.state.expanded = true;
            }
            this.state.focused = isFocused;
        });
    },
    handleClick: function (event) {
        event.stopPropagation();
        this.focusedFile;
        if (this.state.focused) {
            this.state.expanded = !this.state.expanded;
        } else {
            this.state.focused = true;
            this.state.expanded = true;
            app.focusFile(this.input.dir.path);
        }
    }
}),
    marko_components = require('/marko$4.2.8/components/index-browser'/*"marko/components"*/),
    marko_registerComponent = marko_components.rc,
    marko_componentType = marko_registerComponent("/markojs-website$1.0.0/routes/try-online/components/tree-view/components/tree-view-directory/index.marko", function() {
      return module.exports;
    }),
    marko_renderComponent = require('/marko$4.2.8/components/taglib/helpers/renderComponent'/*"marko/components/taglib/helpers/renderComponent"*/),
    app = require('/markojs-website$1.0.0/routes/try-online/app/index'/*"~/routes/try-online/app"*/),
    localStorageUtil = require('/markojs-website$1.0.0/util/localstorage'/*"~/util/localstorage"*/),
    marko_forEach = marko_helpers.f,
    tree_view_item_template = require('/markojs-website$1.0.0/routes/try-online/components/tree-view/components/tree-view-item/index.marko'/*"../tree-view-item"*/),
    marko_loadTag = marko_helpers.t,
    tree_view_item_tag = marko_loadTag(tree_view_item_template),
    marko_classAttr = marko_helpers.ca;

function render(input, out, __component, component, state) {
  var data = input;

  var dir = input.dir;

  out.be("LI", {
      "class": marko_classAttr(marko_classList([
        "dir",
        {
            focused: state.focused,
            expanded: state.expanded
          }
      ])),
      id: __component.id
    }, null, 4, {
      onclick: __component.d("handleClick")
    });

  out.e("LABEL", null, 1)
    .t(dir.name);

  if (dir.files) {
    out.be("UL");

    marko_forEach(dir.sortedFiles, function(file) {
      if (!app.isHiddenFile(file)) {
        marko_renderComponent(tree_view_item_tag, {
            file: file
          }, out, [
          __component,
          file.path
        ]);
      }
    });

    out.ee();
  }

  out.ee();
}

marko_template._ = marko_components.r(render, {
    type: marko_componentType
  }, marko_component);

marko_template.Component = marko_components.c(marko_component, marko_template._);

});