---
title: 02 meta标签
date: 2021-07-29
categories: 
 - HTML
tags:
 - meta
---

`meta` 标签往往不会引起用户的注意，但是`meta`对整个网页有影响，会对网页能否被搜索引擎检索，和在搜索中的排名起着关键性的作用。

::: tip meta标签一般放在整个html页面的head部分，在MDN中对他这样定义：
meta是**文档级元数据元素**，用来表示那些不能由其它 HTML 相关元素（`<base>`、`<link>`, `<script>`、`<style>`或 `<title>`）之一表示的任何元数据。
:::

是不是感觉看起来很抽象？说白了就是为了**传达信息**。

`meta`有个必须的属性`content`用于表示需要设置的项的值。

先看看`meta` 元素定义的元数据的类型：

- 如果设置了 `name`属性，`meta` 元素提供的是文档级别的元数据，应用于整个页面。
- 如果设置了 `http-equiv`属性，`meta` 元素则是编译指令，提供的信息与类似命名的 HTTP 头部相同。
- 如果设置了 `charset`属性，`meta` 元素是一个字符集声明，告诉文档使用哪种字符编码。
- 如果设置了 `itemprop` 属性，`meta` 元素提供用户定义的元数据。
  

## 1.name属性

`name`和`content`一起使用，前者表示要表示的元数据的`名称`，后者是元数据的`值`。

### 1.1 author

用来表示网页的作者。

```html
<meta name="author" content="aaa@mail.abc.com">
```

### 1.2 description

`description`用来告诉搜素引擎当前网页的主要内容，是一段简短而精确的、对页面内容的描述。以头条和taobao的`description`标签为例：

![img](https://could-img.oss-cn-hangzhou.aliyuncs.com/202210012055640.webp)

![img](https://could-img.oss-cn-hangzhou.aliyuncs.com/202210012055448.webp)

```html
<meta name="description" content="这是我的HTML">
```

### 1.3 keywords

`keywords`设置网页的关键字，使用逗号分隔。来告诉浏览器关键字是什么。是一个经常被用到的名称。它为文档定义了一组关键字。某些搜索引擎在遇到这些关键字时，会用这些关键字对文档进行分类。

![img](https://could-img.oss-cn-hangzhou.aliyuncs.com/202210012055617.webp)

![img](https://could-img.oss-cn-hangzhou.aliyuncs.com/202210012055485.webp)

```html
<meta name="keywords" content="Hello world">
```

### 1.4 viewpoint

为 viewport（视口）的初始大小提供指示。目前仅用于**移动设备**。

可能你也发现了，我们在`vscode`中自动生成`html`的代码片段时，会自动生成：

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
复制代码
```

`width`用来设置 viewport 的宽度等于`device-with`设备宽度;

`initial-scale`为设备宽度与 viewport 大小之间的缩放比例。

![img](https://could-img.oss-cn-hangzhou.aliyuncs.com/202210012056986.webp)

### 1.5 robots

用来告诉**搜索引擎**如何抓取该页的内容

表示爬虫对此页面的处理行为，或者说，应当遵守的规则。

```html
<meta name="robots" content="all">//表示网页可以被搜索引擎搜索到
```

它的`content`可以为：

1. `all`：网页将被检索，且页面上的链接可以被查询
2. `none`：网页会被忽略，且页面上的链接不可以被查询
3. `index`：网页将被检索
4. `follow`：页面上的链接可以被查询

### 1.6 renderer

用来指定双核浏览器的渲染方式，比如360浏览器，我们可以通过这个设置来指定360浏览器的渲染方式

```html
<meta name="renderer" content="webkit"> //默认webkit内核
<meta name="renderer" content="ie-comp"> //默认IE兼容模式
<meta name="renderer" content="ie-stand"> //默认IE标准模式
```

## 2.http-equiv属性

`http-equiv`一般设置的都是与`http`请求头相关的信息，设置的值会关联到http头部。也就是说浏览器在请求服务器获取`html`的时候，服务器会将`html`中设置的`meta`放在响应头中返回给浏览器。常见的类型比如`content-type`, `expires`, `refresh`, `set-cookie`, `window-target`, `charset`， `pragma` `X-UA-Compatible`等等。

`http-equiv` 所有允许的值都是特定 HTTP 头部的名称，`http-equiv`也是和`content`一起使用，前者表示要表示的元数据的`名称`，后者是元数据的`值`。

### 2.1 X-UA-Compatible

我们最常见的`http-equiv`值可能就是`X-UA-Compatible`了，它常常长这个样子：

```html
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"> 
```

它是用来是做IE浏览器适配的。

`IE=edge`告诉浏览器，以当前浏览器支持的最新版本来渲染，IE9就以IE9版本来渲染。

`chrome=1`告诉浏览器，如果当前IE浏览器安装了`Google Chrome Frame`插件，就以chrome内核来渲染页面。

像上图这种两者都存在的情况：如果有chrome插件，就以chrome内核渲染，如果没有，就以当前浏览器支持的最高版本渲染。

另外，这个属性支持的范围是`IE8-IE11`

你可能注意到了，如果在我们的`http`头部中也设置了这个属性，并且和`meta`中设置的有冲突，那么哪一个优先呢？ 答案是：开发者偏好（`meta`元素）优先于Web服务器设置（HTTP头）。

### 2.2 content-type

用来声明文档类型和字符集

```html
<meta http-equiv="content-type" content="text/html; charset=utf8">
```

### 2.3 x-dns-prefetch-control

一般来说，HTML页面中的a标签会自动启用DNS提前解析来提升网站性能，但是在使用https协议的网站中失效了，我们可以设置：

```html
<meta http-equiv="x-dns-prefetch-control" content="on">
```

来打开dns对a标签的提前解析

### 2.4 refresh、pragma、expires

- refresh 该种设定表示5秒自动刷新并且跳转到指定的网页。如果不设置url的值那么浏览器则刷新本网页。
- expires  用于设置浏览器的过期时间, 其实就是响应头中的expires属性。
- pragma 禁止浏览器从本地计算机的缓存中访问页面的内容

```html
<meta http-equiv="refresh" content="5 url=http://www.zhiqianduan.com">
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="expires" content="31 Dec 2021">
```

和缓存相关的设置，但是遗憾的是这些往往不生效，我们一般都通过`http headers`来设置缓存策略




