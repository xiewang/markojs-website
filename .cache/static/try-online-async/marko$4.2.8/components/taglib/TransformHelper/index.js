$_mod.def("/marko$4.2.8/components/taglib/TransformHelper/index", function(require, exports, module, __filename, __dirname) { 'use strict';
var ComponentArgs = require('/marko$4.2.8/components/taglib/TransformHelper/ComponentArgs'/*'./ComponentArgs'*/);
var getRequirePath = require('/marko$4.2.8/components/taglib/getRequirePath-browser'/*'../getRequirePath'*/);

var MARKO_WIDGETS_VAR_KEY = Symbol('MARKO_WIDGETS_VAR');
var WIDGET_PROPS_KEY;
var HAS_COMPONENT_KEY = Symbol('HAS_WIDGET');

class TransformHelper {
    constructor(el, context) {
        this.el = el;
        this.context = context;
        this.builder = context.builder;
        this.dirname = context.dirname;
        this.filename = context.filename;

        this.componentNextElId = 0;
        this.componentArgs = undefined;
        this.containingComponentNode = undefined;
        this._markoComponentsVar = context.data.markoComponentsVar;
        this.firstBind = false;
        this.componentModule = null;
        this.rendererModule = null;
    }

    setHasBoundComponentForTemplate() {
        this.context.data[HAS_COMPONENT_KEY] = true;
    }

    setComponentModule(value) {
        this.context.data.componentModule = value;
    }

    getComponentModule() {
        return this.context.data.componentModule;
    }

    setRendererModule(value) {
        this.context.data.rendererModule = value;
    }

    getRendererModule() {
        return this.context.data.rendererModule;
    }

    getTemplateModule() {
        return {
            requirePath:this.context.getRequirePath(this.filename)
        };
    }

    hasBoundComponentForTemplate() {
        return this.context.data.componentModule != null ||
            this.context.data[HAS_COMPONENT_KEY] ||
            this.context.data[WIDGET_PROPS_KEY] != null;
    }

    getComponentProps() {
        var componentProps = this.context.data[WIDGET_PROPS_KEY];
        if (!componentProps) {
            this.firstBind = true;
            componentProps = this.context.data[WIDGET_PROPS_KEY] = {};
        }
        return componentProps;
    }

    addError(message, code) {
        this.context.addError(this.el, message, code);
    }

    getComponentArgs() {
        return this.componentArgs || (this.componentArgs = new ComponentArgs());
    }

    nextUniqueId() {
        var componentNextElId = this.context.data.componentNextElId;
        if (componentNextElId == null) {
            this.context.data.componentNextElId = 0;
        }

        return (this.context.data.componentNextElId++);
    }

    getNestedIdExpression() {
        this.assignComponentId();
        return this.getComponentIdInfo().nestedIdExpression;
    }

    getIdExpression() {
        this.assignComponentId();
        return this.getComponentIdInfo().idExpression;
    }

    set componentIdInfo(value) {
        this.el.data.componentIdInfo = value;
    }

    get componentIdInfo() {
        return this.el.data.componentIdInfo;
    }

    getComponentIdInfo() {
        return this.componentIdInfo;
    }

    getCompileContext() {
        return this.context;
    }

    getMarkoComponentsRequirePath(target) {
        return getRequirePath(target, this.context);
    }

    set markoComponentsVar(value) {
        this.context.data[MARKO_WIDGETS_VAR_KEY] = value;
    }

    get markoComponentsVar() {
        if (!this.context.data[MARKO_WIDGETS_VAR_KEY]) {
            this.context.data[MARKO_WIDGETS_VAR_KEY] =
                this.context.importModule(
                    'marko_components',
                    this.getMarkoComponentsRequirePath(this.isLegacyComponent ? 'marko/components/legacy' : 'marko/components'));
        }

        return this.context.data[MARKO_WIDGETS_VAR_KEY];
    }

    buildComponentElIdFunctionCall(id) {
        var builder = this.builder;

        var componentElId = builder.memberExpression(
            builder.identifier('__component'),
            builder.identifier('elId'));

        return builder.functionCall(componentElId, arguments.length === 0 ? [] : [ id ]);
    }

    getTransformHelper(el) {
        return new TransformHelper(el, this.context);
    }
}

TransformHelper.prototype.assignComponentId = require('/marko$4.2.8/components/taglib/TransformHelper/assignComponentId'/*'./assignComponentId'*/);
TransformHelper.prototype.handleRootNodes = require('/marko$4.2.8/components/taglib/TransformHelper/handleRootNodes'/*'./handleRootNodes'*/);
TransformHelper.prototype.handleIncludeNode = require('/marko$4.2.8/components/taglib/TransformHelper/handleIncludeNode'/*'./handleIncludeNode'*/);
TransformHelper.prototype.handleComponentEvents = require('/marko$4.2.8/components/taglib/TransformHelper/handleComponentEvents'/*'./handleComponentEvents'*/);
TransformHelper.prototype.handleComponentPreserve = require('/marko$4.2.8/components/taglib/TransformHelper/handleComponentPreserve'/*'./handleComponentPreserve'*/);
TransformHelper.prototype.handleComponentPreserveAttrs = require('/marko$4.2.8/components/taglib/TransformHelper/handleComponentPreserveAttrs'/*'./handleComponentPreserveAttrs'*/);
TransformHelper.prototype.handleComponentBind = require('/marko$4.2.8/components/taglib/TransformHelper/handleComponentBind'/*'./handleComponentBind'*/);
TransformHelper.prototype.handleComponentFor = require('/marko$4.2.8/components/taglib/TransformHelper/handleComponentFor'/*'./handleComponentFor'*/);

module.exports = TransformHelper;

});