"use strict";

const getComponentForEl = require('marko/components').getComponentForEl;
function getMarkoWebsiteKey(key) {
    return `markojs-website:${key}`;
}
const localStorageUtil = {
    get: (key) => localStorage.getItem(getMarkoWebsiteKey(key)),
    set: (key, value) => localStorage.setItem(getMarkoWebsiteKey(key), value),
    getMarkoWebsiteKey: getMarkoWebsiteKey
};

module.exports = {
    changeSyntax: function () {
        var header = getComponentForEl(document.querySelector('.site-header'));
        var beforeScroll = document.body.scrollTop;
        var beforePosition = this.el.offsetTop;

        header.pause();

        if (localStorageUtil.get('syntax') === 'concise') {
            localStorageUtil.set('syntax', 'html');
            document.body.classList.remove('concise');
        } else {
            localStorageUtil.set('syntax', 'concise');
            document.body.classList.add('concise');
        }

        var afterPosition = this.el.offsetTop;
        var afterScroll = beforeScroll - beforePosition + afterPosition;

        document.body.scrollTop = afterScroll;

        header.resume();
    }
}
