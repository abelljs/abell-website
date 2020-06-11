const renderProjectsList = (projects) => {
  return projects.map(project => `
  ### ${project.githubPath}
  ${project.description || ''}
  <br/>[GitHub Repository](https://github.com/${project.githubPath})
  `).join('')
}

module.exports = {
  title: "Plugins & Projects",
  pageNum: 6,
  projects: [
    {
      githubPath: 'abelljs/create-abell-app',
      description: 'Geneates boilerplate of abell project, npx create-abell-app my-blog'
    },
    {
      githubPath: 'saurabhdaware/abell-sitemap-plugin',
      description: 'Plugin to generate SiteMap.xml'
    },
    {
      githubPath: 'abelljs/vscode-abell-language-features',
      description: 'Syntax highlighting for .abell files'
    },
    {
      githubPath: 'abelljs/abell-starter-minima',
      description: 'Starter template to create blog with Abell'
    }
  ],
  components: {
    renderProjectsList
  }
};