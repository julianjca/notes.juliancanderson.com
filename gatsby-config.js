module.exports = {
  siteMetadata: {
    title: `@juliancanderson's public notes`,
  },
  plugins: ['gatsby-theme-andy', `gatsby-plugin-postcss`, {
    resolve: 'gatsby-plugin-fathom',
    options: {
      // Fathom server URL. Defaults to `cdn.usefathom.com`
      trackingUrl: 'analytics.juliancanderson.com',
      // Unique site id
      siteId: 'CFHOL',
      // Domain whitelist
      whitelistHostnames: [
        'notes.juliancanderson.com',
        'juliancanderson.com'
      ]
    }
  }],
};
