const path = require('path')

console.log(path.join(path.resolve('./statics')));

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@static': path.join(path.resolve('./statics'))
      }
    }
  },
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN',
      title: '传智播客前端课程研发组',
      description: '为千万学生改变命运而讲课，为莘莘学子少走弯路而著书'
    },
    '/en/': {
      lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
      title: 'Itcast Wuhan Front-end Research Center',
      description: 'To teach for change students\' destiny, to write for students to take less detours'
    }
  },
  themeConfig: {
    // 取消自动生成sidebar手动输入
    // sidebar: 'auto',
    displayAllHeaders: true,
    locales: {
      '/': {
        // 多语言下拉菜单的标题
        selectText: '选择语言',
        // 该语言在下拉菜单中的标签
        label: '简体中文',
        // 编辑链接文字
        editLinkText: '在 GitHub 上编辑此页',
        // Service Worker 的配置
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
          }
        },
        // 当前 locale 的 algolia docsearch 选项
        algolia: {},
        nav: [
          { text: '首页', link: '/' },
          { text: '技术分享', link: '/techs/' },
          { text: '工具', link: '/tools/' },
          { text: '博客', link: 'https://itcast-wh.github.io/' },
          { text: '团队', link: '/teams/' },
        ],
        sidebar: {
          '/techs/': genSidebarConfig('技术分享'),
          '/teams/': [
            {
              title: '团队介绍',
              collapsable: false,
              children: [
                '',
                './join',
                './coc'
              ]
            }
          ]
        }
      },
      '/en/': {
        selectText: 'Languages',
        label: 'English',
        editLinkText: 'Edit this page on GitHub',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        algolia: {},
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Techs', link: '/techs' },
          { text: 'Tools', link: '/tools/' },
          { text: 'Blog', link: 'https://itcast-wh.github.io/' },
          { text: 'Team', link: '/teams/' },
        ],
        sidebar: {
          '/': [/* ... */],
          '/nested/': [/* ... */]
        }
      }
    },
    serviceWorker: {
      updatePopup: true // Boolean | Object, 默认值是 undefined.
      // 如果设置为 true, 默认的文本配置将是: 
      // updatePopup: { 
      //    message: "New content is available.", 
      //    buttonText: "Refresh" 
      // }
    },
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'itcast-wh/itcast-wh',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: '查看源码',

    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'itcast-wh/itcast-wh',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '帮助我们改善此页面！'
  }
}

function genSidebarConfig(title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'base',
        'mvvm',
        'projects',
        'nodejs',
        'multi-app',
        'algorithm',
      ]
    }
  ]
}