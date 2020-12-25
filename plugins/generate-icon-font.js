const svgtofont = require('svgtofont');
const path = require('path');

async function beforeBuild(programInfo) {
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