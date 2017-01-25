var getWidgetForEl = require('marko/widgets').getWidgetForEl;

module.exports = {
    changeSyntax: function() {
        var header = getWidgetForEl(document.querySelector('.site-header'));
        var beforeScroll = document.body.scrollTop;
        var beforePosition = this.el.offsetTop;

        header.save();

        if(localStorage.syntax === 'concise') {
            localStorage.syntax = 'html';
            document.body.classList.remove('concise');
        } else {
            localStorage.syntax = 'concise';
            document.body.classList.add('concise');
        }

        var afterPosition = this.el.offsetTop;
        var afterScroll = beforeScroll - beforePosition + afterPosition;

        document.body.scrollTop = afterScroll;

        header.reset();
    }
}