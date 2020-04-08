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
    helpUrl: 'mailto:jesse@newvistadigital.com?subject=ARCH Design Question',
    tweetText: '',
    social: '',
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: 'ARCH_INDEX',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/voice-and-tone',
      '/visual-elements',
    ],
    collapsedNav: [
      '/voice-and-tone', // add trailing slash if enabled above
      '/visual-elements',
    ],
    links: [{ text: 'New Vista Digital', link: 'https://NewVistaDigital.com' }],
    frontline: true,
    ignoreIndex: true,
    title: "<a href='/'>Arch Design System</a></div>",
    version: {
      number: '0.1_alpha',
      color: 'yellow',
    },
    updated: {
      date: 'April_2020',
      color: 'green',
    },
  },
  siteMetadata: {
    title: 'Arch Design System',
    description: 'Documentation for Antioch Design System built with mdx.',
    ogImage: null,
    docsLocation: '/tree/master/content',
    favicon: '',
  },
  pwa: {
    enabled: true, // disabling this will also remove the existing service worker.
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
