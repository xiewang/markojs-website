$_mod.def("/marko$4.2.8/components/taglib/TransformHelper/ComponentArgs", function(require, exports, module, __filename, __dirname) { 'use strict';
class ComponentArgs {

    constructor() {
        this.id = null;
        this.customEvents = null;
        this.empty = true;
    }

    setId(id) {
        this.empty = false;
        this.id = id;
    }

    getId() {
        return this.id;
    }

    addCustomEvent(eventType, targetMethod, extraArgs) {
        this.empty = false;

        if (!this.customEvents) {
            this.customEvents = [];
        }

        this.customEvents.push([eventType, targetMethod, extraArgs]);
    }

    compile(transformHelper) {
        if (this.empty) {
            return;
        }

        var el = transformHelper.el;

        var builder = transformHelper.builder;

        var id = this.id;
        var customEvents = this.customEvents;

        // Make sure the nested component has access to the ID of the containing
        // component if it is needed
        var shouldProvideScope = id || customEvents;

        var args = [];

        if (shouldProvideScope) {
            args.push(builder.identifier('__component'));
        } else {
            args.push(builder.literalNull());
        }

        if (id != null) {
            args.push(id);
        } else {
            args.push(builder.literalNull());
        }

        if (customEvents) {
            args.push(builder.literal(customEvents));
        }

        if (el.type === 'CustomTag') {
            var renderComponentHelper = transformHelper.context.helper('renderComponent');

            el.generateRenderTagCode = function(codegen, tagVar, tagArgs) {
                tagArgs = [tagVar].concat(tagArgs);

                tagArgs.push(builder.literal(args));

                return codegen.builder.functionCall(
                    renderComponentHelper,
                    tagArgs);
            };
        } else {
            el.onBeforeGenerateCode((event) => {
                let lhs = builder.memberExpression(builder.identifierOut(), builder.identifier('$c'));
                let rhs = builder.literal(args);

                event.insertCode(builder.assignment(lhs, rhs));
            });

            el.onAfterGenerateCode((event) => {
                let lhs = builder.memberExpression(builder.identifierOut(), builder.identifier('$c'));
                let rhs = builder.literalNull();

                event.insertCode(builder.assignment(lhs, rhs));
            });
        }
    }
}

module.exports = ComponentArgs;

});