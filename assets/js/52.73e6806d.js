(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{575:function(t,s,a){"use strict";a.r(s);var e=a(6),v=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_1-浏览器现状"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-浏览器现状"}},[t._v("#")]),t._v(" 1. 浏览器现状")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://could-img.oss-cn-hangzhou.aliyuncs.com/202211252312892.png",alt:"image-20221125231228862"}})]),t._v(" "),a("ul",[a("li",[t._v("国内的 UC 和 QQ，百度等手机浏览器都是根据 Webkit 修改过来的内核，国内尚无自主研发的内核。")])]),t._v(" "),a("blockquote",[a("p",[t._v("总结：兼容移动端主流浏览器，处理 Webkit 内核浏览器即可。")])]),t._v(" "),a("h2",{attrs:{id:"_2-手机屏幕现状"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-手机屏幕现状"}},[t._v("#")]),t._v(" 2. 手机屏幕现状")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("移动端设备屏幕尺寸非常多，碎片化严重。")])]),t._v(" "),a("li",[a("p",[t._v("Android设备有多种分辨率："),a("code",[t._v("480x800")]),t._v("、"),a("code",[t._v("480x854")]),t._v("、"),a("code",[t._v("540x960")]),t._v("、"),a("code",[t._v("720x1280")]),t._v("、"),a("code",[t._v("1080x1920")]),t._v("等，还有传说中的"),a("code",[t._v("2K")]),t._v("、"),a("code",[t._v("4k")]),t._v("屏。")])]),t._v(" "),a("li",[a("p",[t._v("近年来iPhone的碎片化也加剧了，其设备的主要分辨率有："),a("code",[t._v("640x960")]),t._v("、 "),a("code",[t._v("640x1136")]),t._v("、"),a("code",[t._v("750x1334")]),t._v("、"),a("code",[t._v("1242x2208")]),t._v("等。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("作为开发者无需关注这些分辨率，因为我们常用的尺寸单位是 px 。")])])])]),t._v(" "),a("h2",{attrs:{id:"_3-视口-viewport"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-视口-viewport"}},[t._v("#")]),t._v(" 3. 视口 viewport")]),t._v(" "),a("ul",[a("li",[t._v("视口（"),a("code",[t._v("viewport")]),t._v("）就是浏览器显示页面内容的屏幕区域。 视口可以分为"),a("strong",[t._v("布局视口、视觉视口和理想视口")]),t._v("，我们只需要关注理想视口")]),t._v(" "),a("li",[t._v("视口就是浏览器显示页面内容的屏幕区域")]),t._v(" "),a("li",[t._v("视口分为布局视口、视觉视口和理想视口")]),t._v(" "),a("li",[t._v("我们移动端布局想要的是理想视口就是手机屏幕有多宽，我们的布局视口就有多宽")]),t._v(" "),a("li",[t._v("想要理想视口，我们需要给我们的移动端页面添加"),a("code",[t._v("meta")]),t._v("视口标签")])]),t._v(" "),a("h3",{attrs:{id:"_3-1-布局视口-layout-viewport"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-布局视口-layout-viewport"}},[t._v("#")]),t._v(" 3.1 布局视口 layout viewport")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("一般移动设备的浏览器都默认设置了一个布局视口，用于解决早期的PC端页面在手机上显示的问题。")])]),t._v(" "),a("li",[a("p",[t._v("iOS, Android基本都将这个视口分辨率设置为 "),a("code",[t._v("980px")]),t._v("，所以PC上的网页大多都能在手机上呈现，只不过元素看上去很小，一般默认可以通过手动缩放网页。")])])]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://could-img.oss-cn-hangzhou.aliyuncs.com/202211252316721.png",alt:"image-20221125231628062"}}),t._v(" "),a("h3",{attrs:{id:"_3-2-视觉视口-visual-viewport"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-视觉视口-visual-viewport"}},[t._v("#")]),t._v(" 3.2 视觉视口 visual viewport")]),t._v(" "),a("ul",[a("li",[t._v("字面意思，它是用户正在看到的网站的区域。"),a("strong",[t._v("注意：是网站的区域。")])]),t._v(" "),a("li",[t._v("我们可以通过缩放去操作视觉视口，但不会影响布局视口，布局视口仍保持原来的宽度。")])]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://could-img.oss-cn-hangzhou.aliyuncs.com/202211252317414.png",alt:"image-20221125231708344"}}),t._v(" "),a("h3",{attrs:{id:"_3-3-理想视口-ideal-viewport🔥"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-理想视口-ideal-viewport🔥"}},[t._v("#")]),t._v(" 3.3 理想视口 ideal viewport🔥")]),t._v(" "),a("ul",[a("li",[t._v("为了使网站在移动端有最理想的浏览和阅读宽度而设定")]),t._v(" "),a("li",[t._v("理想视口，对设备来讲，是最理想的视口尺寸")]),t._v(" "),a("li",[t._v("需要手动添写"),a("code",[t._v("meta")]),t._v("视口标签通知浏览器操作")]),t._v(" "),a("li",[a("code",[t._v("meta")]),t._v("视口标签的主要目的：布局视口的宽度应该与理想视口的宽度一致，简单理解就是设备有多宽，我们布局的视口就多宽 (乔布斯提出的)")])]),t._v(" "),a("h3",{attrs:{id:"_3-4-meta视口标签"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-meta视口标签"}},[t._v("#")]),t._v(" 3.4 meta视口标签")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("viewport"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("width=device-width, user-scalable=no,initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("table",[a("thead",[a("tr",[a("th",[t._v("属性")]),t._v(" "),a("th",[t._v("解释说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("width")]),t._v(" "),a("td",[t._v("宽度设置的是viewport宽度，可以设置device-width特殊值(宽度是设备宽度)")])]),t._v(" "),a("tr",[a("td",[t._v("initial-scale")]),t._v(" "),a("td",[t._v("初始缩放比，大于0的数字")])]),t._v(" "),a("tr",[a("td",[t._v("maximum-scale")]),t._v(" "),a("td",[t._v("最大缩放比，大于0的数字")])]),t._v(" "),a("tr",[a("td",[t._v("minimum-scale")]),t._v(" "),a("td",[t._v("最小缩放比，大于0的数字")])]),t._v(" "),a("tr",[a("td",[t._v("user-scalable")]),t._v(" "),a("td",[t._v("用户是否可以缩放，yes或no（1或0）")])])])]),t._v(" "),a("h3",{attrs:{id:"_3-5-标准的viewport设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-标准的viewport设置"}},[t._v("#")]),t._v(" 3.5 标准的viewport设置")]),t._v(" "),a("ul",[a("li",[t._v("视口宽度和设备保持一致")]),t._v(" "),a("li",[t._v("视口的默认缩放比例"),a("code",[t._v("1.0")])]),t._v(" "),a("li",[t._v("不允许用户自行缩放")]),t._v(" "),a("li",[t._v("最大允许的缩放比例"),a("code",[t._v("1.0")])]),t._v(" "),a("li",[t._v("最小允许的缩放比例"),a("code",[t._v("1.0")])])]),t._v(" "),a("h2",{attrs:{id:"_4-二倍图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-二倍图"}},[t._v("#")]),t._v(" 4. 二倍图")]),t._v(" "),a("h3",{attrs:{id:"_4-1-物理像素和物理像素比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-物理像素和物理像素比"}},[t._v("#")]),t._v(" 4.1 物理像素和物理像素比")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("屏幕分辨率也就是设备分辨率，设备像素，它是物理的像素。")])]),t._v(" "),a("li",[a("p",[t._v("物理像素点指的是屏幕显示的最小颗粒，是物理真实存在的。这是厂商在出厂时就设置好了，比如苹果6\\7\\8 是 "),a("code",[t._v("750* 1334")])])]),t._v(" "),a("li",[a("p",[t._v("我们开发时候的"),a("code",[t._v("1px")]),t._v("不是一定等于1个物理像素的")])]),t._v(" "),a("li",[a("p",[t._v("PC端页面，1个"),a("code",[t._v("px")]),t._v("等于1个物理像素的，但是移动端就不尽相同")])]),t._v(" "),a("li",[a("p",[t._v("一个"),a("code",[t._v("px")]),t._v("的能显示的物理像素点的个数，称为物理像素比或屏幕像素比")])]),t._v(" "),a("li",[a("p",[t._v("PC端和早前的手机屏幕 / 普通手机屏幕： "),a("strong",[t._v("1CSS像素 = 1 物理像素的")])])])]),t._v(" "),a("p",[a("code",[t._v("Retina")]),t._v("（视网膜屏幕）是一种显示技术，可以将把更多的物理像素点压缩至一块屏幕里，从而达到更高的分辨率，并提高屏幕显示的细腻程度。由于 "),a("code",[t._v("Retina")]),t._v("的出现，对于一张 "),a("code",[t._v("50px * 50px")]),t._v(" 的图片，在手机 "),a("code",[t._v("Retina")]),t._v("屏中打开，按照刚才的物理像素比会放大倍数，这样会造成图片模糊。")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 300px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 12px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("上面的代码，将会在显示屏设备上绘制一个"),a("code",[t._v("200×300")]),t._v("像素的盒子，在标准屏幕下，它占据的就是"),a("code",[t._v("200×300")]),t._v("设备像素。但是在"),a("code",[t._v("Retina")]),t._v("屏幕下，相同的"),a("code",[t._v("div")]),t._v("却使用了"),a("code",[t._v("400×600")]),t._v("设备像素，保持相同的物理尺寸显示，导致每个像素点实际上有4倍的普通像素点。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://could-img.oss-cn-hangzhou.aliyuncs.com/202211261045031.png",alt:"image-20221126104352569"}})]),t._v(" "),a("p",[t._v("例如：我们需要一个 "),a("code",[t._v("50*50 像素")]),t._v("(css像素)的图片，直接放到我们的手机里面会放大2倍变成 "),a("code",[t._v("100 * 100")]),t._v("，这样就会模糊。")]),t._v(" "),a("p",[t._v("解决办法：我们直接放一个 "),a("code",[t._v("100 * 100")]),t._v("图片，然后手动的把这个图片缩小为 "),a("code",[t._v("50 * 50")]),t._v("。这样将图放到手机里面，手机自动放大2倍变成 "),a("code",[t._v("100 * 100")]),t._v("，这样就不会造成图片模糊")]),t._v(" "),a("p",[t._v("我们准备的图片，比我们实际需要的大小大2倍，这种方式就是"),a("strong",[t._v("二倍图")])]),t._v(" "),a("h3",{attrs:{id:"_4-2-背景缩放"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-背景缩放"}},[t._v("#")]),t._v(" 4.2 背景缩放")]),t._v(" "),a("p",[t._v("背景缩放 "),a("code",[t._v("background-size")])]),t._v(" "),a("p",[t._v("我们的图片需要进行放大处理，那么我们的背景图片也是需要进行缩放处理。")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 背景图片宽度 背景图片高度"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ul",[a("li",[t._v("单位： 长度 | 百分比 | "),a("code",[t._v("cover")]),t._v("| "),a("code",[t._v("contain")])]),t._v(" "),a("li",[a("code",[t._v("cover")]),t._v("把背景图像扩展至足够大，以使背景图像完全覆盖背景区域。")]),t._v(" "),a("li",[a("code",[t._v("contain")]),t._v("把图像图像扩展至最大尺寸，以使其宽度和高度完全适应内容区域")])]),t._v(" "),a("h3",{attrs:{id:"_4-3-多倍图切图cutterman"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-多倍图切图cutterman"}},[t._v("#")]),t._v(" 4.3 多倍图切图cutterman")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://could-img.oss-cn-hangzhou.aliyuncs.com/202211252335139.png",alt:"image-20221125233521834"}}),t._v(" "),a("h2",{attrs:{id:"_5-移动端开发选择"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-移动端开发选择"}},[t._v("#")]),t._v(" 5. 移动端开发选择")]),t._v(" "),a("img",{staticStyle:{zoom:"67%"},attrs:{src:"https://could-img.oss-cn-hangzhou.aliyuncs.com/202211261048451.png",alt:"image-20221126104837583"}}),t._v(" "),a("ol",[a("li",[t._v("单独制作移动端页面(主流)，通常情况下，网址域名前面加 "),a("code",[t._v("m(mobile)")]),t._v(" 可以打开移动端。\n"),a("ul",[a("li",[a("code",[t._v("m.taobao.com")])]),t._v(" "),a("li",[a("code",[t._v("m.jd.com")])]),t._v(" "),a("li",[a("code",[t._v("m.suning.com")])]),t._v(" "),a("li",[t._v("通过判断设备，如果是移动设备打开，则跳到移动端页面。")])])]),t._v(" "),a("li",[t._v("响应式页面兼容PC移动端(其次)\n"),a("ul",[a("li",[t._v("制作麻烦，需要花很大精力去调兼容性问题")])])])]),t._v(" "),a("h2",{attrs:{id:"_6-移动端浏览器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-移动端浏览器"}},[t._v("#")]),t._v(" 6. 移动端浏览器")]),t._v(" "),a("ul",[a("li",[t._v("移动端浏览器基本以 "),a("code",[t._v("webkit")]),t._v("内核为主，因此我们就考虑"),a("code",[t._v("webkit")]),t._v("兼容性问题。")]),t._v(" "),a("li",[t._v("我们可以放心使用 H5 标签和 CSS3 样式。")]),t._v(" "),a("li",[t._v("同时我们"),a("strong",[t._v("浏览器的私有前缀")]),t._v("我们只需要考虑添加 "),a("code",[t._v("webkit")]),t._v(" 即可")])]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://could-img.oss-cn-hangzhou.aliyuncs.com/202211252337025.png",alt:"image-20221125233718842"}}),t._v(" "),a("h2",{attrs:{id:"_7-css初始化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-css初始化"}},[t._v("#")]),t._v(" 7. CSS初始化")]),t._v(" "),a("p",[t._v("移动端 CSS 初始化推荐使用 "),a("code",[t._v("normalize.css")])]),t._v(" "),a("p",[t._v("官网地址：http://necolas.github.io/normalize.css/")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://could-img.oss-cn-hangzhou.aliyuncs.com/202211261052227.png",alt:"image-20221126105234169"}})]),t._v(" "),a("h2",{attrs:{id:"_8-css3盒子模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-css3盒子模型"}},[t._v("#")]),t._v(" 8. CSS3盒子模型")]),t._v(" "),a("p",[t._v("CSS3盒子模型"),a("code",[t._v("box-sizing")])]),t._v(" "),a("p",[t._v("传统模式宽度计算：盒子的宽度 = CSS中设置的"),a("code",[t._v("width")]),t._v("+ "),a("code",[t._v("border")]),t._v("+ "),a("code",[t._v("padding")]),t._v("\nCSS3盒子模型： 盒子的宽度 = CSS中设置的宽度"),a("code",[t._v("width")]),t._v("，里面包含了 "),a("code",[t._v("border")]),t._v("和 "),a("code",[t._v("padding")]),t._v("\n也就是说，我们的CSS3中的盒子模型， "),a("code",[t._v("padding")]),t._v("和 "),a("code",[t._v("border")]),t._v("不会撑大盒子了")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*CSS3盒子模型*/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("box-sizing")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" border-box"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*传统盒子模型*/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("box-sizing")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" content-box"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("ul",[a("li",[t._v("移动端可以全部 CSS3 盒子模型")]),t._v(" "),a("li",[t._v("PC端如果完全需要兼容，我们就用传统模式，如果不考虑兼容性，我们就选择 CSS3 盒子模型")])]),t._v(" "),a("h2",{attrs:{id:"_9-特殊样式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-特殊样式"}},[t._v("#")]),t._v(" 9. 特殊样式")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*CSS3盒子模型*/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("box-sizing")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" border-box"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-box-sizing")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" border-box"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*元素点击高亮 我们需要清除 设置为transparent 完成透明*/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-tap-highlight-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" transparent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*在移动端浏览器默认的外观在iOS上加上这个属性才能给按钮和输入框自定义样式*/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-appearance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*禁用长按页面时的弹出菜单*/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("img,a")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-touch-callout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br")])])])}),[],!1,null,null,null);s.default=v.exports}}]);