const routes = {
  'Getting Started': '/getting-started/',
  'Installation': '/installation/',
  // 'Abell Starters': '/starters/',
  'Tutorial': {
    path: '/tutorial/create-portfolio/',
    routes: {
      'What are we building': '/tutorial/create-portfolio/#what-are-we-building',
      'Prerequisites': '/tutorial/create-portfolio/#prerequisites'
    }
  },
  'Syntax Guide': '/guide/syntax-guide/',
  'API Reference': '/guide/api-reference/',
}

module.exports = routes;