$_mod.def("/raptor-polyfill$1.0.2/string/startsWith", function(require, exports, module, __filename, __dirname) { if (!String.prototype.startsWith) {
    String.prototype.startsWith = function(prefix, position) {
        var str = this;
        
        if (position) {
            str = str.substring(position);
        }
        
        if (str.length < prefix.length) {
            return false;
        }
        
        return str.substring(0, prefix.length) == prefix;
    };
}
});