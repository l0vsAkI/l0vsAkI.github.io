---
title: 前端开发的上传与下载
date: 2023-7-20
---

[[toc]]

## 上传

### 单个文件上传

1. 将文件插入到 FormData 表单对象中

```ts
let file: File | null = null
const formData = new FormData()
formData.append('file', file)
```

2. 上传文件的请求头必须为'multipart/form-data'

```ts
// 配置请求头部的headers
request.options.headers['Content-Type'] = 'multipart/form-data'
```

3. 将整个插入了文件的 FormData 对象作为请求体的 data

```ts
request.options.data = formData
```

## 下载

实现下载业务的后端一般为两种处理方式

- 返回下载链接
- 返回文件流

这里主要说明下文件流的下载

### 文件流下载

请求成功后的响应为文件流, 无法直接使用, 需要前端进行处理

1. 在发送请求之前, 需要设置请求的响应类型

```ts
request.responseType = 'blob'
```

2. 将返回的文件流放入 Blob 对象中并生成临时链接下载

```ts
function downloadStreamFile(file: BlobPart) {
  const blob = new Blob([file], {
    type: 'application/vnd.ms-excel' // 根据不同的文件配置相应的MIME类型
  })
  const a: HTMLAnchorElement = document.createElement('a')
  a.href = URL.createObjectURL(blob) // 生成临时文件链接
  a.download = '{fileName}.{suffix}'
  a.click()
  URL.revokeObjectURL(href) // 一定要在结尾释放内存
}
```
