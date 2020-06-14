function GitHubContributeButton(navigationPath) {
  return /* html */`
  <a 
    target="_blank" 
    rel="noopener noreferer" 
    class="github-contribute-button blog dynamic-url shadow" 
    href="https://github.com/abelljs/abell-website/tree/main/content/${navigationPath}" 
    data-size="large"
  >
    <img width="20" style="position: relative;top:4px;" alt="GitHub Logo" src="../icons/github.png"> 
    &nbsp;Contribute to this page <small>&#x2197;</small>
  </a>
  `
}

module.exports = GitHubContributeButton;