var Highlights = require('highlights');
var prettyprint = require('marko-prettyprint');
var highlighter = new Highlights();

highlighter.requireGrammarsSync({
    modulePath: require.resolve('language-css/package.json')
});
highlighter.requireGrammarsSync({
    modulePath: require.resolve('language-javascript/package.json')
});
highlighter.requireGrammarsSync({
    modulePath: require.resolve('language-html/package.json')
});
highlighter.requireGrammarsSync({
    modulePath: require.resolve('language-marko/package.json')
});

module.exports = function(el, context) {
    var builder = context.builder;
    var code = el.body.firstChild.argument.value;
    var lang = el.getAttributeValue('lang').value;
    var scopeName;
    var html;

    if (lang === 'js' || lang === 'javascript' || lang === 'json') {
        scopeName = 'source.js';
    } else if (lang === 'css') {
        scopeName = 'source.css';
    } else if (lang === 'html') {
        scopeName = 'text.html.basic';
    } else if (lang === 'xml' || lang === 'marko') {
        scopeName = 'text.marko';
    }

    code = code.replace(/&lt;/g, '<').replace(/&#36;/g, '$');
    html = highlighter.highlightSync({
        fileContents: code,
        scopeName: scopeName
    });

    context.addDependency(require.resolve('./syntax.css'));

    if(scopeName === 'text.marko') {
        try {
            var concise = highlighter.highlightSync({
                fileContents: prettyprint(code, {
                    filename:'template.marko',
                    syntax:'concise'
                }),
                scopeName: scopeName
            });

            var markoCodeBlock = context.createNodeForEl('marko-code-block');
            markoCodeBlock.setAttributeValue('html', builder.literal(html));
            markoCodeBlock.setAttributeValue('concise', builder.literal(concise));
            return el.replaceWith(markoCodeBlock);
        } catch(e) {}
    }

    el.replaceWith(builder.html(builder.literal(html)));
}