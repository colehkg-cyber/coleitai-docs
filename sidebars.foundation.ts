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
  ],
};

export default sidebars;
