import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    'intro',
    {
      type: 'category',
      label: '🧠 기초편: 제품개발 A to Z',
      collapsed: false,
      items: [
        'foundation/why-you-need-this',
        'foundation/product-development',
        'foundation/what-is-api',
        'foundation/node-and-web',
        'foundation/prd-writing',
        'foundation/dogfooding-qa',
        'foundation/growth-hacking',
        'foundation/marketing-sales-bd',
        'foundation/cross-functional',
      ],
    },
    {
      type: 'category',
      label: '📖 개념 이해하기',
      collapsed: false,
      items: [
        'concepts/why-google-landlord',
        'concepts/technical-seo',
        'concepts/lighthouse-400',
        'concepts/content-seo',
      ],
    },
    {
      type: 'category',
      label: '🔨 실전 가이드',
      collapsed: false,
      items: [
        'guides/setup',
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
