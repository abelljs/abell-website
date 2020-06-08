const fs = require('fs');

function Themes(themes) {
  return themes.map(theme => /* html */ `
  <div class="theme-container shadow">
    <img style="width: 100%;" loading="lazy" src="${theme.cover}" />
    <div class="theme-info">
      <div class="theme-name">${theme.name}</div>
      <div class="theme-links">
        <a target="_blank" rel="noopener" href="${theme.preview}">Preview</a>
        <a href="${theme.deploy}">Deploy with Netlify</a>
        <a href="${theme.github}">GitHub</a>
      </div>
      <div class="theme-create-locally">
        <div style="padding: 0px 6px;">or</div> 
        <div style="padding: 5px 4px;">Create new project locally with:</div>
        <code style="display: block;word-spacing: 3px;">npx create-abell-app my-blog --template ${theme.github}</code>
      </div>
    </div>
  </div>
  `).join('');
}

module.exports = {
  title: "Getting Started",
  description: "Abell is a static site generator. This blog will take you through the basics of Abell.",
  $createdAt: "Jun 5 2020",
  pageNum: 1,
  components: {
    Themes
  }
}