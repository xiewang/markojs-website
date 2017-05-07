$_mod.def("/markojs-website$1.0.0/routes/try-online/components/app-loader/index.marko", function(require, exports, module, __filename, __dirname) { // Compiled using marko@4.2.8 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require('/marko$4.2.8/vdom'/*"marko/vdom"*/).t(),
    marko_component = ({
    onCreate: function () {
        this.state = {
            loading: false,
            error: undefined,
            tooSmall: false
        };
    },
    onMount: function () {
        var targetEl = this.el;
        var input = this.input;
        var app;
        function isLargeEnough() {
            var windowSize = document.body.innerWidth || document.body.clientWidth;
            return windowSize > 1000;
        }
        var self = this;
        function doLoad() {
            if (self.state.loading) {
                return;
            }
            self.state.loading = true;
            function loadCodeMirror(callback) {
                require('/lasso-loader$3.0.2/src/index'/*'lasso-loader'*/).load({ js: ['https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.24.2/codemirror.min.js'] }, callback);
            }
            function loadSimpleScrollbars(callback) {
                require('/lasso-loader$3.0.2/src/index'/*'lasso-loader'*/).load({ js: ['https://codemirror.net/addon/scroll/simplescrollbars.js'] }, callback);
            }
            function loadAndRenderApp(callback) {
                require('/lasso-loader$3.0.2/src/index'/*'lasso-loader'*/).async("_0", function (err) {
                    if (err) {
                        return callback(err);
                    }
                    app = require('/markojs-website$1.0.0/routes/try-online/components/app/index.marko'/*'../app'*/);
                    callback();
                });
            }
            series([
                loadCodeMirror,
                loadSimpleScrollbars,
                loadAndRenderApp
            ], function (err) {
                if (err) {
                    if (console) {
                        console.log(err);
                    }
                    self.state.error = err;
                } else {
                    app.renderSync(input).replace(targetEl);
                }
            });
        }
        if (isLargeEnough()) {
            doLoad();
        } else {
            this.state.tooSmall = true;
            this.subscribeTo(window).on('resize', function () {
                if (isLargeEnough()) {
                    self.subscribeTo(window).removeAllListeners();
                    doLoad();
                }
            });
        }
    }
}),
    marko_components = require('/marko$4.2.8/components/index-browser'/*"marko/components"*/),
    marko_registerComponent = marko_components.rc,
    marko_componentType = marko_registerComponent("/markojs-website$1.0.0/routes/try-online/components/app-loader/index.marko", function() {
      return module.exports;
    }),
    series = require('/raptor-async$1.1.3/series'/*"raptor-async/series"*/),
    spinner_template = require('/markojs-website$1.0.0/routes/try-online/components/app-loader/components/spinner/index.marko'/*"./components/spinner"*/),
    marko_helpers = require('/marko$4.2.8/runtime/vdom/helpers'/*"marko/runtime/vdom/helpers"*/),
    marko_loadTag = marko_helpers.t,
    spinner_tag = marko_loadTag(spinner_template),
    marko_createElement = marko_helpers.e,
    marko_const = marko_helpers.const,
    marko_const_nextId = marko_const("432e99"),
    marko_node0 = marko_createElement("DIV", null, 1, 0, {
        c: marko_const_nextId()
      })
      .t("An error has occurred"),
    marko_node1 = marko_createElement("DIV", {
        "class": "too-small"
      }, 1, 0, {
        c: marko_const_nextId()
      })
      .e("DIV", {
          "class": "overlay"
        }, 4)
        .e("H1", null, 1)
          .t("Screen width too small")
        .e("H2", null, 1)
          .t("Please increase the window size or rotate to load.")
        .e("H3", null, 1)
          .t("If you are on a mobile phone, please open on a desktop")
        .e("H4", null, 1)
          .e("A", {
              href: "/docs/getting-started/"
            }, 1)
            .t("View Docs");

function loadCodeMirror(callback) {

};

function render(input, out, __component, component, state) {
  var data = input;

  out.be("DIV", {
      "class": "app-loader",
      id: __component.id
    }, null, 4);

  if (state.error) {
    out.n(marko_node0);
  } else if (state.tooSmall) {
    out.n(marko_node1);
  } else {
    spinner_tag({}, out);
  }

  out.ee();
}

marko_template._ = marko_components.r(render, {
    type: marko_componentType
  }, marko_component);

marko_template.Component = marko_components.c(marko_component, marko_template._);

});