module.exports = {
  siteMetadata: {
    title: `Paused`,
    description: `Stories about the global impacts of the COVID-19 pandemic, told by Journalism graduate students from the Studio 20 - Digital First program at the New York University. Stories about how people around the world are coping with the coronavirus situation, innovating and finding new ways of dealing with the stress, the anxiety and other hardships of these times.`,
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
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-modal-routing`,
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: `keyFJiFrIZGSPxG3c`, // may instead specify via env, see below
        concurrency: 0, // default, see using markdown and attachments for more information
        tables: [
          {
            baseId: `appNluUpWfxwPYpy6`,
            tableName: `AllPosts`,
            createSeparateNodeType: false, // boolean, default is false, see the documentation on naming conflicts for more information
            separateMapType: false,
          },
          {
            baseId: `appNluUpWfxwPYpy6`,
            tableName: `Authors`,
            createSeparateNodeType: false, // boolean, default is false, see the documentation on naming conflicts for more information
            separateMapType: false,
          },
          {
            baseId: `appNluUpWfxwPYpy6`,
            tableName: `ChineseContractTracing`,
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
