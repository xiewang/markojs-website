$_mod.def("/markojs-website$1.0.0/routes/try-online/components/pane/components/pane-tab/index.marko", function(require, exports, module, __filename, __dirname) { // Compiled using marko@4.2.8 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require('/marko$4.2.8/vdom'/*"marko/vdom"*/).t(),
    marko_helpers = require('/marko$4.2.8/runtime/vdom/helpers'/*"marko/runtime/vdom/helpers"*/),
    marko_classList = marko_helpers.cl,
    marko_component = ({
    onCreate: function () {
        this.state = {
            outputMode: 'preview',
            menuVisible: false
        };
    },
    onInput: function (input) {
        this.state.outputMode = input.outputMode || 'preview';
    },
    onMount: function () {
        this.subscribeTo(document.body).on('click', () => {
            this.state.menuVisible = false;
        });
    },
    handleTabClick: function (index) {
        var file = this.input.file;
        if (file.output) {
            this.emit('click', this.input);
        } else {
            app.focusFile(file.path);
        }
    },
    getTabTitle: function () {
        var file = this.input.file;
        var tabTitle = file.name;
        var parentDir = path.dirname(file.path);
        if (parentDir !== app.focusedDirectory) {
            tabTitle = path.basename(parentDir) + '/' + tabTitle;
        }
        var outputIcon;
        if (file.output) {
        }
        return tabTitle;
    },
    getOutputModeLabel: function () {
        var outputMode = this.state.outputMode;
        if (outputMode === 'preview') {
            return '(Preview)';
        } else if (outputMode === 'html') {
            return '(Output HTML)';
        } else if (outputMode === 'compiled') {
            return '(Compiled)';
        }
    },
    toggleMenu: function (event) {
        this.state.menuVisible = !this.state.menuVisible;
        event.stopPropagation();
        event.stopImmediatePropagation();
        event.preventDefault();
    },
    changeOutputMode: function (outputMode, event) {
        if (this.state.outputMode !== outputMode) {
            this.state.outputMode = outputMode;
            this.emit('outputModeChange', this.input.file.path, outputMode);
        }
        event.preventDefault();
    }
}),
    marko_components = require('/marko$4.2.8/components/index-browser'/*"marko/components"*/),
    marko_registerComponent = marko_components.rc,
    marko_componentType = marko_registerComponent("/markojs-website$1.0.0/routes/try-online/components/pane/components/pane-tab/index.marko", function() {
      return module.exports;
    }),
    app = require('/markojs-website$1.0.0/routes/try-online/app/index'/*"~/routes/try-online/app"*/),
    path = require('/path-browserify$0.0.0/index'/*"path"*/),
    marko_classAttr = marko_helpers.ca,
    marko_attrs0 = {
        "class": "tab-label"
      },
    marko_attrs1 = {
        "class": "output-mode"
      },
    marko_attrs2 = {
        "class": "configure"
      },
    marko_createElement = marko_helpers.e,
    marko_const = marko_helpers.const,
    marko_const_nextId = marko_const("d77c65"),
    marko_node0 = marko_createElement("SPAN", {
        "class": "icon"
      }, 0, 0, {
        c: marko_const_nextId()
      }),
    marko_attrs3 = {
        href: "#Preview"
      },
    marko_attrs4 = {
        href: "#OutputHTML"
      },
    marko_attrs5 = {
        href: "#Compiled"
      };

function render(input, out, __component, component, state) {
  var data = input;

  var focused = input.focused;

  var active = input.active;

  var file = input.file;

  out.be("LI", {
      "class": marko_classAttr(marko_classList([
        "tab",
        [
            focused && "focused",
            active && "active"
          ]
      ])),
      id: __component.id
    }, null, 4, {
      onclick: __component.d("handleTabClick")
    });

  out.be("SPAN", marko_attrs0);

  out.t(component.getTabTitle());

  if (file.output) {
    out.e("SPAN", marko_attrs1, 1)
      .t(component.getOutputModeLabel());
  }

  out.ee();

  if (file.output) {
    out.e("SPAN", marko_attrs2, 1, 0, {
        onclick: __component.d("toggleMenu")
      })
      .n(marko_node0);
  }

  out.e("DIV", {
      "class": marko_classAttr(marko_classList([
        "menu",
        [
            state.menuVisible && "visible"
          ]
      ]))
    }, 1, 4)
    .e("UL", null, 3)
      .e("LI", null, 1)
        .e("A", marko_attrs3, 1, 0, {
            onclick: __component.d("changeOutputMode", [
                "preview"
              ])
          })
          .t("Preview")
      .e("LI", null, 1)
        .e("A", marko_attrs4, 1, 0, {
            onclick: __component.d("changeOutputMode", [
                "html"
              ])
          })
          .t("Output HTML")
      .e("LI", null, 1)
        .e("A", marko_attrs5, 1, 0, {
            onclick: __component.d("changeOutputMode", [
                "compiled"
              ])
          })
          .t("Compiled");

  out.ee();
}

marko_template._ = marko_components.r(render, {
    type: marko_componentType
  }, marko_component);

marko_template.Component = marko_components.c(marko_component, marko_template._);

});