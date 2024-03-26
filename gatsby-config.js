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
    "gatsby-plugin-mdx",
    `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            // It's important to specify the maxWidth (in pixels) of
            // the content container as this plugin uses this as the
            // base for generating different widths of each image.
            maxWidth: 590,
          },
        },
      ],
    },
  },
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [`gatsby-remark-autolink-headers`],
    },
  },
  ]
};
