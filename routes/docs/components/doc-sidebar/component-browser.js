var getComponentForEl = require('marko/components').getComponentForEl;
var forEach = [].forEach;

module.exports = {
    onMount() {
        var header = getComponentForEl(document.querySelector('.site-header'));
        forEach.call(this.el.querySelectorAll('a[href^=\\#]'), (a) => {
            this.subscribeTo(a).on('click', () => {
                header.hide();
                header.pause();
                header.resume();
            });
        });
        this.subscribeTo(this.el.querySelector('a.selected')).on('click', (e) => {
            window.scrollTo(0,0);
            header.reset();
            e.preventDefault();
        });
        this.subscribeTo(header).on('reset', () => {
            this.el.classList.remove('no-header');
            this.el.classList.remove('fixed');
            setTimeout(() => this.el.classList.remove('transition'), 0);
        });
        this.subscribeTo(header).on('fix', () => {
            this.el.classList.remove('no-header');
            this.el.classList.add('fixed');
            setTimeout(() => this.el.classList.add('transition'), 0);
        });
        this.subscribeTo(header).on('hide', () => {
            this.el.classList.add('no-header');
            this.el.classList.add('fixed');
            setTimeout(() => this.el.classList.add('transition'), 0);
        });

        if (window.pageYOffset > header.el.offsetHeight) {
            this.el.classList.add('no-header');
            this.el.classList.add('fixed');
        }
    }
}