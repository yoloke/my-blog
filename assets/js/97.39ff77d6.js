(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{620:function(v,_,e){"use strict";e.r(_);var c=e(6),o=Object(c.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h2",{attrs:{id:"微信小程序图片缓存策略"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#微信小程序图片缓存策略"}},[v._v("#")]),v._v(" 微信小程序图片缓存策略")]),v._v(" "),e("p",[v._v("后端更换了CDN上的图片，但是打开小程序，还是旧图片，尝试过删除小程序、在阿里云CDN控制台刷新缓存，重新进，还是旧图片。")]),v._v(" "),e("p",[v._v("因为图片文件名没改，请求地址没变，被客户端缓存了。")]),v._v(" "),e("p",[v._v("解决方法：")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("改文件名。但是图片名称都是按商品类目名称批量生成的，而且如果改文件名，要改代码")])]),v._v(" "),e("li",[e("p",[v._v("在图片地址后面加查询字符串嘛，哪张图片变了，就把它地址后面的查询字符串改一下，比如"),e("code",[v._v("?v=1")]),v._v("、"),e("code",[v._v("?v=2")]),v._v("，但是还是要改代码，每次图片变了，得改小程序里引用这张图片地址后面的查询字符串，这还要重新发布。")])]),v._v(" "),e("li",[e("p",[v._v("直接在图片地址后面生成时间戳不就好了，如："),e("code",[v._v("${url}?ts=${new Date().getTime()}")]),v._v("。但是这样图片每次都会重新请求，性能会产生问题。")])])]),v._v(" "),e("p",[v._v("那为什么图片会被缓存？怎样才能让缓存失效？")]),v._v(" "),e("p",[v._v("打开控制台看下请求，如下：")]),v._v(" "),e("p",[e("img",{attrs:{src:"https://wf-cloud-img.oss-cn-hangzhou.aliyuncs.com/image/10390546-89d2dc630c4ca288.webp",alt:"10390546-89d2dc630c4ca288"}})]),v._v(" "),e("p",[v._v("从控制台里可以看到，图片响应是"),e("code",[v._v("from disk cache")]),v._v("，说明图片资源被缓存到磁盘了，"),e("code",[v._v("disk cache")]),v._v("是强缓存，它是持久存储。但是"),e("code",[v._v("disk cache")]),v._v("是会严格根据"),e("code",[v._v("HTTP")]),v._v("头信息中的缓存控制字段来判定哪些资源可以缓存，缓存多久的。我们可以在"),e("code",[v._v("HTTP")]),v._v("响应头里设置"),e("code",[v._v("Cache-Control")]),v._v("或"),e("code",[v._v("Expires")]),v._v("来告诉小程序，这个图片应不应该被缓存，如果缓存，应该缓存多久。")]),v._v(" "),e("p",[v._v("可以看到，上图中，我的图片响应头里是没有"),e("code",[v._v("Cache-Control")]),v._v("和"),e("code",[v._v("Expires")]),v._v("的，所以当你没有在响应头里设置缓存策略时，小程序会强缓存你的图片，而且会缓存很久；")]),v._v(" "),e("p",[v._v("给这个图片的响应头加上"),e("code",[v._v("Cache-Control: max-age=86400")]),v._v("，"),e("code",[v._v("max-age")]),v._v("以秒为单位，"),e("code",[v._v("86400")]),v._v("即"),e("code",[v._v("24小时")]),v._v("。")]),v._v(" "),e("p",[v._v("这样设置以后，用户第一次访问图片会被小程序缓存，24小时内用户再次访问此图片，小程序不会发出网络请求，而是直接从磁盘缓存里读取。24小时以后，缓存过期，用户再次访问此图片时，小程序会发出请求从服务器获取最新图片。")]),v._v(" "),e("p",[v._v("如果图片是放在阿里云上的，应该如何设置响应头呢？")]),v._v(" "),e("p",[v._v("虽然图片是从CDN请求，但是我们CDN源站设置的是阿里云对象存储OSS的"),e("code",[v._v("Bucket")]),v._v("域名，对象存储OSS可以设置资源的"),e("code",[v._v("HTTP")]),v._v("响应头。")]),v._v(" "),e("p",[v._v("登录阿里云，进入对象存储OSS，找到资源所在"),e("code",[v._v("Bucket")]),v._v("-文件管理，进入资源所在目录，资源列表右边“更多”里有“设置HTTP头“，除了可以设置单个资源的HTTP头，还可以选择当页所有资源，批量设置HTTP头。点击“设置HTTP头“，在“"),e("code",[v._v("Cache-Control")]),v._v('"字段填上值保存就可以了，如下图：')]),v._v(" "),e("p",[e("img",{attrs:{src:"https://wf-cloud-img.oss-cn-hangzhou.aliyuncs.com/image/10390546-7a3bfaf249bbc179.webp",alt:"10390546-7a3bfaf249bbc179"}})]),v._v(" "),e("p",[v._v("除了刚才说的强缓存，还有一种协商缓存策略，再看之前响应的图，响应头里虽然没有"),e("code",[v._v("Cache-Control")]),v._v("和"),e("code",[v._v("Expires")]),v._v("，但是有"),e("code",[v._v("ETag")]),v._v("和"),e("code",[v._v("Last-Modified")]),v._v("，上面说当"),e("code",[v._v("disk cache")]),v._v("过期后，小程序会重新向服务端发起请求，此时客户端会在请求头带着上一次图片响应的"),e("code",[v._v("ETag")]),v._v("和"),e("code",[v._v("Last-Modified")]),v._v("，分别放在"),e("code",[v._v("If-None-Match")]),v._v("和"),e("code",[v._v("If-Modified-Since")]),v._v("里，服务器接受到这两个字段后，会和当前资源比较，如果"),e("code",[v._v("ETag")]),v._v("变了，或者资源修改时间大于上次修改时间，将返回新资源，否则返回"),e("code",[v._v("304")]),v._v("告诉客户端，资源没有变化。")])])}),[],!1,null,null,null);_.default=o.exports}}]);