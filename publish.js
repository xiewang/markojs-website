const fs = require('fs');
const exec = require('child_process').execSync;
const gitUrl = 'git@github.com:marko-js/markojs-website.git';
const gitBranch = 'gh-pages';
const repoName = 'markojs-website';
const urlPrefix = '/'+repoName+'/';
const buildDir = __dirname + '/dist';
const publishDir = buildDir + '/__publish';

exec('markoc . --clean');
exec('rm -rf .cache');

require('./project').build({
  staticUrlPrefix: urlPrefix
}).then((buildResult) => {
  // prefix all links with the urlPrefix
  buildResult.clean().routes.forEach((route) => {
    const file = buildDir + route.file;
    let html = fs.readFileSync(file, 'utf-8');

    html = html.replace(/src="\//g, `src="${urlPrefix}`);
    html = html.replace(/href="\//g, `href="${urlPrefix}`);
    html = html.replace(new RegExp('\\/'+repoName+'\\/'+repoName+'\\/', 'g'), urlPrefix);

    fs.writeFileSync(file, html, 'utf-8');
  });

  // create publish directory
  exec(`mkdir ${publishDir}`);

  // clone the repo that is the publish target
  exec(`cd ${publishDir} && git init && git remote add origin ${gitUrl} && git fetch`);

  // switch to the target branch
  try {
    exec(`cd ${publishDir} && git checkout -t origin/${gitBranch}`);
  } catch(e) {
    exec(`cd ${publishDir} && git checkout -b ${gitBranch}`);
  }

  // steal the .git directory
  exec(`mv ${publishDir+'/.git'} ${buildDir}`);
  exec(`rm -rf ${publishDir}`);

  // commit and push up the changes
  try {
    exec(`cd ${buildDir} && git add . --all && git commit -m "updated static site"`);
    exec(`cd ${buildDir} && git push origin ${gitBranch}`);
    console.log('Static site successfully built and pushed to remote repository.');
  } catch(e) {
    if(e.cmd && e.cmd.indexOf('git commit')) {
      console.log('Static site successfully built. No changes to push.');
    }
  }
});