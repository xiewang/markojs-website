const fs = require('fs');
const path = require('path');
const template = require('./index.marko');
const getContributors = require('./util/contributors');
const markdownToTemplate = require('./util/markdown').toTemplate;
const docsDir = path.join(process.cwd(), 'node_modules', 'marko', 'docs');
const docs = fs.readdirSync(docsDir).filter(doc => /\.md$/.test(doc)).map(doc => doc.slice(0, -3));

exports.path = '/docs/:name/';
exports.params = docs.map(doc => ({ name:doc }));

exports.handler = (input, out) => {
    let name = input.params.name;
    let doc = markdownToTemplate(path.join(docsDir, name+'.md'));
    let toc = doc.toc;
    let contributors = getContributors('/docs/'+name+'.md');

    let $global = { dependencies: doc.getDependencies() };
    template.render({ $global, name, doc, toc, contributors }, out);
}