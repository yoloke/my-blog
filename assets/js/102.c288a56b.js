(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{625:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"一、spa、mpa"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、spa、mpa"}},[t._v("#")]),t._v(" 一、SPA、MPA")]),t._v(" "),a("h3",{attrs:{id:"_1-spa"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-spa"}},[t._v("#")]),t._v(" 1. SPA")]),t._v(" "),a("p",[a("code",[t._v("SPA")]),t._v("（"),a("code",[t._v("single-page application")]),t._v("），翻译过来就是单页应用。")]),t._v(" "),a("p",[a("code",[t._v("SPA")]),t._v("是一种网络应用程序或网站的模型，"),a("strong",[t._v("动态重写当前页面")]),t._v("，避免了页面之间切换打断用户体验。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://could-img.oss-cn-hangzhou.aliyuncs.com/202211050905757.png",alt:"img"}})]),t._v(" "),a("p",[t._v("JS框架如"),a("code",[t._v("react")]),t._v(","),a("code",[t._v("vue")]),t._v(","),a("code",[t._v("angular")]),t._v(","),a("code",[t._v("ember")]),t._v("都属于"),a("code",[t._v("SPA")])]),t._v(" "),a("p",[t._v("SPA"),a("code",[t._v("（ single-page application ）")]),t._v("仅在 "),a("code",[t._v("Web")]),t._v(" 页面初始化时加载相应的 "),a("code",[t._v("HTML")]),t._v("、"),a("code",[t._v("JavaScript")]),t._v(" 和"),a("code",[t._v("CSS")]),t._v("。一旦页面加载完成，"),a("code",[t._v("SPA")]),t._v(" 不会因为用户的操作而进行页面的重新加载或跳转；取而代之的是利用路由机制实现"),a("code",[t._v("HTML")]),t._v("内容的变换，避免页面的重新加载。")]),t._v(" "),a("p",[t._v("优点：")]),t._v(" "),a("ul",[a("li",[t._v("用户体验好，页面片段间的切换快，包括移动设备, 尤其是在网络环境差的时候， 因为组件已经预先加载好了, 并不需要发送网络请求, 所以用户体验好")]),t._v(" "),a("li",[t._v("页面每次切换跳转时，并不需要做"),a("code",[t._v("html")]),t._v("文件的请求，这样就节约了很多"),a("code",[t._v("http")]),t._v("发送时延，对服务器压力相对小。")])]),t._v(" "),a("p",[t._v("缺点：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("首屏加载速度慢")]),t._v(" "),a("p",[t._v("首屏时需要请求一次"),a("code",[t._v("html")]),t._v("，同时还要发送一次"),a("code",[t._v("js")]),t._v("请求，两次请求回来了，首屏才会展示出来。相对于多页应用，首屏时间慢。")])]),t._v(" "),a("li",[a("p",[t._v("不易于SEO")]),t._v(" "),a("p",[t._v("由于所有的内容都在一个页面中动态替换显示，所以在 SEO 上其有着天然的弱势。")])])]),t._v(" "),a("h3",{attrs:{id:"_2-mpa"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-mpa"}},[t._v("#")]),t._v(" 2. MPA")]),t._v(" "),a("p",[a("code",[t._v("MPA")]),t._v("多页面应用 "),a("code",[t._v("MultiPage Application")]),t._v(" ，指有多个独立页面的应用（多个html页面），每个页面必须重复加载js、css等相关资源。多页应用跳转，需要整页资源刷新。")]),t._v(" "),a("p",[t._v("与 "),a("code",[t._v("SPA")]),t._v(" 对比最大的不同即是页面路由切换由原生浏览器文档跳转（"),a("code",[t._v("navigating across documents")]),t._v("）控制。 页面跳转，是返回 HTML 的。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/eeb13aa0-3ac6-11eb-85f6-6fac77c0c9b3.png",alt:"img"}})]),t._v(" "),a("p",[t._v("优点：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("首屏加载速度快")]),t._v(" "),a("p",[t._v("当我们访问页面的时候，服务器返回一个"),a("code",[t._v("html")]),t._v("，页面就会展示出来，这个过程只经历了一个"),a("code",[t._v("HTTP")]),t._v("请求，所以页面展示的速度非常快。")])]),t._v(" "),a("li",[a("p",[t._v("SEO效果好")]),t._v(" "),a("p",[t._v("搜索引擎在做网页排名的时候，要根据网页的内容才能给网页权重，来进行网页的排名。搜索引擎是可以识别"),a("code",[t._v("html")]),t._v("内容的，而我们每个页面所有的内容都放在"),a("code",[t._v("html")]),t._v("中，所以这种多页应用SEO排名效果好。")])])]),t._v(" "),a("p",[t._v("缺点：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("页面切换慢")]),t._v(" "),a("p",[t._v("因为每次跳转都需要发送一个 HTTP 请求，如果网络状态不好，在页面之间来回跳转时，就会发生明显的卡顿，影响用户体验。")])]),t._v(" "),a("li",[a("p",[t._v("首次渲染速度相对较慢")]),t._v(" "),a("p",[t._v("如果网络慢，页面很容易半天加载不出来,用户体验非常不好")])])]),t._v(" "),a("h3",{attrs:{id:"_3-spa-mpa-区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-spa-mpa-区别"}},[t._v("#")]),t._v(" 3. SPA  MPA 区别")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}}),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("单页面应用（SPA）")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("多页面应用（MPA）")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("组成")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("一个主页面和多个页面片段")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("多个主页面")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("刷新方式")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("局部刷新")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("整页刷新")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("url模式")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("哈希模式")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("历史模式")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("SEO搜索引擎优化")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("难实现，可使用"),a("code",[t._v("SSR")]),t._v("方式改善")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("容易实现")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("数据传递")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("容易")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("通过url、cookie、localStorage等传递")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("页面切换")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("速度快，用户体验良好")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("切换加载资源，速度慢，用户体验差")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("维护成本")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("相对容易")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("相对复杂")])])])]),t._v(" "),a("h2",{attrs:{id:"二、spa首屏加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、spa首屏加载"}},[t._v("#")]),t._v(" 二、SPA首屏加载")]),t._v(" "),a("p",[t._v("首屏时间（First Contentful Paint），指的是"),a("strong",[t._v("浏览器从响应用户输入网址地址，到首屏内容渲染完成的时间")]),t._v("，此时整个网页不一定要全部渲染完成，但需要展示当前视窗需要的内容。")]),t._v(" "),a("p",[t._v("首屏加载可以说是用户体验中"),a("strong",[t._v("最重要")]),t._v("的环节。")]),t._v(" "),a("p",[a("strong",[t._v("关于计算首屏时间：")])]),t._v(" "),a("p",[t._v("利用"),a("code",[t._v("performance.timing")]),t._v("提供的数据：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://could-img.oss-cn-hangzhou.aliyuncs.com/202211051344260.png",alt:"image.png"}})]),t._v(" "),a("p",[t._v("通过"),a("code",[t._v("DOMContentLoad")]),t._v("或者"),a("code",[t._v("performance")]),t._v("来计算出首屏时间")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 方案一：")]),t._v("\ndocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'DOMContentLoaded'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'first contentful painting'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 方案二：")]),t._v("\nperformance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getEntriesByName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"first-contentful-paint"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("startTime\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// performance.getEntriesByName("first-contentful-paint")[0]')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 会返回一个 PerformancePaintTiming的实例，结构如下：")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"first-contentful-paint"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  entryType"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"paint"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  startTime"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("507.80000002123415")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  duration"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br")])]),a("p",[t._v("在页面渲染的过程，导致加载速度慢的因素可能如下：")]),t._v(" "),a("ul",[a("li",[t._v("网络延时问题")]),t._v(" "),a("li",[t._v("资源文件体积是否过大")]),t._v(" "),a("li",[t._v("资源是否重复发送请求去加载了")]),t._v(" "),a("li",[t._v("加载脚本的时候，渲染内容堵塞了")])]),t._v(" "),a("h2",{attrs:{id:"三、spa首屏优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、spa首屏优化"}},[t._v("#")]),t._v(" 三、SPA首屏优化")]),t._v(" "),a("p",[t._v("在页面渲染的过程，导致加载速度慢的因素可能如下：")]),t._v(" "),a("ul",[a("li",[t._v("网络延时问题")]),t._v(" "),a("li",[t._v("资源文件体积是否过大")]),t._v(" "),a("li",[t._v("资源是否重复发送请求去加载了")]),t._v(" "),a("li",[t._v("加载脚本的时候，渲染内容堵塞了")])]),t._v(" "),a("p",[t._v("常见的几种SPA首屏优化方式")]),t._v(" "),a("ul",[a("li",[t._v("减小入口文件积-------路由懒加载")]),t._v(" "),a("li",[t._v("静态资源本地缓存")]),t._v(" "),a("li",[t._v("UI框架按需加载")]),t._v(" "),a("li",[t._v("图片资源的压缩")]),t._v(" "),a("li",[t._v("组件重复打包")]),t._v(" "),a("li",[t._v("开启GZip压缩")]),t._v(" "),a("li",[t._v("使用SSR")])]),t._v(" "),a("h3",{attrs:{id:"减小入口文件体积"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#减小入口文件体积"}},[t._v("#")]),t._v(" 减小入口文件体积")]),t._v(" "),a("p",[t._v("常用的手段是"),a("strong",[t._v("路由懒加载")]),t._v("，把不同路由对应的组件分割成不同的代码块，待路由被请求的时候会单独打包路由，使得入口文件变小，加载速度大大增加。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/486cee90-3acc-11eb-ab90-d9ae814b240d.png",alt:"image.png"}})]),t._v(" "),a("p",[t._v("在"),a("code",[t._v("vue-router")]),t._v("配置路由的时候，采用动态加载路由的形式")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("routes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" \n    path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Blogs'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ShowBlogs'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("component")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./components/ShowBlogs.vue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[a("strong",[t._v("以函数的形式加载路由")]),t._v("，这样就可以把各自的路由文件分别打包，只有在解析给定的路由时，才会加载路由组件")]),t._v(" "),a("h3",{attrs:{id:"静态资源本地缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#静态资源本地缓存"}},[t._v("#")]),t._v(" 静态资源本地缓存")]),t._v(" "),a("p",[t._v("后端返回资源问题：")]),t._v(" "),a("ul",[a("li",[t._v("采用"),a("code",[t._v("HTTP")]),t._v("缓存，设置"),a("code",[t._v("Cache-Control")]),t._v("，"),a("code",[t._v("Last-Modified")]),t._v("，"),a("code",[t._v("Etag")]),t._v("等响应头")]),t._v(" "),a("li",[t._v("采用"),a("code",[t._v("Service Worker")]),t._v("离线缓存")])]),t._v(" "),a("p",[t._v("前端合理利用"),a("code",[t._v("localStorage")])]),t._v(" "),a("h3",{attrs:{id:"ui框架按需加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ui框架按需加载"}},[t._v("#")]),t._v(" UI框架按需加载")]),t._v(" "),a("p",[t._v("在日常使用"),a("code",[t._v("UI")]),t._v("框架，例如"),a("code",[t._v("element-UI")]),t._v("、或者"),a("code",[t._v("antd")]),t._v("，我们经常性直接引用整个"),a("code",[t._v("UI")]),t._v("库")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" ElementUI "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'element-ui'")]),t._v("\nVue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ElementUI"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("但实际上我用到的组件只有按钮，分页，表格，输入与警告 所以我们要按需引用")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Button"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Input"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Pagination"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Table"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" TableColumn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" MessageBox "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'element-ui'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nVue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Button"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nVue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Input"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nVue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Pagination"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h3",{attrs:{id:"组件重复打包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件重复打包"}},[t._v("#")]),t._v(" 组件重复打包")]),t._v(" "),a("p",[t._v("假设"),a("code",[t._v("A.js")]),t._v("文件是一个常用的库，现在有多个路由使用了"),a("code",[t._v("A.js")]),t._v("文件，这就造成了重复下载")]),t._v(" "),a("p",[t._v("解决方案：在"),a("code",[t._v("webpack")]),t._v("的"),a("code",[t._v("config")]),t._v("文件中，修改"),a("code",[t._v("CommonsChunkPlugin")]),t._v("的配置")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("minChunks"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[a("code",[t._v("minChunks")]),t._v("为3表示会把使用3次及以上的包抽离出来，放进公共依赖文件，避免了重复加载组件")]),t._v(" "),a("h3",{attrs:{id:"图片资源的压缩"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图片资源的压缩"}},[t._v("#")]),t._v(" 图片资源的压缩")]),t._v(" "),a("p",[t._v("图片资源虽然不在编码过程中，但它却是对页面性能影响最大的因素")]),t._v(" "),a("p",[t._v("对于所有的图片资源，我们可以进行适当的压缩")]),t._v(" "),a("p",[t._v("对页面上使用到的"),a("code",[t._v("icon")]),t._v("，可以使用在线字体图标，或者雪碧图，将众多小图标合并到同一张图上，用以减轻"),a("code",[t._v("http")]),t._v("请求压力。")]),t._v(" "),a("h3",{attrs:{id:"开启gzip压缩"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开启gzip压缩"}},[t._v("#")]),t._v(" 开启GZip压缩")]),t._v(" "),a("p",[t._v("拆完包之后，我们再用"),a("code",[t._v("gzip")]),t._v("做一下压缩 安装"),a("code",[t._v("compression-webpack-plugin")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("cnmp i compression"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("webpack"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("plugin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("D")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("在"),a("code",[t._v("vue.congig.js")]),t._v("中引入并修改"),a("code",[t._v("webpack")]),t._v("配置")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" CompressionPlugin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'compression-webpack-plugin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("configureWebpack")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("config")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NODE_ENV")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'production'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 为生产环境修改配置...")]),t._v("\n            config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'production'")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CompressionPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\.js$|\\.html$|\\.css")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//匹配文件名")]),t._v("\n                    threshold"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10240")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//对超过10k的数据进行压缩")]),t._v("\n                    deleteOriginalAssets"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//是否删除原文件")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br")])]),a("p",[t._v("在服务器我们也要做相应的配置 如果发送请求的浏览器支持"),a("code",[t._v("gzip")]),t._v("，就发送给它"),a("code",[t._v("gzip")]),t._v("格式的文件 我的服务器是用"),a("code",[t._v("express")]),t._v("框架搭建的 只要安装一下"),a("code",[t._v("compression")]),t._v("就能使用")]),t._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("const compression = require('compression')\napp.use(compression())  // 在其他中间件使用之前调用\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h3",{attrs:{id:"使用ssr"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用ssr"}},[t._v("#")]),t._v(" 使用SSR")]),t._v(" "),a("p",[a("code",[t._v("SSR")]),t._v("（Server side ），也就是服务端渲染，组件或页面通过服务器生成html字符串，再发送到浏览器")]),t._v(" "),a("p",[t._v("从头搭建一个服务端渲染是很复杂的，"),a("code",[t._v("vue")]),t._v("应用建议使用"),a("code",[t._v("Nuxt.js")]),t._v("实现服务端渲染")]),t._v(" "),a("h3",{attrs:{id:"小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结：")]),t._v(" "),a("p",[t._v("减少首屏渲染时间的方法有很多，总的来讲可以分成两大部分 ：资源加载优化 和 页面渲染优化")]),t._v(" "),a("p",[t._v("下图是更为全面的首屏优化的方案")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://could-img.oss-cn-hangzhou.aliyuncs.com/202210141525397.png",alt:"image.png"}})]),t._v(" "),a("p",[t._v("可以根据自己项目的情况选择各种方式进行首屏渲染的优化。")])])}),[],!1,null,null,null);s.default=e.exports}}]);