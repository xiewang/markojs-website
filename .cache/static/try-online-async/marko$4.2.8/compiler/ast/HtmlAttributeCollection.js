$_mod.def("/marko$4.2.8/compiler/ast/HtmlAttributeCollection", function(require, exports, module, __filename, __dirname) { 'use strict';

var ok = require('/assert$1.4.1/assert'/*'assert'*/).ok;

var HtmlAttribute = require('/marko$4.2.8/compiler/ast/HtmlAttribute/index'/*'./HtmlAttribute'*/);
var Node = require('/marko$4.2.8/compiler/ast/Node'/*'./Node'*/);

class HtmlAttributeCollection {
    constructor(attributes) {
        this.replaceAttributes(attributes);
    }

    addAttribute(newAttr) {
        if (arguments.length === 2) {
            let name = arguments[0];
            let expression = arguments[1];
            newAttr = new HtmlAttribute(name, expression);
        } else if (!HtmlAttribute.isHtmlAttribute(newAttr)) {
            newAttr = new HtmlAttribute(newAttr);
        }

        var name = newAttr.name;

        if (this.lookup.hasOwnProperty(name)) {
            for (var i=0; i<this.all.length; i++) {
                var curAttr = this.all[i];
                if (curAttr.name === name) {
                    this.all.splice(i, 1);
                    break;
                }
            }
        }

        if (name) {
            this.lookup[name] = newAttr;
        }

        this.all.push(newAttr);
    }

    removeAttribute(name) {
        ok(typeof name === 'string', 'Invalid attribute name');

        if (!this.lookup.hasOwnProperty(name)) {
            return false;
        }

        delete this.lookup[name];

        for (var i=0; i<this.all.length; i++) {
            var curAttr = this.all[i];
            if (curAttr.name === name) {
                this.all.splice(i, 1);
                break;
            }
        }

        return true;
    }

    renameAttribute(oldName, newName) {
        var key = oldName;

        var attr = this.lookup[key];
        if (!attr) {
            return;
        }

        attr.name = newName;
        delete this.lookup[key];
        this.lookup[key] = attr;
    }

    removeAllAttributes() {
        this.replaceAttributes([]);
    }

    hasAttribute(name) {
        ok(typeof name === 'string', 'Invalid attribute name');
        return this.lookup.hasOwnProperty(name);
    }

    hasAttributes() {
        return this.all.length > 0;
    }

    getAttribute(name) {
        return this.lookup[name];
    }

    setAttributeValue(name, value, escape) {
        var attr = this.getAttribute(name);
        if (attr) {
            attr.value = value;
            if (typeof escape === 'boolean') {
                attr.escape = escape;
            }
        } else {
            this.addAttribute({
                name: name,
                value: value,
                escape: escape
            });
        }
    }

    getAttributes() {
        return this.all;
    }

    toJSON() {
        return this.all;
    }

    toString() {
        return JSON.stringify(this.all);
    }

    replaceAttributes(attributes) {
        this.all = [];
        this.lookup = {};

        if (attributes) {
            if (Array.isArray(attributes)) {
                attributes.forEach((attr) => {
                    this.addAttribute(attr);
                });
            } else {
                for (var attrName in attributes) {
                    if (attributes.hasOwnProperty(attrName)) {
                        let attrValue = attributes[attrName];
                        let attrDef;

                        if (attrValue != null && typeof attrValue === 'object' && !(attrValue instanceof Node)) {
                            attrDef = attrValue;
                            attrDef.name = attrName;
                        } else {
                            attrDef = {
                                name: attrName,
                                value: attrValue
                            };
                        }

                        this.addAttribute(attrDef);
                    }
                }
            }
        }
    }

    walk(walker) {
        var newAttributes = walker.walk(this.all);
        this.replaceAttributes(newAttributes);
    }
}

module.exports = HtmlAttributeCollection;
});