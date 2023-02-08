(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{567:function(s,a,t){"use strict";t.r(a);var n=t(6),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"_1-less基础"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-less基础"}},[s._v("#")]),s._v(" 1. Less基础")]),s._v(" "),t("p",[s._v("CSS 是一门非程序式语言，没有变量、函数、"),t("code",[s._v("SCOPE")]),s._v("（作用域）等概念。")]),s._v(" "),t("ul",[t("li",[s._v("CSS 需要书写大量看似没有逻辑的代码，CSS 冗余度是比较高的。")]),s._v(" "),t("li",[s._v("不方便维护及扩展，不利于复用。")]),s._v(" "),t("li",[s._v("CSS 没有很好的计算能力")]),s._v(" "),t("li",[s._v("非前端开发工程师来讲，往往会因为缺少 CSS 编写经验而很难写出组织良好且易于维护的 CSS 代码项目。")])]),s._v(" "),t("p",[t("strong",[s._v("Less")]),s._v(" （"),t("code",[s._v("Leaner Style Sheets")]),s._v(" 的缩写） 是一门 CSS 扩展语言，也称为"),t("strong",[s._v("CSS预处理器")]),s._v("。")]),s._v(" "),t("ul",[t("li",[s._v("做为 CSS 的一种形式的扩展，它并没有减少 CSS 的功能，而是在现有的 CSS 语法上，为CSS加入程序式语言的特性。")]),s._v(" "),t("li",[s._v("它在 CSS 的语法基础之上，引入了变量，"),t("code",[s._v("Mixin")]),s._v("（混入），运算以及函数等功能，大大简化了 CSS 的编写，并且降低了 CSS 的维护成本，就像它的名称所说的那样，Less 可以让我们用更少的代码做更多的事情。")]),s._v(" "),t("li",[s._v("Less中文网址： http://lesscss.cn/")]),s._v(" "),t("li",[s._v("Less 是一门 CSS 预处理语言，它扩展了CSS的动态特性。")])]),s._v(" "),t("p",[s._v("常见的CSS预处理器："),t("code",[s._v("Sass")]),s._v("，"),t("code",[s._v("Less")]),s._v("，"),t("code",[s._v("Stylus")])]),s._v(" "),t("h2",{attrs:{id:"_2-less安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-less安装"}},[s._v("#")]),s._v(" 2. Less安装")]),s._v(" "),t("p",[s._v("安装：(如果使用"),t("code",[s._v("vscode")]),s._v("无需安装"),t("code",[s._v("less")]),s._v(")")]),s._v(" "),t("div",{staticClass:"language-nginx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-nginx"}},[t("code",[s._v("npm install -g less\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("查看版本：")]),s._v(" "),t("div",{staticClass:"language-nginx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-nginx"}},[t("code",[s._v("lessc -v \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("我们首先新建一个后缀名为less的文件， 在这个less文件里面书写less语句。")]),s._v(" "),t("h2",{attrs:{id:"_3-less变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-less变量"}},[s._v("#")]),s._v(" 3. Less变量")]),s._v(" "),t("div",{staticClass:"language-less line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-less"}},[t("code",[s._v("@变量名"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 值"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("变量命名规范")]),s._v(" "),t("ul",[t("li",[s._v("必须有"),t("code",[s._v("@")]),s._v("为前缀")]),s._v(" "),t("li",[s._v("不能包含特殊字符")]),s._v(" "),t("li",[s._v("不能以数字开头")]),s._v(" "),t("li",[s._v("大小写敏感")])]),s._v(" "),t("div",{staticClass:"language-less line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-less"}},[t("code",[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")])]),s._v(" pink"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("变量是指没有固定的值，可以改变的。因为我们CSS中的一些颜色和数值等经常使用。")]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token atrule"}},[t("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@test")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" pink"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("//直接使用\nbody")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token atrule"}},[t("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@test")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("a:hover")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token atrule"}},[t("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@test")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h2",{attrs:{id:"_4-less编译"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-less编译"}},[s._v("#")]),s._v(" 4. Less编译")]),s._v(" "),t("p",[s._v("我们需要把我们的 "),t("code",[s._v("less")]),s._v("文件，编译生成为"),t("code",[s._v("css")]),s._v("文件，这样我们的"),t("code",[s._v("html")]),s._v("页面才能使用。")]),s._v(" "),t("p",[s._v("我们可以在 "),t("code",[s._v("vscode")]),s._v("安装 "),t("code",[s._v("Easy LESS")]),s._v(" 插件来把 less 文件编译为 "),t("code",[s._v("css")]),s._v("。安装完毕插件，重新加载下"),t("code",[s._v("vscode")]),s._v("。只要保存一下"),t("code",[s._v("less")]),s._v("文件，会自动生成"),t("code",[s._v("css")]),s._v("文件。")]),s._v(" "),t("h2",{attrs:{id:"_5-less嵌套"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-less嵌套"}},[s._v("#")]),s._v(" 5. Less嵌套")]),s._v(" "),t("p",[s._v("我们经常用到选择器的嵌套")]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".header .logo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 300px"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("div",{staticClass:"language-less line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-less"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".header")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".logo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 300px"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("如果遇见 （交集 | 伪类 | 伪元素选择器）")]),s._v(" "),t("ul",[t("li",[s._v("内层选择器的前面没有 "),t("code",[s._v("&")]),s._v(" 符号，则它被解析为父选择器的后代")]),s._v(" "),t("li",[s._v("如果有 "),t("code",[s._v("&")]),s._v(" 符号，它就被解析为父元素自身或父元素的伪类")])]),s._v(" "),t("div",{staticClass:"language-less line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-less"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("a:hover")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" red"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("div",{staticClass:"language-less line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-less"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("a")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("&:hover")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" red"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("&::before")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("content")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h2",{attrs:{id:"_6-less运算"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-less运算"}},[s._v("#")]),s._v(" 6. Less运算")]),s._v(" "),t("p",[s._v("任何数字、颜色或者变量都可以参与运算。就是Less提供了加（+）、减（-）、乘（*）、除（/）算术运算。")]),s._v(" "),t("div",{staticClass:"language-less line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-less"}},[t("code",[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@width"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")])]),s._v(" 10px "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" 5"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("border")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@width")]),s._v(" solid red"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 生成的css */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("border")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 15px solid red"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* Less甚至还可以这样 */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@width")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" 5"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" 2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("p",[s._v("注意：")]),s._v(" "),t("ul",[t("li",[s._v("乘号（"),t("code",[s._v("*")]),s._v("）和除号（"),t("code",[s._v("/")]),s._v("）的写法")]),s._v(" "),t("li",[s._v("运算符中间左右有个空格隔开 "),t("code",[s._v("1px + 5")])]),s._v(" "),t("li",[s._v("对于两个不同的单位的值之间的运算，运算结果的值取第一个值的单位")]),s._v(" "),t("li",[s._v("如果两个值之间只有一个值有单位，则运算结果就取该单位")])])])}),[],!1,null,null,null);a.default=e.exports}}]);