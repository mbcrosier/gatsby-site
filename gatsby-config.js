/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `🏙️🏔️🌴 Travel Ideas Club 🌴🏔️🏙️`,
    siteUrl: `https://www.yourdomain.tld`,
    description: `A small site to share travel ideas`
  },
  plugins: ["gatsby-plugin-sitemap", "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `ideas`,
        path: `${__dirname}/ideas`,
      }
    },
  
  ]
};
