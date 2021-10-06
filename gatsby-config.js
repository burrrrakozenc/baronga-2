require('ts-node').register({ files: true });
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `BARONGA.`,
    description: `BARONGA`,
    author: `@burrakozenc`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-typegen`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout/layout.tsx`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-shopify`,
      options: {
        shopName: process.env.GATSBY_SHOP_NAME, // Load from env
        accessToken: process.env.GATSBY_SHOPIFY_ACCESS_TOKEN, // Load from env
        // downloadImages: true,
        // verbose: true,
        paginationSize: 25,
        // initialQuerySize: 250,
        includeCollections: ['shop', 'product', 'inventory'],
        schema: {
          requestConcurrency: 50,
        },
      },
    },
    {
      resolve: `gatsby-source-prismic-graphql`,
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPOSITORY, // Load from env
        path: '/preview',
        previews: true,
        sharpKeys: [
          /image|photo|picture/, // (default)
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Open Sans\:400,600,700`, `Poppins\:400,600,700`],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#333',
        showSpinner: false,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: '51',
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `07msfccy5e06`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        // downloadLocal: 'true',
      },
    },
    {
      resolve: 'gatsby-source-custom-api',
      options: {
        url: process.env.CONVERT_KIT_ENDPOINT,
      },
    },
    // {
    //   resolve: 'gatsby-source-rest-api',
    //   options: {
    //     endpoints: [
    //       'https://api.convertkit.com/v3/forms/2223377/subscriptions?api_secret=_LAsGGIaLRjUHB0oZSTdgETC7Ol7Zuq2HjHVkE8oCC4',
    //     ],
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // manifest plugin should be before offline
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `BARONGA`,
        short_name: `BARONGA`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#292929`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
  output: {
    globalObject: `(() => {
      if (typeof self !== 'undefined') {
          return self;
      } else if (typeof window !== 'undefined') {
          return window;
      } else if (typeof global !== 'undefined') {
          return global;
      } else {
          return Function('return this')();
      }
  })()`,
  },
};
