const sidebar = require("./siderbar.js");
module.exports = {
  title: "Baucd博客",
  description: "前端小朋友",
  dest: "public",
  base: '/my-blog/',
  //base: "/",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
//在移动端，搜索框在获得焦点时会放大，并且在失去焦点后可以左右滚动，这可以通过下面设置元来优化。
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
  plugins: [
    "@vuepress-reco/vuepress-plugin-comments",
    "vuepress-plugin-meting",
  ],
  theme: "reco",
  themeConfig: {
 //关闭404腾讯公益
    noFoundPageByTencent: false,
    mode: "light",
    subSidebar: "auto",//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    valineConfig: {
        appId: "2eXmBHbui0RTZXlYygIJPUC1-gzGzoHsz",
      appKey: "eyDoFqjwRdlHWI5Seq54Xkil"
    },
    nav: [
      {
        text: "主页",
        link: "/",
        icon: "reco-home",
      },
      {
        text: "时间线",
        link: "/timeline/",
        icon: "reco-date",
      },
      {
        text: "Contact",
        icon: "reco-message",
        items: [
          {
            text: "GitHub",
            link: "https://github.com/yoloke/my-blog",
            icon: "reco-github",
          },
         {
            text: "Gitee",
            link: "https://github.com/sanyuan0704/my_blog",
            icon: "reco-mayun",
          },
        ],
      },
    ],
    sidebar,
    type: "blog",
    blogConfig: {
      category: {
        location: 2,
        text: "目录索引",
      },
      tag: {
        location: 3,
        text: "标签索引",
      },
    },
    logo: "/logo.png",
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: "Last Updated",
    author: "Baucd",
    authorAvatar: "/avatar.jpg",
    record: "xxxx",
    startYear: "2021",
  },
  markdown: {
    lineNumbers: true,
  },
};
