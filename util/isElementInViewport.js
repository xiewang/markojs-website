/* globals window */
module.exports = function isElementInViewport (el, options) {
    options = options || {};

    const rect = el.getBoundingClientRect();

    const bottomDiff = options.bottomDiff || 0;
    const rightDiff = options.rightDiff || 0;

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom - bottomDiff <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right - rightDiff <= (window.innerWidth || document.documentElement.clientWidth)
    );
};
