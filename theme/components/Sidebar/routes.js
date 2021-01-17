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
  'Syntax Guide': {
    path: '/guide/syntax-guide/',
    routes: {
      'Basic Syntax': '/guide/syntax-guide/#basic-syntax',
      'Debugging in Abell': '/guide/syntax-guide/#debugging-in-abell',
      'Abell Components': '/guide/syntax-guide/#abell-components',
      'Bundling in Abell': '/guide/syntax-guide/#bundling-in-abell',
    }
  },
  'API Reference': {
    path: '/guide/api-reference/',
    routes: {
      'Abell.$root': '/guide/api-reference/#abellroot-ltstringgt'
    }
  }
}

module.exports = routes;