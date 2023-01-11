---
title: 02 文件API
date: 2023-01-02
categories: 
 - uniapp
---


##  [uni.saveFile(OBJECT)](https://uniapp.dcloud.net.cn/api/file/file.html#savefile)

保存文件到本地。

**平台差异说明**

| App  |  H5  | 微信小程序 | 支付宝小程序 | 百度小程序 | 字节跳动小程序、飞书小程序 | QQ小程序 | 快手小程序 | 京东小程序 |
| :--: | :--: | :--------: | :----------: | :--------: | :------------------------: | :------: | :--------: | :--------: |
|  √   |  x   |     √      |      √       |     √      |             √              |    √     |     x      |     √      |

**注意：saveFile 会把临时文件移动，因此调用成功后传入的 tempFilePath 将不可用**

> *微信小程序已停止维护[wx.saveFile(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.saveFile.html)接口，建议使用[FileSystemManager](https://uniapp.dcloud.io/api/file/getFileSystemManager.html)对象中的方法。*

**OBJECT 参数说明：**

| 参数名       | 类型     | 必填 | 说明                                                        |
| :----------- | :------- | :--- | :---------------------------------------------------------- |
| tempFilePath | String   | 是   | 需要保存的文件的临时路径                                    |
| success      | Function | 否   | 返回文件的保存路径，res = {savedFilePath: '文件的保存路径'} |
| fail         | Function | 否   | 接口调用失败的回调函数                                      |
| complete     | Function | 否   | 接口调用结束的回调函数（调用成功、失败都会执行）            |

**success 返回参数说明：**

| 参数          | 说明           |
| :------------ | :------------- |
| savedFilePath | 文件的保存路径 |

**示例代码：**

```javascript
uni.chooseImage({
  success: function (res) {
    var tempFilePaths = res.tempFilePaths;
    uni.saveFile({
      tempFilePath: tempFilePaths[0],
      success: function (res) {
        var savedFilePath = res.savedFilePath;
      }
    });
  }
});
```

## [uni.getSavedFileList(OBJECT)](https://uniapp.dcloud.net.cn/api/file/file.html#getsavedfilelist)

获取本地已保存的文件列表。

**平台差异说明**

| App  |  H5  | 微信小程序 | 支付宝小程序 | 百度小程序 | 字节跳动小程序、飞书小程序 | QQ小程序 | 快手小程序 | 京东小程序 |
| :--: | :--: | :--------: | :----------: | :--------: | :------------------------: | :------: | :--------: | :--------: |
|  √   |  x   |     √      |      √       |     √      |             √              |    √     |     x      |     √      |

> *微信小程序已停止维护[wx.getSavedFileList(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.getSavedFileList.html)接口，建议使用[FileSystemManager](https://uniapp.dcloud.io/api/file/getFileSystemManager.html)对象中的方法。*

**OBJECT 参数说明：**

| 参数名   | 类型     | 必填 | 说明                                                    |
| :------- | :------- | :--- | :------------------------------------------------------ |
| success  | Function | 否   | 接口调用成功的回调函数，返回结果见 success 返回参数说明 |
| fail     | Function | 否   | 接口调用失败的回调函数                                  |
| complete | Function | 否   | 接口调用结束的回调函数（调用成功、失败都会执行）        |

**success 返回参数说明：**

| 参数     | 类型          | 说明         |
| :------- | :------------ | :----------- |
| errMsg   | String        | 接口调用结果 |
| fileList | `Array<Object> `| 文件列表     |

**fileList 中的项目说明：**

| 键         | 类型   | 说明                                                         |
| :--------- | :----- | :----------------------------------------------------------- |
| filePath   | String | 文件的本地路径                                               |
| createTime | Number | 文件的保存时的时间戳，从 `1970/01/01 08:00:00` 到该时刻的秒数。 |
| size       | Number | 文件大小，以字节为单位。                                     |

**示例代码：**

```javascript
uni.getSavedFileList({
  success: function (res) {
    console.log(res.fileList);
  }
});
```

## [uni.getSavedFileInfo(OBJECT)](https://uniapp.dcloud.net.cn/api/file/file.html#getsavedfileinfo)

## [uni.removeSavedFile(OBJECT)](https://uniapp.dcloud.net.cn/api/file/file.html#removesavedfile)

## [uni.getFileInfo(OBJECT)](https://uniapp.dcloud.net.cn/api/file/file.html#getfileinfo)

## [uni.openDocument(OBJECT)](https://uniapp.dcloud.net.cn/api/file/file.html#opendocument)

新开页面打开文档，支持格式：doc, xls, ppt, pdf, docx, xlsx, pptx。

**平台差异说明**

| App  |  H5  | 微信小程序 | 支付宝小程序 | 百度小程序 | 字节跳动小程序、飞书小程序 | QQ小程序 | 快手小程序 | 京东小程序 |
| :--: | :--: | :--------: | :----------: | :--------: | :------------------------: | :------: | :--------: | :--------: |
|  √   |  x   |     √      |      √       |     √      |             √              |    √     |     x      |     √      |

**OBJECT 参数说明：**



| 参数名   | 类型    | 必填                             | 说明                                                         | 平台差异说明                         |
| :------- | :------ | :------------------------------- | :----------------------------------------------------------- | :----------------------------------- |
| filePath | String  | 是                               | 文件路径，可通过 downFile 获得                               |                                      |
| fileType | String  | 支付宝小程序必填，其他平台非必填 | 文件类型，指定文件类型打开文件，有效值 doc, xls, ppt, pdf, docx, xlsx, pptx，支付宝小程序仅支持pdf | 微信小程序、支付宝小程序、京东小程序 |
| showMenu | Boolean | 否                               | 右上角是否有可以转发分享的功能                               | 微信小程序                           |
| success  | String  | 否                               | 接口调用成功的回调函数                                       |                                      |
| fail     | String  | 否                               | 接口调用失败的回调函数                                       | 微信小程序、京东小程序               |
| complete | String  | 否                               | 接口调用结束的回调函数（调用成功、失败都会执行）             |                                      |

**示例代码：**

```javascript
uni.downloadFile({
  url: 'https://example.com/somefile.pdf',
  success: function (res) {
    var filePath = res.tempFilePath;
    uni.openDocument({
      filePath: filePath,
      showMenu: true,
      success: function (res) {
        console.log('打开文档成功');
      }
    });
  }
});
```

**平台差异**

| 平台        | 打开方式                                   |
| :---------- | :----------------------------------------- |
| 小程序      | 在小程序的入口应用内打开                   |
| App iOS     | 在当前应用内打开                           |
| App Android | 调用系统相关应用打开，无相关应用则不能打开 |
| H5          | 使用浏览器打开，当前浏览器不支持则不能打开 |

**Tips**

- App端，io操作还可以用更强大的plus.io API。https://www.html5plus.org/doc/zh_cn/io.html
- App端，打开各种格式的文件，如office、pdf等，还可以用更强大的三方插件，详见[插件市场](https://ext.dcloud.net.cn/search?q=pdf)
- 选择文件上传，uni-app有自带的api：[uni.chooseImage](https://uniapp.dcloud.io/api/media/image?id=chooseimage)和[uni.chooseVideo](https://uniapp.dcloud.io/api/media/video?id=choosevideo)。App端如需选择非媒体文件，可在插件市场搜索[文件选择](https://ext.dcloud.net.cn/search?q=文件选择)，其中Android端可以使用Native.js，无需原生插件，而iOS端需要原生插件。

## uni.getFileSystemManager()

获取全局唯一的文件管理器

- 微信小程序平台，[规范详情](https://developers.weixin.qq.com/miniprogram/dev/api/wx.getFileSystemManager.html)
- 字节跳动小程序平台，[规范详情](https://developer.toutiao.com/dev/cn/mini-app/develop/api/file/getfilesystemmanager)
- QQ小程序平台，[规范详情](https://q.qq.com/wiki/develop/miniprogram/API/file/qq.getFileSystemManager.html)

## uni.uploadFile(OBJECT)

将本地资源上传到开发者服务器，客户端发起一个 `POST` 请求，其中 `content-type` 为 `multipart/form-data`。
如页面通过 [uni.chooseImage](https://uniapp.dcloud.net.cn/api/media/image#chooseimage) 等接口获取到一个本地资源的临时文件路径后，可通过此接口将本地资源上传到指定服务器。另外选择和上传非图像、视频文件参考：https://ask.dcloud.net.cn/article/35547。

> 在各个小程序平台运行时，网络相关的 API 在使用前需要配置域名白名单。

**推荐开发者上传到uniCloud，uniCloud提供了免费CDN和更好的易用性，包括安全的cdn直传。**

- uniCloud的上传API：https://uniapp.dcloud.io/uniCloud/storage?id=uploadfile
- 封装的更完善的[uni-file-picker组件](https://ext.dcloud.net.cn/plugin?id=4079)，文件选择、上传到uniCloud，一站式集成。

**OBJECT 参数说明**

| 参数名   | 类型     | 必填                        | 说明                                                         | 平台差异说明                                |
| :------- | :------- | :-------------------------- | :----------------------------------------------------------- | :------------------------------------------ |
| url      | String   | 是                          | 开发者服务器 url                                             |                                             |
| files    | Array    | 是（files和filePath选其一） | 需要上传的文件列表。**使用 files 时，filePath 和 name 不生效。** | App、H5（ 2.6.15+）                         |
| fileType | String   | 见平台差异说明              | 文件类型，image/video/audio                                  | 仅支付宝小程序，且必填。                    |
| file     | File     | 否                          | 要上传的文件对象。                                           | 仅H5（2.6.15+）支持                         |
| filePath | String   | 是（files和filePath选其一） | 要上传文件资源的路径。                                       |                                             |
| name     | String   | 是                          | 文件对应的 key , 开发者在服务器端通过这个 key 可以获取到文件二进制内容 |                                             |
| header   | Object   | 否                          | HTTP 请求 Header, header 中不能设置 Referer。                |                                             |
| timeout  | Number   | 否                          | 超时时间，单位 ms                                            | H5(HBuilderX 2.9.9+)、APP(HBuilderX 2.9.9+) |
| formData | Object   | 否                          | HTTP 请求中其他额外的 form data                              |                                             |
| success  | Function | 否                          | 接口调用成功的回调函数                                       |                                             |
| fail     | Function | 否                          | 接口调用失败的回调函数                                       |                                             |
| complete | Function | 否                          | 接口调用结束的回调函数（调用成功、失败都会执行）             |                                             |

**注意**：

- App支持多文件上传，微信小程序只支持单文件上传，传多个文件需要反复调用本API。所以跨端的写法就是循环调用本API。
- hello uni-app中的客服反馈，支持多图上传。[uni-app插件市场](https://ext.dcloud.net.cn/)中也有多个封装的组件。
- App平台选择和上传非图像、视频文件，参考https://ask.dcloud.net.cn/article/35547
- 网络请求的 `超时时间` 可以统一在 `manifest.json` 中配置 [networkTimeout](https://uniapp.dcloud.net.cn/collocation/manifest#networktimeout)。
- 支付宝小程序开发工具上传文件返回的http状态码为字符串形式，支付宝小程序真机返回的状态码为数字形式

**files参数说明**

files 参数是一个 file 对象的数组，file 对象的结构如下：

| 参数名 | 类型   | 必填 | 说明                                        |
| :----- | :----- | :--- | :------------------------------------------ |
| name   | String | 否   | multipart 提交时，表单的项目名，默认为 file |
| file   | File   | 否   | 要上传的文件对象，仅H5（2.6.15+）支持       |
| uri    | String | 是   | 文件的本地地址                              |

Tip:

- 如果 `name` 不填或填的值相同，可能导致服务端读取文件时只能读取到一个文件。

**success 返回参数说明**

| 参数       | 类型   | 说明                           |
| :--------- | :----- | :----------------------------- |
| data       | String | 开发者服务器返回的数据         |
| statusCode | Number | 开发者服务器返回的 HTTP 状态码 |

**示例**

```javascript
uni.chooseImage({
	success: (chooseImageRes) => {
		const tempFilePaths = chooseImageRes.tempFilePaths;
		uni.uploadFile({
			url: 'https://www.example.com/upload', //仅为示例，非真实的接口地址
			filePath: tempFilePaths[0],
			name: 'file',
			formData: {
				'user': 'test'
			},
			success: (uploadFileRes) => {
				console.log(uploadFileRes.data);
			}
		});
	}
});
```

**返回值**

如果希望返回一个 `uploadTask` 对象，需要至少传入 success / fail / complete 参数中的一个。例如：

```javascript
var uploadTask = uni.uploadFile({
	url: 'https://www.example.com/upload', //仅为示例，并非真实接口地址。
	complete: ()=> {}
});
uploadTask.abort();
```

如果没有传入 success / fail / complete 参数，则会返回封装后的 Promise 对象：[Promise 封装](https://uniapp.dcloud.net.cn/api/#promise-封装)

通过 `uploadTask`，可监听上传进度变化事件，以及取消上传任务。

**uploadTask 对象的方法列表**

| 方法               | 参数     | 说明                                                         |
| :----------------- | :------- | :----------------------------------------------------------- |
| abort              |          | 中断上传任务                                                 |
| onProgressUpdate   | callback | 监听上传进度变化                                             |
| onHeadersReceived  | callback | 监听 HTTP Response Header 事件。会比请求完成事件更早,仅`微信小程序平台`支持，[规范详情](https://developers.weixin.qq.com/miniprogram/dev/api/UploadTask.onHeadersReceived.html) |
| offProgressUpdate  | callback | 取消监听上传进度变化事件，仅`微信小程序平台`支持，[规范详情](https://developers.weixin.qq.com/miniprogram/dev/api/UploadTask.offProgressUpdate.html) |
| offHeadersReceived | callback | 取消监听 HTTP Response Header 事件，仅`微信小程序平台`支持，[规范详情](https://developers.weixin.qq.com/miniprogram/dev/api/UploadTask.offHeadersReceived.html) |

**onProgressUpdate 返回参数说明**

| 参数                     | 类型   | 说明                                 |
| :----------------------- | :----- | :----------------------------------- |
| progress                 | Number | 上传进度百分比                       |
| totalBytesSent           | Number | 已经上传的数据长度，单位 Bytes       |
| totalBytesExpectedToSend | Number | 预期需要上传的数据总长度，单位 Bytes |

**示例**

```javascript
uni.chooseImage({
	success: (chooseImageRes) => {
		const tempFilePaths = chooseImageRes.tempFilePaths;
		const uploadTask = uni.uploadFile({
			url: 'https://www.example.com/upload', //仅为示例，非真实的接口地址
			filePath: tempFilePaths[0],
			name: 'file',
			formData: {
				'user': 'test'
			},
			success: (uploadFileRes) => {
				console.log(uploadFileRes.data);
			}
		});

		uploadTask.onProgressUpdate((res) => {
			console.log('上传进度' + res.progress);
			console.log('已经上传的数据长度' + res.totalBytesSent);
			console.log('预期需要上传的数据总长度' + res.totalBytesExpectedToSend);

			// 测试条件，取消上传任务。
			if (res.progress > 50) {
				uploadTask.abort();
			}
		});
	}
});
```

## uni.downloadFile(OBJECT)

下载文件资源到本地，客户端直接发起一个 HTTP GET 请求，返回文件的本地临时路径。

> 在各个小程序平台运行时，网络相关的 API 在使用前需要配置域名白名单。在h5上是跨域的，用户需要处理好跨域问题。

**OBJECT 参数说明**

| 参数名   | 类型     | 必填 | 说明                                                         | 平台差异说明                                                 |
| :------- | :------- | :--- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| url      | String   | 是   | 下载资源的 url                                               |                                                              |
| header   | Object   | 否   | HTTP 请求 Header, header 中不能设置 Referer。                |                                                              |
| timeout  | Number   | 否   | 超时时间，单位 ms                                            | H5(HBuilderX 2.9.9+)、APP(HBuilderX 2.9.9+)                  |
| success  | Function | 否   | 下载成功后以 tempFilePath 的形式传给页面，res = {tempFilePath: '文件的临时路径'}。指定filePath的话，以 filePath的形式传给页面，res = {filePath: '文件下载后存储的路径 (本地路径) '} |                                                              |
| fail     | Function | 否   | 接口调用失败的回调函数                                       |                                                              |
| complete | Function | 否   | 接口调用结束的回调函数（调用成功、失败都会执行）             |                                                              |
| filePath | string   | 否   | 指定文件下载后存储的路径 (本地路径)                          | 微信小程序（IOS小程序保存到相册需要添加此字段才可以正常保存） |

**注：文件的临时路径，在应用本次启动期间可以正常使用，如需持久保存，需在主动调用 [uni.saveFile](https://uniapp.dcloud.net.cn/api/file/file#savefile)，才能在应用下次启动时访问得到。**

**success 返回参数说明**

| 参数         | 类型   | 说明                                           |
| :----------- | :----- | :--------------------------------------------- |
| tempFilePath | String | 临时文件路径，下载后的文件会存储到一个临时文件 |
| statusCode   | Number | 开发者服务器返回的 HTTP 状态码                 |

**注意**

- 网络请求的 `超时时间` 可以统一在 `manifest.json` 中配置 [networkTimeout](https://uniapp.dcloud.net.cn/collocation/manifest#networktimeout)。

**示例**

```javascript
uni.downloadFile({
	url: 'https://www.example.com/file/test', //仅为示例，并非真实的资源
	success: (res) => {
		if (res.statusCode === 200) {
			console.log('下载成功');
		}
	}
});
```

**返回值**

如果希望返回一个 `downloadTask` 对象，需要至少传入 success / fail / complete 参数中的一个。例如：

```javascript
var downloadTask = uni.downloadFile({
	url: 'https://www.example.com/file/test', //仅为示例，并非真实接口地址。
	complete: ()=> {}
});
downloadTask.abort();
```

如果没有传入 success / fail / complete 参数，则会返回封装后的 Promise 对象：[Promise 封装](https://uniapp.dcloud.net.cn/api/#promise-封装)

通过 `downloadTask`，可监听下载进度变化事件，以及取消下载任务。

**downloadTask 对象的方法列表**

| 方法               | 参数     | 说明                                                         | 最低版本 |
| :----------------- | :------- | :----------------------------------------------------------- | :------- |
| abort              |          | 中断下载任务                                                 | *        |
| onProgressUpdate   | callback | 监听下载进度变化                                             | *        |
| onHeadersReceived  | callback | 监听 HTTP Response Header 事件，会比请求完成事件更早,仅`微信小程序平台`支持，[规范详情](https://developers.weixin.qq.com/miniprogram/dev/api/DownloadTask.onHeadersReceived.html) |          |
| offProgressUpdate  | callback | 取消监听下载进度变化事件，仅`微信小程序平台`支持，[规范详情](https://developers.weixin.qq.com/miniprogram/dev/api/DownloadTask.offProgressUpdate.html) |          |
| offHeadersReceived | callback | 取消监听 HTTP Response Header 事件，仅`微信小程序平台`支持，[规范详情](https://developers.weixin.qq.com/miniprogram/dev/api/DownloadTask.offHeadersReceived.html) |          |

**onProgressUpdate 返回参数说明**

| 参数                      | 类型   | 说明                                 |
| :------------------------ | :----- | :----------------------------------- |
| progress                  | Number | 下载进度百分比                       |
| totalBytesWritten         | Number | 已经下载的数据长度，单位 Bytes       |
| totalBytesExpectedToWrite | Number | 预期需要下载的数据总长度，单位 Bytes |

**示例**

```javascript
const downloadTask = uni.downloadFile({
	url: 'http://www.example.com/file/test', //仅为示例，并非真实的资源
	success: (res) => {
		if (res.statusCode === 200) {
			console.log('下载成功');
		}
	}
});

downloadTask.onProgressUpdate((res) => {
	console.log('下载进度' + res.progress);
	console.log('已经下载的数据长度' + res.totalBytesWritten);
	console.log('预期需要下载的数据总长度' + res.totalBytesExpectedToWrite);

	// 满足测试条件，取消下载任务。
	if (res.progress > 50) {
		downloadTask.abort();
	}
});
```