$_mod.def("/markojs-website$1.0.0/routes/index/components/benchmarks/components/benchmark-chart/index.marko", function(require, exports, module, __filename, __dirname) { // Compiled using marko@4.2.8 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require('/marko$4.2.8/vdom'/*"marko/vdom"*/).t(),
    marko_helpers = require('/marko$4.2.8/runtime/vdom/helpers'/*"marko/runtime/vdom/helpers"*/),
    marko_classList = marko_helpers.cl,
    marko_forEach = marko_helpers.f,
    __getImageInfo = require('/lasso$2.11.10/taglib/helper-getImageInfo'/*"lasso/taglib/helper-getImageInfo"*/),
    marko_classAttr = marko_helpers.ca,
    marko_styleAttr = require('/marko$4.2.8/runtime/vdom/helper-styleAttr'/*"marko/runtime/vdom/helper-styleAttr"*/),
    marko_attrs0 = {
        "class": "benchmark-bars"
      },
    marko_attrs1 = {
        "class": "name"
      },
    marko_attrs2 = {
        "class": "type"
      },
    marko_attrs3 = {
        "class": "label"
      },
    marko_attrs4 = {
        "class": "value"
      },
    marko_attrs5 = {
        "class": "unit"
      };

function getPercent(value, base) {
    return Math.round(1000*value/base)/10+'%';
};

function render(input, out) {
  var data = input;

  var max = Math.max.apply(null, input.results.map(r => r.value));

  var width = getPercent(0.85, input.results.length);

  max = input.max ? Math.pow((Math.sqrt(input.max)+Math.sqrt(max)*4)/5, 2) : max;

  out.be("DIV", {
      style: marko_styleAttr({
          width: input.width
        }),
      "class": "benchmark-chart-group"
    }, null, 4);

  out.be("DIV", marko_attrs0);

  marko_forEach(input.results, function(result) {
    var height = getPercent(result.value, max);

    var backgroundColor = result.color;

    out.be("DIV", {
        "class": marko_classAttr(marko_classList([
          "benchmark-bar",
          {
              featured: result.name === "Marko"
            }
        ])),
        style: marko_styleAttr({
            height: height,
            width: width,
            backgroundColor: backgroundColor
          })
      }, null, 4);

    out.e("DIV", marko_attrs3, 1)
      .t(result.name);

    out.e("DIV", marko_attrs4, 2)
      .t(result.value.toLocaleString("en", {
          maximumFractionDigits: result.value > 100 ? 0 : 1
        }))
      .e("SPAN", marko_attrs5, 1)
        .t(result.unit);

    __getImageInfo(out, result.logo, function(out, imageInfo0) {
      out.e("IMG", {
          src: imageInfo0.url,
          width: "auto",
          height: "auto",
          "class": "logo"
        }, 0);
    });

    out.ee();
  });

  out.ee();

  __getImageInfo(out, input.environment.logo, function(out, imageInfo0) {
    out.e("IMG", {
        src: imageInfo0.url,
        width: "auto",
        height: "auto",
        "class": "environment"
      }, 0);
  });

  out.e("SPAN", marko_attrs1, 1)
    .t(input.environment.name);

  out.e("SPAN", marko_attrs2, 3)
    .t("(")
    .t(input.environment.type)
    .t(")");

  out.ee();
}

marko_template._ = render;

});