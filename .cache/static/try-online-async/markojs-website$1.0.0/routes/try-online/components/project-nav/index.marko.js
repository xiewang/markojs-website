$_mod.def("/markojs-website$1.0.0/routes/try-online/components/project-nav/index.marko", function(require, exports, module, __filename, __dirname) { // Compiled using marko@4.2.8 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require('/marko$4.2.8/vdom'/*"marko/vdom"*/).t(),
    marko_component = {
        handleProjectChange: function() {
          var projectName = this.getEl("projectSelect").value;

          app.focusProject(projectName);
        }
      },
    marko_components = require('/marko$4.2.8/components/index-browser'/*"marko/components"*/),
    marko_registerComponent = marko_components.rc,
    marko_componentType = marko_registerComponent("/markojs-website$1.0.0/routes/try-online/components/project-nav/index.marko", function() {
      return module.exports;
    }),
    app = require('/markojs-website$1.0.0/routes/try-online/app/index'/*"~/routes/try-online/app"*/),
    marko_helpers = require('/marko$4.2.8/runtime/vdom/helpers'/*"marko/runtime/vdom/helpers"*/),
    marko_forEach = marko_helpers.f;

function render(input, out, __component, component, state) {
  var data = input;

  out.be("DIV", {
      "class": "project-nav",
      id: __component.id
    }, null, 4);

  out.be("SELECT", {
      id: __component.elId("projectSelect")
    }, null, 4, {
      onchange: __component.d("handleProjectChange")
    });

  marko_forEach(input.projects, function(project) {
    out.e("OPTION", {
        value: project.name,
        selected: project.name === input.activeProject.name
      }, 1)
      .t(project.description);
  });

  out.ee();

  out.ee();
}

marko_template._ = marko_components.r(render, {
    type: marko_componentType
  }, marko_component);

marko_template.Component = marko_components.c(marko_component, marko_template._);

});