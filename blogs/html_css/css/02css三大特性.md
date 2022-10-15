---
title: 02 css 三大特性
date: 2021-04-02
categories: 
 - HTML/CSS
tags:
 - CSS权重
---

### 1、层叠性

相同选择器给设置相同的样式，此时一个样式就会覆盖（层叠）另一个冲突的样式。层叠性主要解决样式冲突的问题

- 样式不冲突，不会层叠

![image-20220930085349027](https://could-img.oss-cn-hangzhou.aliyuncs.com/202209301019278.png)

### 2、继承性

CSS中的继承： 子标签会继承父标签的某些样式，如文本颜色和字号。恰当地使用继承可以简化代码，降低 CSS 样式的复杂性。

![1571490049279](https://could-img.oss-cn-hangzhou.aliyuncs.com/202209301019158.png)



子元素可以继承父元素的样式：
- `text-` `font-` `line-` 这些元素开头的可以继承，以及`color属性`

```css
 //行高的继承性：
 //字体大小12px 行高是字体大小的1.5倍
 body {
   font:12px/1.5 Microsoft YaHei；
 }
```

- 行高可以跟单位也可以不跟单位。
- 如果子元素没有设置行高，则会继承父元素的行高为 1.5。
- 那么当前子元素的行高是：当前子元素的文字大小*1.5。
- body 行高 1.5， 这样写法最大的优势就是里面子元素可以根据自己文字大小自动调整行高。

![image-20220930090445144](https://could-img.oss-cn-hangzhou.aliyuncs.com/202209301019566.png)

:::tip 总结：有继承性的属性

1. 字体系列属性：

    - font-family：字体系列
    - font-weight：字体的粗细
    - font-size：字体的大小
    - font-style：字体的风格

2. 文本系列属性：
    - text-indent：文本缩进
    - text-align：文本水平对齐
    - line-height：行高
    - word-spacing：单词之间的间距
    - letter-spacing：中文或者字母之间的间距
    - text-transform：控制文本大小写（就是uppercase、lowercase、capitalize这三个）
    - color：文本颜色

3. 元素可见性：
    - visibility：控制元素显示隐藏


4. 列表布局属性：
    - list-style：列表风格，包括list-style-type、list-style-image等

5. 光标属性：

    - cursor：光标显示为何种形态
:::

### 3、优先级

当同一个元素指定多个选择器，就会有优先级的产生。

- 选择器相同，则执行层叠性
- 选择器不同，则根据选择器权重执行

选择器优先级计算表格：

![image-20220930102654793](https://could-img.oss-cn-hangzhou.aliyuncs.com/202209301026998.png)

![image-20220930091726666](https://could-img.oss-cn-hangzhou.aliyuncs.com/202209301020058.png)

    !important > 行内样式 > ID选择器 > 类选择器 | 属性选择器 | 伪类选择器 > 元素选择器 | 伪元素选择器

优先级注意点:

1. 权重是有4组数字组成，但是不会有进位。

2. 可以理解为类选择器永远大于元素选择器，id选择器永远大于类选择器，以此类推。

3. 等级判断从左向右，如果某一位数值相同，则判断下一位数值。

4. 可以简单记忆法：  

   - 通配符和继承权重为0
   - 标签选择器为1,类(伪类)选择器为 10
   - id选择器 100， 行内样式表为 1000
   - !important 无穷大

5. 继承的权重是0， **如果该元素没有直接选中，不管父元素权重多高，子元素得到的权重都是 0**。

   

####   权重叠加（重点）

如果是复合选择器，则会有权重叠加，需要计算权重。

```css
- div ul  li  -------> 0,0,0,3
- .nav ul li  -------> 0,0,1,2
- a:hover     -------> 0,0,1,1
- .nav a      -------> 0,0,1,1
```
