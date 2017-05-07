$_mod.def("/markojs-website$1.0.0/routes/try-online/components/app/index.marko", function(require, exports, module, __filename, __dirname) { // Compiled using marko@4.2.8 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require('/marko$4.2.8/vdom'/*"marko/vdom"*/).t(),
    marko_helpers = require('/marko$4.2.8/runtime/vdom/helpers'/*"marko/runtime/vdom/helpers"*/),
    marko_classList = marko_helpers.cl,
    marko_component = ({
    onCreate: function () {
        this.state = {
            collapsed: {},
            loadingGist: false,
            activeTabFile: undefined,
            gistId: null
        };
    },
    onMount: function () {
        const DEFAULT_FOCUSED_FILE = '/language-guide';
        app.initialize(this.input);
        app.onStateChange(newState => {
            this.input = newState;
        });
        var firstFocus = true;
        var baseUrl = window.location.pathname;
        var focusedFile;
        var gistId;
        function getUrlForFocusedFile() {
            return baseUrl + '?' + querystring.stringify({
                file: focusedFile,
                gist: gistId
            });
        }
        this.subscribeTo(app).on('focus:change', filePath => {
            this.state.activeTabFile = filePath;
            if (focusedFile !== filePath) {
                focusedFile = filePath;
                history.pushState({ file: filePath }, '', getUrlForFocusedFile());
                localStorageUtil.set('focusedFile', focusedFile);
            }
        });
        this.subscribeTo(window).on('popstate', event => {
            var newState = event.state;
            if (newState && newState.file) {
                focusedFile = newState.file;
                app.focusFile(focusedFile);
            }
        });
        if (window.location.search) {
            var parsed = querystring.parse(window.location.search.substring(1));
            if (parsed.file) {
                focusedFile = parsed.file;
                if (focusedFile.charAt(0) !== '/') {
                    focusedFile = '/' + focusedFile;
                }
            }
            if (parsed.gist) {
                gistId = parsed.gist;
            }
        }
        var doFocusFile = () => {
            if (!focusedFile) {
                focusedFile = localStorageUtil.get('focusedFile');
            }
            if (focusedFile && !app.fileExists(focusedFile)) {
                focusedFile = null;
            }
            history.replaceState({ file: focusedFile }, '', getUrlForFocusedFile());
            app.focusFile(focusedFile || DEFAULT_FOCUSED_FILE);
        };
        if (gistId) {
            this.loadGist(gistId).then(() => {
                focusedFile = '/gist';
                doFocusFile();
            }).catch(doFocusFile);
        } else {
            doFocusFile();
        }
    },
    loadGist: function (gistId) {
        this.state.loadingGist = true;
        this.state.gistId = gistId;
        var url = 'https://api.github.com/gists/' + gistId;
        return fetch(url).then(response => response.json()).then(gist => {
            var files = gist.files;
            if (files) {
                Object.keys(files).forEach(filePath => {
                    var fileInfo = files[filePath];
                    var filename = fileInfo.filename;
                    var fileContent = fileInfo.content;
                    var targetPath = path.join('/gist', filename.replace(/\\/g, '/'));
                    app.saveFile(targetPath, fileContent);
                });
                app.saveFile('/gist/package.json', JSON.stringify({ description: 'Imported gist' }));
                app.loadProjects();
                app.focusFile('/gist');
            }
            this.state.loadingGist = false;
        }).catch(err => {
            this.state.loadingGist = false;
        });
    },
    handleCollapseToggle: function (paneName, event) {
        var isCollapsed = event.isCollapsed;
        this.state.collapsed = Object.assign({}, this.state.collapsed);
        this.state.collapsed[paneName] = isCollapsed;
    },
    handleTabClick: function (paneName, tabFile) {
        this.state.activeTabFile = tabFile.path;
        this.state.collapsed = Object.assign({}, this.state.collapsed);
        this.state.collapsed[paneName] = false;
    }
}),
    marko_renderComponent = require('/marko$4.2.8/components/taglib/helpers/renderComponent'/*"marko/components/taglib/helpers/renderComponent"*/),
    marko_components = require('/marko$4.2.8/components/index-browser'/*"marko/components"*/),
    marko_registerComponent = marko_components.rc,
    marko_componentType = marko_registerComponent("/markojs-website$1.0.0/routes/try-online/components/app/index.marko", function() {
      return module.exports;
    }),
    app = require('/markojs-website$1.0.0/routes/try-online/app/index'/*"~/routes/try-online/app"*/),
    localStorageUtil = require('/markojs-website$1.0.0/util/localstorage'/*"~/util/localstorage"*/),
    querystring = require('/querystring$0.2.0/index'/*"querystring"*/),
    path = require('/path-browserify$0.0.0/index'/*"path"*/),
    pane_template = require('/markojs-website$1.0.0/routes/try-online/components/pane/index.marko'/*"../pane"*/),
    marko_loadTag = marko_helpers.t,
    pane_tag = marko_loadTag(pane_template),
    collapse_icon_template = require('/markojs-website$1.0.0/routes/try-online/components/app/components/collapse-icon/index.marko'/*"./components/collapse-icon"*/),
    collapse_icon_tag = marko_loadTag(collapse_icon_template),
    marko_classAttr = marko_helpers.ca,
    project_nav_template = require('/markojs-website$1.0.0/routes/try-online/components/project-nav/index.marko'/*"../project-nav"*/),
    project_nav_tag = marko_loadTag(project_nav_template),
    tree_view_template = require('/markojs-website$1.0.0/routes/try-online/components/tree-view/index.marko'/*"../tree-view"*/),
    tree_view_tag = marko_loadTag(tree_view_template),
    marko_attrs0 = {
        "class": "workspace"
      },
    marko_attrs1 = {
        "class": "tree-view-container"
      },
    marko_createElement = marko_helpers.e,
    marko_const = marko_helpers.const,
    marko_const_nextId = marko_const("775060"),
    marko_node0 = marko_createElement("DIV", {
        "class": "divider"
      }, 0, 0, {
        c: marko_const_nextId()
      }),
    marko_attrs2 = {
        "class": "editors-container"
      },
    marko_attrs3 = {
        "class": "inputs-container"
      },
    marko_node1 = marko_createElement("DIV", {
        "class": "divider"
      }, 0, 0, {
        c: marko_const_nextId()
      }),
    marko_node2 = marko_createElement("DIV", {
        "class": "divider"
      }, 0, 0, {
        c: marko_const_nextId()
      }),
    marko_node3 = marko_createElement("DIV", {
        "class": "divider"
      }, 0, 0, {
        c: marko_const_nextId()
      }),
    marko_attrs4 = {
        "class": "outputs-container"
      },
    marko_node4 = marko_createElement("DIV", {
        "class": "divider"
      }, 0, 0, {
        c: marko_const_nextId()
      }),
    marko_node5 = marko_createElement("DIV", {
        "class": "divider"
      }, 0, 0, {
        c: marko_const_nextId()
      }),
    marko_node6 = marko_createElement("DIV", {
        "class": "divider"
      }, 0, 0, {
        c: marko_const_nextId()
      }),
    marko_node7 = marko_createElement("DIV", {
        "class": "divider"
      }, 0, 0, {
        c: marko_const_nextId()
      });

require('/marked$0.3.6/lib/marked'/*"marked"*/);

require('/whatwg-fetch$2.0.3/fetch'/*"whatwg-fetch"*/);

function render(input, out, __component, component, state) {
  var data = input;

  var panes = input.panes;

  var visibleTabsByPane = input.visibleTabsByPane;

  var rootDir = input.activeProject && input.activeProject.rootDir;

  function macro_renderPane(paneName, options, out, renderBody) {
    var collapseDirection = options.collapseDirection;

    var collapsed = state.collapsed[paneName] != null ? state.collapsed[paneName] : options.collapsed === true;

    if (panes[paneName].length) {
      out.be("DIV", {
          "class": marko_classAttr(marko_classList([
            "pane-container",
            [
                paneName,
                collapsed && "collapsed"
              ]
          ])),
          id: __component.elId("pane-container-" + paneName)
        }, null, 4);

      marko_renderComponent(pane_tag, {
          files: panes[paneName],
          activeTabFile: state.activeTabFile
        }, out, [
        __component,
        "0[]",
        [
          [
            "tabClick",
            "handleTabClick",
            [
                paneName
              ]
          ]
        ]
      ]);

      if (collapseDirection) {
        marko_renderComponent(collapse_icon_tag, {
            direction: collapseDirection,
            collapsed: collapsed
          }, out, [
          __component,
          "pane-collapse-" + paneName,
          [
            [
              "toggle",
              "handleCollapseToggle",
              [
                  paneName
                ]
            ]
          ]
        ]);
      }

      out.ee();
    }
  }

  out.be("DIV", {
      "class": "try-online",
      id: __component.id
    }, null, 4);

  out.be("DIV", marko_attrs0);

  out.be("DIV", marko_attrs1);

  project_nav_tag(input, out);

  if (rootDir) {
    tree_view_tag({
        rootDir: rootDir
      }, out);
  }

  out.ee();

  out.n(marko_node0);

  out.be("DIV", marko_attrs2);

  out.be("DIV", marko_attrs3);

  out.n(marko_node1);

  macro_renderPane("inputTop", {
      collapseDirection: "up"
    }, out);

  if (panes["inputTop"].length && panes["inputBottom"].length) {
    out.n(marko_node6);
  }

  macro_renderPane("inputBottom", {
      collapseDirection: "down"
    }, out);

  out.n(marko_node2);

  out.ee();

  out.n(marko_node3);

  out.be("DIV", marko_attrs4);

  out.n(marko_node4);

  macro_renderPane("outputTop", {
      collapseDirection: "up"
    }, out);

  if (panes["outputTop"].length && panes["outputBottom"].length) {
    out.n(marko_node7);
  }

  macro_renderPane("outputBottom", {
      collapseDirection: "down",
      collapsed: true
    }, out);

  out.n(marko_node5);

  out.ee();

  out.ee();

  out.ee();

  out.ee();
}

marko_template._ = marko_components.r(render, {
    type: marko_componentType
  }, marko_component);

marko_template.Component = marko_components.c(marko_component, marko_template._);

});