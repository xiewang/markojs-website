var fs = require('fs');
var path = require('path');
var marko = require('marko');
var marked = require('marked');
var TOC = require('./toc');

exports.toTemplate = function renderMarkdown(filepath) {
    var markdown = fs.readFileSync(filepath, 'utf-8');
    markdown = markdown
        .replace(/\&/g, '&amp;')
        .replace(/\<./g, (match) => {
            if(match[1] !== '!') {
                return '&lt;' + match[1];
            }
            return match;
        })
        .replace(/\$/g, '&#36;')
        .replace(/https?:\/\/markojs\.com\//g, '/')
        .replace(/\.\/([\w\d-\/]+)\.md/g, (match) => {
            var linkpath = path.resolve(path.dirname(filepath), match);
            var linkmatch = /(\/docs\/.*)\.md/.exec(linkpath);
            return linkmatch && (linkmatch[1]+'/') || match;
        });

    var markedRenderer = new marked.Renderer();
    var toc = TOC.create();
    var anchorCache = {};
    var title;

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
        var anchorName = getAnchorName(text, anchorCache);
        var linkText = text.replace(/\([^\)]+\)/g, '()').replace(/\<\/?code\>/g, '').replace(/&amp;lt;/g, '&lt;');

        title = title || linkText;

        toc.addHeading(linkText, anchorName, level);

        return `<h${level} id="${anchorName}">` +
            `<a name="${anchorName}" class="anchor" href="#${anchorName}">` +
                `<span class="header-link"></span>` +
            `</a>` + text +
        `</h${level}>`;
    };

    markedRenderer.code = function(code, lang, escaped) {
        var lines = '';
        var index = lang && lang.indexOf('{');

        if (index && index !== -1) {
            lines = lang.slice(index+1, -1);
            lang = lang.slice(0, index);
        }

        return `<code-block lang="${lang}" lines="${lines}">${code}</code-block>`;
    };

    var html = '-----\n' + marked(markdown, {
        renderer: markedRenderer
    }) + '\n-----\n';

    var templateVirtualPath = path.join(process.cwd(), path.basename(filepath));

    try {
        var template = marko.load(templateVirtualPath, html, { writeToDisk:false })
    } catch(e) {
        console.log(html);
        throw e;
    }

    template.toc = toc.toHTML();
    template.title = title;

    return template;
};

function getAnchorName(title, anchorCache) {
    var anchorName = title.replace(/[ \-]+/g, '-').replace(/[^A-Z0-9\-]+/gi, '').toLowerCase();
    var repeat = anchorCache[anchorName] != null ? ++anchorCache[anchorName] : (anchorCache[anchorName] = 0);
    if(repeat) {
        anchorName += '_' + repeat;
    }
    return anchorName;
}