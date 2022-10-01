---
title: JS类型转换
date: 2022-7-20
categories: 
 - JavaScript
---

## JS 类型转换
JS 的类型转换一共分两种：显示类型转换 和 隐式类型转换。

### 显示类型转换
显示类型转换比较简单，通过 JS 提供的一些函数，可以直接进行转换

- 转化为 `Number` 类型：`Number() / parseFloat() / parseInt()`
- 转化为 `String` 类型：`String() / toString()`
- 转化为 `Boolean` 类型: `Boolean()`

注意点:

- Number类定义的toString()方法可以接受表示转换基数的可选参数，如果不指定此参数，转换规则将是基于十进进制。


- js中对象到字符串的转换经过了如下步骤：

  - 如果对象具有toString()方法，则调用这个方法。如果它返回一个基本类型值，js将这个值转换为字符串，并返回这个字符串。
  - 如果对象没有toString()方法，或者这个方法返回的不是一个基本类型值，那么js将调用valueOf()方法。如果存在这个方法，则调用，如果返回值是基本类型值，转换为字符串并返回
否则，js无法从toString()或valueOf()获得一个基本类型值，此时将会抛出类型错误异常



undefined、null、false、+0、-0、NaN、""  只有这些 toBoolean()  是 false ，其余都为 true


Number类定义的toString()方法可以接受表示转换基数的可选参数，如果不指定此参数，转换规则将是基于十进进制。


ToPrimitive将值转为原始值
还有一个方法要介绍一下，在下文中会用到，ToPrimitive将接收到的参数转化为原始类型：
ToPrimitive(data, PreferredType?)
复制代码input是要转换的值， PreferredType 是可选参数，ToPrimitive  运算符把其值参数转换为非对象类型。如果对象有能力被转换为不止一种原语类型（接受参数 number string ），可以使用可选的 PreferredType 来选择类型。

在执行 ToPrimitive(data,preferredType) 时如果第二个参数为空并且 data 为 Date 的事例时，此时preferredType 会被设置为String，其他情况下preferredType都会被设置为 Number
如果 preferredType 为 Number，ToPrimitive执行过程如下：1. 如果data为原始值，直接返回；2. 否则调用 data.valueOf()，如果执行结果是原始值，返回之；3. 否则调用 data.toString()，如果执行结果是原始值，返回之；4. 否则抛异常。
如果 preferredType 为String，将上面的第2步和第3步调换，即：1. 如果data为原始值，直接返回；2. 否则调用 data.toString()，如果执行结果是原始值，返回之；3. 否则调用 data.valueOf()，如果执行结果是原始值，返回之；4. 否则抛异常。
