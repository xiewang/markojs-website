var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();

emitter.setMaxListeners(100);

module.exports = {
    onMount() {
        var self = this;
        var subscription = this.subscribeTo(emitter);
        subscription.on('changeSyntax', function(syntax, component) {
            if (self === component) {
                self.beforeScroll = document.body.scrollTop;
                self.beforePosition = self.el.offsetTop;
                self.updateScrollPosition = true;
            }
            self.state.syntax = syntax;
        });
    },
    onInput(input, out) {
        this.state = {
            syntax: out.global.syntax || 'html'
        }
    },
    changeSyntax: function() {
        if(this.state.syntax === 'html') {
            emitter.emit('changeSyntax', 'concise', this);
        } else {
            emitter.emit('changeSyntax', 'html', this);
        }
    },
    update_syntax: function(syntax) {
        var html = this.getEl('html');
        var concise = this.getEl('concise');
        var self = this;

        if(syntax === 'html') {
            html.style.display = 'block';
            concise.style.display = 'none';
        } else {
            html.style.display = 'none';
            concise.style.display = 'block';
        }

        if(this.updateScrollPosition) {
            requestAnimationFrame(function() {
                var afterPosition = self.el.offsetTop;
                var afterScroll = self.beforeScroll - self.beforePosition + afterPosition;
                document.body.scrollTop = afterScroll;
                self.updateScrollPosition = false;
            });
        }

    }
}