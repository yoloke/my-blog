---
title: 15 TypeScript 与 组合式API
date: 2021-03-15
categories: 
 - Vue
---

## 1.为组件的 props 标注类型

```js
//场景一： 使用<script setup>
<script setup lang="ts">
const props = defineProps({
  foo: { type: String, required: true },
  bar: Number
})

props.foo // string
props.bar // number | undefined
</script>

//也可以将 props 的类型移入一个单独的接口中
<script setup lang="ts">
interface Props {
  foo: string
  bar?: number
}
const props = defineProps<Props>()
</script>
//场景二： 不使用<script setup>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    message: String
  },
  setup(props) {
    props.message // <-- 类型：string
  }
})
```

- 注意点：为了生成正确的运行时代码，传给 `defineProps()` 的泛型参数必须是以下之一：

```js
//1.一个类型字面量：
defineProps<{ /*... */ }>()

//2.对同一个文件中的一个接口或对象类型字面量的引用
interface Props {/* ... */}
defineProps<Props>()

//3.接口或对象字面类型可以包含从其他文件导入的类型引用，但是，传递给 defineProps 的泛型参数本身不能是一个导入的类型：
import { Props } from './other-file'

// 不支持！
defineProps<Props>()
```

- Props 解构默认值

```js
//当使用基于类型的声明时，失去了对 props 定义默认值的能力。通过目前实验性的响应性语法糖来解决：
<script setup lang="ts">
interface Props {
  foo: string
  bar?: number
}

// 对 defineProps() 的响应性解构
// 默认值会被编译为等价的运行时选项
const { foo, bar = 100 } = defineProps<Props>()
</script>
```



## 2.为组件的 emits 标注类型

```js
//场景一： 使用<script setup>
<script setup lang="ts">
const emit = defineEmits(['change', 'update'])
// 基于类型
const emit = defineEmits<{
  (e: 'change', id: number): void
  (e: 'update', value: string): void
}>()
</script>


//场景二： 不使用<script setup>
import { defineComponent } from 'vue'

export default defineComponent({
  emits: ['change'],
  setup(props, { emit }) {
    emit('change') // <-- 类型检查 / 自动补全
  }
})
```

## 3.为 ref() 标注类型

```js
import { ref } from 'vue'
import type { Ref } from 'vue'
//1.ref 会根据初始化时的值推导其类型：
// 推导出的类型：Ref<number>
const year = ref(2020)
// => TS Error: Type 'string' is not assignable to type 'number'.
year.value = '2020'

//2.指定一个更复杂的类型，可以通过使用 Ref 这个类型：
const year: Ref<string | number> = ref('2020')
year.value = 2020 // 成功！

//3.在调用 ref() 时传入一个泛型参数，来覆盖默认的推导行为：
// 得到的类型：Ref<string | number>
const year = ref<string | number>('2020')
year.value = 2020 // 成功！

//4.如果你指定了一个泛型参数但没有给出初始值，那么最后得到的就将是一个包含 undefined 的联合类型：
// 推导得到的类型：Ref<number | undefined>
const n = ref<number>()
```

## 4.为reactive() 标注类型

```js
import { reactive } from 'vue'
//1.reactive() 也会隐式地从它的参数中推导类型：
// 推导得到的类型：{ title: string }
const book = reactive({ title: 'Vue 3 指引' })

//2.要显式地标注一个 reactive 变量的类型，我们可以使用接口：
interface Book {
  title: string
  year?: number
}
const book: Book = reactive({ title: 'Vue 3 指引' })
```

## 5.为 computed() 标注类型

```js
import { ref, computed } from 'vue'
//1.computed() 会自动从其计算函数的返回值上推导出类型：
const count = ref(0)

// 推导得到的类型：ComputedRef<number>
const double = computed(() => count.value * 2)

// => TS Error: Property 'split' does not exist on type 'number'
const result = double.value.split('')

//2.通过泛型参数显式指定类型：
const double = computed<number>(() => {
  // 若返回值不是 number 类型则会报错
})
```

## 6.为事件处理函数标注类型

```js
//在处理原生 DOM 事件时，应该为我们传递给事件处理函数的参数正确地标注类型
<script setup lang="ts">
function handleChange(event) {
  // 没有类型标注时 `event` 隐式地标注为 `any` 类型,
  // 这也会在 tsconfig.json 中配置了 "strict": true 或 "noImplicitAny": true 时报出一个 TS 错误。
  console.log(event.target.value)
}
</script>

<template>
  <input type="text" @change="handleChange" />
</template>

//因此，建议显式地为事件处理函数的参数标注类型,需要显式地强制转换 event 上的属性：

function handleChange(event: Event) {
  console.log((event.target as HTMLInputElement).value)
}
```

## 7.为 provide / inject 标注类型

```js
/*
provide 和 inject 通常会在不同的组件中运行。要正确地为注入的值标记类型，
Vue 提供了一个 InjectionKey 接口，它是一个继承自 Symbol 的泛型类型，
可以用来在提供者和消费者之间同步注入值的类型：
*/
import { provide, inject } from 'vue'
import type { InjectionKey } from 'vue'

const key = Symbol() as InjectionKey<string>

provide(key, 'foo') // 若提供的是非字符串值会导致错误

const foo = inject(key) // foo 的类型：string | undefined

//建议将注入 key 的类型放在一个单独的文件中，这样它就可以被多个组件导入。
//当使用字符串注入 key 时，注入值的类型是 unknown，需要通过泛型参数显式声明：
const foo = inject<string>('foo') // 类型：string | undefined

//注意注入的值仍然可以是 undefined，因为无法保证提供者一定会在运行时 provide 这个值。
//当提供了一个默认值后，这个 undefined 类型就可以被移除：
const foo = inject<string>('foo', 'bar') // 类型：string

//如果你确定该值将始终被提供，则还可以强制转换该值：
const foo = inject('foo') as string
```

## 8.为模板引用标注类型

```js
//模板引用需要通过一个显式指定的泛型参数和一个初始值 null 来创建：
<script setup lang="ts">
import { ref, onMounted } from 'vue'

const el = ref<HTMLInputElement | null>(null)

onMounted(() => {
  el.value?.focus()
})
</script>
/**
	注意为了严格的类型安全，有必要在访问 el.value 时使用可选链或类型守卫。这是因为直到组件被挂载前，
	这个 ref 的值都是初始的 null，并且在由于 v-if 的行为将引用的元素卸载时也可以被设置为 null。
*/
<template>
  <input ref="el"/>
</template>
```

## 9.为组件模板引用标注类型

```js
// 有时，你可能需要为一个子组件添加一个模板引用，以便调用它公开的方法。举例来说，我们有一个 MyModal 子组件，它有一个打开模态框的方法
<!-- MyModal.vue -->
<script setup lang="ts">
import { ref } from 'vue'

const isContentShown = ref(false)
const open = () => (isContentShown.value = true)

defineExpose({
  open
})
</script>
//为了获取 MyModal 的类型，我们首先需要通过 typeof 得到其类型，再使用 TypeScript 内置的 InstanceType 工具类型来获取其实例类型：
<!-- App.vue -->
<script setup lang="ts">
import MyModal from './MyModal.vue'

const modal = ref<InstanceType<typeof MyModal> | null>(null)

const openModal = () => {
  modal.value?.open()
}
</script>
//注意，如果你想在 TypeScript 文件而不是在 Vue SFC 中使用这种技巧，需要开启 Volar 的Takeover 模式。
```

