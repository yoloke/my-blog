---
title: 01 Ajax、Axios和Fetch区别
date: 2022-8-29
categories: 
 - JavaScript
tags:
 - axiso
 - ajax
 - fetch
---
## 1、Ajax

英文全称为 `Asynchronous JavaScript + XML` ，翻译过来就是**异步JavaScript和XML**。

AJAX 不是新的编程语言，而是一种使用现有标准的新方法。它可以创建更好、更快且交互性更强的 web 应用程序。

Ajax 最重要的特性就是可以**局部刷新页面**。

## 2、Axios

Axios是一个基于promise 的 HTTP 库，可以用在浏览器和 node.js中。在服务端它使用原生 Node.js http 模块，而在客户端则使用 XMLHttpRequest。

这里我们只关注客户端的 Axios，它是基于 XHR 进行二次封装形成的工具库。

客户端 Axios 的主要特性有：

- 从浏览器创建 XMLHttpRequests
- 支持 Promise API
- 拦截请求和响应
- 转换请求和响应数据
- 取消请求
- 自动转换JSON数据
- 客户端支持防御XSRF

需要注意的是：**Axios是对XMLHttpRequest的封装，而Fetch是一种新的获取资源的接口方式，并不是对XMLHttpRequest的封装。**

它们**最大的不同点在于Fetch是浏览器原生支持，而Axios需要引入Axios库。**