---
title: 02 Axiso
date: 2022-9-20
categories: 
 - JavaScript
tags:
 - axiso
---


## 一、Axios简介

**Axios框架全称**（Ajax – I/O – system）：

基于`promise`用于浏览器和`node.js`的http客户端，因此可以使用Promise API。

说到Axios就不得不说下Ajax。在旧浏览器页面在向服务器请求数据时，因为返回的是整个页面的数据，页面都会强制刷新一下，这对于用户来讲并不是很友好。并且我们只是需要修改页面的部分数据，但是从服务器端发送的却是整个页面的数据，十分消耗网络资源。而我们只是需要修改页面的部分数据，也希望不刷新页面，因此**异步网络请求**就应运而生。

- Ajax(Asynchronous JavaScript and XML)：异步网络请求。Ajax能够让页面无刷新的请求数据。
- 实现ajax的方式有多种，如jQuery封装的ajax，原生的XMLHttpRequest，以及axios。但各种方式都有利弊：
  - 原生的**XMLHttpRequest**的配置和调用方式都很繁琐，实现异步请求十分麻烦
  - jQuery的ajax相对于原生的ajax是非常好用的，但是没有必要因为要用ajax异步网络请求而引用jQuery框架

**Axios**（ajax i/o system）：
这不是一种新技术，本质上还是**对原生XMLHttpRequest的封装**，可用于浏览器和nodejs的HTTP客户端，只不过它是基于Promise的，符合最新的ES规范。具备以下特点：

```txt
- 在浏览器中创建XMLHttpRequest请求
- 在node.js中发送http请求
- 支持Promise API
- 拦截请求和响应
- 转换请求和响应数据
- 取消请求
- 自动转换JSON数据
- 客户端支持防止CSRF/XSRF(跨域请求伪造)
```

## 二、安装使用

安装有三种方式：

npm安装

```vue
 npm install axios
```

bower安装

```js
bower install axios
```


通过cdn引入

```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```


在vue项目的`main.js`文件中引入`axios`

```vue
import axios from 'axios'
Vue.prototype.$axios = axios
```

在组件中使用axios

```vue
<script>
	export default {
		mounted(){
			this.$axios.get('/goods.json').then(res=>{
				console.log(res.data);
			})
		}
	}
</script>
```

## 三、Axios请求方式

axios可以请求的方法：

- get：获取数据，请求指定的信息，返回实体对象
- post：向指定资源提交数据（例如表单提交或文件上传）
- put：更新数据，从客户端向服务器传送数据取代指定的文档的内容
- patch：更新数据，是对put方法的补充，用来对已知资源进行**局部更新**
- delete：请求服务器删除指定的数据

### 1、get方法

- **写法1**

```js
//请求格式类似于 http://localhost:8080/goods.json?id=1
axios.get('/goods.json', {
            params: {
                id: 1
            }
        }).then(res => {
            console.log(res.data);
        }, err => {
            console.log(err);
        })
```

- **写法2**

```js
axios({
		method: 'get',
		url: '/goods.json',
    	params: {
            id:1
        }
	}).then(res=>{
		console.log(res.data);
	},err=>{
		console.log(err);
	})
```

### 2、post方法

post方法有三个参数，分别是url、data、config。

```js
axios.post('/post',{},config)
```

一般上传的data分两种类型：

- `form-data` 表单提交，图片上传、文件上传时用该类型比较多
-  `application/json` 一般是用于 ajax 异步请求
- 以上两种数据，都可以在请求发起后，进入浏览器network查看**请求头中的content-type**进行查看

**写法1**

```js
let data = { id:12 }
axios.post('/post',data).then((res)=>{
 console.log(res)
})
```

**写法2**

```js
axios({
	method: 'post',
	url: '/url',
	data: {id:1}
}).then(res=>{
	console.log(res.data);
},err=>{
	console.log(err);
})
```

**两种数据的小细节**：

- 当我们上传的是`application/json`比如`let data = { id:12 }`数据时，Network的请求头里会显示为：`application/json；charset=UTF-8`

- 当我们上传的是form-data，那么Network的请求头里会显示为：`multipart/form-data; boundary=----WebKitFormBoundarywWFnSlPye1ZF8CSw`

```js
let data = {
	//请求参数
    id:12
}

let formdata = new FormData();
for(let key in data){
	formdata.append(key,data[key]);//这里将data转格式了，格式变为formdata形式。
}

axios.post('/goods.json',formdata).then(res=>{
	console.log(res.data);
},err=>{
	console.log(err);
})
```

### 3、put方法和patch方法

```js
//put请求
axios.put('/url',{id:1}).then(res=>{
				console.log(res.data);
			})
```

```js
//patch请求
axios.patch('/url',{id:1}).then(res=>{
				console.log(res.data);
			})
```

### 4、delete方法

**写法**

- 参数以明文形式提交，参数出现在ulr路径里

```js
//直接从url里面删除，Network请求头最后面会显示为：Query String Parameters
axios.delete('/url',{
				params: {
					id:1
				}
			}).then(res=>{
				console.log(res.data);
			})
```

- 参数以封装对象的形式提交

```js
//从请求体里删除，Network请求头最后面会显示为：Request Payload
//第一种：
axios.delete('/url',{
				data: {
					id:1
				}
			}).then(res=>{
				console.log(res.data);
			})
//第二种：
axios({
    method: 'delete',
    url: '/url',
    params: { id:1 }, //以明文方式提交参数
    data: { id:1 } //以封装对象方式提交参数
}).then(res=>{
	console.log(res.data);
})
```

两种方法的删除方式是不同的，具体使用需要和后端沟通。

### 5、并发请求

并发请求：同时进行多个请求，并统一处理返回值。

案例：假设有一个聊天工具，同时有你的聊天记录和个人信息。此时需要调用两个接口去请求数据。此时需要统一处理他们的返回值。

axios提供的方法：**all**、**spread**

- axios.all方法接受一个数组作为参数，数组中的每个元素都是一个请求，**返回一个promise对象**，当数组中所有请求均已完成时，执行then方法。

- 在**then方法中执行了 axios.spread 方法**。该方法是接收一个函数作为参数，返回一个新的函数。接收的参数函数的参数是axios.all方法中每个请求返回的响应。

```js
function getUserAccount() {
  return this.$axios.get('/user/12345');
}

function getUserPermissions() {
  return this.$axios.get('/user/12345/permissions');
}

axios.all([getUserAccount(), getUserPermissions()])
  .then(this.$axios.spread((acct, perms) => {
    // 两个请求都完成后,acct是getUserAccount的返回值，同理，perms是 getUserPermissions的返回值
  }));
```

## 四、axios实例

为什么要用实例？

当我们需要用到**不同的后端域名**，直接调用`this.$axios.get`并不太方便。我们可以用创建实例的方式去调用，不同的域名用不同的实例一一对应。

### 1、创建axios实例

可以同时创建多个axios实例。

```js
let instance = this.$axios.create({
				baseURL: 'http://localhost:9090',
				timeout: 2000
			})
			
instance.get('/data.json').then(res=>{
	console.log(res.data);
})
```

axios实例常用配置：

```js
- baseURL:'http://localhost:8080',//请求的域名、基本地址
- timeout:1000,//请求超时时长（ms）
- url:'/data.json',//请求路径
- method:'get，post，put，patch,delete',//请求方法
- headers:{token:''},//设置请求头
- params:{},//将请求参数拼接在url上，是一个对象
- data:{}//将请求参数放在请求体里，是一个对象
```

### 2、axios全局配置

**示例代码**

```typescript
//配置全局的超时时长
axios.defaults.timeout = 2000;
//配置全局的基本URL
axios.defaults.baseURL = 'http://localhost:8080';
```

### 3、axios实例配置

**示例代码**

```typescript
let instance = axios.create();
instance.defaults.timeout = 3000;
```

### 4、axios请求配置

视具体情况而定，如调用某个路径的文件巨大，我们可以单独对其请求时长进行设置。

**示例代码**

```typescript
axios.get('/goods.json',{
				timeout: 3000
			}).then()
```

以上配置的优先级为：**请求配置 > 实例配置 > 全局配置**

## 五、拦截器

拦截器：在发起请求前或响应前做一些处理。

分为请求拦截器和响应拦截器。

### 1、请求拦截器

**示例代码**

```javascript
axios.interceptors.request.use(config=>{
				// 发送请求前做些什么
				return config
			},err=>{
				// 在请求错误的时候做些什么（此处错误，请求没有到后端）
				return Promise.reject(err);
			})

//或者用axios实例创建拦截器
let instance = axios.create();
instance.interceptors.request.use(config=>{
    return config
})
```

### 2、响应拦截器

```javascript
axios.interceptors.response.use(res=>{
				//请求成功对响应数据做处理
				return res //该返回对象会传到请求方法的响应对象中
			},err=>{
				//响应错误做些什么（此处错误，到达后端后返回）
				return Promise.reject(err);
			})
```

### 3、取消拦截

示例代码

```js
//请求拦截器
let instance = axios.interceptors.request.use(config=>{
				config.headers = {
					token: ''
				}
				return config
			})
			
//取消拦截
axios.interceptors.request.eject(instance);//用axios全局去调用interceptors，这样就取消拦截了。。。
```

## 六、错误处理

```javascript
 //设置请求拦截器
 axios.interceptors.request.use(
  config =>{
    return config
  },err =>{
    return Promise.reject(err)
  }
 )
 //设置响应拦截器
 axios.interceptors.response.use(
  res =>{
    return res
  },err =>{
    return Promise.reject(err)
  }
 )
//错误的获取
axios.get('/url')
    .then(res={})
    .catch(err=>{
			//请求拦截器和响应拦截器抛出错误时，返回的err对象会传给当前函数的err对象，所有错误处理都会进入此处
		console.log(err);
	})
```

具体的实践过程中，我们需要创建一个统一的错误处理，将所有的错误类型都放在拦截其中，方便我们后面调用接口时使用。

```javascript
 //创建一个请求实例
 let instance = axios.create({})
 
 //为请求实例添加请求拦截器
 instance.interceptors.request.use(
  config =>{
    return config
  },err =>{
  //请求错误 一般http状态码以4开头，常见：401超时，404 not found 多为前端浏览器错误
     return Promise.reject(err)
  }
 )
//为请求实例添加响应拦截器
 instance.interceptors.response.use(
   res=>{
     return res
   },err =>{
     //响应错误,一般http状态码以5开头，500系统错误，502系统重启等，偏向于服务端返回的报错
     return Promise.reject(err)
   }
 )
 
 //使用
 instance.get('data').then(res=>{
    console.log(res)
 }).catch(err =>{
     console.log(err)
 })
```

## 七、取消请求

```js
let source = axios.CancelToken.source();

axios.get('/goods.json',{
				cancelToken: source
			}).then(res=>{
				console.log(res)
			}).catch(err=>{
				//取消请求后会执行该方法
				console.log(err)
			})

//取消请求，参数可选，该参数信息会发送到请求的catch中
source.cancel('取消后的信息');
```

