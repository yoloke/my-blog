---
title: 04 HTML标签
date: 2021-07-04
categories: 
 - HTML
---

## 1. img

```
 <img src="图像URL" />
```

-  src 是`<img>`标签的必须属性，它用于指定图像文件的路径和文件名。

-  图像标签的其他属性：

![image-20221025202353327](https://wf-cloud-img.oss-cn-hangzhou.aliyuncs.com/image/202210301443066.png)

**注意点：**

- `alt`：替换文本。如果无法显示图像，浏览器将显示`alt`指定的内容
- `title`：提示文本。当鼠标移动到元素上时显示`title`的内容。

## 2. a 

```html
<a href="跳转目标的url地址" target="目标窗口的弹出方式"> 文本或图像 </a>
```

`target`：用于指定链接页面的打开方式

- `_self`默认值，在当前窗口打开链接

- `_blank`在新窗口中打开链接

- `_parent`在当前页面的上一层打开链接

- `_top`在顶层页面中打开链接 

- `framename`在指定的框架或浮动框架内打开链接（框架名可以自定义）

**链接分类：**

- 外部链接

  ```html
  < a href="http:// www.baidu.com "> 百度</a>。
  ```

- 内部链接：网站内部页面之间的相互链接。直接链接**内部页面名称**即可

  ```html
  < a href="index.html"> 首页 </a>
  ```

- 空链接：如果当时没有确定链接目标时

  ```html
   < a href="#"> 首页 </a>
  ```

- 下载链接：如果 `href `里面地址是一个文件或者压缩包，会下载这个文件。

- 网页元素链接：在网页中的各种网页元素，如文本、图像、表格、音频、视频等都可以添加超链接.

- 锚点链接:  点我们点击链接,可以快速定位到页面中的某个位置. 

  +        在链接文本的 href 属性中，设置属性值为 #名字 的形式，如

  ```html
  <a href="#two"> 第2集</a> 
  ```

  +        找到目标位置标签，里面添加一个 id 属性 = 刚才的名字 ，如：

  ```html
  <h3 id="two">第2集介绍</h3>
  ```

## 3. table

```html
<table border="1" cellspacing="0" >
    <caption>表格标题</caption>
    <tr>
        <!-- th ---table head 的缩写 会加粗显示-->
        <th>1</th>
        <td>第一列</td>
        <td>第二列</td>
    </tr>
    <tr>
        <th>2</th>
        <td>第一列</td>
        <td>第二列</td>
    </tr>
</table>
```

`<colgroup>` 标签用于对表格中的列进行组合，以便对其进行格式化。

通过使用 `<colgroup>` 标签，可以向整个列应用样式，而不需要重复为每个单元格或每一行设置样式。

<img src="https://wf-cloud-img.oss-cn-hangzhou.aliyuncs.com/image/202210252058509.png" alt="image-20221025205845087" style="zoom: 33%;" />

**表格属性：**

![](https://wf-cloud-img.oss-cn-hangzhou.aliyuncs.com/image/202210252055823.png)

### 3.1 语义化表格

`<thead>` 标签用于组合 HTML 表格的表头内容。

`<thead>` 标签必须被用在以下情境中：作为` <table> `元素的子元素，出现在 `<caption>`、`<colgroup>` 元素之后，`<tbody>`、 `<tfoot>` 和` <tr>` 元素之前。

```html
<table border="1">
  <thead>
    <tr>
      <th>Month</th>
      <th>Savings</th>
    </tr>
  </thead>
  <tfoot>
    <tr>
      <td>Sum</td>
      <td>$180</td>
    </tr>
  </tfoot>
  <tbody>
    <tr>
      <td>January</td>
      <td>$100</td>
    </tr>
    <tr>
      <td>February</td>
      <td>$80</td>
    </tr>
  </tbody>
</table> 
```

### 3.2 table实现固定行列

**需要用到的2个属性**

```
table-layout : fixed  
position : sticky
```

**table-layout**属性有两种特定值：

1. `auto`（预设值）-表格的总宽度决定每一个储存格（cell）的最大值
2. `fixed` - 表格的总宽度决定于表格width的定义，以及各栏位（column）width的定义

为了让表格呈现滚动效果，必须设定`table-layout:fixed `并且给与表格宽度。

```css
table {
 table-layout: fixed;
 width: 100%;
}
```

**Position**

固定表格需要使用到 `position : sticky `的设定

`sticky `的表现类似于`relative` 和`fixed `的合体，在目标区域中可见时，他的行为就像`relative `不会有任何变化，而当页面滚动超出目标区域时，他的表现改为`fixed`会固定于目标位置

要注意的是当`position : sticky`应用于`table`，只能作用于`<th>`和`<td>`，并且一定要定义目标位置` left / right / top / bottom `才会出现固定效果！

```css
thead tr th {
 position:sticky;
 top:0;
}
<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>纯CSS实现表格首行和首列固定</title>
    <!-- 插入Vue -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <style>
        .main{
            width: 500px;
            overflow:auto;
            height:208px;  /* 设置固定高度 */
        }
        td, th {
            /* 设置td,th宽度高度 */
            border:1px solid gray;
            width:100px;
            height:30px;
        }
        th {
            background-color:lightblue;
        }
        table {
            table-layout: fixed;
            width: 200px; /* 固定宽度 */
        }
        td:first-child, th:first-child {
            position:sticky;
            left:0; /* 首行永远固定在左侧 */
            z-index:1;
            background-color:lightpink;
        }
        thead tr th {
            position:sticky;
            top:0; /* 列首永远固定在头部  */
        }
        th:first-child{
            z-index:2;
            background-color:lightblue;
        }
    </style>
</head>
<body>
<div id="app">
    <div class="main">
        <table  cellspacing="0" >
            <thead>
            <tr>
                <th> </th>
                <th> </th>
                <th> </th>
                <th> </th>
                <th> </th>
                <th> </th>
                <th> </th>
                <th> </th>
                <th> </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, index) in 30" :key="index">
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
            </tr>
            </tbody>
        </table>
    </div>
</div>
</body>
<script>
    var app = new Vue({
        el: '#app',
        data: {
            message: 'Hello'
        },
    })
</script>
</html>
```

![](https://wf-cloud-img.oss-cn-hangzhou.aliyuncs.com/image/237138-20201027100610585-481970269.gif)

## 4. 列表

### 4.1 无序列表

```html
<ul>
    <li>列表项1</li>
    <li>列表项2</li>
    <li>列表项3</li>
</ul>
```

### 4.2 有序列表

```html
<ol>
    <li>列表项1</li>
    <li>列表项2</li>
    <li>列表项3</li>
</ol>
```



<img src="https://wf-cloud-img.oss-cn-hangzhou.aliyuncs.com/image/202210252126786.png" alt="image-20221025212648320" style="zoom: 67%;" />

### 4.3 自定义列表

```
dl` 自定义列表的整体，用于包裹`dt`和`dd
```

- ` <dt>`自定义列表的主题
- `<dd>`定义列表主题的每一项内容

```html
<dl>
    <dt>名词1</dt>
    <dd>解释1</dd>
    <dd>解释2</dd>
</dl>
```

![](https://wf-cloud-img.oss-cn-hangzhou.aliyuncs.com/image/image-20230112182041272.png)

## 5. b strong、i em

从页面显示效果来看，被` <b>` 和` <strong>` 包围的文字将会被 **加粗**，而被` <i> `和` <em>` 包围的文字将以 *斜体* 的形式呈现。

- **`<em> `**用于对文本内容进行强调，强调位置的不同通常会改变句子的含义。
- 如果仅仅在语态或语气上为了突出某一个文本，那应该使用**` <i>`**。比如一个分类学名称，一个技术术语，一个外语习语，一个音译，一个想法，或者西方文本中的一艘船名。
- 但如果为了突出某一部分的重要性、严重性或紧急性，那应该使用 **`<strong>`**。
- 根据 W3C 对 元素的说明，**`<b> `**元素应当是在其他标签都不合适的情况下最后一个考虑使用的标签。

## 6. label

`label`元素不会向用户呈现任何特殊效果，但是，它为鼠标用户改进了可用性，当我们在`label`元素内点击文本时就**会触发此控件**。也就是说，当用户选择该标签时，浏览器就会自动将焦点转到和标签相关的表单控件上。最常用`label`的地方就是表单中的性别单选框了，当点击文字时也能够自动聚焦绑定的表单控件。

```html
<form>
     <label for="male">男</label>
     <input type="radio" name="sex" id="male">
     <label for="female">女</label>
     <input type="radio" name="sex" id="female">
</form>
```

## 7. TDK

在SEO中，TDK其实就是`title`标题标签、`description`描述标签、`keywords`关键词标签这三个标签。