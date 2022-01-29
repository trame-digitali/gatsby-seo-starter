const resolveConfig = require('tailwindcss/resolveConfig');
const tailwindConfig = require('./tailwind.config.js');
const fullConfig = resolveConfig(tailwindConfig);

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const siteUrl = process.env.BASE_URL ?? 'https://www.trame-digitali.it';

module.exports = {
  siteMetadata: {
    lang: 'it',
    title: 'Trame Digitali - Jam stack digital agency',
    titleTemplate: '%s | Trame Digitali',
    description: 'Un altro sito di Trame Digitali',
    author: 'tech@trame-digitali.it',
    siteUrl: siteUrl,
    keywords: [
      `Trame Digitali`,
      `Web marketing`,
      `Jam stack`,
      `gatsby`,
      `tailwind`,
      `react`,
      `tailwindcss`,
    ],
    image: '/images/logo-full.png',
    twitterUsername: 'DigiTrame',
  },

  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-resolve-src',
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        printRejected: true,
        purgeOnly: [`src/styles/tailwind.css`],
        // develop: true, // Enable while using `gatsby develop`
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.trame-digitali.it',
        sitemap: 'https://www.trame-digitali.it/sitemap/sitemap-0.xml',
        policy: [
          {
            userAgent: '*',
            allow: ['/'],
            disallow: ['/thank-you'],
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images(\/|\\)svg/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Trame Digitali - Digital Web Agency`,
        short_name: `Trame Digitali`,
        start_url: `/`,
        background_color: '#000000',
        theme_color: '#FF1D4D',
        display: `standalone`,
        icon: `src/images/svg/logo-pitto.svg`,
        cache_busting_mode: 'none',
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        query: `
        {
          allSitePage {
            nodes {
              path
            }
          }
          
        }
      `,
        resolveSiteUrl: () => siteUrl,
        resolvePages: ({ allSitePage: { nodes: allPages } }) => {
          return allPages.map(page => {
            return { ...page };
          });
        },
        serialize: ({ path }) => {
          return {
            url: path,
          };
        },
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-XXXXX',

        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        // defaultDataLayer: { platform: "prod" },

        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        routeChangeEventName: 'pathChangeGatsby',
        // Defaults to false
        enableWebVitalsTracking: true,
      },
    },
  ],
};