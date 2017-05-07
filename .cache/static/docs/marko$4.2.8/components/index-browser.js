$_mod.def("/marko$4.2.8/components/index-browser", function(require, exports, module, __filename, __dirname) { var componentsUtil = require('/marko$4.2.8/components/util-browser'/*'./util'*/);
var events = require('/marko$4.2.8/runtime/events'/*'../runtime/events'*/);
var Component = require('/marko$4.2.8/components/Component'/*'./Component'*/);

function onInitComponent(listener) {
    events.on('initComponent', listener);
}

exports.onInitComponent = onInitComponent;
exports.Component = Component;
exports.getComponentForEl = componentsUtil.$__getComponentForEl;
exports.init = require('/marko$4.2.8/components/init-components-browser'/*'./init-components'*/).$__initServerRendered;

exports.c = require('/marko$4.2.8/components/defineComponent'/*'./defineComponent'*/); // Referenced by compiled templates
exports.r = require('/marko$4.2.8/components/renderer'/*'./renderer'*/); // Referenced by compiled templates
exports.rc = require('/marko$4.2.8/components/registry-browser'/*'./registry'*/).$__register;  // Referenced by compiled templates

window.$__MARKO_COMPONENTS = exports; // Helpful when debugging... WARNING: DO NOT USE IN REAL CODE!

});