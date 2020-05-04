module.exports = {
  siteMetadata: {
    title: `Site title`,
    description: `NYU's Studio 20 graduate journalism newsroom`,
    author: `@studio20nyu`,
    mapboxToken: `pk.eyJ1IjoiYmxha2VodW5zaWNrZXIiLCJhIjoiY2s5MjB4dnNqMDA3dDNrbTBpN3d3M2k2NyJ9.Gr-7FjJNAII4-JmuCu0eIA`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: `keyFJiFrIZGSPxG3c`, // may instead specify via env, see below
        concurrency: 5, // default, see using markdown and attachments for more information
        tables: [
          {
            baseId: `appNluUpWfxwPYpy6`,
            tableName: `All Posts`,
            createSeparateNodeType: false, // boolean, default is false, see the documentation on naming conflicts for more information
            separateMapType: false,
          },
          {
            baseId: `appNluUpWfxwPYpy6`,
            tableName: `Surveillance`,
            createSeparateNodeType: false, // boolean, default is false, see the documentation on naming conflicts for more information
            separateMapType: false,
          },
          {
            baseId: `appNluUpWfxwPYpy6`,
            tableName: `Authors`,
            createSeparateNodeType: false, // boolean, default is false, see the documentation on naming conflicts for more information
            separateMapType: false,
          }
        ]
      }
    }
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
