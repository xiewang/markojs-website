$_mod.def("/marko$4.2.8/compiler/index", function(require, exports, module, __filename, __dirname) { 'use strict';

var Compiler = require('/marko$4.2.8/compiler/Compiler'/*'./Compiler'*/);
var Walker = require('/marko$4.2.8/compiler/Walker'/*'./Walker'*/);
var Parser = require('/marko$4.2.8/compiler/Parser'/*'./Parser'*/);
var HtmlJsParser = require('/marko$4.2.8/compiler/HtmlJsParser'/*'./HtmlJsParser'*/);
var Builder = require('/marko$4.2.8/compiler/Builder'/*'./Builder'*/);
var extend = require('/raptor-util$3.2.0/extend'/*'raptor-util/extend'*/);
var CompileContext = require('/marko$4.2.8/compiler/CompileContext'/*'./CompileContext'*/);
var globalConfig = require('/marko$4.2.8/compiler/config'/*'./config'*/);
var CompileContext = require('/marko$4.2.8/compiler/CompileContext'/*'./CompileContext'*/);
var InlineCompiler = require('/marko$4.2.8/compiler/InlineCompiler'/*'./InlineCompiler'*/);
var ok = require('/assert$1.4.1/assert'/*'assert'*/).ok;
var fs = require('/markojs-website$1.0.0/browser-shims/fs/index'/*'fs'*/);
var taglibLoader = require('/marko$4.2.8/compiler/taglib-loader/index'/*'./taglib-loader'*/);

var defaults = extend({}, globalConfig);

Object.defineProperty(exports, 'defaultOptions', {
    get: function() { return globalConfig;  },
    enumerable: true,
    configurable: false
});

Object.defineProperty(exports, 'config', {
    get: function() { return globalConfig;  },
    enumerable: true,
    configurable: false
});

var defaultParser = new Parser(new HtmlJsParser());
var rawParser = new Parser(
    new HtmlJsParser({
        ignorePlaceholders: true
    }),
    {
        raw: true
    });

function configure(newConfig) {
    if (!newConfig) {
        newConfig = {};
    }

    extend(globalConfig, defaults);
    extend(globalConfig, newConfig);
}

var defaultCompiler = new Compiler({
    parser: defaultParser,
    builder: Builder.DEFAULT_BUILDER
});

function createBuilder(options) {
    return new Builder(options);
}

function createWalker(options) {
    return new Walker(options);
}

function _compile(src, filename, userOptions, callback) {
    ok(filename, '"filename" argument is required');
    ok(typeof filename === 'string', '"filename" argument should be a string');

    var options = {};

    extend(options, globalConfig);

    if (userOptions) {
        extend(options, userOptions);
    }

    var compiler = defaultCompiler;

    var context = new CompileContext(src, filename, compiler.builder, options);

    if (callback) {
        let compiled;

        try {
            compiled = compiler.compile(src, context);
        } catch(e) {
            return callback(e);
        }

        callback(null, userOptions.sourceOnly ? compiled.code : compiled);
    } else {
        let compiled = compiler.compile(src, context);
        return userOptions.sourceOnly ? compiled.code : compiled;
    }
}

function compile(src, filename, options, callback) {
    if (typeof options === 'function') {
        callback = options;
        options = null;
    }

    options = options || {};
    options.sourceOnly = options.sourceOnly !== false;

    return _compile(src, filename, options, callback);
}

function compileForBrowser(src, filename, options, callback) {
    if (typeof options === 'function') {
        callback = options;
        options = null;
    }

    options = extend({output: 'vdom', meta: false, browser: true, sourceOnly: false}, options);

    return compile(src, filename, options, callback);
}

function compileFile(filename, options, callback) {
    if (typeof options === 'function') {
        callback = options;
        options = null;
    }

    options = options || {};
    options.sourceOnly = options.sourceOnly !== false;

    if (callback) {
        fs.readFile(filename, {encoding: 'utf8'}, function(err, templateSrc) {
            if (err) {
                return callback(err);
            }

            _compile(templateSrc, filename, options, callback);
        });
    } else {
        let templateSrc = fs.readFileSync(filename, {encoding: 'utf8'});
        return _compile(templateSrc, filename, options, callback);
    }
}

function compileFileForBrowser(filename, options, callback) {
    if (typeof options === 'function') {
        callback = options;
        options = null;
    }

    options = extend({output: 'vdom', meta: false, browser: true, sourceOnly: false}, options);
    return compileFile(filename, options, callback);
}


function createInlineCompiler(filename, userOptions) {
    var options = {};

    extend(options, globalConfig);

    if (userOptions) {
        extend(options, userOptions);
    }

    var compiler = defaultCompiler;
    var context = new CompileContext('', filename, compiler.builder, options);
    return new InlineCompiler(context, compiler);
}

function checkUpToDate(templateFile, templateJsFile) {
    return false; // TODO Implement checkUpToDate
}

function getLastModified(path, options, callback) {
    if (typeof options === 'function') {
        callback = options;
        options = null;
    }

    callback(null, -1); // TODO Implement getLastModified
}

function clearCaches() {
    exports.taglibLookup.clearCache();
    exports.taglibFinder.clearCache();
    exports.taglibLoader.clearCache();
}

function parseRaw(templateSrc, filename) {
    var context = new CompileContext(templateSrc, filename, Builder.DEFAULT_BUILDER);
    var parsed = rawParser.parse(templateSrc, context);

    if (context.hasErrors()) {
        var errors = context.getErrors();

        var message = 'An error occurred while trying to compile template at path "' + filename + '". Error(s) in template:\n';
        for (var i = 0, len = errors.length; i < len; i++) {
            let error = errors[i];
            message += (i + 1) + ') ' + error.toString() + '\n';
        }
        var error = new Error(message);
        error.errors = errors;
        throw error;
    }

    return parsed;
}

exports.createBuilder = createBuilder;
exports.compileFile = compileFile;
exports.compile = compile;
exports.compileForBrowser = compileForBrowser;
exports.compileFileForBrowser = compileFileForBrowser;
exports.parseRaw = parseRaw;
exports.createInlineCompiler = createInlineCompiler;

exports.checkUpToDate = checkUpToDate;
exports.getLastModified = getLastModified;
exports.createWalker = createWalker;
exports.builder = Builder.DEFAULT_BUILDER;
exports.configure = configure;
exports.clearCaches = clearCaches;

var taglibLookup = require('/marko$4.2.8/compiler/taglib-lookup/index'/*'./taglib-lookup'*/);
exports.taglibLookup = taglibLookup;
exports.taglibLoader = taglibLoader;
exports.taglibFinder = require('/marko$4.2.8/compiler/taglib-finder/index'/*'./taglib-finder'*/);

function buildTaglibLookup(dirname) {
    return taglibLookup.buildLookup(dirname);
}

exports.buildTaglibLookup = buildTaglibLookup;

function registerTaglib(taglibProps, taglibPath) {
    var taglib = taglibLoader.createTaglib(taglibPath);
    taglibLoader.loadTaglibFromProps(taglib, taglibProps);
    taglibLookup.registerTaglib(taglib);
}

registerTaglib(require('/marko$4.2.8/taglibs/core/marko'/*'../taglibs/core/marko.json'*/), require.resolve('/marko$4.2.8/taglibs/core/marko'/*'../taglibs/core/marko.json'*/));
registerTaglib(require('/marko$4.2.8/taglibs/layout/marko'/*'../taglibs/layout/marko.json'*/), require.resolve('/marko$4.2.8/taglibs/layout/marko'/*'../taglibs/layout/marko.json'*/));
registerTaglib(require('/marko$4.2.8/taglibs/html/marko'/*'../taglibs/html/marko.json'*/), require.resolve('/marko$4.2.8/taglibs/html/marko'/*'../taglibs/html/marko.json'*/));
registerTaglib(require('/marko$4.2.8/taglibs/svg/marko'/*'../taglibs/svg/marko.json'*/), require.resolve('/marko$4.2.8/taglibs/svg/marko'/*'../taglibs/svg/marko.json'*/));
registerTaglib(require('/marko$4.2.8/taglibs/async/marko'/*'../taglibs/async/marko.json'*/), require.resolve('/marko$4.2.8/taglibs/async/marko'/*'../taglibs/async/marko.json'*/));
registerTaglib(require('/marko$4.2.8/taglibs/cache/marko'/*'../taglibs/cache/marko.json'*/), require.resolve('/marko$4.2.8/taglibs/cache/marko'/*'../taglibs/cache/marko.json'*/));
registerTaglib(require('/marko$4.2.8/components/taglib/marko'/*'../components/taglib/marko.json'*/), require.resolve('/marko$4.2.8/components/taglib/marko'/*'../components/taglib/marko.json'*/));

exports.registerTaglib = function(filePath) {
    ok(typeof filePath === 'string', '"filePath" shouldbe a string');
    var taglib = taglibLoader.loadTaglibFromFile(filePath);
    taglibLookup.registerTaglib(taglib);
    clearCaches();
};

exports.isVDOMSupported = true;

});