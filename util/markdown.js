var marked = require('marked');
var Highlights = require('highlights');
var highlighter = new Highlights();
var anchorCache = {};

highlighter.registry.loadGrammarSync(require.resolve('~/grammars/css.cson'));
highlighter.registry.loadGrammarSync(require.resolve('~/grammars/javascript.cson'));
highlighter.registry.loadGrammarSync(require.resolve('~/grammars/html.cson'));
highlighter.registry.loadGrammarSync(require.resolve('~/grammars/marko.cson'));

function getAnchorName(title) {
    var anchorName = title.replace(/[ \-]+/g, '-').replace(/[^A-Z0-9\-]+/gi, '').toLowerCase();
    var repeat = anchorCache[anchorName] != null ? ++anchorCache[anchorName] : (anchorCache[anchorName] = 0);
    if(repeat) {
        anchorName += '_' + repeat;
    }
    return anchorName;
}

exports.render = function renderMarkdown(markdown) {

    markdown = markdown.replace(/https?:\/\/markojs\.com\//g, '/');

    var markedRenderer = new marked.Renderer();
    var toc = [];

    markedRenderer.table = function(header, body) {
        var output = '<table class="markdown-table">';
        if (header) {
            output += '<thead>' + header + '</thead>';
        }

        if (body) {
            output += '<tbody>' + body + '</tbody>';
        }
        output += '</table>';
        return output;
    };

    markedRenderer.heading = function(text, level) {
        var anchorName = getAnchorName(text);

        return '<h' + level + ' id="' + anchorName + '"><a name="' +
                        anchorName +
                         '" class="anchor" href="#' +
                         anchorName +
                         '"><span class="header-link"></span></a>' +
                          text + '</h' + level + '>';
    };

    markedRenderer.code = function(code, lang, escaped) {
        var scopeName;

        if (lang === 'js' || lang === 'javascript' || lang === 'json') {
            scopeName = 'source.js';
        } else if (lang === 'css') {
            scopeName = 'source.css';
        } else if (lang === 'html') {
            scopeName = 'text.html.basic';
        } else if (lang === 'xml' || lang === 'marko') {
            scopeName = 'text.marko';
        }

        return highlighter.highlightSync({
            fileContents: code,
            scopeName: scopeName
        });
    };

    var html = marked(markdown, {
        renderer: markedRenderer
    });

    return { html, toc };
};