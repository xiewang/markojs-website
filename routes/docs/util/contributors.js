var gh = require('gh-got');
var path = require('path');
module.exports = function getContributorsForFile(file) {
    var contributors = {};
    return gh('repos/marko-js/marko/commits?path='+file).then(res => {
        res.body.forEach(contribution => {
            var author = contribution.author;
            contributors[author.login] = {
                username: author.login,
                photo: author.avatar_url,
                profile: author.html_url,
                commits: 'https://github.com/marko-js/marko/commits?path='+file+'&author='+author.login
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