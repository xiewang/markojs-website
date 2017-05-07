$_mod.def("/markojs-website$1.0.0/routes/index/components/github-link/component-browser", function(require, exports, module, __filename, __dirname) { require('/whatwg-fetch$2.0.3/fetch'/*'whatwg-fetch'*/);

var url = 'https://api.github.com/repos/marko-js/marko';

module.exports = {
    onMount() {
        fetch(url).then(response => response.json()).then(repo => {
            if (repo.stargazers_count) {
                this.getEl('star-count').innerHTML = repo.stargazers_count.toLocaleString();
            }
        });
    }
};
});