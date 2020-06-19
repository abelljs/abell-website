module.exports = {
  globalMeta: {
    siteName: 'Abell',
    name: 'Hoomans of Abell Land',
    twitter: 'AbellLand',
    domain: 'https://abelljs.org/',
    themes: [
      {
        name: "Abell Minima",
        github: "https://github.com/abelljs/abell-starter-minima",
        cover: "https://res.cloudinary.com/saurabhdaware/image/upload/c_scale,w_400/v1588342001/abell/og.png",
        deploy: "https://app.netlify.com/start/deploy?repository=https://github.com/abelljs/abell-starter-minima",
        preview: "https://abell-starter-minima.netlify.app"
      }
    ]
  },
  plugins: ['abell-sitemap-plugin']
}