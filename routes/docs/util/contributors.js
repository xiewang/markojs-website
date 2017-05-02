const gh = require('gh-got');
const path = require('path');
const { documents } = require('~/util/external-markdown');

const DEFAULT_REPO = 'marko-js/marko';

const documentNameToMarkdownDocument = {};

documents.forEach((markdownDocument) => {
    let documentName = markdownDocument.documentName;
    documentNameToMarkdownDocument['/docs/' + documentName] = markdownDocument;
});

module.exports = function getContributorsForFile(file) {
    var contributors = {};

    const externalMarkdownDocument = documentNameToMarkdownDocument[file];

    let repo;

    if (externalMarkdownDocument) {
        repo = externalMarkdownDocument.repo;
        file = externalMarkdownDocument.repoFilePath;
    } else {
        repo = DEFAULT_REPO;
    }

    return gh(`repos/${repo}/commits?path=${file}`).then(res => {
        res.body.forEach(contribution => {
            var author = contribution.author;
            contributors[author.login] = {
                username: author.login,
                photo: author.avatar_url,
                profile: author.html_url,
                commits: `https://github.com/${repo}/commits?path=${file}&author=${author.login}`
            };
        });
        return Object.keys(contributors).sort().map(k => contributors[k]);
    }).catch(err => {
        var message = err.response && err.response.body && err.response.body.message || '';
        if (err.statusCode === 403 && /rate limit/i.test(message)) {
            console.error('GitHub API rate limit exceeded.  You can set the GITHUB_TOKEN environment variable for a higher limit. https://github.com/settings/tokens');
            if (process.env.NODE_ENV === 'production') process.exit(1);
        } else {
            throw err;
        }
    });
}
