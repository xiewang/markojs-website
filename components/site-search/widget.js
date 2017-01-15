module.exports = {
    onMount() {
        var input = this.getEl('input');
        document.body.addEventListener('keydown', function(e) {
            if(e.target === document.body) {
                input.focus();
            }
        });
    },
    focus(e) {
        var input = this.getEl('input');
        if(e.target != input) {
            input.focus();
        }
    },
    grow() {
        this.el.classList.add('large');
        this.getEl('input').value = '';
    },
    shrink() {
        this.el.classList.remove('large');
    }
}