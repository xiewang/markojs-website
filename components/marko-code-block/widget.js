module.exports = {
    changeSyntax: function() {
        var beforeScroll = document.body.scrollTop;
        var beforePosition = this.el.offsetTop;

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
    }
}