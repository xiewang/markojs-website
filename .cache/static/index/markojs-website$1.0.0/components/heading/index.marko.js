$_mod.def("/markojs-website$1.0.0/components/heading/index.marko", function(require, exports, module, __filename, __dirname) { // Compiled using marko@4.2.8 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require('/marko$4.2.8/vdom'/*"marko/vdom"*/).t(),
    getAnchorName = require('/markojs-website$1.0.0/components/heading/getAnchorName'/*"./getAnchorName"*/),
    marko_helpers = require('/marko$4.2.8/runtime/vdom/helpers'/*"marko/runtime/vdom/helpers"*/),
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require('/marko$4.2.8/taglibs/core/include-tag'/*"marko/taglibs/core/include-tag"*/)),
    marko_classAttr = marko_helpers.ca,
    marko_createElement = marko_helpers.e,
    marko_const = marko_helpers.const,
    marko_const_nextId = marko_const("e554f0"),
    marko_node0 = marko_createElement("SPAN", {
        "class": "header-link"
      }, 0, 0, {
        c: marko_const_nextId()
      });

function render(input, out) {
  var data = input;

  var className = input['class'];

  var text = input.text;

  var anchorName = input.anchorName || getAnchorName(text, out);

  out.be(input.tag.toUpperCase(), {
      "class": marko_classAttr([
          "heading",
          className
        ])
    }, null, 4);

  out.e("A", {
      name: anchorName,
      "class": "anchor",
      href: "#" + anchorName
    }, 1)
    .n(marko_node0);

  if (text) {
    out.t(text);
  } else {
    include_tag({
        _target: input.renderBody
      }, out);
  }

  out.ee();
}

marko_template._ = render;

});