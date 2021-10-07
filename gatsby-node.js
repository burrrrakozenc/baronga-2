require('ts-node').register({ files: true });
const path = require(`path`);
var fs = require('fs');
var dir = './.cache/caches/gatsby-source-prismic-graphql';

exports.onPreBootstrap = () => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
};

/** @type { import("gatsby").GatsbyNode["createPages"] } */
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    {
      allShopifyProduct {
        edges {
          node {
            handle
            productType
          }
        }
      }

      allShopifyCollection {
        edges {
          node {
            handle
          }
        }
      }
    }
  `).then((result) => {
    result.data.allShopifyProduct.edges.forEach(({ node }) => {
      createPage({
        path: `/product/${node.handle}/`,
        component: path.resolve(`./src/templates/product-page.tsx`),
        context: {
          handle: node.handle,
          productType: node.productType,
        },
      });
    });

    // result.data.allShopifyProduct.edges.forEach(({ node }) => {
    //   createPage({
    //     path: `/collection/${node.productType}/`,
    //     component: path.resolve(`./src/templates/product-grid.tsx`),
    //     context: {
    //       productType: node.productType,
    //     },
    //   });
    // });

    result.data.allShopifyCollection.edges.forEach(({ node }) => {
      createPage({
        path: `katalog/collection/${node.handle}/`,
        component: path.resolve(`./src/templates/category-page-sidebar.tsx`),
        context: {
          handle: node.handle,
        },
      });
    });
    result.data.allShopifyCollection.edges.forEach(({ node }) => {
      createPage({
        path: `/collection/${node.handle}/`,
        component: path.resolve(`./src/templates/minimal-category-page.tsx`),
        context: {
          handle: node.handle,
        },
      });
    });
  });
};

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /bad-module/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
