module.exports = {
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