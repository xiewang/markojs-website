$_mod.def("/markojs-website$1.0.0/routes/try-online/components/pane/index.marko", function(require, exports, module, __filename, __dirname) { // Compiled using marko@4.2.8 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require('/marko$4.2.8/vdom'/*"marko/vdom"*/).t(),
    marko_component = ({
    onCreate: function (input) {
        var focusedFile = app.focusedFile;
        var activeIndex = undefined;
        input.files.forEach((file, i) => {
            if (file.path === focusedFile) {
                activeIndex = i;
            }
        });
        if (activeIndex === undefined) {
            activeIndex = 0;
        }
        this.state = {
            activeIndex: activeIndex,
            outputModes: {}
        };
    },
    onInput: function (input) {
        var focusedFile = app.focusedFile;
        var focusedDirectory = app.focusedDirectory;
        var directoryChanged = this.focusedDirectory !== focusedDirectory;
        this.focusedDirectory = app.focusedDirectory;
        if (directoryChanged) {
            this.state.activeIndex = 0;
        }
        if (input.activeTabFile) {
            input.files.forEach((file, i) => {
                if (file.path === input.activeTabFile) {
                    this.state.activeIndex = i;
                }
            });
        }
    },
    changeOutputMode: function (filePath, newOutputMode) {
        this.state.outputModes = Object.assign({}, this.outputModes);
        this.state.outputModes[filePath] = newOutputMode;
    },
    getOutputModeForFile: function (file) {
        return this.state.outputModes[file.path] || file.outputMode;
    },
    showFileTab: function (activeFile) {
        this.emit('tabClick', activeFile);
        this.input.files.forEach((file, i) => {
            if (file.path === activeFile.path) {
                this.state.activeIndex = i;
            }
        });
    }
}),
    marko_components = require('/marko$4.2.8/components/index-browser'/*"marko/components"*/),
    marko_registerComponent = marko_components.rc,
    marko_componentType = marko_registerComponent("/markojs-website$1.0.0/routes/try-online/components/pane/index.marko", function() {
      return module.exports;
    }),
    marko_renderComponent = require('/marko$4.2.8/components/taglib/helpers/renderComponent'/*"marko/components/taglib/helpers/renderComponent"*/),
    app = require('/markojs-website$1.0.0/routes/try-online/app/index'/*"~/routes/try-online/app"*/),
    marko_forEachProp = require('/marko$4.2.8/runtime/helper-forEachProperty'/*"marko/runtime/helper-forEachProperty"*/),
    pane_tab_template = require('/markojs-website$1.0.0/routes/try-online/components/pane/components/pane-tab/index.marko'/*"./components/pane-tab"*/),
    marko_helpers = require('/marko$4.2.8/runtime/vdom/helpers'/*"marko/runtime/vdom/helpers"*/),
    marko_loadTag = marko_helpers.t,
    pane_tab_tag = marko_loadTag(pane_tab_template),
    pane_body_template = require('/markojs-website$1.0.0/routes/try-online/components/pane/components/pane-body/index.marko'/*"./components/pane-body"*/),
    pane_body_tag = marko_loadTag(pane_body_template),
    marko_attrs0 = {
        "class": "tabs"
      },
    marko_attrs1 = {
        "class": "tabs"
      },
    marko_attrs2 = {
        "class": "bodies"
      };

function render(input, out, __component, component, state) {
  var data = input;

  out.be("DIV", {
      "class": "pane",
      id: __component.id
    }, null, 4);

  out.be("DIV", marko_attrs0);

  out.be("UL", marko_attrs1);

  marko_forEachProp(input.files, function(i, file) {
    marko_renderComponent(pane_tab_tag, {
        focused: app.focusedFile === file.path,
        active: state.activeIndex === i,
        file: file,
        outputMode: component.getOutputModeForFile(file)
      }, out, [
      __component,
      "tab-" + file.path,
      [
        [
          "click",
          "showFileTab",
          [
              file
            ]
        ],
        [
          "outputModeChange",
          "changeOutputMode"
        ]
      ]
    ]);
  });

  out.ee();

  out.ee();

  out.be("DIV", marko_attrs2);

  marko_forEachProp(input.files, function(i, file) {
    marko_renderComponent(pane_body_tag, {
        focused: app.focusedFile === file.path,
        active: state.activeIndex === i,
        file: file,
        outputMode: component.getOutputModeForFile(file)
      }, out, [
      __component,
      "body-" + file.path
    ]);
  });

  out.ee();

  out.ee();
}

marko_template._ = marko_components.r(render, {
    type: marko_componentType
  }, marko_component);

marko_template.Component = marko_components.c(marko_component, marko_template._);

});