$_mod.def("/markojs-website$1.0.0/util/localstorage", function(require, exports, module, __filename, __dirname) { function getMarkoWebsiteKey(key) {
    return `markojs-website:${key}`;
}

exports.get = (key) => localStorage.getItem(getMarkoWebsiteKey(key));
exports.set = (key, value) => localStorage.setItem(getMarkoWebsiteKey(key), value);
exports.getMarkoWebsiteKey = getMarkoWebsiteKey;

});