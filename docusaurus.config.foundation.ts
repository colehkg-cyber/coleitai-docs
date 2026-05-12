import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: '기초편: 제품개발 A to Z',
  tagline: '실리콘밸리 PM/PO 관점에서 제품개발의 기본기를 다집니다',
  favicon: 'img/favicon.ico',
  url: 'https://foundation.coleitai.com',
  baseUrl: '/',
  organizationName: 'coleitai',
  projectName: 'google-landlord-foundation',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.foundation.ts',
          routeBasePath: '/',
          editUrl: 'https://github.com/colehkg-cyber/coleitai-docs/edit/main/',
          include: ['intro.md', 'foundation/**/*.{md,mdx}'],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: '기초편 DOCS',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: '📖 기초편',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `© ${new Date().getFullYear()} 콜잇AI. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
