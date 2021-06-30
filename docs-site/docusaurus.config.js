const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Warcraft-GQL',
  tagline: 'A GraphQL API for World of Warcraft',
  url: 'https://warcraft-gql.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'miguelc1221', // Usually your GitHub org/user name.
  projectName: 'warcraft-gql', // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
    },
    navbar: {
      title: 'Warcraft-GQL',
      logo: {
        alt: 'Warcraft Logo',
        src: 'img/wow-logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://warcraft-gql.com/playground',
          label: 'Playground',
          position: 'left',
        },
        {
          href: 'https://github.com/miguelc1221/warcraft-gql',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} Miguel Correa  <p style="margin: 0">Images and Logos are properties of BLIZZARD ENTERTAINMENT, INC.</p>`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/miguelc1221/warcraft-gql/tree/main/docs-site',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
}
