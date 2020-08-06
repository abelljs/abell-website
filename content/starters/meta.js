function Themes(themes) {
  return themes.map(theme => /* html */ `
  <div class="theme-container shadow">
    <img style="width: 100%;" loading="lazy" src="${theme.cover}" />
    <div class="theme-info">
      <div class="theme-name">${theme.name}</div>
      <div>by ${theme.author}</div><br/>
      <div class="theme-links">
        <a target="_blank" rel="noopener" href="${theme.preview}">Preview</a>
        <a href="https://app.netlify.com/start/deploy?repository=${theme.github}">Deploy with Netlify</a>
        <a href="${theme.github}">GitHub</a>
      </div>
      <div class="theme-create-locally">
        <div style="padding: 0px 6px 3px 6px;">or</div> 
        <div style="padding: 5px 4px;">Create new project locally with:</div>
        <code style="display: block;word-spacing: 3px;font-size: unset;">npx create-abell-app my-blog --template ${theme.github.replace('https://github.com/', '')}</code>
      </div>
    </div>
  </div>
  `);
}

module.exports = {
  title: "Abell Starters",
  description: "You will find starter projects here which will help you set up blog quickly",
  pageNum: 2,
  components: {
    Themes
  }
}