/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-flow`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mastermind`,
        short_name: `mm`,
        start_url: `/`,
        background_color: `#6b37bf`,
        display: `browser`,
        icon: `src/images/mastermind.png`,
      },
    },
    `gatsby-plugin-offline`
  ]
};
