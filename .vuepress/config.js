// docs/.vuepress/config.js

module.exports = {
  // host: '0.0.0.0',  // 生成网页地址（本地调试使用）
  // port: '22335',  // 生成网页端口（本地调试使用）
  //dest: './dist',
  title: "夜夜夜航船", // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
  description: "早睡早起，按时三餐。", // meta 中的描述文字，用于SEO
  head: [
    ["link", { rel: "icon", href: "/img/sailboat_icon.png" }], //浏览器的标签栏的网页图标,基地址/docs/.vuepress/public
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ], //在移动端，搜索框在获得焦点时会放大
  ],

  theme: "reco", //选择主题‘reco’
  themeConfig: {
    type: "blog", //选择类型博客
    logo: '/img/sailboat_icon.png',
    fullscreen: true,
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: "分类", // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: "标签", // 默认 “标签”
      },
    },
    nav: [
      //导航栏设置
      { text: "主页", link: "/", icon: "reco-home" },
      { text: "时间线", link: "/timeline/", icon: "reco-date" },
      {
        text: "联系",
        icon: "reco-message",
        items: [
          {
            text: "GitHub",
            link: "https://github.com/XiaoFeng31",
            icon: "reco-github",
          },
          {
            text: "BiliBili",
            link: "https://space.bilibili.com/95087823",
            icon: "reco-bilibili",
          },
          {
            text: "Twitter",
            link: "https://twitter.com/a1124851454",
            icon: "reco-twitter",
          },
          {
            text: "Mail",
            link: "mailto:imbaxxf@163.com",
            icon: "reco-mail",
          },
        ],
      },
    ],
    sidebar: "auto", //在所有页面中启用自动生成侧栏
    record: "浙ICP备20010030号-1",
    recordLink: "https://icp.chinaz.com/imbaxxf.cn",
    cyberSecurityRecord: "浙公网安备 20010030号",
    cyberSecurityLink:
      "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=20010030",
    startYear: "2020", // 项目开始时间，只填写年份
    lastUpdated: "最后更新时间", // string | boolean
    author: "晚时听竹",
    authorAvatar: "/img/author.jpeg", //作者头像
    mode: "light", //默认显示白天模式
    // 评论设置
    valineConfig: {
      appId: 'EQ3MJ61Ni5LFRFWN0hCuOr8h-gzGzoHsz',
      appKey: 'dO4lAhJdQ6eVcL5wokCEhciw',
    },
  },

  markdown: {
    lineNumbers: true, //代码显示行号
  },
  // 搜索设置
  search: true,
  searchMaxSuggestions: 10,

  // 插件
  plugins: [
    [
      "@vuepress-reco/vuepress-plugin-bgm-player", // BGM播放器
      {
        autoShrink:true,
        audios: [
          {
            name: "风一样的勇士",
            artist: "Various Artists",
            url:
              "/bgm/1.mp3",
            cover:
              "/bgm/1.png",
          },
          {
            name: "Veridis Quo",
            artist: "Daft Punk",
            url:
              "/bgm/2.mp3",
            cover:
              "/bgm/2.png",
          },
          {
            name: "KATANA",
            artist: "Murohashi Takuya",
            url:
              "/bgm/3.mp3",
            cover:
              "/bgm/3.png",
          },
          {
            name: "In Love with It",
            artist: "Maximilian Prada",
            url:
              "/bgm/4.mp3",
            cover:
              "/bgm/4.png",
          },
          {
            name: "猫になりたい",
            artist: "辻亚弥乃",
            url:
              "/bgm/5.mp3",
            cover:
              "/bgm/5.png",
          },
        ],
      },
    ],
    [
      "@vuepress-reco/vuepress-plugin-rss", //RSS插件
      {
        site_url: "https://imbaxxf.cn", //网站地址
        copyright: "晚时听竹", //版权署名
      },
    ],
    ["flowchart"], // 支持流程图
    ["vuepress-plugin-smooth-scroll"], // 平滑滚动
    ["@vuepress/nprogress"], // 加载进度条
    ["reading-progress"], // 阅读进度条
    ["vuepress-plugin-code-copy", true], //一键复制代码插件
    ["@vuepress-reco/vuepress-plugin-back-to-top"]
  ],
};
