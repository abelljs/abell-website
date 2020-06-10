module.exports = {
  sourcePath: 'theme',
  destinationPath: 'dist',
  contentPath: 'content',
  globalMeta: {
    siteName: 'Abell',
    name: 'Hoomans of Abell Land',
    twitter: 'AbellLand',
    domain: 'https://abelljs.org/',
    themes: [
      {
        name: "Abell Minima",
        github: "https://github.com/abelljs/abell-starter-minima",
        cover: "https://res.cloudinary.com/saurabhdaware/image/upload/v1588342001/abell/og.png",
        deploy: "https://app.netlify.com/start/deploy?repository=https://github.com/abelljs/abell-starter-minima",
        preview: "https://abell-starter-minima.netlify.app"
      }
    ]
  },
  plugins: ['abell-sitemap-plugin']
}