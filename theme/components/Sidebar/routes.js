const routes = {
  'Getting Started': '/getting-started/',
  'Abell Starters': '/starters/',
  'Tutorial': {
    path: '/tutorial/create-portfolio/',
    routes: {
      'What is Abell?': '/tutorial/create-portfolio/#what-is-abell',
      'Installation and Setup': '/tutorial/create-portfolio/#installation-and-setup',
      'Setting Up Our Portfolio': '/tutorial/create-portfolio/#setting-up-our-portfolio',
      'Adding CSS to Our Project': '/tutorial/create-portfolio/#adding-css-to-our-project',
      'Require JSON to Abell Files': '/tutorial/create-portfolio/#require-json-to-abell-files',
      'Building Your First Abell Component': '/tutorial/create-portfolio/#building-your-first-abell-component',
      'Dynamic Page Generation': '/tutorial/create-portfolio/#dynamic-page-generation',
    }
  },
  'Syntax Guide': '/guide/syntax-guide/',
  'API Reference': '/guide/api-reference/',
}

module.exports = routes;