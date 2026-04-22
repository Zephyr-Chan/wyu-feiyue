import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/wyu-feiyue/',

  lang: 'zh-CN',

  title: '邑大飞跃手册',

  description: '五邑大学升学留学经验分享平台 | 根植侨乡，飞跃世界',

  titleTemplate: ':title - 邑大飞跃手册',

  cleanUrls: true,

  appearance: true,

  lastUpdated: true,

  sitemap: {
    hostname: 'https://wyu-feiyue.com'
  },

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/wyu-feiyue/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#8B2346' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: '邑大飞跃手册' }],
    ['meta', { property: 'og:description', content: '五邑大学升学留学经验分享平台 | 根植侨乡，飞跃世界' }],
    ['meta', { property: 'og:image', content: '/wyu-feiyue/og-image.svg' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: '邑大飞跃手册' }],
    ['meta', { name: 'twitter:description', content: '五邑大学升学留学经验分享平台 | 根植侨乡，飞跃世界' }],
  ],

  themeConfig: {
    logo: '/wyu-feiyue/logo.svg',

    nav: [
      { text: '首页', link: '/' },
      {
        text: '留学深造',
        items: [
          { text: '申请准备', link: '/study-abroad/guide/preparation' },
          { text: '申请流程', link: '/study-abroad/guide/application' },
          { text: '文书写作', link: '/study-abroad/guide/documents' },
          { text: '标化考试', link: '/study-abroad/guide/tests' },
          { text: '签证指导', link: '/study-abroad/guide/visa' },
          { text: '侨乡资源', link: '/study-abroad/overseas-resources' },
        ],
      },
      {
        text: '国内升学',
        items: [
          { text: '保研经验', link: '/domestic/baoyan/' },
          { text: '考研经验', link: '/domestic/kaoyan/' },
        ],
      },
      { text: '就业指导', link: '/career/' },
      { text: '考公考编', link: '/civil-service/' },
      { text: '生活指南', link: '/life/' },
      { text: '实用工具', link: '/tools/' },
      { text: '数据统计', link: '/statistics/' },
      {
        text: '关于',
        items: [
          { text: '投稿指南', link: '/about/contribute' },
          { text: '友链', link: '/about/links' },
          { text: '联系我们', link: '/about/contact' },
        ],
      },
    ],

    sidebar: {
      '/study-abroad/': [
        {
          text: '申请指南',
          collapsed: true,
          items: [
            { text: '申请准备', link: '/study-abroad/guide/preparation' },
            { text: '申请流程', link: '/study-abroad/guide/application' },
            { text: '文书写作', link: '/study-abroad/guide/documents' },
            { text: '标化考试', link: '/study-abroad/guide/tests' },
            { text: '签证指导', link: '/study-abroad/guide/visa' },
          ],
        },
        {
          text: '地区经验',
          collapsed: true,
          items: [
            { text: '北美经验', link: '/study-abroad/north-america/' },
            { text: '欧洲经验', link: '/study-abroad/europe/' },
            { text: '亚太经验', link: '/study-abroad/asia-pacific/' },
            { text: '港澳经验', link: '/study-abroad/hong-kong-macao/' },
          ],
        },
        {
          text: '其他',
          collapsed: true,
          items: [
            { text: '侨乡资源', link: '/study-abroad/overseas-resources' },
            { text: '从邑大到UCL', link: '/study-abroad/examples/wyu-to-ucl' },
            { text: '从邑大到港科大', link: '/study-abroad/examples/wyu-to-hkust' },
          ],
        },
      ],
      '/domestic/': [
        {
          text: '国内升学',
          items: [
            { text: '保研经验', link: '/domestic/baoyan/' },
            { text: '考研经验', link: '/domestic/kaoyan/' },
          ],
        },
      ],
      '/career/': [
        {
          text: '就业指导',
          items: [
            { text: '就业指导首页', link: '/career/' },
          ],
        },
      ],
      '/civil-service/': [
        {
          text: '考公考编',
          items: [
            { text: '考公考编首页', link: '/civil-service/' },
          ],
        },
      ],
      '/life/': [
        {
          text: '生活指南',
          items: [
            { text: '生活指南首页', link: '/life/' },
          ],
        },
      ],
      '/tools/': [
        {
          text: '实用工具',
          items: [
            { text: '实用工具首页', link: '/tools/' },
          ],
        },
      ],
      '/statistics/': [
        {
          text: '数据统计',
          items: [
            { text: '数据统计首页', link: '/statistics/' },
          ],
        },
      ],
      '/about/': [
        {
          text: '关于',
          items: [
            { text: '投稿指南', link: '/about/contribute' },
            { text: '友链', link: '/about/links' },
            { text: '联系我们', link: '/about/contact' },
            { text: '版权声明', link: '/about/copyright' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zephyr-chan/wyu-feiyue' },
    ],

    footer: {
      message: '根植侨乡，飞跃世界',
      copyright: 'Copyright 2024-present 五邑大学飞跃手册 contributors',
    },

    editLink: {
      pattern: 'https://github.com/zephyr-chan/wyu-feiyue/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面',
    },

    outline: {
      level: [2, 3],
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            noResultsText: '没有找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
            },
          },
        },
      },
    },

    lastUpdated: {
      text: '最后更新于',
    },

    externalLinkIcon: true,
  },
})
