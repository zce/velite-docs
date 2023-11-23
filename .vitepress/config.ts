import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Velite',
  description: "Turns Markdown, YAML, JSON, or other files into app's data layer with type-safe schema.",
  lastUpdated: true,
  cleanUrls: true,
  head: [
    ['meta', { name: 'theme-color', content: '#1b1b1f' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'en' }],
    ['meta', { name: 'og:site_name', content: 'Velite' }],
    ['meta', { name: 'og:image', content: 'https://velite.js.org/velite-og.png' }]
  ],
  locales: {
    root: { label: 'English', lang: 'en', link: '/' },
    'zh-CN': {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh-CN/',
      description: '使用类型安全的模式将 Markdown、YAML、JSON 或其他文件转换为应用程序的数据层。'
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: false,
    logo: {
      light: '/assets/nav-logo-light.svg',
      dark: '/assets/nav-logo-dark.svg',
      alt: 'Velite'
    },
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Guide', link: '/guide/introduction', activeMatch: '/guide/' },
      { text: 'Config', link: '/config/', activeMatch: '/config/' },
      { text: 'References', link: '/references/', activeMatch: '/references/' },
      { text: 'Examples', link: '/examples/basic', activeMatch: '/examples/' }
    ],
    sidebar: {
      '/guide/': {
        base: '/guide/',
        items: [
          {
            text: 'Introduction',
            items: [
              { text: 'Introduction', link: '/introduction' },
              { text: 'Getting Started', link: '/getting-started' },
              { text: 'Shared Schemas', link: '/shared-shemas' }
            ]
          },
          {
            text: 'Recipes',
            items: [
              { text: 'MDX Support', link: '/using-mdx' },
              { text: 'Use with Next.js', link: '/with-nextjs' }
            ]
          },
          {
            text: 'Advanced',
            items: [
              { text: 'Writing a Loader', link: '/writing-loader' },
              { text: 'Use with Next.js', link: '/shemas' }
            ]
          },
          {
            text: 'Concepts',
            items: [
              { text: 'How It Works', link: '/writing-loader' },
              { text: 'Use with Next.js', link: '/shemas' }
            ]
          },
          {
            text: 'Roadmap',
            items: [
              { text: 'How It Works', link: '/writing-loader' },
              { text: 'Use with Next.js', link: '/shemas' }
            ]
          }
        ]
      },
      '/references/': {
        base: '/references/',
        items: [
          {
            text: 'References',
            link: '/',
            items: [
              { text: 'build', link: '/build' }
            ]
          }
        ]
      }
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/zce/velite' }],
    footer: {
      message: 'Distributed under the MIT License.',
      copyright: '© 2023 Lei, All rights reserved.'
    }
  }
})
