---
title: 跨域
date: 2024-1-16
duration: 2min
---

[[toc]]

造成跨域问题的原因为浏览器的*同源安全策略*

> 同源: 协议, 域名, 端口 三者相同

跨域的请求浏览器能正常发出, 也能收到返回的结果, 只是**浏览器拦截了结果**

## 解决方法

1. 禁用浏览器跨域检测

### 禁用浏览器跨域策略

此方法用于本地开发, 直接禁用浏览器的跨域检查
常用于*地图*, *天气*这类需要发送请求的三方库

操作方法:

1. 在系统资源管理器中新建文件夹, 如`C:\MyChromeDevUserData`
2. 创建一个浏览器应用程式的启动快捷方式
3. 在快捷方式的**目标**属性末尾, 添加启动项`--user-data-dir=C:\MyChromeDevUserData`

注意: **启动项与原本内容中由空格隔开**

完整的目标属性值如下:
`"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" --disable-web-security --user-data-dir=C:\MyChromeDevUserData`

To be continued...
