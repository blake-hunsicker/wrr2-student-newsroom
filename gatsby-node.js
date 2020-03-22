const parseFilepath = require('parse-filepath');
const path = require('path');
const slash = require('slash');

// exports.onCreateWebpackConfig = ({ config, stage }) => {
//   switch (stage) {
//     case 'develop':
//       config.preLoader('eslint-loader', {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/
//       });

//       break;
//   }
//   return config;
// };

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
    const blogPostTemplate = path.resolve(
      'src/templates/blog-post-template.js'
    );
    resolve(
      graphql(
        `
          {
            allAirtable {
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

        result.data.allAirtable.edges.forEach(edge => {
          createPage({
            path: `${edge.node.data.Slug}`,
            component: slash(blogPostTemplate),
            context: {
              slug: edge.node.data.Slug
            }
          });
        });
      })
    );
  });
};