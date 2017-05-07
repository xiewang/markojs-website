$_mod.def("/markojs-website$1.0.0/components/code-block-marko/component-browser", function(require, exports, module, __filename, __dirname) { "use strict";

const getComponentForEl = require('/marko$4.2.8/components/index-browser'/*'marko/components'*/).getComponentForEl;
const localStorageUtil = require('/markojs-website$1.0.0/util/localStorage'/*'~/util/localStorage.js'*/);

module.exports = {
    changeSyntax: function() {
        var header = getComponentForEl(document.querySelector('.site-header'));
        var beforeScroll = document.body.scrollTop;
        var beforePosition = this.el.offsetTop;

        header.pause();

        if(localStorageUtil.get('syntax') === 'concise') {
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

});