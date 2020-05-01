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
    
    const textPrimaryTemplate = path.resolve(
      'src/templates/text-primary.js'
    );
    const videoPrimaryTemplate = path.resolve(
      'src/templates/video-primary.js'
    );
    const categoryTemplate = path.resolve(
      'src/templates/category.js'
    );
    
    resolve(
      graphql(
        `
          {
            allAirtable(filter: {data: {Slug: {ne: null}}}) {
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
          }
        `
      ).then(result => {
        
        if (result.error) {
          reject(result.error);
        }

        result.data.allAirtable.edges.forEach(edge => {
          (edge.node.data.Type === 'Video primary') ?
            createPage({
              path: `${edge.node.data.Slug}`,
              component: slash(videoPrimaryTemplate),
              context: {
                slug: edge.node.data.Slug,
                category: edge.node.data.Category
              }
            })
          : (edge.node.data.Type === 'Home') ?
            createPage({
              path: `${edge.node.data.Slug}`,
              component: slash(categoryTemplate),
              context: {
                slug: edge.node.data.Slug,
                category: edge.node.data.Category
              }
            })
          :
            createPage({
              path: `${edge.node.data.Slug}`,
              component: slash(textPrimaryTemplate),
              context: {
                slug: edge.node.data.Slug,
                category: edge.node.data.Category
              }
            })
         }); 
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