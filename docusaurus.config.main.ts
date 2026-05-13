import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: '본편: 구글 건물주 실전',
  tagline: 'AI로 짓는 구글 건물주 — 개발자 없이, AI로 월세 받는 시스템 구축하기',
  favicon: 'img/favicon.ico',
  url: 'https://main.coleitai.com',
  baseUrl: '/',
  organizationName: 'coleitai',
  projectName: 'google-landlord-main',
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
          sidebarPath: './sidebars.main.ts',
          routeBasePath: '/',
          editUrl: 'https://github.com/colehkg-cyber/coleitai-docs/edit/main/',
          include: ['intro.md', 'concepts/**/*.{md,mdx}', 'tools/**/*.{md,mdx}', 'guides/**/*.{md,mdx}', 'reference/**/*.{md,mdx}', 'appendix/**/*.{md,mdx}'],
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
      title: '본편 DOCS',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: '📖 본편',
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
