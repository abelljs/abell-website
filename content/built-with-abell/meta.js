const renderProjectsList = (projects) => {
  return projects
    .map((project) => `- **${project.title}**

    Link: [${project.url}](${project.url})<br/>
    ${project.description || ''}

    `)
    .join('\n')
}


module.exports = {
  title: "Built with Abell",
  description: 'a list of projects built using Abell',
  pageNum: 9,
  components: {
    renderProjectsList
  }
}