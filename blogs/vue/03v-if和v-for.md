---
title: 03 v-if 和 v-for
date: 2021-03-03
categories: 
 - Vue
---

## 1. v-if 和 v-for

`v-if` 指令用于条件性地渲染一块内容。这块内容只会在指令的表达式返回 `true`值的时候被渲染。

`v-for` 指令基于一个数组来渲染一个列表。`v-for` 指令需要使用 `item in items` 形式的特殊语法，其中 `items` 是源数据数组或者对象，而 `item` 则是被迭代的数组元素的别名。

在 `v-for` 的时候，建议设置`key`值，并且保证每个`key`值是独一无二的，这**便于`diff`算法进行优化**。

两者在用法上：

```html
<Modal v-if="isShow" />

<li v-for="item in items" :key="item.id">
    {{ item.label }}
</li>
```

## 2. 优先级

在**vue2**中，`v-for`的优先级是高于`v-if`，把它们放在一起，输出的渲染函数中可以看出会先执行循环再判断条件，哪怕我们只渲染列表中一小部分元素，也得在每次重渲染的时候遍历整个列表，这会比较浪费；另外需要注意的是在**vue3**中则完全相反，`v-if`的优先级高于`v-for`，所以`v-if`执行时，它调用的变量还不存在，就会导致异常。

## 3. 注意事项

1. 永远不要把 `v-if` 和 `v-for` 同时用在同一个元素上，带来**性能方面的浪费**（每次**渲染**都会**先循环再进行条件判断**）
2. 如果无法避免出现这种情况，则在外层嵌套`template`（页面渲染不生成`dom`节点），在这一层进行v-if判断，然后在内部进行v-for循环

```js
<template v-if="isShow">
    <p v-for="item in items">
</template>
```

3. 如果条件出现在循环内部，可通过计算属性`computed`提前过滤掉那些不需要显示的项

```js
computed: {
    items: function() {
      return this.list.filter(function (item) {
        return item.isShow
      })
    }
}
```



