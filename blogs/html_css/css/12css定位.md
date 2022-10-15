---
title: 12 css 定位position
date: 2021-04-12
categories: 
 - HTML/CSS
---
## 1.1 为什么使用定位

我们先来看一个效果，同时思考一下**用标准流或浮动能否实现类似的效果**？

**场景1**： 某个元素可以自由的在一个盒子内移动位置，并且压住其他盒子.

![01_定位f示例1](https://could-img.oss-cn-hangzhou.aliyuncs.com/202208220943304.gif)

**场景2**：当我们滚动窗口的时候，盒子是固定屏幕某个位置的。

<img src="https://could-img.oss-cn-hangzhou.aliyuncs.com/202208220943243.png" alt="image-20220822094353842" style="zoom: 50%;" />

> 结论**：要实现以上效果，**标准流 或 浮动都无法快速实现

所以：

1. 浮动可以让多个块级盒子**一行**没有缝隙排列显示， 经常用于**横向排列盒子**。

2. 定位则是可以让盒子自由的在某个盒子内移动位置或者固定屏幕中某个位置，并且可以压住其他盒子。

## 2. 定位组成

**定位**：将盒子**定**在某一个位置，所以定位也是在摆放盒子， 按照定位的方式移动盒子

定位也是用来布局的，它有两部分组成：

> **定位 = 定位模式 + 边偏移**  

**定位模式** 用于指定一个元素在文档中的定位方式。**边偏移**则决定了该元素的最终位置。

### 2.1 边偏移（方位名词）

**边偏移** 就是定位的盒子移动到最终位置。有 top、bottom、left 和 right  4 个属性。

| 边偏移属性 | 示例           | 描述                                                         |
| ---------- | :------------- | ------------------------------------------------------------ |
| `top`      | `top: 80px`    | **顶端**偏移量，定义元素相对于其**父**元素**上边线的距离**。 |
| `bottom`   | `bottom: 80px` | **底部**偏移量，定义元素相对于其**父**元素**下边线的距离**。 |
| `left`     | `left: 80px`   | **左侧**偏移量，定义元素相对于其**父**元素**左边线的距离**。 |
| `right`    | `right: 80px`  | **右侧**偏移量，定义元素相对于其**父**元素**右边线的距离**   |

定位的盒子有了边偏移才有价值。 一般情况下，凡是有定位地方必定有边偏移。

### 2.2 定位模式 (position)

在 CSS 中，通过 `position` 属性定义元素的**定位模式**，语法如下：

```css
选择器 { 
    position: 属性值; 
}
```

定位模式决定元素的定位方式 ，它通过 CSS 的 position 属性来设置，其值可以分为四个：

|  <span style="display:inline-block;width:300px">值  </span>       |   <span style="display:inline-block;width:300px">   语义   </span>      |
| ---------- | :----------: |
| `static`   | **静态**定位 |
| `relative` | **相对**定位 |
| `absolute` | **绝对**定位 |
| `fixed`    | **固定**定位 |

## 3.定位模式介绍

### 3.1.  静态定位(static) 

- **静态定位**是元素的**默认**定位方式，**无定位的意思**。它相当于 border 里面的none，静态定位static，不要定位的时候用。

  ```
  选择器 { 
      position: static; 
  }
  ```

- 静态定位 按照标准流特性摆放位置，它没有边偏移。

- 静态定位在布局时我们几乎不用的 

### 3.2 相对定位(relative)⭐

- **相对定位**是元素在移动位置的时候，是相对于它自己**原来的位置**来说的（自恋型）。

```
选择器 { 
	position: relative; 
}
```

- 相对定位的特点：（务必记住）

  - 1.它是相对于**自己原来的位置**来移动的（移动位置的时候参照点是自己原来的位置）。

  - 2.**原来**在标准流的**位置**继续占有，后面的盒子仍然以标准流的方式对待它。

    因此，**相对定位并没有脱标**。它最典型的应用是给绝对定位当爹的。

<img src="https://could-img.oss-cn-hangzhou.aliyuncs.com/202210142308833.png" alt="相对定位案例" style="zoom: 28%;" />

### 3.3 绝对定位(absolute)⭐

**绝对定位**是元素在移动位置的时候，是相对于它**祖先元素**来说的（拼爹型）。

```
 选择器 { 
 	position: absolute; 
 }
```

1. **完全脱标** —— 完全不占位置；  

2. **父元素没有定位**：则以**浏览器**为准定位（Document 文档）。

   <img src="https://could-img.oss-cn-hangzhou.aliyuncs.com/202208211101387.png" alt="image-20220821110101251" style="zoom: 67%;" />

3. **父元素要有定位**：元素将依据最近的已经定位（**相对**、**绝对**、**固定定位**）的父元素（祖先）进行定位。

<img src="https://could-img.oss-cn-hangzhou.aliyuncs.com/202208211102202.png" alt="image-20220821110247256" style="zoom: 60%;" />

**绝对定位的特点总结**：（务必记住）

1. 如果**没有祖先元素**或者**祖先元素没有定位**，则以浏览器为基准定位（Document 文档）。

2. 如果祖先元素有定位（相对、绝对、固定定位），则以最近一级的有定位祖先元素为参考点移动位置。

3. 绝对定位**不再占有原先的位置**。所以绝对定位是脱离标准流的。（脱标）

##### 定位口诀 —— **子绝父相**

这句话的意思是：**子级是绝对定位的话，父级要用相对定位。**

因为父级需要占有位置，因此是相对定位， 子盒子不需要占有位置，则是绝对定位：

​	①子级绝对定位，不会占有位置，可以放到父盒子里面的任何一个地方，不会影响其他的兄弟盒子。

​	②父盒子需要加定位限制子盒子在父盒子内显示。

​	③父盒子布局时，需要占有位置，因此父亲只能是相对定位。

当然，子绝父相不是永远不变的，如果父元素不需要占有位置，**子绝父绝**也会遇到。

### 3.4 固定定位(fixed)⭐

**固定定位**是元素固定于**浏览器可视区**的位置。（认死理型）  

 主要使用场景： 可以在浏览器页面滚动时元素的位置不会改变。

```
 选择器 { 
 	position: fixed; 
 }
```

固定定位的特点：（务必记住）：

- 以浏览器的可视窗口为参照点移动元素。

- 跟父元素没有任何关系
- 不随滚动条滚动。
- **完全脱标**—— **不占有原先的位置**。
- 只认**浏览器的可视窗口** —— `浏览器可视窗口 + 边偏移属性` 来设置元素的位置；

<img src="https://img-blog.csdnimg.cn/img_convert/2a71559b7a059f25aad108d7757720f7.png" alt="固定定位案例" style="zoom: 50%;" />

**提示**：IE 6 等低版本浏览器不支持固定定位。

**案例**：贴着版心右侧对齐。

- 小盒子添加固定定位；

- 让小盒子` left: 50%`（可视化窗口的一半）。

- 让小盒子 `margin-left: 版心宽度的一半距离`。  多走版心宽度的一半位置。

<img src="https://could-img.oss-cn-hangzhou.aliyuncs.com/202210142337723.png" alt="image-20220822094644699" style="zoom: 33%;" />                     <img src="https://could-img.oss-cn-hangzhou.aliyuncs.com/202210142337465.png" alt="image-20220822094704325" style="zoom: 35%;" />     <img src="https://img-blog.csdnimg.cn/img_convert/6fe7566e2983dbf306fb1b1d93e58d30.png" alt="1571389241926" style="zoom:34%;" />

```html
<style>
    .w {
        width: 800px;
        height: 1400px;
        background-color: pink;
        margin: 0 auto;
    }

    .fixed {
        position: fixed;
        /* 1. 走浏览器宽度的一半 */
        left: 50%;
        /* 2. 利用margin 走版心盒子宽度的一半距离 */
        margin-left: 405px;
        width: 50px;
        height: 150px;
        background-color: skyblue;
    }
</style>
</head>

<body>
    <div class="fixed"></div>
    <div class="w">版心盒子 800像素</div>
</body>
```

### 3.5 粘性定位(sticky)

粘性定位``Sticky`可以被认为是**相对定位**和**固定定位**的混合。

```
 选择器 { 
     position: sticky; 
     top: 10px; 
 }
```

粘性定位的特点：

- 以**浏览器的可视窗口**为参照点移动元素（固定定位特点）
- 粘性定位**占有**原先的位置（相对定位特点）
- 必须添加 top 、left、right、bottom **其中一个**才有效
- 跟页面滚动搭配使用。 兼容性较差，IE 不支持。

### 3.6 定位总结

| **定位模式**      | **是否脱标**     | **移动位置**           | **是否常用**             |
| ----------------- | ---------------- | ---------------------- | ------------------------ |
| static  静态定位  | 否(占有位置)     | 不能使用边偏移         | 很少                     |
| relative 相对定位 | 否 (占有位置)    | 相对于**自身**位置移动 | 基本单独使用             |
| absolute 绝对定位 | 是（不占有位置） | 带有**定位**的**父级** | 要和定位父级元素搭配使用 |
| fixed 固定定位    | 是（不占有位置） | 浏览器可视区           | 单独使用，不需要父级     |
| sticky 粘性定位   | 否   (占有位置)  | 浏览器可视区           | ...                      |

注意：

- **边偏移**需要和**定位模式**联合使用，**单独使用无效**；
- `top` 和 `bottom` 不要同时使用；
- `left` 和 `right` 不要同时使用。

## 4.堆叠顺序（z-index）

- 在使用**定位**布局时，可能会**出现盒子重叠的情况**。应用 `z-index` 层叠等级属性可以**调整盒子的堆叠顺序**（轴）。

  ```
  选择器 { 	z-index: 1; }
  ```

- `z-index` 的特性如下：

  1. **属性值**：正整数、负整数或 0，默认值是 0，**数值越大，盒子越靠上**；	
  2. 如果属性值相同，则按照书写顺序，**后来居上**；
  3. 数字后面**不能加单位**。

  **注意**：`z-index` 只能应用于相对定位**relative**、绝对定位**absolute**和固定定位**fixed**的元素，其他**标准流**、**浮动**和**静态定位**无效。

![zindex示意图](https://img-blog.csdnimg.cn/img_convert/54153bb85e6a08b3c6a12ad0a42e7ba6.png)

## 5. 定位(position)的拓展

### 5.1 绝对定位absolute的盒子居中

> **注意**：加了**绝对定位/固定定位的盒子**不能通过设置 `margin: auto` 设置**水平居中**。
>
> 但是可以通过以下计算方法实现水平和垂直居中，可以按照下图的方法：

![绝对定位水平居中](https://img-blog.csdnimg.cn/img_convert/2f86ba1b59cf8f4bb52237b7ecba036c.png)

1. `left: 50%;`：让**盒子的左侧**移动到**父级元素的水平中心位置**；
2. `margin-left: -100px;`：让盒子**向左**移动**自身宽度的一半**。

**盒子居中定位示意图**

![绝对定位居中示意图](https://img-blog.csdnimg.cn/img_convert/2af3d991ab1e02d50d70d8c31490109d.png)

### 5.2 定位特殊特性

绝对定位和固定定位也和浮动类似。

1. 行内元素添加绝对或者固定定位，可以直接设置高度和宽度。

2. 块级元素添加绝对或者固定定位，如果不给宽度或者高度，默认大小是内容的大小。

   - 可以用浮动 float 默认转换为行内块（浮动是脱标的）

   - 绝对定位和固定定位也和浮动类似， 默认转换为行内块。

所以说， 一个**行内**的盒子，如果加了**浮动**、**固定定位**和**绝对定位**，不用转换，就可以给这个盒子**直接设置宽度和高度**等。

<img src="https://could-img.oss-cn-hangzhou.aliyuncs.com/202210150910517.png" alt="image-20221015085808230" style="zoom:50%;" />

### 5.3 脱标的盒子不会触发外边距塌陷

浮动元素、绝对定位(固定定位）元素的都不会触发外边距合并的问题 （之前用padding border overflow解决的）。

也就是说，我们给盒子改为了浮动或者定位，就不会有垂直**外边距合并的问题**了。

### 5.4 绝对定位（固定定位）会完全压住盒子

浮动元素不同，只会压住它下面标准流的盒子，但是**不会压住下面标准流盒子里面的文字**

浮动之所以不会压住文字，因为浮动产生的目的最初是为了做文字环绕效果的。 文字会围绕浮动元素

但是绝对定位（固定定位） 会压住下面标准流所有的内容。

<img src='https://could-img.oss-cn-hangzhou.aliyuncs.com/202210150903821.png' style="zoom: 80%;" >

## 6. 综合案例 - 轮播图⭐

<img src='https://could-img.oss-cn-hangzhou.aliyuncs.com/202210150858028.png' width='600'>

### 6.1 布局分析

![1571397019689](https://img-blog.csdnimg.cn/img_convert/efa00cffc1cb0943b8a2d812fbf969bd.png)



### 6.2 步骤

1. 大盒子我们类名为：  tb-promo      淘宝广告

2. 里面先放一张图片。

3. 左右两个按钮 用链接就好了。   左箭头 prev    右箭头  next   

   ```css
   左按钮样式 （border-radius：左上，右上，右下，左下），
   右按钮定位  提取左右按钮共同的样式代码（并集选择器）
   ```

4. 底侧小圆点ul 继续做。 类名为 promo-nav     

   ```css
   中间长方形椭圆 ul的定位（水平居中，离底部15px）  
   长方形需要五个小圆点，ul无序列表，li浮动，椭圆中小圆点的样式
   ```

### 6.3 知识点：圆角矩形设置4个角

圆角矩形可以为4个角分别设置圆度， 但是是有顺序的

```
border-top-left-radius:20px;border-top-right-radius:20px;border-bottom-right-radius:20px;border-bottom-left-radius:20px;
```

* 如果4个角，数值相同

~~~css
border-radius: 15px;
~~~

* 里面数值不同，我们也可以按照简写的形式，具体格式如下:

~~~css
border-radius: 左上角 右上角  右下角  左下角;
~~~

还是遵循的顺时针。

### 6.4 代码参考

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>淘宝轮播图做法</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        li {
            list-style: none;
        }

        .tb-promo {
            position: relative;
            width: 520px;
            height: 280px;
            background-color: pink;
            margin: 100px auto;
        }

        .tb-promo img {
            width: 520px;
            height: 280px;
        }

        /* 并集选择器可以集体声明相同的样式 */
        .prev,
        .next {
            position: absolute;
            /* 绝对定位的盒子垂直居中 */
            top: 50%;
            margin-top: -15px;
            /* 加了绝对定位的盒子可以直接设置高度和宽度 */
            width: 20px;
            height: 30px;
            background: rgba(0, 0, 0, .3);
            text-align: center;
            line-height: 30px;
            color: #fff;
            text-decoration: none;
        }

        .prev {
            left: 0;
            /* border-radius: 15px; */
            border-top-right-radius: 15px;
            border-bottom-right-radius: 15px;
        }

        .next {
            /* 如果一个盒子既有left属性也有right属性，则默认会执行 left属性 同理  top  bottom  会执行 top */
            right: 0;
            /* border-radius: 15px; */
            border-top-left-radius: 15px;
            border-bottom-left-radius: 15px;
        }

        .promo-nav {
            position: absolute;
            bottom: 15px;
            left: 50%;
            margin-left: -35px;
            width: 70px;
            height: 13px;
            /* background-color: pink; */
            background: rgba(255, 255, 255, .3);
            border-radius: 7px;
        }

        .promo-nav li {
            float: left;
            width: 8px;
            height: 8px;
            background-color: #fff;
            border-radius: 50%;
            margin: 3px;
        }

        /* 不要忘记选择器权重的问题 */
        .promo-nav .selected {
            background-color: #ff5000;
        }
    </style>
</head>

<body>
    <div class="tb-promo"> <img src="images/tb.jpg" alt=""> <!-- 左侧按钮箭头 --> <a href="#" class="prev"> &lt; </a>
        <!-- 右侧按钮箭头 --> <a href="#" class="next"> &gt; </a> <!-- 小圆点 -->
        <ul class="promo-nav">
            <li class="selected"></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
</body>

</html> 
```