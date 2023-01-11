const { createSideBarConfig } = require("./util");
const JAVASCRIPT_PATH = "/blogs/javascript";
const HTML_CSS_PATH = "/blogs/html_css";
const HTTP_PATH = "/blogs/http";
const VUE_PATH = "/blogs/vue";
const MINI_PROGRAM = "/blogs/mobile/wx_mini_program";
const MOBILE_PATH = "/blogs/mobile/uniapp";
const ALGORITHM_PATH = "/blogs/algorithm";


module.exports = {
  [HTML_CSS_PATH]: [
    createSideBarConfig("HTML", HTML_CSS_PATH + "/html"),
    createSideBarConfig("CSS", HTML_CSS_PATH + "/css"),
    createSideBarConfig("移动端", HTML_CSS_PATH + "/mobile"),
  ],
  [JAVASCRIPT_PATH]: [
    createSideBarConfig("JavaScript", JAVASCRIPT_PATH + "/js_base"),
    createSideBarConfig("TypeScript", JAVASCRIPT_PATH + "/typescript"),
    createSideBarConfig("设计模式", JAVASCRIPT_PATH + "/design_mode"),
    createSideBarConfig("Ajax", JAVASCRIPT_PATH + "/ajax"),
    createSideBarConfig("ES6", JAVASCRIPT_PATH + "/es6"),
    createSideBarConfig("Vue", VUE_PATH),
    createSideBarConfig("微信小程序", MINI_PROGRAM),
    createSideBarConfig("HTTP", HTTP_PATH),
    // createSideBarConfig("算法", ALGORITHM_PATH),
  ],
  [HTTP_PATH]: [createSideBarConfig("HTTP", HTTP_PATH)],
  [VUE_PATH]: [
    createSideBarConfig("Vue", VUE_PATH),
    createSideBarConfig("微信小程序", MINI_PROGRAM),
    createSideBarConfig("uni-app", MOBILE_PATH)
  ],
  [MINI_PROGRAM]: [
    createSideBarConfig("Vue", VUE_PATH),
    createSideBarConfig("微信小程序", MINI_PROGRAM),
    createSideBarConfig("uni-app", MOBILE_PATH)
  ],
  [MOBILE_PATH]: [
    createSideBarConfig("Vue", VUE_PATH),
    createSideBarConfig("微信小程序", MINI_PROGRAM),
    createSideBarConfig("uni-app", MOBILE_PATH)
  ],
  [ALGORITHM_PATH]: [
    createSideBarConfig("数据结构与算法", ALGORITHM_PATH + "/algorithm_base"),
    createSideBarConfig("力扣", ALGORITHM_PATH + "/saber_over"),
  ],
  //[PERFORM_PATH]: [createSideBarConfig('前端性能', PERFORM_PATH)],
  // [INTERVIEW_PATH]: [createSideBarConfig('面试经历', INTERVIEW_PATH)],
  // [BROWSER_PATH]: [
  //   createSideBarConfig('浏览器渲染', BROWSER_PATH + '/browser-render'),
  //   createSideBarConfig('浏览器安全', BROWSER_PATH + '/browser-security'),
  // ]
};
