$_mod.def("/markojs-website$1.0.0/components/doc-sidebar/components/version-switcher/component-browser", function(require, exports, module, __filename, __dirname) { module.exports = {
    switchVersion(e) {
        var location = e.target.value;
        if (location !== 'current') {
            e.target.value = 'current';
            window.location.href = location;
        }
    }
}
});