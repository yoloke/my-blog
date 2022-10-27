---
title: 15 数据类型判断
date: 2021-02-15
categories: 
 - JavaScript
---

JavaScript判断数据类型的方法大致有以下几种：

1. **typeof**
2. **instanceof**
3. **constructor**

## 1. typeof

`typeof` 操作符返回一个字符串，表示未经计算的操作数的类型

```rust
typeof 1 // 'number'
typeof '1' // 'string'
typeof undefined // 'undefined'
typeof true // 'boolean'
typeof Symbol() // 'symbol'
typeof null // 'object'
typeof [] // 'object'
typeof {} // 'object'
typeof console // 'object'
typeof console.log // 'function'
```

从上面例子，前6个都是基础数据类型。虽然`typeof null`为`object`，但这只是`JavaScript` 存在的一个悠久 `Bug`，不代表`null`就是引用数据类型，并且`null`本身也不是对象

所以，`null`在 `typeof`之后返回的是有问题的结果，不能作为判断`null`的方法。如果你需要在 `if` 语句中判断是否为 `null`，直接通过`=== null`来判断就好

同时，可以发现引用类型数据，用`typeof`来判断的话，除了`function`会被识别出来之外，其余的都输出`object`

如果我们想要判断一个变量是否存在，可以使用`typeof`：(不能使用`if(a)`， 若`a`未声明，则报错)

```js
if(typeof a != 'undefined'){
    //变量存在
}
```

## 2. instanceof

`instanceof `运算符顺着原型链去找，直到找到相同的**原型对象**，返回`true`，否则为`false`

```js
var num = 123;
var str = 'abcdef';
var bool = true;
var arr = [1, 2, 3, 4];
var obj = {name:'wenzi', age:25};
var func = function(){ console.log('this is function'); }
var und = undefined;
var nul = null;
var date = new Date();
var reg = /^[a-zA-Z]{5,20}$/;
var error= new Error();
```

```javascript
num   instanceof Number,  // false
str   instanceof String,  // false
bool  instanceof Boolean, // false
arr   instanceof Array,   // true--注意
arr   instanceof Object,  // true--注意
obj   instanceof Object,  // true--注意
func  instanceof Function, // true
und   instanceof Object,   // false
nul   instanceof Object,   // false
date  instanceof Date,     // true
reg   instanceof RegExp,    // true
error instanceof Error     // true
```

从结果可以看出`instanceof`不能判断值类型，但是引用类型可以，值得注意的是`arr`和`obj`在`instanceof Object`的时候的值都是`true`，这就导致判断是对象时不准确。

## 3. typeof、instanceof区别

`typeof`与`instanceof`都是判断数据类型的方法，区别如下：

- `typeof`会返回一个变量的基本类型，`instanceof`返回的是一个布尔值
- `instanceof` 可以准确地判断复杂引用数据类型，但是不能正确判断基础数据类型
- 而`typeof` 也存在弊端，它虽然可以判断基础数据类型（`null` 除外），但是引用数据类型中，除了`function` 类型以外，其他的也无法判断

可以看到，上述两种方法都有弊端，并不能满足所有场景的需求

## 4. Object.prototype.toString

`Object.prototype.toString`，调用该方法，统一返回格式`“[object Xxx]”`的字符串

```js
Object.prototype.toString.call(num),   // '[object Number]'
Object.prototype.toString.call(str),   // '[object String]'
Object.prototype.toString.call(bool),  // '[object Boolean]'
Object.prototype.toString.call(arr),   // '[object Array]'
Object.prototype.toString.call(obj),   // '[object Object]'
Object.prototype.toString.call(func),  // '[object Function]'
Object.prototype.toString.call(und),   // '[object Undefined]'
Object.prototype.toString.call(nul),   // '[object Null]'
Object.prototype.toString.call(date),  // '[object Date]'
Object.prototype.toString.call(reg),   // '[object RegExp]'
Object.prototype.toString.call(error)  // '[object Error]'
```

`ECMA`里规范定义了`Object.prototype.toString`的行为：首先，取得对象的一个内部属性`[[Class]]`，然后依据这个属性，返回一个类似于`[object Array]`的字符串作为结果（看过`ECMA`标准的应该都知道，`[[]]`用来表示语言内部用到的、外部不可直接访问的属性，称为“内部属性”）。利用这个方法，再配合call，我们可以取得任何对象的内部属性`[[Class]]`，然后把类型检测转化为字符串比较，以达到我们的目的。

了解了`toString`的基本用法，下面就实现一个全局通用的数据类型判断方法：

```js
function getType(obj){
  let type  = typeof obj;
  if (type !== "object") {    // 先进行typeof判断，如果是基础数据类型，直接返回
    return type;
  }
  // 对于typeof返回结果是object的，再进行如下的判断，正则返回结果
  return Object.prototype.toString.call(obj).replace(/^\[object (\S+)\]$/, '$1'); 
}
```

使用如下：

```js
getType([])     // "Array" typeof []是object，因此toString返回
getType('123')  // "string" typeof 直接返回
getType(window) // "Window" toString返回
getType(null)   // "Null"首字母大写，typeof null是object，需toString来判断
getType(undefined)   // "undefined" typeof 直接返回
getType()            // "undefined" typeof 直接返回
getType(function(){}) // "function" typeof能判断，因此首字母小写
getType(/123/g)      //"RegExp" toString返回
```

## 4. constructor

`constructor`本来是原型对象上的属性，指向构造函数。但是根据实例对象寻找属性的顺序，若实例对象上没有实例属性或方法时，就去原型链上寻找，因此，实例对象也是能使用`constructor`属性的。

```ini
function Person(){}
var Tom = new Person();
// undefined和null没有constructor属性
console.log(
    Tom.constructor==Person,
    num.constructor==Number,
    str.constructor==String,
    obj.constructor==Boolean,
    arr.constructor==Array,
    json.constructor==Object,
    func.constructor==Function,
    date.constructor==Date,
    reg.constructor==RegExp,
    error.constructor==Error
);
// 所有结果均为true
```

表面上看很完美，但是有两个缺点：

1. `undefined`和`null`没有`constructor`属性，所以判断时代码可能会报错--这很致命，会导致代码运行不下去，所以只有在确定待判断的值不是`undefined`和`null`才能使用
2. 由于`constructor`属性是可以变更的，也会导致检测出的结果不正确

