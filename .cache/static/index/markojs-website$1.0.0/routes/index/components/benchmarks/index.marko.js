$_mod.def("/markojs-website$1.0.0/routes/index/components/benchmarks/index.marko", function(require, exports, module, __filename, __dirname) { // Compiled using marko@4.2.8 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require('/marko$4.2.8/vdom'/*"marko/vdom"*/).t(),
    marko_helpers = require('/marko$4.2.8/runtime/vdom/helpers'/*"marko/runtime/vdom/helpers"*/),
    marko_classList = marko_helpers.cl,
    marko_component = {
        onCreate: function() {
          this.state = {
              index: 0,
              individual: false
            };
        },
        switchBench: function(index) {
          this.state.index = index;
        },
        toggleIndividual: function() {
          this.state.individual = !this.state.individual;
        }
      },
    marko_components = require('/marko$4.2.8/components/index-browser'/*"marko/components"*/),
    marko_registerComponent = marko_components.rc,
    marko_componentType = marko_registerComponent("/markojs-website$1.0.0/routes/index/components/benchmarks/index.marko", function() {
      return module.exports;
    }),
    benchData = require('/markojs-website$1.0.0/routes/index/components/benchmarks/data'/*"./data"*/),
    heading_template = require('/markojs-website$1.0.0/components/heading/index.marko'/*"../../../../components/heading"*/),
    marko_loadTag = marko_helpers.t,
    heading_tag = marko_loadTag(heading_template),
    marko_forEachProp = require('/marko$4.2.8/runtime/helper-forEachProperty'/*"marko/runtime/helper-forEachProperty"*/),
    marko_classAttr = marko_helpers.ca,
    marko_forEach = marko_helpers.f,
    benchmark_chart_template = require('/markojs-website$1.0.0/routes/index/components/benchmarks/components/benchmark-chart/index.marko'/*"./components/benchmark-chart"*/),
    benchmark_chart_tag = marko_loadTag(benchmark_chart_template),
    marko_attrs0 = {
        "class": "tabs"
      },
    marko_attrs1 = {
        "class": "charts"
      },
    marko_attrs2 = {
        "class": "toggle-individual"
      },
    marko_attrs3 = {
        "class": "description"
      },
    marko_createElement = marko_helpers.e,
    marko_const = marko_helpers.const,
    marko_const_nextId = marko_const("bc492a"),
    marko_node0 = marko_createElement("A", {
        href: "https://github.com/marko-js/isomorphic-ui-benchmarks"
      }, 1, 0, {
        c: marko_const_nextId()
      })
      .t("View the code on GitHub"),
    marko_node1 = marko_createElement("STRONG", null, 1, 0, {
        c: marko_const_nextId()
      })
      .t("marko");

function render(input, out, __component, component, state) {
  var data = input;

  var isIndividual = state.individual;

  var benchmark = benchData[state.index];

  out.be("DIV", {
      "class": "benchmarks",
      id: __component.id
    }, null, 4);

  heading_tag({
      tag: "h2",
      anchorName: "benchmarks",
      "class": "title",
      renderBody: function renderBody(out) {
        out.t("Re");

        out.n(marko_node1);

        out.t("able performance across the board");
      }
    }, out);

  out.be("DIV", marko_attrs0);

  marko_forEachProp(benchData, function(i, bench) {
    out.e("DIV", {
        "class": marko_classAttr(marko_classList([
          "tab",
          {
              selected: i === state.index
            }
        ]))
      }, 1, 4, {
        onclick: __component.d("switchBench", [
            i
          ])
      })
      .t(bench.name);
  });

  out.ee();

  out.be("DIV", {
      "class": marko_classAttr(marko_classList([
        "tab-content",
        {
            sideBySide: !isIndividual
          }
      ]))
    }, null, 4);

  out.be("DIV", marko_attrs1);

  var max = Math.max.apply(null, benchData.map(r => r.max));

  var width = 80 / (isIndividual ? benchmark.results.length : 3) + '%';

  var localMax = (max+benchmark.max)/2;

  marko_forEach(benchmark.results, function(environment) {
    var type = environment.type;

    if ((isIndividual && (type !== "average")) || ((!isIndividual) && ((type === "server") || (type === "average")))) {
      benchmark_chart_tag({
          max: localMax,
          width: width,
          environment: environment,
          results: environment.results
        }, out);
    }
  });

  out.e("BUTTON", marko_attrs2, 1, 0, {
      onclick: __component.d("toggleIndividual")
    })
    .t(state.individual ? "Hide browsers" : "Show all browsers");

  out.ee();

  out.be("DIV", marko_attrs3);

  out.e("H3", null, 3)
    .t("The ")
    .t(benchmark.name.toLowerCase())
    .t(" benchmark");

  out.h(benchmark.description);

  out.t(" ");

  out.n(marko_node0);

  out.ee();

  out.ee();

  out.ee();
}

marko_template._ = marko_components.r(render, {
    type: marko_componentType
  }, marko_component);

marko_template.Component = marko_components.c(marko_component, marko_template._);

});