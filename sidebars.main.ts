import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    'intro',
    {
      type: 'category',
      label: '📖 SEO 개념 이해하기',
      collapsed: false,
      items: [
        'concepts/why-google-landlord',
        'concepts/why-google-landlord-2',
        'concepts/seo-basics',
        'concepts/seo-basics-2',
        'concepts/technical-seo',
        'concepts/technical-seo-2',
        'concepts/content-seo',
        'concepts/content-seo-2',
        'concepts/lighthouse-400',
        'concepts/lighthouse-400-2',
      ],
    },
    {
      type: 'category',
      label: '🛠️ 블로그 제작 실습',
      collapsed: false,
      items: [
        'lessons/intro',
        'lessons/tools-overview',
        'lessons/github-vercel',
        'lessons/turso',
        'lessons/gemini-claude',
        'lessons/template-copy',
        'lessons/vscode-claude',
        'lessons/customize',
        'lessons/env',
        'lessons/vercel-deploy',
        'lessons/auto-deploy',
      ],
    },
    {
      type: 'category',
      label: '🔨 실전 가이드',
      collapsed: true,
      items: [
        'guides/setup',
        'guides/claude-code-workshop',
        'guides/template-deploy',
        'guides/design-custom',
        'guides/technical-seo-apply',
        'guides/keyword-mining',
        'guides/ai-writing',
        'guides/monetization',
      ],
    },
    {
      type: 'category',
      label: '📎 레퍼런스',
      collapsed: true,
      items: [
        'reference/prompts',
        'reference/troubleshooting',
        'reference/glossary',
      ],
    },
    {
      type: 'category',
      label: '🧰 부록',
      collapsed: true,
      items: [
        'appendix/architecture',
        'appendix/tools',
      ],
    },
  ],
};

export default sidebars;
