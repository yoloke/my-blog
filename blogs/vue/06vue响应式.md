---
title: 06 Vue响应式原理
date: 2021-03-06
categories: 
 - Vue
---

## 一、Vue2.x的响应式

1. vue2实现响应式原理：

   - 对象类型：通过```Object.defineProperty()```对属性的读取、修改进行拦截（数据劫持）。

     ```js
     const obj = {}
     Object.defineProperty(obj, 'foo', {//数据代理
             get() {
                 console.log(`get foo的值为${val}`);
                 return val
             },
             set(newVal) {
                 if (newVal !== val) {
                     console.log(`set foo的值为${newVal}`);//响应式
                     val = newVal
                 }
             }
         })
     }
     //当我们访问`foo`属性或者设置`foo`值的时候都能够触发`setter`与`getter`
     
     //但是我们为`obj`添加新属性的时候，obj.bar  = '新属性'，数据更新了页面没有更新。
     
     //原因是一开始`obj`的`foo`属性被设成了响应式数据，而`bar`是后面新增的属性，并没有通过`Object.defineProperty`设置成响应式数据
     ```

   - 数组类型：通过**重写更新数组的一系列方法**来实现拦截。（对数组的变更方法进行了包裹）。

     ```js
     Object.defineProperty(data, 'count', {
         get () {}, 
         set () {}
     })
     ```

2. 存在问题：

   - 新增属性、删除属性, 界面不会更新。

   - 直接通过下标修改数组, 界面不会自动更新。

## 二、解决方案

`Vue2`中若想实现数据与视图同步更新，可采取下面三种解决方案：

- Vue.set()
- Object.assign()
- $forcecUpdated()

### Vue.set()

`Vue.set( target, propertyName/index, value )`

参数：

- `{Object | Array} target`  目标
- `{string | number} propertyName/index`  属性
- `{any} value` 值

```js
新增对象属性：
this.$set(this.student , "sex" , "男")
Vue.set(this.student , "sex" , "男")

新增数组
this.$set(this.hobby, 0 , "逛街")
Vue.set(this.hobby, 0 , "逛街")
```

返回值：设置的值

通过`Vue.set`向响应式对象中添加一个`property`，并确保这个新 `property`同样是响应式的，且触发视图更新

关于`Vue.set`源码

源码位置：`src\core\observer\index.js`

```js
function set (target: Array<any> | Object, key: any, val: any): any {
  ...
  defineReactive(ob.value, key, val)
  ob.dep.notify()
  return val
}
```

这里无非再次调用`defineReactive`方法，实现新增属性的响应式

关于`defineReactive`方法，内部还是通过`Object.defineProperty`实现属性拦截

大致代码如下：

```js
function defineReactive(obj, key, val) {
    Object.defineProperty(obj, key, {
        get() {
            console.log(`get ${key}:${val}`);
            return val
        },
        set(newVal) {
            if (newVal !== val) {
                console.log(`set ${key}:${newVal}`);
                val = newVal
            }
        }
    })
}
```

### Object.assign()

直接使用`Object.assign()`添加到对象的新属性不会触发更新

应**创建一个新的对象**，合并原对象和混入对象的属性。

```js
this.someObject = Object.assign({},this.someObject,{newProperty1:1,newProperty2:2 ...})
```

### $forceUpdate

如果你发现你自己需要在 `Vue`中做一次强制更新，99.9% 的情况，是你在某个地方做错了事

`$forceUpdate`迫使`Vue` 实例重新渲染

PS：仅仅影响**实例本身**和**插入插槽内容的子组件**，而不是所有子组件。

### 小结

- 如果为对象添加**少量**的新属性，可以直接采用`Vue.set()`
- 如果需要为新对象添加**大量**的新属性，则通过`Object.assign()`创建新对象
- 如果你实在不知道怎么操作时，可采取`$forceUpdate()`进行强制刷新 (不建议)

## 三、Vue3.0的响应式

实现原理: 

- 通过Proxy（代理）:  拦截对象中任意属性的变化, 包括：属性值的读写、属性的添加、属性的删除等。

- 通过Reflect（反射）:  对源对象的属性进行操作。

- MDN文档中描述的Proxy与Reflect：

  - Proxy：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy
  - Reflect：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect

```js
new Proxy(data, {
  // 拦截读取属性值
    get (target, prop) {
      return Reflect.get(target, prop)
    },
    // 拦截设置属性值或添加新属性
    set (target, prop, value) {
      return Reflect.set(target, prop, value)
    },
    // 拦截删除属性
    deleteProperty (target, prop) {
      return Reflect.deleteProperty(target, prop)
    }
})

proxy.name = 'tom'   
```



