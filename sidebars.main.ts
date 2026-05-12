import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    'intro',
    {
      type: 'category',
      label: '📖 개념 이해하기',
      collapsed: false,
      items: [
        'concepts/why-google-landlord',
        'concepts/seo-basics',
        'concepts/technical-seo',
        'concepts/content-seo',
        'concepts/lighthouse-400',
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
