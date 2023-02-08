---
title: 14 Vue3 script setup
date: 2021-03-14
categories: 
 - Vue
---


- 每个 `*.vue `文件最多可以包含一个` <script setup>`。(不包括一般的 `<script>`)
  这个脚本块将被预处理为组件的` setup()` 函数，这意味着它将为每一个组件实例都执行。
- `<script setup> `中的顶层绑定都将自动暴露给模板。
- `<script setup>`是在 `单文件组件 (SFC) `中使用 `组合式 API` 的编译时语法糖。当同时使用 `SFC` 与 `组合式 API `时该语法是默认推荐。相比于普通的 `<script>` 语法，它具有更多优势：
  - 更少的样板内容，更简洁的代码。
  - 能够使用纯 `TypeScript `声明 `props `和自定义事件。
  - 更好的运行时性能 (其模板会被编译成同一作用域内的渲染函数，避免了渲染上下文代理对象)。
  - 更好的 `IDE `类型推导性能 (减少了语言服务器从代码中抽取类型的工作)

## （1）基本语法

- `<script> `只在组件被首次引入的时候执行
- `<script setup> `中的代码会在每次组件实例被创建的时候执行。里面的代码会被编译成组件 setup() 函数的内容。

```html
<script setup>
	console.log('hello script setup')
</script>
```

- 顶层的绑定会被暴露给模板

当使用 `<script setup>` 的时候，任何在 `<script setup>` 声明的顶层的绑定 (包括变量，函数声明，以及 `import` 导入的内容) 都能在模板中直接使用：

```html
<script setup>
// 变量
const msg = 'baucd'

// 函数
function log() {
  console.log(msg)
}
</script>

<template>
  <button @click="log">{{ msg }}</button>
</template>
```

`import `导入的内容也会以同样的方式暴露。这意味着我们可以在模板表达式中直接使用导入的 `action `函数，而不需要通过 `methods `选项来暴露它：

```html
<script setup>
import { say } from './action'
</script>

<template>
  <div>{{ say ('hello') }}</div>
</template>
```

## （2）响应式

响应式状态需要明确使用`响应式 API `来创建。和 `setup() `函数的返回值一样，`ref `在模板中使用的时候会自动解包：

```html
<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <button @click="count++">{{ count }}</button>
</template>

```

## （3）使用组件

- `<script setup>` 范围里的值也能被直接作为自定义组件的标签名使用：

```html
/**
*这里 MyComponent 应当被理解为像是在引用一个变量。
*如果你使用过 JSX，此处的心智模型是类似的。
*其 kebab-case 格式的 <my-component> 同样能在模板中使用——不过，
*强烈建议使用 PascalCase 格式以保持一致性。同时这也有助于区分原生的自定义元素。
*/
<script setup>
import MyComponent from './MyComponent.vue'
</script>

<template>
  <MyComponent />
</template>
```

- 动态组件

```vue
// 由于组件是通过变量引用而不是基于字符串组件名注册的，
// 在 <script setup> 中要使用动态组件的时候，应该使用 动态的 :is 来绑定jj
<script setup>
import Foo from './Foo.vue'
import Bar from './Bar.vue'
</script>

<template>
  <component :is="Foo" />
  <component :is="someCondition ? Foo : Bar" />
</template>
```

- 递归组件

  - 一个单文件组件可以通过它的文件名被其自己所引用。例如：名为` FooBar.vue` 的组件可以在其模板中用 `<FooBar/>` 引用它自己。

  - 注意这种方式相比于导入的组件优先级更低。如果有具名的导入和组件自身推导的名字冲突了，可以为导入的组件添加别名：

```js
import { FooBar as FooBarChild } from './components'
```

- 命名空间组件
  可以使用带` . `的组件标签，例如 `<Foo.Bar> `来引用嵌套在对象属性中的组件。这在需要从单个文件中导入多个组件的时候非常有用：

```html
<script setup>
import * as Form from './form-components'
</script>

<template>
  <Form.Input>
    <Form.Label>label</Form.Label>
  </Form.Input>
</template>
```

## （4）使用自定义指令

- 全局注册的自定义指令将正常工作。本地的自定义指令在 `<script setup>` 中不需要显式注册，但他们必须遵循 `vNameOfDirective` 这样的命名规范：

```html
<script setup>
const vMyDirective = {
  beforeMount: (el) => {
    // 在元素上做些操作
  }
}
</script>
<template>
  <h1 v-my-directive>This is a Heading</h1>
</template>
```

- 如果指令是从别处导入的，可以通过重命名来使其符合命名规范：

```html
<script setup>
import { myDirective as vMyDirective } from './MyDirective.js'
</script>
```

## （5）defineProps、defineEmits

- 为了在声明 `props `和 `emits `选项时获得完整的类型推导支持，我们可以使用 `defineProps `和 `defineEmits ` `API`，它们将自动地在 `<script setup>` 中可用：

```html
<script setup>
const props = defineProps({
  foo: String
})
const emit = defineEmits(['change', 'delete'])
// setup 代码  
</script>
```

- `defineProps `和 `defineEmits `都是只能在` <script setup>` 中使用的编译器宏。他们不需要导入，且会随着` <script setup> `的处理过程一同被编译掉。
- `defineProps `接收与 `props `选项相同的值，`defineEmits `接收与 `emits `选项相同的值。
- `defineProps` 和 `defineEmits `在选项传入后，会提供恰当的类型推导。
- 传入到 `defineProps `和 `defineEmits `的选项会从 `setup `中提升到模块的作用域。因此，
这样做会引起编译错误。但是，它可以引用导入的绑定，因为它们也在模块作用域内。
  
  

## （6）defineExpose

- 使用 `<script setup>` 的组件是默认关闭的——即通过模板引用或者 `$parent `链获取到的组件的公开实例，不会暴露任何在 <`script setup>` 中声明的绑定。

```js
//可以通过 defineExpose 编译器宏来显式指定在 <script setup> 组件中要暴露出去的属性：
<script setup>
import { ref } from 'vue'

const a = 1
const b = ref(2)
defineExpose({
  a,
  b
})
</script>
//当父组件通过模板引用的方式获取到当前组件的实例，
//获取到的实例会像这样 { a: number, b: number } (ref 会和在普通实例中一样被自动解包)
```

## （7）useSlots() 和 useAttrs()

- 在 `<script setup>` 使用 `slots `和 `attrs `的情况应该是相对来说较为罕见的，因为可以在模板中直接通过` $slots `和` $attrs` 来访问它们。在你的确需要使用它们的罕见场景中，可以分别用 `useSlots `和 `useAttrs `两个辅助函数：

```html
<script setup>
import { useSlots, useAttrs } from 'vue'

const slots = useSlots()
const attrs = useAttrs()
</script>
/**
*useSlots 和 useAttrs 是真实的运行时函数，它的返回与 setupContext.slots 和 setupContext.attrs 等价。
它们同样也能在普通的组合式 API 中使用。**/
```

## （8）与普通的 `<script>` 一起使用

`<script setup> `可以和普通的 `<script>` 一起使用

```html
<script>
// 普通 <script>, 在模块作用域下执行 (仅一次)
runSideEffectOnce()

// 声明额外的选项
export default {
  inheritAttrs: false,
  customOptions: {}
}
</script>

<script setup>
// 在 setup() 作用域中执行 (对每个实例皆如此)
</script>
```

## （9）顶层 `await`

- `<script setup>` 中可以使用顶层 `await`。结果代码会被编译成 `async setup()`

```html
<script setup>
const post = await fetch(`/api/post/1`).then((r) => r.json())
</script>
// 另外，await 的表达式会自动编译成在 await 之后保留当前组件实例上下文的格式。
```

