const readFileSync = require('fs').readFileSync;
const join = require('path').join;
const template = require('./index.marko');
const parse = require('github-flavored-markdown').parse;

exports.path = '/docs/:doc';

exports.handler = (req, res) => {
    let doc = req.params.doc;
    let path = join(process.cwd(), 'node_modules', 'marko', 'docs', doc+'.md');
    let content = readFileSync(path, 'utf-8');
    let html = parse(content, 'marko-js/marko');
    res.marko(template, { html });
}