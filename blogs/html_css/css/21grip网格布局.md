---
title: 21 grip网格布局
date: 2021-04-21
categories: 
 - CSS
---

# CSS 网格布局

##  1. 什么是Grid布局

 `Grid`布局即网格布局，是一种新的`css`模型，一般是将一个页面划分成几个主要的区域，定义这些区域的大小、位置和层次等关系，是目前唯一一种`css`二维布局。

网格是一组相交的水平线和垂直线，它定义了网格的列和行。

CSS 提供了一个基于网格的布局系统，带有行和列，可以让我们更轻松地设计网页，而无需使用浮动和定位。

## 2. 和flex布局的区别

     `Grid`布局和`flex`布局是有实质性的区别的，`flex`是一维布局，只能处理一个维度上的布局，一行或者是一列。但是`Grid`布局是二维布局 ，将容器划分成了“行”和“列”，产生了一个个的网格，可以将网格元素放在行和列相关的位置上，从而达到了布局的目的。

`flex`布局示例：

![[(img-EvPhz2Tm-1650274526450)(image-20220418170327412.png)]](https://wf-cloud-img.oss-cn-hangzhou.aliyuncs.com/image/bd283499b673495389fa6938971d6c97.png)

`Grid`布局示例：

![[(img-MkDsHpXv-1650274526451)(image-20220418172044225.png)]](https://wf-cloud-img.oss-cn-hangzhou.aliyuncs.com/image/29ab3ad31c9c4562a620c43200bae199.png)



![image-20221220154550202](https://wf-cloud-img.oss-cn-hangzhou.aliyuncs.com/image/image-20221220154550202.png)

## 网格元素

网格布局由一个父元素及一个或多个子元素组成。

网格布局父元素的 *`display`* 属性需要设置 *`grid`* 或 *`inline-grid`*。

网格容器内的直系子元素自动布局为网格元素。

```HTML
<style>
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  background-color: pink;
  padding: 10px;
}
.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid green;
  padding: 20px;
  font-size: 30px;
  text-align: center;
}
</style>

<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>  
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>  
  <div class="grid-item">7</div>
  <div class="grid-item">8</div>
  <div class="grid-item">9</div>  
</div>
```

<img src="https://wf-cloud-img.oss-cn-hangzhou.aliyuncs.com/image/image-20221220154942056.png" alt="image-20221220154942056" style="zoom:50%;" />

##  display 属性

当一个 HTML 元素将 `display `属性设置为 `grid `或` inline-grid `后，它就变成了一个网格容器，这个元素的所有直系子元素将成为网格元素。

- 使用 `display: grid; `设置网格容器为块级元素。

- 使用` display: inline-grid; `设置网格容器为行内块元素。

## 网格轨道

我们通过 **`grid-template-columns`** 和 **`grid-template-rows`** 属性来定义网格中的行和列。

这些属性定义了网格的轨道，一个网格轨道就是网格中任意两条线之间的空间。

在下图中你可以看到一个绿色框的轨道——网格的第一个行轨道。第二行有三个白色框轨道。

<img src="https://wf-cloud-img.oss-cn-hangzhou.aliyuncs.com/image/1_Grid_Track.png" alt="img" style="zoom:50%;" />

使用 **`grid-template-columns`** 属性在网格容器中创建四个列:

```css
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto auto;
}
```

使用 **`grid-template-rows`** 属性在网格容器中设置行的高度:

```css
.grid-container {
  display: grid;
  grid-template-rows: 100px 300px;
}
```

<img src="https://wf-cloud-img.oss-cn-hangzhou.aliyuncs.com/image/image-20221220160604741.png" alt="image-20221220160604741" style="zoom:50%;" />

##  fr 单位

轨道可以使用任何长度单位进行定义。

网格引入了 **fr** 单位来帮助我们创建灵活的网格轨道。一个 `fr `单位代表网格容器中可用空间的一等份。

以下实例定义了一个网格定义将创建三个相等宽度的轨道，这些轨道会随着可用空间增长和收缩。

```css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

##  网格单元

一个网格单元是在一个网格元素中最小的单位， 从概念上来讲其实它和表格的一个单元格很像。一旦一个网格元素被定义在一个父级元素当中，那么他的子级元素将会排列在每个事先定义好的网格单元中。

## 网格区域

网格元素可以向行或着列的方向扩展一个或多个单元，并且会创建一个网格区域。网格区域的形状应该是一个矩形 - 也就是说你不可能创建出一个类似于"L"形的网格区域。下图高亮的网格区域扩展了2列以及2行。

<img src="https://wf-cloud-img.oss-cn-hangzhou.aliyuncs.com/image/image-20221220161100606.png" alt="image-20221220161100606" style="zoom:50%;" />

## 网格列

网格元素的垂直线方向称为列（Column）。

![img](https://wf-cloud-img.oss-cn-hangzhou.aliyuncs.com/image/grid_columns.png)

## 网格行

网格元素的水平线方向称为行（Row）。

![img](https://wf-cloud-img.oss-cn-hangzhou.aliyuncs.com/image/grid_rows.png)

## 网格间距

网格间距（Column Gap）指的是两个网格单元之间的网格横向间距或网格纵向间距。

![img](https://wf-cloud-img.oss-cn-hangzhou.aliyuncs.com/image/grid_gaps.png)

可以使用以下属性来调整间隙大小：

- grid-column-gap
- grid-row-gap
- grid-gap

使用 **grid-column-gap** 属性来设置列之间的网格间距：

```css
.grid-container {
  display: grid;
  grid-column-gap: 50px;
}
```

使用 **grid-row-gap** 属性来设置行之间的网格间距：

```css
.grid-container {
  display: grid;
  grid-row-gap: 50px;
}
```

**grid-gap** 属性可以同时设置行间距和列间距:

```css
.grid-container {
  display: grid;
  grid-gap: 50px;
}
```

## 网格线

列与列，行与行之间的交接处就是网格线。

Grid 会为我们创建编号的网格线来让我们来定位每一个网格元素。

例如下面这个三列两行的网格中，就拥有四条纵向的网格线（灰色圆圈标记），以及三条横向的网格线（黑色圆圈标记）。

![img](https://wf-cloud-img.oss-cn-hangzhou.aliyuncs.com/image/1_diagram_numbered_grid_lines.png)

网格元素设置时可以参考这些行号。

下图则定义了四条纵向的网格线，以及四条横向的网格线：

![img](https://wf-cloud-img.oss-cn-hangzhou.aliyuncs.com/image/grid_lines.png)

网格线的编号顺序取决于文章的书写模式。在从左至右书写的语言中，编号为 1 的网格线位于最左边。在从右至左书写的语言中，编号为 1 的网格线位于最右边。

接下来我使用了 grid-column-start, grid-column-end, grid-row-start 和 grid-row-end 属性来演示如何使用网格线。

以下实例设置一个网格元素的网格线从第一列开始，第三列结束：

```css
.item1 {
  grid-column-start: 1;
  grid-column-end: 3;
}
```

![image-20221220164926290](https://wf-cloud-img.oss-cn-hangzhou.aliyuncs.com/image/image-20221220164926290.png)

以下实例我们设置一个网格元素的网格线从第一行开始，第三行结束：

```css
.item1 {
  grid-row-start: 1;
  grid-row-end: 3;
}
```

![image-20221220165301381](https://wf-cloud-img.oss-cn-hangzhou.aliyuncs.com/image/image-20221220165301381.png)

网格属性

| 属性                                                         | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [column-gap](https://www.runoob.com/cssref/css3-pr-column-gap.html) | 指定列之间的间隙                                             |
| [gap](https://www.runoob.com/cssref/css3-pr-gap.html)        | *row-gap* 和 *column-gap* 的简写属性                         |
| [grid](https://www.runoob.com/cssref/css-pr-grid.html)       | *grid-template-rows, grid-template-columns, grid-template-areas, grid-auto-rows, grid-auto-columns*, 以及 *grid-auto-flow* 的简写属性 |
| [grid-area](https://www.runoob.com/cssref/pr-grid-area.html) | 指定网格元素的名称，或者也可以是 *grid-row-start*, *grid-column-start*, *grid-row-end*, 和 *grid-column-end* 的简写属性 |
| [grid-auto-columns](https://www.runoob.com/cssref/pr-grid-auto-columns.html) | 指的默认的列尺寸                                             |
| [grid-auto-flow](https://www.runoob.com/cssref/pr-grid-auto-flow.html) | 指定自动布局算法怎样运作，精确指定在网格中被自动布局的元素怎样排列。 |
| [grid-auto-rows](https://www.runoob.com/cssref/pr-grid-auto-rows.html) | 指的默认的行尺寸                                             |
| [grid-column](https://www.runoob.com/cssref/pr-grid-column.html) | *grid-column-start* 和 *grid-column-end* 的简写属性          |
| [grid-column-end](https://www.runoob.com/cssref/pr-grid-column-end.html) | 指定网格元素列的结束位置                                     |
| [grid-column-gap](https://www.runoob.com/cssref/pr-grid-column-gap.html) | 指定网格元素的间距大小                                       |
| [grid-column-start](https://www.runoob.com/cssref/pr-grid-column-start.html) | 指定网格元素列的开始位置                                     |
| [grid-gap](https://www.runoob.com/cssref/pr-grid-gap.html)   | *grid-row-gap* 和 *grid-column-gap* 的简写属性               |
| [grid-row](https://www.runoob.com/cssref/pr-grid-row.html)   | *grid-row-start* 和 *grid-row-end* 的简写属性                |
| [grid-row-end](https://www.runoob.com/cssref/pr-grid-row-end.html) | 指定网格元素行的结束位置                                     |
| [grid-row-gap](https://www.runoob.com/cssref/pr-grid-row-gap.html) | 指定网格元素的行间距                                         |
| [grid-row-start](https://www.runoob.com/cssref/pr-grid-row-start.html) | 指定网格元素行的开始位置                                     |
| [grid-template](https://www.runoob.com/cssref/pr-grid-template.html) | *grid-template-rows*, *grid-template-columns* 和 *grid-areas* 的简写属性 |
| [grid-template-areas](https://www.runoob.com/cssref/pr-grid-template-areas.html) | 指定如何显示行和列，使用命名的网格元素                       |
| [grid-template-columns](https://www.runoob.com/cssref/pr-grid-template-columns.html) | 指定列的大小，以及网格布局中设置列的数量                     |
| [grid-template-rows](https://www.runoob.com/cssref/pr-grid-template-rows.html) | 指定网格布局中行的大小                                       |
| [row-gap](https://www.runoob.com/cssref/css3-pr-row-gap.html) | 指定两个行之间的间距                                         |