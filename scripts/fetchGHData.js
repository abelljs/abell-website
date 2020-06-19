const fs = require('fs');
const fetch = require('node-fetch');
const path = require('path');

fetch('https://raw.githubusercontent.com/abelljs/abell/main/CHANGELOG.md')
  .then(res => res.text())
  .then(markdown => {
    const fixBrackets = markdown.replace(/{{/g, '\\{{');
    fs.writeFileSync(path.join(process.cwd(), 'content', 'changelog' ,'index.md'), fixBrackets);
  })
  .catch(err => {
    console.log(err);
  })


fetch('https://raw.githubusercontent.com/abelljs/abell/main/CONTRIBUTING.md')
  .then(res => res.text())
  .then(markdown => {
    const fixBrackets = markdown.replace(/{{/g, '\\{{').replace(/\n\n\n/g, '<br/><br/>');
    fs.writeFileSync(path.join(process.cwd(), 'content', 'contributing' ,'index.md'), fixBrackets);
  })
  .catch(err => {
    console.log(err);
  })