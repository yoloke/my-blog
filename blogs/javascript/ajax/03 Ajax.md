---
title: 03 Ajax
date: 2022-3-03
categories: 
 - Ajax
tags:
 - ajax
---


在 `js `中有内置的构造函数来创建 `ajax `对象

创建 `ajax `对象以后，我们就使⽤ `ajax `对象的⽅法去发送请求和接受响应

## 1. 创建 ajax 对象

`Ajax`的一个最大的特点是无需刷新页面便可向服务器传输或读写数据 (又称无刷新更新页面) ，这一特点主要得益于`XMLHTTP`组件的`XMLHTTPRequest`对象。
**`XMLHttpRequest `对象方法描述：**

![img](https://could-img.oss-cn-hangzhou.aliyuncs.com/202210300934350.png)

```js
// IE9及以上
const xhr = new XMLHttpRequest()//可以使⽤这个xhr 对象来发送 ajax 请求
// IE9以下
const xhr = new ActiveXObject('Mricosoft.XMLHTTP')
```

## 2. 配置请求信息

`XMLHttpRequest `对象属性描述：

![在这里插入图片描述](https://could-img.oss-cn-hangzhou.aliyuncs.com/202210300936884.png)

```js
//所有现代浏览器（IE7+、Firefox、Chrome、Safari 以及 Opera）均内建 XMLHttpRequest 对象。
const xhr = new XMLHttpRequest()
// xhr 对象中的 open ⽅法是来配置请求信息的
// 第⼀个参数是本次请求的请求⽅式 get / post / put / ...
// 第⼆个参数是本次请求的 url 
// 第三个参数是本次请求是否异步，默认 true 表示异步，false 表示同步
// xhr.open('请求⽅式', '请求地址', 是否异步)
xhr.open('get', './data.php')
```

- 什么是同步请求？(false)

  ```txt]
  同步请求是指当前发出请求后，浏览器什么都不能做，
  必须得等到请求完成返回数据之后，才会执行后续的代码，
  相当于生活中的排队，必须等待前一个人完成自己的事物，后一个人才能接着办。
  也就是说，当 JS 代码加载到当前 AJAX 的时候会把页面里所有的代码停止加载，页面处于一个假死状态，
  当这个AJAX执行完毕后才会继续运行其他代码页面解除假死状态
  ```

- 什么是异步请求？(默认:true)

  ```txt
  默认异步：异步请求就当发出请求的同时，浏览器可以继续做任何事，
  Ajax发送请求并不会影响页面的加载与用户的操作，相当于是在两条线上，各走各的，互不影响。
  一般默认值为true，异步。异步请求可以完全不影响用户的体验效果，
  无论请求的时间长或者短，用户都在专心的操作页面的其他内容，并不会有等待的感觉。
  ```

## 3. 发送请求

把配置好信息的 ajax 对象发送到服务端：

```js
//如需将请求发送到服务器，我们使用 XMLHttpRequest 对象的 open() 和 send() 方法：
const xhr = new XMLHttpRequest()
xhr.open('get', './data.php')
// 使⽤ xhr 对象中的 send ⽅法来发送请求
xhr.send()
```

:::tip GET 还是 POST？

在以下情况中，请使用 POST 请求：

- 无法使用缓存文件（更新服务器上的文件或数据库）
- 向服务器发送大量数据（POST 没有数据量限制）
- 发送包含未知字符的用户输入时，POST 比 GET 更稳定也更可靠

:::

## 4. 接受服务器响应数据

如果想要拿到响应数据，我们需要有两个前提条件：

1. 本次 `HTTP `请求是成功的，也就是我们下面要说的 http 状态码为 200 ~ 299 (`xhr.status`)
2. `ajax `对象也有自己的状态码 - `xhr.readyState`，用来表示本次 `ajax `请求中各个阶段

 ```js
readyState === 0 : 表示未初始化完成，也就是 open 方法还没有执行 
readyState === 1 : 表示配置信息已经完成，也就是执行完 open 之后 
readyState === 2 : 表示 send 方法已经执行完成
readyState === 3 : 表示正在解析响应内容
readyState === 4 : 表示响应内容已经解析完毕，可以在客户端使用了
 ```


只有当 `readyState === 4` 的时候，我们才可以正常使用服务端给我们的数据。

 一个 `ajax `对象中有一个属性`xhr.status`，是记录本次请求的 `http `状态码的 ，`http `状态码为 `200 ~ 299`

两个条件都满足的时候，才是本次请求正常完成

##### readyStateChange

- 在 `ajax `对象中有一个事件，叫做 `readyStateChange `事件

- 这个事件是专⻔用来监听 `ajax `对象的` readyState `值改变的的行为

- 也就是说只要 `readyState `的值发生变化了，那么就会触发该事件

- 所以我们就在这个事件中来监听 `ajax` 的` readyState `是不是到 `4 `了

   ```js
    const xhr = new XMLHttpRequest() xhr.open('get', './data.php')
  	xhr.send()
  	xhr.onreadyStateChange = function () {
  	// 每次 readyState 改变的时候都会触发该事件
  	// 我们就在这里判断 readyState 的值是不是到 4
  	// 并且 http 的状态码是不是 200 ~ 299
  	if (xhr.readyState === 4 && /^2\d{2|$/.test(xhr.status)) {
  	// 这里表示验证通过
  	// 我们就可以获取服务端给我们响应的内容了 }
  }
   ```

##### 发送一个带有参数的 get 请求

- `get `请求的参数就直接在 `url `后面进行拼接就可以，不同参数使用`&`分割。

  ```js
  const xhr = new XMLHttpRequest()
  // 直接在地址后面加一个 ?，然后以 key=value 的形式传递 // 两个数据之间以 & 分割
  xhr.open('get', './data.php?a=100 & b=200')
  xhr.send()
  ```

- 这样服务端就能接受到两个参数 一个是 `a`，值是 `100`，一个是 `b`，值是 `200`

##### **发送一个带有参数的 post 请求**

`post `请求的参数是携带在请求体中的，所以不需要再 `url `后面拼接

```js
const xhr = new XMLHttpRequest() xhr.open('post', './data.php')
// 如果是用 ajax 对象发送 post 请求，必须要先设置一下请求头中的 content- type
// 告诉一下服务端我给你的是一个什么样子的数据格式 
xhr.setRequestHeader('content-type', 'application/x-www-form- urlencoded')
// 请求体直接再 send 的时候写在 () 里面就行
// 不需要问号，直接就是 'key=value&key=value' 的形式 
xhr.send('a=100 & b=200')
```

## 5 .AJAX封装

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <script>
            /*
                type 代表 请求方式
                url  代表 请求url路径
                data 代表 发送数据
                success 代表 下载数据成功以后执行的函数
                error   代表 下载数据失败以后执行的函数
            */
            function $ajax({type = "get", url, data, success, error}){
                var xhr = null;
                try{
                    xhr = new XMLHttpRequest();
                }catch(error){
                    xhr = new ActiveXObject("Microsoft.XMLHTTP")
                }
                
                if(type == "get" && data){
                    url += "?" + querystring(data);
                }

                xhr.open(type, url, true);

                if(type == "get"){
                    xhr.send();
                }else{
                     //设置提交数据格式
                    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
                    data ? xhr.send(querystring(data)) : xhr.send();
                }
                xhr.onreadystatechange = function(){
                    if(xhr.readyState == 4){
                        if(xhr.status == 200){
                            if(success){
                                success(xhr.responseText);
                            }
                        }else{
                            if(error){
                                error("Error：" + xhr.status);
                            }
                        }
                    }
                }
            }
            function querystring(obj){
                var str = '';
                for(var attr in obj){
                    str += attr + "=" + obj[attr] + "&";
                }
                return str.substring(0, str.length - 1);
            }

            window.onload = function(){
                var aBtns = document.getElementsByTagName("button");
                /*
                    当我们下载完数据以后需要对数据的处理方式不一样
                    【注】$ajax，我们需要按照传参的顺序，依次传入我们的参数。
                */

                aBtns[0].onclick = function(){
                    $ajax({
                        url: "code14/1.get.php",
                        data: {
                            username: "小明",
                            age: 18,
                            password: "123abc"
                        },
                        success: function(result){
                            alert("GET请求到的数据：" + result);
                        },
                        error: function(msg){
                            alert("GET请求数据错误：" + msg);
                        }
                    })
                }

                aBtns[1].onclick = function(){
                    $ajax({
                        type: "post",
                        url: "code14/2.post.php",
                        data: {
                            username: "小花",
                            age: 18,
                            password: "123abc"
                        },
                        success: function(result){
                            alert("POST请求到的数据：" + result);
                        },
                        error: function(msg){
                            alert("POST请求数据错误：" + msg);
                        }
                    })
                }
            }

        </script>
    </head>
    <body>
        <button>GET请求</button>
        <button>POST请求</button>
    </body>
</html>

```

