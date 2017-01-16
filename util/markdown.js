var fs = require('fs');
var path = require('path');
var marko = require('marko');
var marked = require('marked');
var anchorCache = {};

exports.toTemplate = function renderMarkdown(filepath) {
    var markdown = fs.readFileSync(filepath, 'utf-8');
    markdown = markdown.replace(/\</g, '&lt;').replace(/\$/g, '&#36;').replace(/https?:\/\/markojs\.com\//g, '/');

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

        return `<h${level} id="${anchorName}">` +
            `<a name="${anchorName}" class="anchor" href="#${anchorName}">` +
                `<span class="header-link"></span>` +
            `</a>` + text +
        `</h${level}>`;
    };

    markedRenderer.code = function(code, lang, escaped) {
        return `<code-block lang="${lang}">${code}</code-block>`;
    };

    var html = marked(markdown, {
        renderer: markedRenderer
    });

    var templateVirtualPath = path.join(process.cwd(), path.basename(filepath));

    return marko.load(templateVirtualPath, html, { writeToDisk:false });
};

function getAnchorName(title) {
    var anchorName = title.replace(/[ \-]+/g, '-').replace(/[^A-Z0-9\-]+/gi, '').toLowerCase();
    var repeat = anchorCache[anchorName] != null ? ++anchorCache[anchorName] : (anchorCache[anchorName] = 0);
    if(repeat) {
        anchorName += '_' + repeat;
    }
    return anchorName;
}