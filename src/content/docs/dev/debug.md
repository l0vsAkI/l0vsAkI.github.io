---
title: 前端项目调试
date: 2025-8-15
duration: 2min
---

vscode提供了`Launch`和`Attach`两种模式来调试项目, 前端项目推荐使用`Attach`模式调试

## 浏览器配置

需要打开浏览器调试端口, windows系统下操作为在浏览器快捷方式属性中 `目标`最后添加启动端口配置
`--remote-debugging-port=9223`

例如:

`"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" --remote-debugging-port=9222`

> 注意中间用空格隔开

:::note[注意!]
如果是项目自行打开的浏览器不会带有`--remote-debugging-port`参数.
可先创建一个带参数的浏览器页面, 若项目会打开页面, 则会自动在已有浏览器窗口中新增标签
:::

## 编辑器配置

在.vscode文件夹中(如没有可自行创建)新建`launch.json`文件

```json
// .vscode/launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Edge Debug", // 配置名
      "type": "msedge", // edge浏览器为msedge, 谷歌内核浏览器为chrome
      "request": "attach", // launch和attach模式, 这里为attach
      "port": 9222, // 浏览器配置好的调试用端口
      "url": "http://localhost:3002/*", // 项目启动的前端地址
      "webRoot": "${workspaceFolder}/src", // 项目代码地址
      "skipFiles": ["<node_internals>/**", "**/node_modules/**"], // 略过不调试的文件
      "sourceMaps": true
    }
  ]
}
```
