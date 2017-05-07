$_mod.def("/readable-stream$1.1.14/readable", function(require, exports, module, __filename, __dirname) { var process=require("process"); exports = module.exports = require('/readable-stream$1.1.14/lib/_stream_readable'/*'./lib/_stream_readable.js'*/);
exports.Stream = require('/stream-browserify$1.0.0/index'/*'stream'*/);
exports.Readable = exports;
exports.Writable = require('/readable-stream$1.1.14/lib/_stream_writable'/*'./lib/_stream_writable.js'*/);
exports.Duplex = require('/readable-stream$1.1.14/lib/_stream_duplex'/*'./lib/_stream_duplex.js'*/);
exports.Transform = require('/readable-stream$1.1.14/lib/_stream_transform'/*'./lib/_stream_transform.js'*/);
exports.PassThrough = require('/readable-stream$1.1.14/lib/_stream_passthrough'/*'./lib/_stream_passthrough.js'*/);
if (!process.browser && process.env.READABLE_STREAM === 'disable') {
  module.exports = require('/stream-browserify$1.0.0/index'/*'stream'*/);
}

});