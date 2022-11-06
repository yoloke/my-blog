---
title: 04 SPA和MPA
date: 2021-03-04
categories: 
 - Vue
---

## 一、SPA、MPA

### 1. SPA

`SPA`（`single-page application`），翻译过来就是单页应用。

`SPA`是一种网络应用程序或网站的模型，**动态重写当前页面**，避免了页面之间切换打断用户体验。

![img](https://could-img.oss-cn-hangzhou.aliyuncs.com/202211050905757.png)

JS框架如`react`,`vue`,`angular`,`ember`都属于`SPA`

SPA`（ single-page application ）`仅在 `Web` 页面初始化时加载相应的 `HTML`、`JavaScript` 和` CSS`。一旦页面加载完成，`SPA` 不会因为用户的操作而进行页面的重新加载或跳转；取而代之的是利用路由机制实现` HTML `内容的变换，避免页面的重新加载。

优点：

- 用户体验好，页面片段间的切换快，包括移动设备, 尤其是在网络环境差的时候， 因为组件已经预先加载好了, 并不需要发送网络请求, 所以用户体验好
- 页面每次切换跳转时，并不需要做`html`文件的请求，这样就节约了很多`http`发送时延，对服务器压力相对小。

缺点：

- 首屏加载速度慢

  首屏时需要请求一次`html`，同时还要发送一次`js`请求，两次请求回来了，首屏才会展示出来。相对于多页应用，首屏时间慢。

- 不易于SEO

  由于所有的内容都在一个页面中动态替换显示，所以在 SEO 上其有着天然的弱势。



### 2. MPA

`MPA`多页面应用 `MultiPage Application` ，指有多个独立页面的应用（多个html页面），每个页面必须重复加载js、css等相关资源。多页应用跳转，需要整页资源刷新。

与 `SPA` 对比最大的不同即是页面路由切换由原生浏览器文档跳转（`navigating across documents`）控制。 页面跳转，是返回 HTML 的。

![img](https://static.vue-js.com/eeb13aa0-3ac6-11eb-85f6-6fac77c0c9b3.png)

优点：

- 首屏加载速度快

  当我们访问页面的时候，服务器返回一个`html`，页面就会展示出来，这个过程只经历了一个`HTTP`请求，所以页面展示的速度非常快。

- SEO效果好

  搜索引擎在做网页排名的时候，要根据网页的内容才能给网页权重，来进行网页的排名。搜索引擎是可以识别`html`内容的，而我们每个页面所有的内容都放在`html`中，所以这种多页应用SEO排名效果好。

缺点：

- 页面切换慢

  因为每次跳转都需要发送一个 HTTP 请求，如果网络状态不好，在页面之间来回跳转时，就会发生明显的卡顿，影响用户体验。

- 首次渲染速度相对较慢

  如果网络慢，页面很容易半天加载不出来,用户体验非常不好

### 3. SPA  MPA 区别

|                 | 单页面应用（SPA）           | 多页面应用（MPA）                   |
| :-------------- | :-------------------------- | :---------------------------------- |
| 组成            | 一个主页面和多个页面片段    | 多个主页面                          |
| 刷新方式        | 局部刷新                    | 整页刷新                            |
| url模式         | 哈希模式                    | 历史模式                            |
| SEO搜索引擎优化 | 难实现，可使用`SSR`方式改善 | 容易实现                            |
| 数据传递        | 容易                        | 通过url、cookie、localStorage等传递 |
| 页面切换        | 速度快，用户体验良好        | 切换加载资源，速度慢，用户体验差    |
| 维护成本        | 相对容易                    | 相对复杂                            |

## 二、SPA首屏加载

首屏时间（First Contentful Paint），指的是**浏览器从响应用户输入网址地址，到首屏内容渲染完成的时间**，此时整个网页不一定要全部渲染完成，但需要展示当前视窗需要的内容。

首屏加载可以说是用户体验中**最重要**的环节。

**关于计算首屏时间：**

利用`performance.timing`提供的数据：

![image.png](https://could-img.oss-cn-hangzhou.aliyuncs.com/202211051344260.png)

通过`DOMContentLoad`或者`performance`来计算出首屏时间

```js
// 方案一：
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('first contentful painting');
});
// 方案二：
performance.getEntriesByName("first-contentful-paint")[0].startTime

// performance.getEntriesByName("first-contentful-paint")[0]
// 会返回一个 PerformancePaintTiming的实例，结构如下：
{
  name: "first-contentful-paint",
  entryType: "paint",
  startTime: 507.80000002123415,
  duration: 0,
};
```

在页面渲染的过程，导致加载速度慢的因素可能如下：

- 网络延时问题
- 资源文件体积是否过大
- 资源是否重复发送请求去加载了
- 加载脚本的时候，渲染内容堵塞了

## 三、SPA首屏优化

在页面渲染的过程，导致加载速度慢的因素可能如下：

- 网络延时问题
- 资源文件体积是否过大
- 资源是否重复发送请求去加载了
- 加载脚本的时候，渲染内容堵塞了

常见的几种SPA首屏优化方式

- 减小入口文件积-------路由懒加载
- 静态资源本地缓存
- UI框架按需加载
- 图片资源的压缩
- 组件重复打包
- 开启GZip压缩
- 使用SSR

### 减小入口文件体积

常用的手段是**路由懒加载**，把不同路由对应的组件分割成不同的代码块，待路由被请求的时候会单独打包路由，使得入口文件变小，加载速度大大增加。

![image.png](https://static.vue-js.com/486cee90-3acc-11eb-ab90-d9ae814b240d.png)

在`vue-router`配置路由的时候，采用动态加载路由的形式

```js
routes:[ 
    path: 'Blogs',
    name: 'ShowBlogs',
    component: () => import('./components/ShowBlogs.vue')
]
```

**以函数的形式加载路由**，这样就可以把各自的路由文件分别打包，只有在解析给定的路由时，才会加载路由组件

### 静态资源本地缓存

后端返回资源问题：

- 采用`HTTP`缓存，设置`Cache-Control`，`Last-Modified`，`Etag`等响应头
- 采用`Service Worker`离线缓存

前端合理利用`localStorage`

### UI框架按需加载

在日常使用`UI`框架，例如`element-UI`、或者`antd`，我们经常性直接引用整个`UI`库

```js
import ElementUI from 'element-ui'
Vue.use(ElementUI)
```

但实际上我用到的组件只有按钮，分页，表格，输入与警告 所以我们要按需引用

```js
import { Button, Input, Pagination, Table, TableColumn, MessageBox } from 'element-ui';
Vue.use(Button)
Vue.use(Input)
Vue.use(Pagination)
```

### 组件重复打包

假设`A.js`文件是一个常用的库，现在有多个路由使用了`A.js`文件，这就造成了重复下载

解决方案：在`webpack`的`config`文件中，修改`CommonsChunkPlugin`的配置

```js
minChunks: 3
```

`minChunks`为3表示会把使用3次及以上的包抽离出来，放进公共依赖文件，避免了重复加载组件

### 图片资源的压缩

图片资源虽然不在编码过程中，但它却是对页面性能影响最大的因素

对于所有的图片资源，我们可以进行适当的压缩

对页面上使用到的`icon`，可以使用在线字体图标，或者雪碧图，将众多小图标合并到同一张图上，用以减轻`http`请求压力。

### 开启GZip压缩

拆完包之后，我们再用`gzip`做一下压缩 安装`compression-webpack-plugin`

```js
cnmp i compression-webpack-plugin -D
```

在`vue.congig.js`中引入并修改`webpack`配置

```js
const CompressionPlugin = require('compression-webpack-plugin')

configureWebpack: (config) => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
            config.mode = 'production'
            return {
                plugins: [new CompressionPlugin({
                    test: /\.js$|\.html$|\.css/, //匹配文件名
                    threshold: 10240, //对超过10k的数据进行压缩
                    deleteOriginalAssets: false //是否删除原文件
                })]
            }
        }
```

在服务器我们也要做相应的配置 如果发送请求的浏览器支持`gzip`，就发送给它`gzip`格式的文件 我的服务器是用`express`框架搭建的 只要安装一下`compression`就能使用

```text
const compression = require('compression')
app.use(compression())  // 在其他中间件使用之前调用
```

### 使用SSR

`SSR`（Server side ），也就是服务端渲染，组件或页面通过服务器生成html字符串，再发送到浏览器

从头搭建一个服务端渲染是很复杂的，`vue`应用建议使用`Nuxt.js`实现服务端渲染

### 小结：

减少首屏渲染时间的方法有很多，总的来讲可以分成两大部分 ：资源加载优化 和 页面渲染优化

下图是更为全面的首屏优化的方案

![image.png](https://could-img.oss-cn-hangzhou.aliyuncs.com/202210141525397.png)

可以根据自己项目的情况选择各种方式进行首屏渲染的优化。