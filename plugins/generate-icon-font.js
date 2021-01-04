const svgtofont = require('svgtofont');
const fs = require('fs');
const path = require('path');

async function beforeBuild(programInfo) {
  if (fs.existsSync(path.join(programInfo.abellConfig.themePath, 'fonts', 'i.css'))) {
    const existingIcons = fs.readdirSync(path.join(programInfo.abellConfig.themePath, 'icons', 'abell-i')).sort();
    const fontCSS = fs.readFileSync(path.join(programInfo.abellConfig.themePath, 'fonts', 'i.css'), 'utf-8');
  
    const existingFonts = fontCSS
      .split('\n')
      .slice(19)
      .filter(cssQuery => !!cssQuery)
      .map(cssQuery => cssQuery.slice(3, cssQuery.indexOf(':before')) + '.svg')
      .sort();
  
    const areFontsBuilt = existingIcons.every((iconFileName, index) => iconFileName === existingFonts[index]);
  
    console.log('> Checking if icon font is already built...');
    if (areFontsBuilt) {
      console.log('> Font already exists, skipping the font rebuild');
      return;
    }
  }

  // If new icon is added or removed, we rebuild the font.

  const src = path.resolve(programInfo.abellConfig.themePath, path.join('icons', 'abell-i'));
  const dist = path.resolve(programInfo.abellConfig.themePath, 'fonts');

  await svgtofont({
    src,
    dist,// output path
    fontName: 'i', // font name
    css: true, // Create CSS files.
    cssOptions: {
      fontSize: '23px'
    }
  })
}

module.exports = { beforeBuild }