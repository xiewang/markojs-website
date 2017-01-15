var Headspace = require('headspace');

module.exports = {
    onMount() {
        this.headspace = new Headspace(this.el, {
            showAtBottom: false
        });
        console.log(this.headspace);
    }
}