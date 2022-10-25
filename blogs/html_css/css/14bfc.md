---
title: 14 BFC
date: 2021-04-14
categories: 
 - CSS
---

# BFC

`BFC` 全称：`Block Formatting Context`， 名为 **块级格式化上下文**

简单来说就是，`BFC`是一个完全独立的空间（布局环境），让空间里的子元素不会影响到外面的布局。

## 1. 触发BFC

- `float`属性不为`none`
- `position`为`absolute`或`fixed`
- `overflow`不为`visible`

- `display`为`inline-block`、`table-cell`、`table-caption`、`flex`、`inline-flex`

## 2. BFC元素特性

- `BFC`就是一个块级元素，块级元素会在垂直方向一个接一个的排列。
- `BFC`中，`margin-left`会触碰到`border-left（`对于从左至右的方式，反之）
- 垂直方向的距离由margin决定， 属于同一个`BFC`的两个相邻的标签外边距会发生重叠
- BFC区域不会与浮动的盒子产生交集，而是紧贴边缘浮动
- 计算`BFC`的高度时，浮动元素也参与计算

## 3. BFC主要用途

### 3.1 清除内部浮动

父元素设置为`BFC`可以清除子元素的浮动（最常用`overflow:hidden`，IE6需加上`*zoom:1`）

原因：计算`BFC`高度时会检测浮动子盒子高度。

### 3.2 外边距合并问题

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .box {
            margin: 10px;
            width: 100px;
            height: 100px;
            background: #000;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="box"></div>
        <div class="box"></div>
    </div>
</body>
</html>
```

**效果：**

![img](https://could-img.oss-cn-hangzhou.aliyuncs.com/202210252329665.webp)

上面为两个盒子的`margin`外边距设置的是`10px`，可结果显示两个盒子之间只有`10px`的距离，这就导致了`margin`塌陷问题，这时`margin`边距的结果为最大值，而不是合。

为了解决此问题可以使用`BFC`规则（**为元素包裹一个盒子**形成一个完全独立的空间，做到里面元素不受外面布局影响），或者简单粗暴方法一个设置`margin`，一个设置`padding`。

**修改代码：**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Margin边距重叠</title>
    <style>
        .box {
            margin: 10px;
            width: 100px;
            height: 100px;
            background: #000;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="box"></div>
        <p><div class="box"></div></p>
    </div>
</body>
</html>
```

**效果：**

![img](https://could-img.oss-cn-hangzhou.aliyuncs.com/202210252329608.webp)

### 3.3 两栏布局

右侧盒子自适应：`BFC`区域不会与浮动盒子产生交集，而是紧贴浮动边缘

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>两栏布局</title>
    <style>
      div {
        width: 200px;
        height: 100px;
        border: 1px solid red;
      }
    </style>
  </head>
  <body>
    <div style="float: left">
      两栏布局两栏布局两栏布局两栏布局两栏布局两栏布局两栏布局两栏布局两栏布局两栏布局两栏布局两栏布局两栏布局
    </div>
    <div style="width: 300px">
      我是蛙人，如有帮助请点个赞叭，如有帮助请点个赞叭，如有帮助请点个赞叭，如有帮助请点个赞叭，如有帮助请点个赞         叭，如有帮助请点个赞叭
    </div>
  </body>
</html>
```

**效果：**

![img](https://could-img.oss-cn-hangzhou.aliyuncs.com/202210252329012.webp)

可以看到上面元素，第二个`div`元素为`300px`宽度，但是被第一个`div`元素设置`Float`脱离文档流给覆盖上去了，解决此方法我们可以把第二个`div`元素设置为一个`BFC`。

**修改代码**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>两栏布局</title>
    <style>
      div {
        width: 200px;
        height: 100px;
        border: 1px solid red;
      }
    </style>
  </head>
  <body>
    <div style="float: left">
      两栏布局两栏布局两栏布局两栏布局两栏布局两栏布局两栏布局两栏布局两栏布局两栏布局两栏布局两栏布局两栏布局
    </div>
    <div style="width: 300px; display: flex">
      我是蛙人，如有帮助请点个赞叭，如有帮助请点个赞叭，如有帮助请点个赞叭，如有帮助请点个赞叭，如有帮助请点个赞         叭，如有帮助请点个赞叭
    </div>
  </body>
</html>
```

**效果：**

![img](https://could-img.oss-cn-hangzhou.aliyuncs.com/202210252329633.webp)

