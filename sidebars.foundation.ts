import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    'foundation-intro',
    {
      type: 'category',
      label: '🧠 제품 개발 101',
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
