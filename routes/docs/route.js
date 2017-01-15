const readFileSync = require('fs').readFileSync;
const join = require('path').join;
const template = require('./index.marko');
const renderMarkdown = require('~/util/markdown').render;

exports.path = '/docs/:doc';

exports.handler = (req, res) => {
    let doc = req.params.doc;
    let path = join(process.cwd(), 'node_modules', 'marko', 'docs', doc+'.md');
    let markdown = readFileSync(path, 'utf-8');
    let html = renderMarkdown(markdown).html;
    res.marko(template, { html });
}