$_mod.def("/markojs-website$1.0.0/routes/index/components/sine-wave/index.marko", function(require, exports, module, __filename, __dirname) { // Compiled using marko@4.2.8 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require('/marko$4.2.8/vdom'/*"marko/vdom"*/).t(),
    marko_component = ({
    onCreate: function () {
        this.state = {
            active: false,
            count: 0
        };
        this.step = 0.5;
    },
    onMount: function () {
        this.nextFrame = this.nextFrame.bind(this);
        this.subscribeTo(window).on('resize', () => this.scale());
        this.registerAnimationViewListener();
        this.scale();
        if (this.shouldShowAnimation()) {
            this.start();
        }
    },
    scale: function () {
        barCount = Math.min(200, Math.floor(window.innerWidth / 15));
        barWidth = 100 / barCount;
    },
    start: function () {
        if (!this.state.active) {
            this.state.active = true;
            this.nextFrame();
        }
    },
    stop: function () {
        this.state.active = false;
    },
    switchDirection: function () {
        this.step *= -1;
    },
    nextFrame: function () {
        if (this.state.active) {
            this.state.count += this.step;
            window.requestAnimationFrame(this.nextFrame);
        }
    },
    registerAnimationViewListener: function () {
        this.subscribeTo(window).on('scroll', () => {
            const inView = this.shouldShowAnimation();
            if (!inView) {
                this.stop();
            } else if (inView && this.state.active === false) {
                this.start();
            }
        });
    },
    shouldShowAnimation: function () {
        const el = this.getEl('sine-wave-animation');
        return isElementInViewport(el);
    }
}),
    marko_components = require('/marko$4.2.8/components/index-browser'/*"marko/components"*/),
    marko_registerComponent = marko_components.rc,
    marko_componentType = marko_registerComponent("/markojs-website$1.0.0/routes/index/components/sine-wave/index.marko", function() {
      return module.exports;
    }),
    isElementInViewport = require('/markojs-website$1.0.0/util/isElementInViewport'/*"~/util/isElementInViewport"*/),
    marko_styleAttr = require('/marko$4.2.8/runtime/vdom/helper-styleAttr'/*"marko/runtime/vdom/helper-styleAttr"*/),
    marko_helpers = require('/marko$4.2.8/runtime/vdom/helpers'/*"marko/runtime/vdom/helpers"*/),
    marko_createElement = marko_helpers.e,
    marko_const = marko_helpers.const,
    marko_const_nextId = marko_const("0994ff"),
    marko_node0 = marko_createElement("CODE", null, 1, 0, {
        c: marko_const_nextId()
      })
      .t("<div>");

var barCount;

var barWidth;

function render(input, out, __component, component, state) {
  var data = input;

  out.be("DIV", {
      "class": "animated-sin-wave",
      id: __component.elId("sine-wave-animation")
    }, null, 4, {
      onclick: __component.d("switchDirection")
    });

  var count = state.count;

  for (var i = 0; i < barCount; i++) {
    var translateY = Math.sin(count/10 + i/5) * 100 * .5;

    var hue = (360/barCount * i - count) % 360;

    var color = 'hsl('+hue+',95%,55%)';

    var rotation = (count+i)%360;

    var barX = barWidth * i;

    var style = {
                width: barWidth + '%',
                left: barX + '%',
                transform: 'scale(0.8,.5) translateY(' + translateY + '%) rotate(' + rotation + 'deg)',
                backgroundColor: color
            };

    out.e("DIV", {
        style: marko_styleAttr(style),
        "class": "bar"
      }, 0, 4);
  }

  out.ee();

  out.e("P", {
      "class": "animated-sin-wave-description",
      id: __component.elId("_r0")
    }, 5, 4)
    .t("The above animation is ")
    .t(barCount)
    .t(" ")
    .n(marko_node0)
    .t(" tags. No SVG, no CSS transitions/animations. It's all powered by Marko which does a full re-render every frame.");
}

marko_template._ = marko_components.r(render, {
    type: marko_componentType,
    roots: [
      "sine-wave-animation",
      "_r0"
    ]
  }, marko_component);

marko_template.Component = marko_components.c(marko_component, marko_template._);

});