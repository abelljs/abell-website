function Themes(themes) {
  return themes.map(theme => /* html */ `
  <div class="theme-container shadow">
    <img style="width: 100%;" loading="lazy" src="${theme.cover}" />
    <div class="theme-info">
      <h3 class="theme-name">${theme.name}</h3>
      <div>by ${theme.author}</div>
      <div class="theme-links">
        <a target="_blank" rel="noopener" href="${theme.preview}">Preview</a>
        <a href="${theme.github}">GitHub</a>
        <hr style="margin: 10px 0px;"/>
      </div>
      <div class="theme-use">
        <h4 style="margin: 0px 0px 16px 0px;font-size: 13pt;">Use this Starter</h4>
        <div class="theme-deploy">
          <a target="_blank" href="https://app.netlify.com/start/deploy?repository=${theme.github}">Deploy with Netlify</a>
          <a target="_blank" href="${theme.github}/generate">Generate on GitHub</a>
        </div>
        <div style="padding: 10px 6px 3px 10px;">or</div> 
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
  components: {
    Themes
  }
}