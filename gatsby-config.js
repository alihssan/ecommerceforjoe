/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const { createProxyMiddleware } = require("http-proxy-middleware") //v1.x.x
var cors = require('cors')

module.exports = {
  /* Your site config here */
    developMiddleware: app => {
    app.use(
      "/.netlify/functions/",
      createProxyMiddleware({
        target: "http://localhost:8000",
        pathRewrite: {
          "/.netlify/functions/": "",
        },
      })
    )
  },
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
    ,
        `gatsby-plugin-nodejs`

    /*{
    resolve: `gatsby-source-square-catalog`,
    options: {
      token: 'EAAAEIEcm9qhG1ds8GyWU6SwEcew6_d96hMEAI9QtLa8LRMHByTtcOIZ5-Dj5-8C'
    }
  }*/
  ,
  
  

  ],
  proxy: {
    prefix: "/v2",
    url: "https://connect.squareup.com",
  }
}
