module.exports = {
  globalMeta: {
    siteName: 'Abell',
    name: 'Hoomans of Abell Land',
    version: '0.6',
    twitter: 'AbellLand',
    domain: 'https://abelljs.org/',
    navMenuOrder: [
      'getting-started',
      'starters',
      'tutorial/create-portfolio',
      'guide',
      'plugins',
      'contributing',
      'changelog'
    ],
    themes: [
      {
        name: "Abell Minima",
        author: "Abell Team",
        github: "https://github.com/abelljs/abell-starter-minima",
        cover: "https://res.cloudinary.com/saurabhdaware/image/upload/c_scale,w_400/v1588342001/abell/og.png",
        preview: "https://abell-starter-minima.netlify.app"
      },
      {
        name: "Portfolio Starter",
        author: "Abell Team",
        github: "https://github.com/abelljs/abell-starter-portfolio",
        cover: "https://res.cloudinary.com/saurabhdaware/image/upload/v1597399661/abell/Screenshot_from_2020-08-14_15-36-59.png",
        preview: "https://abell-starter-portfolio.netlify.app"
      }
    ]
  },
  plugins: ['abell-sitemap-plugin', 'plugins/fetch-ghdata.js']
}