const https = require('https');
const MarkdownDocument = require('../routes/docs/util/MarkdownDocument');

function getMarkdownDocument(doc) {
    return new Promise((resolve, reject) => {
        https.get(doc.url, (res) => {
            res.setEncoding('utf-8');

            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                doc.markdown = data;
                resolve(doc);
            });
        }).on('error', (err) => {
            reject(err);
        });
    });
}

const markdownDocsToFetch = [
    new MarkdownDocument({
        documentName: 'color-picker.md',
        repoFilePath: 'README.md',
        repo: 'marko-js-samples/marko-color-picker',
        url: 'https://raw.githubusercontent.com/marko-js-samples/marko-color-picker/master/README.md'
    })
];

exports.documents = [];

exports.register = () => {
    let promises = [];

    markdownDocsToFetch.forEach((doc) => {
        let promise = getMarkdownDocument(doc)
            .then((markdownDocument) => {
               exports.documents.push(markdownDocument);
            })
            .catch((err) => {
                throw err;
            });
        promises.push(promise);
    });

    return Promise.all(promises);
};
