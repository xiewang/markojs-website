const fs = require('fs');
const path = require('path');
const template = require('./index.marko');
const MarkdownDocument = require('./util/MarkdownDocument');
const getContributors = require('./util/contributors');
const markdownToTemplate = require('./util/markdown').toTemplate;
const externalMarkdownDocuments = require('../../util/external-markdown').documents;

const docsDir = path.join(process.cwd(), 'node_modules', 'marko', 'docs');
const docFileNames = fs.readdirSync(docsDir).filter(doc => /\.md$/.test(doc)).map(doc => doc.slice(0, -3));

let docNameToMarkdownDocument = {};

docFileNames.forEach((docFileName) => {
    const filePath = path.join(docsDir, docFileName + '.md');
    const markdown = fs.readFileSync(filePath, 'utf-8');

    docNameToMarkdownDocument[docFileName] = new MarkdownDocument({
        filePath,
        markdown,
        documentName: path.basename(filePath)
    });
});

// Add the external markdown files that were resolved before the server/build started
externalMarkdownDocuments.forEach((markdownDocument) => {
    docNameToMarkdownDocument[markdownDocument.documentName.slice(0, -3)] = markdownDocument;
});

exports.path = '/docs/:name/';
exports.params = Object.keys(docNameToMarkdownDocument).map(doc => ({ name: doc }));

exports.handler = (input, out) => {
    let name = input.params.name;
    const markdownDocument = docNameToMarkdownDocument[name];

    let doc = markdownToTemplate(markdownDocument);
    let toc = doc.toc;
    let contributors = getContributors('/docs/'+name+'.md');

    let $global = { dependencies: doc.getDependencies() };
    template.render({ $global, name, doc, toc, contributors }, out);
}
