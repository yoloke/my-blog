---
title: 11 this指向
date: 2021-02-11
categories:
  - JavaScript
---

## 1. this 的指向

- 以函数的形式调用时，this 永远都是 window
- 以方法的形式调用时，this 就是调用方法的对象
- 以构造函数的形式调用时，this 就是新创建的对象
- 使用 call 和 apply 调用时，this 就是指定的那个对象

在全局作用域中 this 代表 window

> `this` 就是一个对象，`this` 是在函数被调用时发生的绑定，它指向什么完全取决于函数在哪里被调用。

**1、以函数的形式调用，this 永远都是 window**

```javascript
var name = "windowsName";
function a() {
  var name = "Cherry";

  console.log(this.name); // windowsName

  console.log("inner:" + this); // inner: Window
}
a();
console.log("outer:" + this); // outer: Window
```

调用 `a` 的地方 `a()`，前面没有调用的对象那么就是全局对象 `window`，这就相当于是 `window.a()`；

注意，这里我们没有使用严格模式，如果使用严格模式的话，全局对象就是 `undefined`，那么就会报错 `Uncaught TypeError: Cannot read property 'name' of undefined`。


**2、以方法的形式调用时，this 就是调用方法的对象**

**例 1：**

```javascript
var name = "windowsName";
var a = {
  name: "Cherry",
  fn: function() {
    console.log(this.name); // Cherry
  },
};
a.fn();
```

这里定义一个对象 `a`，对象 `a` 有一个属性`name`和一个方法`fn`。

然后对象 `a` 通过 `.` 方法调用了其中的 fn 方法。

**例 2：**

```javascript
var name = "windowsName";
var a = {
  name: "Cherry",
  fn: function() {
    console.log(this.name); // Cherry
  },
};
window.a.fn();
```

最后调用 fn()的仍然是对象 a。

**例 3：**

```javascript
var name = "windowsName";
var a = {
  fn: function() {
    console.log(this.name); // undefined
  },
};
window.a.fn();
```

输出 `undefined` ：调用 fn 的是 a 对象，也就是说 fn 的内部的 this 是对象 a，而对象 a 中没有 name 这个属性，也不会继续向上一个对象寻找 `this.name`，而是直接输出 `undefined`。

**例 4：**

```js
var name = "windowsName";
var a = {
  fn: function() {
    console.log(this.name); // windowsName
  },
};
var f = a.fn;
f();
```

为什么是 `windowsName`，这是因为虽然将 a 对象的`fn`方法赋值给变量 `f` 了，但是没有调用，**this 指向最后调用它的那个对象**，由于一开始`f`并没有调用，所以 `fn()` 最后仍然是被 window 调用的。所以 this 指向的也就是 window。

**例 5：**

```javascript
var name = "windowsName";

function fn() {
  var name = "Cherry";
  innerFunction();
  function innerFunction() {
    console.log(this.name); // windowsName
  }
}
fn();
```

这里的`innerFunction()`的调用：是一个函数调用（它就是作为一个函数调用的，没有挂载在任何对象上，所以对于没有挂载在任何对象上的函数，在非严格模式下 this 就是指向 window 的）

对于**回调函数**中的`this`对象。

- **setTimeout函数**

```js
//普通`setTimeout`函数： 100ms后执行时，this指向window对象
function foo() {
	setTimeout(function() {
		console.log(this);
		console.log("id: ",this.id);
		}, 100);
	}
	var id=21;
foo();                   //this指向window对象， 21     
 
foo.call({id:42});        //this指向window对象，21 
-------------------------------------------------------------
//箭头setTimeout函数： 
//箭头函数：this是在定义时生效的。this总是指向函数定义生效时所在的对象。
function foo() {
	setTimeout(() =>{
		 console.log(this);
		 console.log("id: ",this.id);
	}, 100);
}
 var id=21;
 foo();           //this指向window id=21
 foo.call({id:42});       //this指向{id：42}对象 id=42
```

- **事件处理函数**

```js
//普通处理函数
var handler = {
    id: "123456",
    init: function () {
        document.addEventListener(
            "click",
            function (e) {
                this.doSomething(e.type); //this指向window对象。所以会报错：
                // Uncaught TypeError: this.doSomething is not a function at HTMLDocument.<anonymous> 
            },
            false
        );
    },
    doSomething: function (type) {
        console.log("handler" + type + "for" + this.id);
    },
};
//
handler.init();
-------------------------------------------------------------------------------
// 箭头函数：
var handler = {
    id: "123456",
    init: function () {
        document.addEventListener(
            "click",
            (e) => {
                this.doSomething(e.type); //this指向handler
                //console.log(this); // {id: '123456', init: ƒ, doSomething: ƒ}
            },
            false
        );
    },
    doSomething: function (type) {
        console.log("handler " + type + " for " + this.id);// handler click for 123456
    },
};
handler.init();
```

**总结：**

对于回调函数中的`this`对象。对于普通函数，`this`指向调用时所在的对象（即`window`对象）。对于箭头函数，`this`指向**定义**生效时所在的对象。



**3、以构造函数的形式调用时，this 就是新创建的对象**

```js
// 构造函数:
function myFunction(arg1, arg2) {
  this.firstName = arg1;
  this.lastName = arg2;
}

// This    creates a new object
var a = new myFunction("Li", "Cherry");
a.lastName; // 返回 "Cherry"
```

**new 的过程：**

```js
var a = new myFunction("Li","Cherry");

new myFunction{
    var obj = {};
    obj.__proto__ = myFunction.prototype;
    var result = myFunction.call(obj,"Li","Cherry");
    return typeof result === 'obj'? result : obj;
}
```

- 创建一个空对象 obj；
- 将新创建的空对象的隐式原型指向其构造函数的显示原型。
- 使用 call 改变 this 的指向
- 如果无返回值或者返回一个非对象值，则将 obj 返回作为新对象；
- 如果返回值是一个新对象的话那么直接直接返回该对象。

所以我们可以看到，在 new 的过程中，我们是使用 call 改变了 this 的指向。

**4、使用 call 和 apply 调用时，this 就是指定的那个对象**

## 2. 改变 this 的指向

```javascript
var name = "windowsName";

var a = {
  name: "Cherry",

  func1: function() {
    console.log(this.name);
  },

  func2: function() {
    setTimeout(function() {
      this.func1();
    }, 100);
  },
};

a.func2(); // this.func1 is not a function
```

在不使用箭头函数的情况下，是会报错的，因为最后调用 `setTimeout` 的对象是 `window`，但是在 `window`中并没有 `func1 函数`。

所以需要改变 this 指向，改变 this 的指向总结有以下几种方法：

- 使用 ES6 的箭头函数
- 在函数内部使用 `_this = this`
- 使用 `apply`、`call`、`bind`
- new 实例化一个对象

### 2.1 箭头函数

箭头函数中没有`this` 绑定，必须通过查找**作用域链**来决定其值，如果箭头函数被非箭头函数包含，则 this 绑定的是最近一层非箭头函数的 this，否则，`this` 为`undefined`。

```javascript
var name = "windowsName";
var a = {
  name: "Cherry",

  func1: function() {
    console.log(this.name);
  },

  func2: function() {
    setTimeout(() => {
      this.func1();
    }, 100);
  },
};
a.func2(); // Cherry
```

### 2.2 \_this = this

在函数内部使用 `_this = this`

如果不使用 ES6，那么这种方式应该是最简单的不会出错的方式了，我们是先将调用这个函数的对象保存在变量 `_this` 中，然后在函数中都使用这个 `_this`，这样 `_this` 就不会改变了。

```javascript
var name = "windowsName";

var a = {
  name: "Cherry",

  func1: function() {
    console.log(this.name);
  },

  func2: function() {
    var _this = this;
    setTimeout(function() {
      _this.func1();
    }, 100);
  },
};

a.func2(); // Cherry
```

这个例子中，在 func2 中，首先设置 `var _this = this;`，这里的 `this` 是调用 `func2` 的对象 a，为了防止在 `func2` 中的`setTimeout`被`window` 调用而导致的在 `setTimeout`中的`this`为`window`。我们将 `this(指向变量 a)` 赋值给一个变量 `_this`，这样，在 `func2` 中我们使用 `_this` 就是指向对象`a`了。

### 2.3 使用 apply、call、bind

使用 apply、call、bind 函数也是可以改变 this 的指向的。

- apply 方法接收两个参数：一个是 this 绑定的对象，一个是参数数组。
- call 方法接收两个参数：第一个是 this 绑定的对象，后面的其余参数是传入函数执行的参数。也就是说，在使用 call() 方法时，传递给函数的参数必须逐个列举出来。
- bind 方法通过传入一个对象，返回一个 this 绑定了传入对象的新函数。这个函数的 this 指向除了使用 new 时会被改变，其他情况下都不会改变。

**apply**

```javascript
var a = {
  name: "Cherry",

  func1: function() {
    console.log(this.name);
  },

  func2: function() {
    setTimeout(
      function() {
        this.func1();
      }.apply(a),
      100
    );
  },
};

a.func2(); // Cherry
```

**使用 call**

```javascript
var a = {
  name: "Cherry",

  func1: function() {
    console.log(this.name);
  },

  func2: function() {
    setTimeout(
      function() {
        this.func1();
      }.call(a),
      100
    );
  },
};

a.func2(); // Cherry
```

**使用 bind**

```javascript
var a = {
  name: "Cherry",

  func1: function() {
    console.log(this.name);
  },

  func2: function() {
    setTimeout(
      function() {
        this.func1();
      }.bind(a)(),
      100
    );
  },
};

a.func2(); // Cherry
```

## 3. appll call bind 的区别

`apply`和`call`基本类似，他们的区别只是传入的参数不同。

`apply`语法：

```css
fun.apply(thisArg, [argsArray])
```

`call`的语法：

```css
fun.call(thisArg[, arg1[, arg2[, ...]]])
```

所以 `apply`和`call`的区别是`call`方法接受的是若干个参数列表，而 `apply`接收的是一个包含多个参数的数组。

```css
var a ={
    name : "Cherry",
        fn : function (a,b) {
            console.log( a + b)
    }
}

var b = a.fn;
b.apply(a,[1,2])  // 3
    var a ={
        name : "Cherry",
        fn : function (a,b) {
            console.log( a + b)
        }
    }

    var b = a.fn;
    b.call(a,1,2)    // 3
```

**bind:**

> [MDN](https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FJavaScript%2FReference%2FGlobal_Objects%2FFunction%2Fbind) 上的文档说明：
>
> `bind()`方法创建一个新的函数, 当被调用时，将其`this`关键字设置为提供的值，在调用新函数时，在任何提供之前提供一个给定的参数序列。

```css
var a ={
    name : "Cherry",
        fn : function (a,b) {
            console.log( a + b)
    }
}

var b = a.fn;
b.bind(a,1,2)
```

所以我们可以看出，`bind` 是创建一个新的函数，我们必须要手动去调用：

```css
var a ={
    name : "Cherry",
        fn : function (a,b) {
            console.log( a + b)
    }
}

var b = a.fn;
b.bind(a,1,2)()    // 3
```

## 4. 题目

**下面代码的输出是什么?**

```js
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius
};

shape.diameter();
shape.perimeter();
```

- A: `20` and `62.83185307179586`
- B: `20` and `NaN`
- C: `20` and `63`
- D: `NaN` and `63`

<details><summary><b>答案</b></summary>
<p>
</p><p>答案: B</p>
<p>请注意，<code>diameter</code>是普通函数，而<code>perimeter</code>是箭头函数。</p>
<p>对于箭头函数，<code>this</code>关键字指向是它所在上下文（定义时的位置）的环境，与普通函数不同！ 这意味着当我们调用<code>perimeter</code>时，它不是指向<code>shape</code>对象，而是指其定义时的环境（window）。没有值<code>radius</code>属性，返回<code>undefined</code>。</p>
<p></p>
</details>

