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

    if(!context.data.markoSyntaxScriptAdded) {
        el.insertSiblingBefore(builder.html(builder.literal(`<script>
            if(localStorage.syntax === 'concise') {
                document.body.classList.add('concise');
            }
        </script>`)));
        context.data.markoSyntaxScriptAdded = true;
    }

    if(scopeName === 'text.marko') {
        try {
            var next = el.container.getNextSibling(el);
            var nextIsCodeBlock = next && next.tagName === 'code-block';
            var nextLang = nextIsCodeBlock && next.getAttributeValue('lang').value;
            var nextIsMarko = nextLang === 'marko';
            var concise;

            if (nextIsMarko) {
                concise = highlighter.highlightSync({
                    fileContents: next.body.firstChild.argument.value,
                    scopeName: scopeName
                });
                next.detach();
            } else {
                concise = highlighter.highlightSync({
                    fileContents: prettyprint(code, {
                        filename:'template.marko',
                        syntax:'concise'
                    }),
                    scopeName: scopeName
                });
            }

            var markoCodeBlock = context.createNodeForEl('code-block-marko');
            markoCodeBlock.setAttributeValue('html', builder.literal(html));
            markoCodeBlock.setAttributeValue('concise', builder.literal(concise));
            return el.replaceWith(markoCodeBlock);
        } catch(e) {
            console.error(e);
        }
    }

    el.replaceWith(builder.html(builder.literal(html)));
}

