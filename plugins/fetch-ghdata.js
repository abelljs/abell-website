const fs = require('fs');
const fetch = require('node-fetch');
const path = require('path');


async function beforeBuild(programInfo) {
  const changelogMD = await fetch('https://raw.githubusercontent.com/abelljs/abell/main/CHANGELOG.md')
    .then(res => res.text());

  const fixBracketsChangelog = changelogMD.replace(/{{/g, '\\{{');
  fs.writeFileSync(path.join(programInfo.abellConfigs.contentPath, 'changelog' ,'index.md'), fixBracketsChangelog);
  
  
  const contributingMD = await fetch('https://raw.githubusercontent.com/abelljs/abell/main/CONTRIBUTING.md')
    .then(res => res.text());

  const fixBracketsContributing = contributingMD.replace(/{{/g, '\\{{').replace(/\n\n\n/g, '<br/><br/>');
  fs.writeFileSync(path.join(programInfo.abellConfigs.contentPath, 'contributing' ,'index.md'), fixBracketsContributing);
}


module.exports = { beforeBuild }