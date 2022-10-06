const { createSideBarConfig } = require('./util')
const JAVASCRIPT_PATH = '/blogs/javascript'
const HTML_CSS_PATH = '/blogs/html_css'
const NET_PATH = '/blogs/net'
const PERFORM_PATH = '/blogs/performance'
const VUE_PATH = '/blogs/vue'
const ALGORITHM_PATH = '/blogs/algorithm'
// const BROWSER_PATH = '/blogs/browser'

module.exports = {
  ['/blogs']: [
    createSideBarConfig('HTML', HTML_CSS_PATH + '/html'),
    createSideBarConfig('CSS', HTML_CSS_PATH + '/css'),
    createSideBarConfig('JS基础', JAVASCRIPT_PATH + '/js_base'),
    createSideBarConfig('Ajax', JAVASCRIPT_PATH + '/ajax'),
    createSideBarConfig('ES6', JAVASCRIPT_PATH + '/es6'),
    createSideBarConfig('Promise', JAVASCRIPT_PATH + '/promise'),
    // {
    //   title: "JavaScript",
    //   children: [
    //     createSideBarConfig('Ajax', JAVASCRIPT_PATH + '/ajax'),
    //     createSideBarConfig('JavaScript', JAVASCRIPT_PATH + '/js_base'),
    //   ]
    // },
    // createSideBarConfig('JavaScript', JAVASCRIPT_PATH + '/js_base'),
    // createSideBarConfig('Ajax', JAVASCRIPT_PATH + '/ajax'),
    // createSideBarConfig('ES6', JAVASCRIPT_PATH + '/es6'),
    createSideBarConfig('Vue', VUE_PATH),
    createSideBarConfig('前端性能', PERFORM_PATH),
    createSideBarConfig('HTTP', NET_PATH),
    createSideBarConfig('算法', ALGORITHM_PATH),
  ],
  // [JAVASCRIPT_PATH]: [
  // ],
  // [CSS_PATH]: [
  //   createSideBarConfig('HTML', CSS_PATH + '/html'),
  //   createSideBarConfig('CSS', CSS_PATH + '/css'),
  //   createSideBarConfig('移动端', CSS_PATH + '/mobile'),
  // ],
  // [NET_PATH]: [
  //   createSideBarConfig("TCP 协议", NET_PATH + '/tcp'),
  //   createSideBarConfig("HTTP 协议", NET_PATH + '/http')
  // ],
  //[PERFORM_PATH]: [createSideBarConfig('前端性能', PERFORM_PATH)],
  // [INTERVIEW_PATH]: [createSideBarConfig('面试经历', INTERVIEW_PATH)],
  // [BROWSER_PATH]: [
  //   createSideBarConfig('浏览器渲染', BROWSER_PATH + '/browser-render'),
  //   createSideBarConfig('浏览器安全', BROWSER_PATH + '/browser-security'),
  // ]
}