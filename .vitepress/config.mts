import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "淘气兔机场",
  description: "淘气兔机场官网 - 全中转线路机场，高速稳定的网络加速服务，订阅地址阅后即焚",
  lang: 'zh-CN',
  head: [
    ['meta', { name: 'keywords', content: '淘气兔,淘气兔机场,淘气兔机场官网,淘气兔机场登录地址,机场,VPN,代理,科学上网,网络加速' }],
    ['meta', { name: 'author', content: '淘气兔机场' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: '淘气兔机场 - 全中转线路机场官网' }],
    ['meta', { property: 'og:description', content: '淘气兔机场官网 - 全中转线路机场，高速稳定的网络加速服务，订阅地址阅后即焚' }],
    ['meta', { property: 'og:url', content: 'https://taoqitu.uk' }],
    ['meta', { property: 'og:site_name', content: '淘气兔机场' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: '淘气兔机场 - 全中转线路机场官网' }],
    ['meta', { name: 'twitter:description', content: '淘气兔机场官网 - 全中转线路机场，高速稳定的网络加速服务，订阅地址阅后即焚' }],
    ['link', { rel: 'canonical', href: 'https://taoqitu.uk' }],
    ['link', { rel: 'stylesheet', href: '/styles/custom.css' }],
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "淘气兔机场",
      "url": "https://taoqitu.uk",
      "description": "淘气兔机场官网 - 全中转线路机场，高速稳定的网络加速服务",
      "sameAs": [
        "https://taoqitu.uk"
      ]
    })]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    siteTitle: '淘气兔机场',
    nav: [
      { text: '首页', link: '/' },
      { text: '下载', link: '/download' },
      { 
        text: '教程', 
        items: [
          { text: 'Windows', link: '/tutorial/windows' },
          { text: 'macOS', link: '/tutorial/macos' },
          { text: 'Android', link: '/tutorial/android' },
          { text: 'iOS', link: '/tutorial/ios' }
        ]
      },
      { text: '订阅', link: '/subscribe' },
      { text: 'FAQ', link: '/faq' },
      { text: '登录注册', link: 'https://c.jichangs.com/taoqitu' }
    ],

    sidebar: {
      '/tutorial/': [
        {
          text: '使用教程',
          items: [
            { text: 'Windows 教程', link: '/tutorial/windows' },
            { text: 'macOS 教程', link: '/tutorial/macos' },
            { text: 'Android 教程', link: '/tutorial/android' },
            { text: 'iOS 教程', link: '/tutorial/ios' }
          ]
        }
      ]
    },

    footer: {
      message: '© 2025 <a href="/">淘气兔机场</a>. All rights reserved.',
      copyright: '本站仅为技术交流，请遵守当地法律法规'
    },

    search: {
      provider: 'local'
    }
  },
  cleanUrls: false, // 禁用干净URL，保留.html后缀
  // 站点地图
  sitemap: {
    hostname: 'https://taoqitu.uk'
  }

})
