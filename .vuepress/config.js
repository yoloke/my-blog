const sidebar = require("./siderbar.js");
module.exports = {
  title: "Baucd博客",
  description: "前端小朋友",
  dest: "public",
  base: '/my-blog/',
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
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
    mode: "light",
    subSidebar: "auto",
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
            link: "",
            icon: "",
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
    author: "baucd",
    authorAvatar: "/avatar.jpg",
    record: "xxxx",
    startYear: "2021",
  },
  markdown: {
    lineNumbers: true,
  },
};
