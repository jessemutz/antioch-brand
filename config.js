const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://brand.antiochcos.com',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: '',
    logoLink: 'https://www.antiochcos.com',
    title: '',
    githubUrl: '/',
    helpUrl: '',
    tweetText: '',
    social: ``,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/voice-and-tone',
    ],
    collapsedNav: [
      '/voice-and-tone', // add trailing slash if enabled above
    ],
    links: [{ text: 'New Vista Digital', link: 'https://NewVistaDigital.com' }],
    frontline: false,
    ignoreIndex: true,
    title: "<a href='/'>Arch Design System</a></div>",
  },
  siteMetadata: {
    title: 'Gatsby Gitbook Boilerplate | Hasura',
    description: 'Documentation built with mdx. Powering hasura.io/learn ',
    ogImage: null,
    docsLocation: '//tree/master/content',
    favicon: 'https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Arch Design System',
      short_name: 'Arch',
      start_url: '/',
      background_color: '#0074d9',
      theme_color: '#0074d9',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
