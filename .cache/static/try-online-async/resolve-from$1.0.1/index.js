$_mod.def("/resolve-from$1.0.1/index", function(require, exports, module, __filename, __dirname) { 'use strict';
var path = require('/path-browserify$0.0.0/index'/*'path'*/);
var Module = require('/markojs-website$1.0.0/browser-shims/module/index'/*'module'*/);

module.exports = function (fromDir, moduleId) {
	if (typeof fromDir !== 'string' || typeof moduleId !== 'string') {
		throw new TypeError('Expected `fromDir` and `moduleId` to be a string');
	}

	fromDir = path.resolve(fromDir);

	var fromFile = path.join(fromDir, 'noop.js');

	return Module._resolveFilename(moduleId, {
		id: fromFile,
		filename: fromFile,
		paths: Module._nodeModulePaths(fromDir)
	});
};

});