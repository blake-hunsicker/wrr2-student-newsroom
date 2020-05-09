const parseFilepath = require('parse-filepath');
const path = require('path');
const slash = require('slash');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const fileNode = getNode(node.parent);
    const parsedFilePath = parseFilepath(fileNode.relativePath);

    const slug = `/${parsedFilePath.dir}`;
    createNodeField({ node, name: 'slug', value: slug });
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    
    const videoPrimaryTemplate = path.resolve(
      'src/templates/video-primary.js'
    );
    const textPrimaryTemplate = path.resolve(
      'src/templates/text-primary.js'
    );
    const categoryTemplate = path.resolve(
      'src/templates/category.js'
    );
    const authorTemplate = path.resolve(
      'src/templates/author.js'
    );
    
    resolve(
      graphql(
        `
          {
            video: allAirtable(filter: {data: {Type: {eq: "Video primary"}}}) {
              edges {
                node {
                  data {
                    Type
                    Category
                    Slug
                  }
                }
              }
            }
            text: allAirtable(filter: {data: {Type: {eq: "Text primary"}}}) {
              edges {
                node {
                  data {
                    Type
                    Category
                    Slug
                  }
                }
              }
            }
            home: allAirtable(filter: {data: {Type: {eq: "Home"}}}) {
              edges {
                node {
                  data {
                    Type
                    Category
                    Slug
                  }
                }
              }
            }
            author: allAirtable(filter: {data: {Type: {eq: "Author"}}}) {
              edges {
                node {
                  data {
                    Slug
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        
        if (result.error) {
          reject(result.error);
        }

        const videoList = result.data.video.edges
        const textList = result.data.text.edges
        const homeList = result.data.home.edges
        const authorList = result.data.author.edges

        videoList.forEach( story => {
          createPage({
            path: `${story.node.data.Slug}`,
            component: slash(videoPrimaryTemplate),
            context: {
              slug: story.node.data.Slug,
              category: story.node.data.Category
            }
          })
        })

        textList.forEach( story => {
          createPage({
            path: `${story.node.data.Slug}`,
            component: slash(textPrimaryTemplate),
            context: {
              slug: story.node.data.Slug,
              category: story.node.data.Category
            }
          })
        })

        homeList.forEach( home => {
          createPage({
            path: `${home.node.data.Slug}`,
            component: slash(categoryTemplate),
            context: {
              slug: home.node.data.Slug,
              category: home.node.data.Category
            }
          })
        })

        authorList.forEach( author => {
          createPage({
            path: `${author.node.data.Slug}`,
            component: slash(authorTemplate),
            context: {
              slug: author.node.data.Slug
            }
          })
        })


        // result.data.allAirtable.edges.forEach(edge => {
        //   (edge.node.data.Type === 'Video primary') ?
        //     createPage({
        //       path: `${edge.node.data.Slug}`,
        //       component: slash(videoPrimaryTemplate),
        //       context: {
        //         slug: edge.node.data.Slug,
        //         category: edge.node.data.Category
        //       }
        //     })
        //   : (edge.node.data.Type === 'Home') ?
        //     createPage({
        //       path: `${edge.node.data.Slug}`,
        //       component: slash(categoryTemplate),
        //       context: {
        //         slug: edge.node.data.Slug,
        //         category: edge.node.data.Category
        //       }
        //     })
        //   :
        //     createPage({
        //       path: `${edge.node.data.Slug}`,
        //       component: slash(textPrimaryTemplate),
        //       context: {
        //         slug: edge.node.data.Slug,
        //         category: edge.node.data.Category
        //       }
        //     })
        //  }); 
      })
    );
  });
};

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /mapbox-gl/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
};