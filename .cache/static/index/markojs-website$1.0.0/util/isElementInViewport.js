$_mod.def("/markojs-website$1.0.0/util/isElementInViewport", function(require, exports, module, __filename, __dirname) { /* globals window */

function elementInRange(x, a, b) {
    return (x >= a && x <= b);
}

module.exports = function isElementInViewport (element, options) {
    const scrollY = window.scrollY;
    const scrollBottom = scrollY + window.innerHeight;
    const elOffsetTop = element.offsetTop;
    const elBottomPos = elOffsetTop + element.offsetHeight;
    return (
        elementInRange(elOffsetTop, scrollY, scrollBottom) ||
        elementInRange(elBottomPos, scrollY, scrollBottom)
    );
};

});