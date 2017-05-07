$_mod.def("/markojs-website$1.0.0/routes/try-online/components/preview/index.marko", function(require, exports, module, __filename, __dirname) { // Compiled using marko@4.2.8 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require('/marko$4.2.8/vdom'/*"marko/vdom"*/).t(),
    marko_helpers = require('/marko$4.2.8/runtime/vdom/helpers'/*"marko/runtime/vdom/helpers"*/),
    marko_classList = marko_helpers.cl,
    marko_component = ({
    onCreate: function () {
        this.state = { error: undefined };
    },
    onMount: function () {
        this.styleCode = null;
        this.styleEls = null;
        this.subscribeTo(app).on('file:modified', () => {
            setTimeout(() => {
                this.renderToFrame();
            }, 0);
        });
        this.iframeLoaded = new Promise((resolve, reject) => {
            var iframe = this.iframe = document.createElement('iframe');
            iframe.src = 'about:blank';
            iframe.onload = function () {
                resolve();
            };
            this.getEl('iframeContainer').appendChild(iframe);
        });
        var showError = () => {
            this.state.error = this.error;
        };
        this.showError = debounce(showError, 500);
        this.renderToFrame();
    },
    renderToFrame: function () {
        var outputMode = this.input.outputMode || 'preview';
        var file = this.input.file;
        var templateModule;
        var loadError;
        try {
            templateModule = vmodules.loadFile(file.path);
        } catch (err) {
            loadError = err;
        }
        this.state.error = this.error = undefined;
        var showError = error => {
            this.error = error;
            this.showError();
        };
        if (outputMode === 'preview') {
            this.iframeLoaded.then(() => {
                if (loadError) {
                    this.state.error = undefined;
                    this.iframe.contentDocument.body.innerHTML = 'Template failed to load';
                    return;
                }
                var template = templateModule.exports;
                this.updateCSS();
                var currentRender = this.currentRender = {};
                this.state.error = undefined;
                return template.render().then(renderResult => {
                    if (this.currentRender === currentRender) {
                        renderResult.replaceChildrenOf(this.iframe.contentDocument.body);
                    }
                }).catch(err => {
                    if (this.currentRender === currentRender) {
                        this.iframe.contentDocument.body.innerHTML = '';
                        showError(err);
                    }
                });
            });
        } else if (outputMode === 'compiled') {
            let code;
            if (loadError) {
                code = '// Unable to load template';
            } else {
                code = templateModule.source;
            }
            this.getComponent('editorCompiled').setCode(code);
        } else if (outputMode === 'html') {
            let code;
            if (loadError) {
                code = '<!-- Unable to load template -->';
                this.getComponent('editorHTML').setCode(code);
                return;
            }
            var currentRender = this.currentRender = {};
            let template = templateModule.exports;
            template.render().then(renderResult => {
                if (this.currentRender === currentRender) {
                    let html = getHtmlCodeFromOutput(renderResult.getOutput());
                    this.getComponent('editorHTML').setCode(html);
                }
            }).catch(err => {
                if (this.currentRender === currentRender) {
                    this.error;
                    showError(err);
                }
            });
        }
    },
    updateCSS: function () {
        var newStyleCode = '';
        var file = this.input.file;
        var templateModule;
        try {
            templateModule = vmodules.loadFile(file.path);
        } catch (err) {
            return;
        }
        var template = templateModule.exports;
        var doc = this.iframe.contentDocument;
        if (!template.getDependencies) {
            return;
        }
        var styleCodeList = [];
        var dependencies = template.getDependencies({
            require: vmodules.require,
            resolveFrom: vmodules.resolveFrom
        });
        dependencies.forEach(dependency => {
            if (dependency.type !== 'css') {
                return;
            }
            var code = dependency.code;
            if (!code) {
                if (dependency.path) {
                    code = fs.readFileSync(dependency.path);
                }
            }
            if (code) {
                newStyleCode += '\n' + code;
                styleCodeList.push(code);
            }
        });
        if (newStyleCode !== this.styleCode) {
            if (this.styleEls) {
                this.styleEls.forEach(styleEl => {
                    styleEl.parentNode.removeChild(styleEl);
                });
            }
            this.styleCode = newStyleCode;
            this.styleEls = [];
            styleCodeList.forEach(styleCode => {
                var styleEl = doc.createElement('style');
                styleEl.type = 'text/css';
                styleEl.innerText = styleCode;
                doc.getElementsByTagName('head')[0].appendChild(styleEl);
                this.styleEls.push(styleEl);
            });
        }
    }
}),
    marko_components = require('/marko$4.2.8/components/index-browser'/*"marko/components"*/),
    marko_registerComponent = marko_components.rc,
    marko_componentType = marko_registerComponent("/markojs-website$1.0.0/routes/try-online/components/preview/index.marko", function() {
      return module.exports;
    }),
    marko_renderComponent = require('/marko$4.2.8/components/taglib/helpers/renderComponent'/*"marko/components/taglib/helpers/renderComponent"*/),
    vmodules = require('/markojs-website$1.0.0/routes/try-online/app/vmodules'/*"~/routes/try-online/app/vmodules"*/),
    app = require('/markojs-website$1.0.0/routes/try-online/app/index'/*"~/routes/try-online/app"*/),
    fs = require('/markojs-website$1.0.0/browser-shims/fs/index'/*"fs"*/),
    debounce = require('/lodash.debounce$4.0.8/index'/*"lodash.debounce"*/),
    html_module = require('/html$1.0.0/lib/html'/*"html"*/),
    htmlPrettyPrint = html_module.prettyPrint,
    marko_loadTag = marko_helpers.t,
    w_preserve_tag = marko_loadTag(require('/marko$4.2.8/components/taglib/preserve-tag'/*"marko/components/taglib/preserve-tag"*/)),
    editor_template = require('/markojs-website$1.0.0/routes/try-online/components/editor/index.marko'/*"../editor"*/),
    editor_tag = marko_loadTag(editor_template),
    preview_errors_template = require('/markojs-website$1.0.0/routes/try-online/components/preview/components/preview-errors/index.marko'/*"./components/preview-errors"*/),
    preview_errors_tag = marko_loadTag(preview_errors_template),
    marko_classAttr = marko_helpers.ca,
    marko_attrs0 = {
        "class": "errors-container"
      };

function getHtmlCodeFromOutput(output) {
    var node = output.actualize(document);
    var containerEl = document.createElement('body');
    containerEl.appendChild(node);
    var html = containerEl.innerHTML;
    html = htmlPrettyPrint(html);
    return html;
};

function render(input, out, __component, component, state) {
  var data = input;

  var file = input.file;

  var outputMode = input.outputMode || 'preview';

  var code = state.code;

  out.be("DIV", {
      "class": marko_classAttr(marko_classList([
        "preview",
        "mode-" + outputMode
      ])),
      id: __component.id
    }, null, 4);

  var __componentId0 = __component.elId("iframeContainer");

  w_preserve_tag({
      id: __componentId0,
      renderBody: function renderBody(out) {
        out.e("DIV", {
            "class": "iframe-container",
            id: __componentId0
          }, 0, 4);
      }
    }, out);

  if (outputMode === "html") {
    var __componentId1 = __component.elId("editorHTML");

    w_preserve_tag({
        id: __componentId1,
        renderBody: function renderBody(out) {
          marko_renderComponent(editor_tag, {
              file: file,
              code: "",
              readOnly: true,
              mode: "htmlmixed",
              outputMode: outputMode
            }, out, [
            __component,
            "#" + __componentId1
          ]);
        }
      }, out);
  } else if (outputMode === "compiled") {
    var __componentId2 = __component.elId("editorCompiled");

    w_preserve_tag({
        id: __componentId2,
        renderBody: function renderBody(out) {
          marko_renderComponent(editor_tag, {
              file: file,
              code: "",
              readOnly: true,
              mode: "javascript",
              outputMode: outputMode
            }, out, [
            __component,
            "#" + __componentId2
          ]);
        }
      }, out);
  }

  if (state.error) {
    out.be("DIV", marko_attrs0);

    preview_errors_tag({
        error: state.error,
        file: file
      }, out);

    out.ee();
  }

  out.ee();
}

marko_template._ = marko_components.r(render, {
    type: marko_componentType
  }, marko_component);

marko_template.Component = marko_components.c(marko_component, marko_template._);

});