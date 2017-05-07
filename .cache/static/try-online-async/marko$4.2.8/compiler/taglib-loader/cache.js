$_mod.def("/marko$4.2.8/compiler/taglib-loader/cache", function(require, exports, module, __filename, __dirname) { var cache = {};

function get(key) {
    return cache[key];
}

function put(key, value) {
    cache[key] = value;
}

function clear() {
    cache = {};
}

exports.get = get;
exports.put = put;
exports.clear = clear;
});