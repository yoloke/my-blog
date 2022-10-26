const fs = require('fs');
const path = require('path');
const getFile = (prefixPath) => {
  return fs.readdirSync(path.join(process.cwd(), prefixPath))
    .map(item => `${prefixPath}/${item.replace('.md', '')}`)
}
// fs.readdirSync()方法用于同步读取给定目录的内容。
//该方法返回一个数组，其中包含目录中的所有文件名或对象。 options参数可用于更改从方法返回文件的格式。
//fs.readdirSync( path, options )

const createSideBarConfig = (title, prefixPath, collapsable = true) => {
  return {
    title,
    collapsable,
    children: getFile(prefixPath)
  }
}
module.exports = {
  createSideBarConfig
}