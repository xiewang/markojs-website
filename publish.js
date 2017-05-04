const fs = require('fs');
const path = require('path');
const exec = require('child_process').execSync;
const gitUrl = 'git@github.com:marko-js/marko-js.github.io.git';
const gitBranch = 'master';
const buildDir = __dirname + '/dist';
const publishDir = buildDir + '/__publish';
const domain = 'markojs.com';

module.exports = (args) => {
    let { message } = args || {};

    exec('markoc . --clean');
    exec('rm -rf .cache');

    require('./project').build().then((buildResult) => {
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

      // create CNAME file
      fs.writeFileSync(path.join(buildDir, 'CNAME'), domain, 'utf-8');

      // commit and push up the changes
      try {
        exec(`cd ${buildDir} && git add . --all && git commit -m "${message}"`);
        exec(`cd ${buildDir} && git push origin ${gitBranch}`);
        console.log('Static site successfully built and pushed to remote repository.');
      } catch(e) {
        if(e.cmd && e.cmd.indexOf('git commit')) {
          console.log('Static site successfully built. No changes to push.');
        }
      }
    });
};
