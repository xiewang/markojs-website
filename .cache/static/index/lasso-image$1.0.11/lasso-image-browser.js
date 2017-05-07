$_mod.def("/lasso-image$1.0.11/lasso-image-browser", function(require, exports, module, __filename, __dirname) { exports.getImageInfo = function(path, options, callback) {
    if (typeof options === 'function') {
        callback = options;
        options = null;
    }
    
    callback(null, require(path));
};
});