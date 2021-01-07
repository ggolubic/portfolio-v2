/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const path = require('path');

module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    title: 'Gabrijel Golubic',
    author: 'Gabrijel Golubic',
    description: 'Web Developer',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        pages: path.join(__dirname, 'src/pages'),
        common: path.join(__dirname, 'src/common'),
        scenes: path.join(__dirname, 'src/scenes'),
        consts: path.join(__dirname, 'src/consts'),
        styles: path.join(__dirname, 'src/styles'),
        images: path.join(__dirname, 'src/images'),
        utils: path.join(__dirname, 'src/utils'),
        templates: path.join(__dirname, 'src/templates'),
      },
    },
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-transition-link',
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'work',
        path: `${__dirname}/src/data/work`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1200,
              linkImagesToOriginal: false,
              withWebp: true,
            },
          },
        ],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              ignoreFileExtensions: [`png`, `jpg`, `jpeg`, `bmp`, `tiff`],
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1200,
              linkImagesToOriginal: false,
              withWebp: true,
            },
          },
        ],
      },
    },
  ],
};
