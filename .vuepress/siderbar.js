const { createSideBarConfig } = require('./util')
const JAVASCRIPT_PATH = '/blogs/javascript'
const CSS_PATH = '/blogs/html_css'
const NET_PATH = '/blogs/net'
const ES6_PATH = '/blogs/es6'
const PERFORM_PATH = '/blogs/performance'
// const INTERVIEW_PATH = '/blogs/interview'
// const BROWSER_PATH = '/blogs/browser'

module.exports = {
  [JAVASCRIPT_PATH]: [
    createSideBarConfig('JS基础', JAVASCRIPT_PATH + '/js_base'),
    createSideBarConfig('JS数组', JAVASCRIPT_PATH + '/js-array'),
    createSideBarConfig('Ajax', JAVASCRIPT_PATH + '/ajax'),
    createSideBarConfig('ES6', ES6_PATH ),
  ],
  [CSS_PATH]: [
    createSideBarConfig('HTML', CSS_PATH + '/html'),
    createSideBarConfig('CSS', CSS_PATH + '/css'),
    createSideBarConfig('CSS3', CSS_PATH + '/css3'),
    createSideBarConfig('移动端', CSS_PATH + '/mobile'),
  ],
  // [NET_PATH]: [
  //   createSideBarConfig("TCP 协议", NET_PATH + '/tcp'),
  //   createSideBarConfig("HTTP 协议", NET_PATH + '/http')
  // ],
  [PERFORM_PATH]: [createSideBarConfig('前端性能', PERFORM_PATH)],
  // [INTERVIEW_PATH]: [createSideBarConfig('面试经历', INTERVIEW_PATH)],
  // [BROWSER_PATH]: [
  //   createSideBarConfig('浏览器渲染', BROWSER_PATH + '/browser-render'),
  //   createSideBarConfig('浏览器安全', BROWSER_PATH + '/browser-security'),
  // ]
}