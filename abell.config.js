module.exports = {
  globalMeta: {
    siteName: 'Abell',
    name: 'Hoomans of Abell Land',
    twitter: 'AbellLand',
    domain: 'https://abelljs.org/',
    navMenuOrder: [
      'getting-started',
      'starters',
      'tutorial/create-portfolio',
      'guide',
      'changelog'
    ],
    builtWithAbell: [
      {
        title: 'Abelljs.org (This documentation website) 🎉',
        description: 'The content in this website is written inside markdown and json files and Abell applies this content over a layout to build this pretty website 🐨 🎉',
        url: 'https://abelljs.org'
      },
      {
        title: 'Akashic Records',
        description: 'Blog of Akash',
        url: 'https://records.akashj.com/'
      },
      {
        title: 'React Native Wifi and Hotspot Library Documentation',
        description: 'A React Native Library To Configure Wifi & Hotspot Settings',
        url: 'https://react-native-wifi-and-hotspot-wizard.netlify.app/'
      },
      {
        title: 'Unlighted',
        description: 'Astronomy blog of Saurabh (Not ready yet)',
        url: 'https://unlighted.saurabhdaware.in'
      },
      {
        title: 'Portfolio - Saurabh',
        description: 'Portfolio website that reads projects, articles, etc from JSON and builds website',
        url: 'https://saurabhdaware.in'
      }
      
    ],
    themes: [
      {
        name: "Abell Minima",
        author: "Abell Team",
        github: "https://github.com/abelljs/abell-starter-minima",
        cover: "https://res.cloudinary.com/saurabhdaware/image/upload/c_scale,w_400/v1588342001/abell/og.png",
        preview: "https://abell-starter-minima.netlify.app"
      }
    ]
  },
  plugins: ['abell-sitemap-plugin', 'plugins/fetch-ghdata.js']
}