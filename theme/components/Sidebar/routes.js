const routes = {
  'Getting Started': '/getting-started/',
  'Abell Starters': '/starters/',
  'Tutorial': {
    path: '/tutorial/',
    routes: {
      'What is Abell?': '/tutorial/#what-is-abell',
      'Installation and Setup': '/tutorial/#installation-and-setup',
      'Setting Up Our Portfolio': '/tutorial/#setting-up-our-portfolio',
      'Adding CSS to Our Project': '/tutorial/#adding-css-to-our-project',
      'Require JSON to Abell Files': '/tutorial/#require-json-to-abell-files',
      'Building Your First Abell Component': '/tutorial/#building-your-first-abell-component',
      'Dynamic Page Generation': '/tutorial/#dynamic-page-generation',
    }
  },
  'Syntax Guide': '/guide/syntax-guide/',
  'API Reference': '/guide/api-reference/',
}

module.exports = routes;