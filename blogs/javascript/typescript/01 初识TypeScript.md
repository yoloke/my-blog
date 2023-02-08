---
title: 01 初识TypeScript
date: 2022-10-01
categories: 
 - TypeScript
---

## 1. 什么是typescript?

- `TypeScript`简称`TS`
- `TS`和`JS`之间的关系其实就是`Less/Sass`和`CSS`之间的关系
- 就像`Less/Sass`是对`CSS`进行扩展一样，`TS`也是对`JS`进行扩展
- 就像`Less/Sass`最终会转换成`CSS`一样，我们编写好的`TS`代码最终也会换成`JS`
- `TypeScript`是JavaScript的超集，因为它扩展了`JavaScript`，有`JavaScript`没有的东西。
- 硬要以父子类关系来说的话，`TypeScript`是`JavaScript`子类，继承的基础上去扩展。

## 2. 为什么需要TypeScript?

简单来说就是因为`JavaScript`是弱类型，很多错误只有在运行时才会被发现。
而`TypeScript`提供了一套**静态检测机制**，可以帮助我们在编译时就发现错误。

## 3. TypeScript特点

- 支持最新的JavaScript新特特性
- 支持代码静态检查
- 支持诸如`C`，`C++`，`Java`，`Go`等后端语言中的特性 (枚举、泛型、类型转换、命名空间、声明文件、类、接口等)

## 4. 搭建typescript环境

**安装最新版`typescript`**

```js
npm i -g typescript
```

**安装`ts-node`**

```js
npm i -g ts-node
```

**生成配置文件`tsconfig.json`**

```js
tsc --init
```

然后新建`index.ts`，输入相关代码，然后执行 `ts-node index.ts`

## 5. 官方playground

官方也提供了一个在线开发 TypeScript 的云环境——[`Playground`](https://www.typescriptlang.org/zh/play)。

基于它，我们无须在本地安装环境，只需要一个浏览器即可随时学习和编写 `TypeScript`，同时还可以方便地选择 `TypeScript `版本、配置 `tsconfig`，并对 `TypeScript `实时静态类型检测、转译输出 `JavaScript `和在线执行。

