/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
  	{
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `EB Garamond\:400`,
          `Helvetica`

        ],
        display: 'swap'
      }
    }
  ],
}
