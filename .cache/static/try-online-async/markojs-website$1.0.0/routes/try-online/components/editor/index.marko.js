$_mod.def("/markojs-website$1.0.0/routes/try-online/components/editor/index.marko", function(require, exports, module, __filename, __dirname) { // Compiled using marko@4.2.8 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require('/marko$4.2.8/vdom'/*"marko/vdom"*/).t(),
    marko_component = ({
    onCreate: function () {
        this.state = { error: undefined };
    },
    getMode: function (file) {
        let ext = path.extname(file.name);
        if (ext === '.marko') {
            return 'Marko';
        } else if (ext === '.css') {
            return 'css';
        } else if (ext === '.js' || ext === '.json') {
            return 'javascript';
        }
    },
    onMount: function () {
        let file = this.input.file;
        let outputMode = this.input.outputMode || 'preview';
        let codeMirrorMode = this.input.mode;
        let code = this.input.code != null ? this.input.code : file.text;
        let readOnly = this.input.readOnly === true;
        let codeMirrorConfig = {
            value: code || '',
            mode: codeMirrorMode || this.getMode(file),
            lineNumbers: true,
            readOnly: readOnly,
            indentUnit: 4,
            lineWrapping: true,
            scrollbarStyle: 'simple'
        };
        codeMirrorConfig.theme = 'marko';
        this.codeMirror = CodeMirror(this.getEl('codeMirrorContainer'), codeMirrorConfig);
        this.codeMirror.setSize('100%', '100%');
        let error;
        let showError = () => {
            this.state.error = error;
        };
        showError = debounce(showError, 500);
        let loadModule = () => {
            let module;
            try {
                module = vmodules.loadFile(this.input.file.path);
                error = undefined;
            } catch (err) {
                error = err;
            }
            if (error) {
                showError();
            } else {
                this.state.error = undefined;
            }
        };
        if (!readOnly) {
            this.codeMirror.on('change', editor => {
                let source = editor.getValue();
                app.saveFile(file.path, source);
            });
            this.subscribeTo(app).on('file:modified', () => {
                loadModule();
            });
            loadModule();
        }
        this.subscribeTo(app).on('focus:change', focusedFile => {
            if (focusedFile === file.path) {
                this.codeMirror.focus();
                this.codeMirror.refresh();
                if (!readOnly) {
                    loadModule();
                }
            }
        });
    },
    focus: function () {
        let file = this.input.file;
        app.focusFile(file.path);
    },
    jumpToError: function (error) {
        let pos = error.pos || error.endPos;
        if (!pos) {
            return;
        }
        this.codeMirror.focus();
        this.codeMirror.setCursor({
            line: pos.line - 1,
            ch: pos.column
        });
    },
    setCode: function (newCode) {
        var scrollInfo = this.codeMirror.getScrollInfo();
        this.codeMirror.setValue(newCode);
        this.codeMirror.scrollTo(scrollInfo.left, scrollInfo.top);
    }
}),
    marko_components = require('/marko$4.2.8/components/index-browser'/*"marko/components"*/),
    marko_registerComponent = marko_components.rc,
    marko_componentType = marko_registerComponent("/markojs-website$1.0.0/routes/try-online/components/editor/index.marko", function() {
      return module.exports;
    }),
    marko_renderComponent = require('/marko$4.2.8/components/taglib/helpers/renderComponent'/*"marko/components/taglib/helpers/renderComponent"*/),
    app = require('/markojs-website$1.0.0/routes/try-online/app/index'/*"~/routes/try-online/app"*/),
    path = require('/path-browserify$0.0.0/index'/*"path"*/),
    vmodules = require('/markojs-website$1.0.0/routes/try-online/app/vmodules'/*"~/routes/try-online/app/vmodules"*/),
    debounce = require('/lodash.debounce$4.0.8/index'/*"lodash.debounce"*/),
    marko_helpers = require('/marko$4.2.8/runtime/vdom/helpers'/*"marko/runtime/vdom/helpers"*/),
    marko_loadTag = marko_helpers.t,
    w_preserve_tag = marko_loadTag(require('/marko$4.2.8/components/taglib/preserve-tag'/*"marko/components/taglib/preserve-tag"*/)),
    editor_errors_template = require('/markojs-website$1.0.0/routes/try-online/components/editor/components/editor-errors/index.marko'/*"./components/editor-errors"*/),
    editor_errors_tag = marko_loadTag(editor_errors_template),
    marko_attrs0 = {
        "class": "errors-container"
      };

if (typeof window !== 'undefined') {
    require('/codemirror-atom-modes$1.1.1/src/index'/*'codemirror-atom-modes'*/).registerGrammars([
            require('/language-css$0.42.2/grammars/css.cson'/*'language-css/grammars/css.cson'*/),
            require('/language-javascript$0.126.1/grammars/javascript.cson'/*'language-javascript/grammars/javascript.cson'*/),
            {
                grammar: require('/language-marko$2.9.4/grammars/marko.cson'/*'language-marko/grammars/marko.cson'*/),
                options: {
                    scopeTranslations: {
                        'meta.section.marko-placeholder': 'strong',
                        'meta.section.marko-attribute': 'strong',
                        'support.function.marko-tag': 'strong tag',
                        'support.function.marko-attribute': 'strong attribute',
                        'entity': 'def',
                        'meta.property-name': 'property-name',
                        'meta.property-value': 'property-value'
                    }
                }
            }
        ], CodeMirror);
};

function render(input, out, __component, component, state) {
  var data = input;

  let file = input.file;

  out.be("DIV", {
      "class": "editor",
      id: __component.id
    }, null, 4, {
      onclick: __component.d("focus")
    });

  var __componentId0 = __component.elId("codeMirrorContainer");

  w_preserve_tag({
      id: __componentId0,
      renderBody: function renderBody(out) {
        out.e("DIV", {
            "class": "code-mirror-container",
            id: __componentId0
          }, 0, 4);
      }
    }, out);

  if (state.error) {
    out.be("DIV", marko_attrs0);

    marko_renderComponent(editor_errors_tag, {
        file: file,
        error: state.error
      }, out, [
      __component,
      "1[]",
      [
        [
          "errorSelected",
          "jumpToError"
        ]
      ]
    ]);

    out.ee();
  }

  out.ee();
}

marko_template._ = marko_components.r(render, {
    type: marko_componentType
  }, marko_component);

marko_template.Component = marko_components.c(marko_component, marko_template._);

});