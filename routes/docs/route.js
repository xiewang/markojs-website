const join = require('path').join;
const template = require('./index.marko');
const markdownToTemplate = require('~/util/markdown').toTemplate;

exports.path = '/docs/:doc';

exports.handler = (req, res) => {
    let doc = req.params.doc;
    let path = join(process.cwd(), 'node_modules', 'marko', 'docs', doc+'.md');
    let markdown = markdownToTemplate(path);
    let $global = { dependencies:markdown.getDependencies() };

    res.marko(template, { $global, markdown });
}