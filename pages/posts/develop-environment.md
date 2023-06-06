---
title: window 前端开发环境配置
date: 2023-4-17
lang: en
duration: 15min
---

[[toc]]

## 概述

围绕 Neovim 来配置前端开发环境, 通过少数的环境安装能获得最大的 vim 开发体验.

> 此为 windows 平台的 vim 操作模式开发专用配置

## 为什么不使用 VS code 或 WebStorm ?

VS code 与 WebStorm 的开发体验并不流畅

### 关于 VS code

- 插件会拖慢编辑器的启动与响应速度
- 插件之间会相互阻塞导致 buffer 无响应
- 糟糕的 vim 操作

### 关于 WebStorm

- 启动耗时过长
- 操作有粘滞感

## 那一道墙

终端的请求不会经过操作系统配置的代理, 需要根据使用的不同命令行工具单独配置代理

**cmd**

```cmd
set http_proxy=http://127.0.0.1:1080
set https_proxy=http://127.0.0.1:1080
```

**PowerShell**

```PowerShell
$env:HTTP_PROXY="http://127.0.0.1:1080"
$env:HTTPS_PROXY="http://127.0.0.1:1080"
```

> 上述操作为单次操作, 退出命令行工具后会清除代理配置

**部分网址挂了代理依旧链接不上**

如`raw.githubusercontent.com`, 可在 hosts 中单独配置域名映射

```hosts
151.101.84.133  raw.githubusercontent.com
```

## 环境依赖

1. [**Neovim**](https://neovim.io/)

使用命令行工具安装已方便更新

```PowerShell
winget install Neovim.Neovim
```

2. [**MinGW**](https://www.mingw-w64.org/) - Neovim 的代码高亮插件依赖

> MinGW 的全称是：Minimalist GNU on Windows 。它实际上是将经典的开源 C 语言 编译器 GCC 移植到了 Windows 平台下，并且包含了 Win32API ，因此可以将源代码编译为可在 Windows 中运行的可执行程序。

3. [**nvm**](https://github.com/coreybutler/nvm-windows) - node 版本管理工具

4. [**im-select**](https://github.com/daipeihust/im-select) - vim 中英文输入切换工具

> 在`/nvim/environment/`文件夹中有已下载好的安装程式

## 开始配置

安装环境依赖中的**Neovim**, **MinGW**, **nvm**

> MinGW 的安装配置需要手动设置

| Label          | Value               |
| -------------- | ------------------- |
| Version        | 6.2.0(选择最新版本) |
| Architecture   | x86_64              |
| Threads        | win32               |
| Exception      | seh                 |
| Build revision | 1                   |

- 安装完成后将`{pathTo}/mingw64/bin/`路径添加到系统环境变量中

> 使用 nvm 安装 14+的 node 版本

```bash:line-numbers
nvm install <node version>
nvm use <node version>
```

### Step 1

在*C:\Users\{USER}\AppData\Local*路径下新建*nvim*文件夹

### Step 2

将[neovim-config](https://github.com/rovenssiren9417/neovim-config)仓库 clone 到 nvim 文件夹

### Step 3

1. [开启系统全局代理](./开发环境#环境依赖)
2. 在终端中配置命令行代理
3. 进入 Neovim

```bash
nvim
```

### Step 4

等待包管理器与插件安装完毕

> 如包管理器安装失败, 退出 Neovim, 检查代理并重新进入

> 插件安装失败可退出并重进 Neovim, 或在 Lazy 包管理器面板使用`I`重新安装插件

> 插件安装立刻失败, 请根据 Lazy 中的报错信息, 删除`{pathTo}/nvim-data/lazy/`中安装失败的插件文件夹和临时下载文件

### Step 5

插件安装完毕后:

1. 在 Neovim 中通过`:Mason`命令安装 LSP 服务.
2. 于`{pathTo}/nvim/lua/plugins/cmp.lua`中配置自动补全. _PS:可选操作_

## 写在最后

本来只是 22 年底接近春节放假的时候, 没太多的工作需要做, 便抱着好奇的探究心开始接触 Vim. 最初对 Vim 的了解还是通过键圈, 闻名遐迩的 HKKB 键盘, 号称转为程序员设计的键盘, 配合 Vim 可以极大的提高编码效率. 然后开始了磕磕绊绊的 Vim 学习.

对于 Vim 的使用总体分为了三个阶段:

### 1. 使用 VS code 和 WebStorm 的 Vim 插件

WebStorm 的 Vim 插件使用体验非常不错, 不仅操作流畅, 还整合了些 Vim 常用的插件.

而 VS code 的 Vim 体验就非常不尽人意. VS code 的 Vim 插件主要为两个:

1. [Vim](https://marketplace.visualstudio.com/items?itemName=vscodevim.vim) - 使用 VS code 自身行为模拟 Vim 操作
2. [VSCode Neovim](https://marketplace.visualstudio.com/items?itemName=asvetliakov.vscode-neovim) - 将文本内容复制到一个 buffer 中, 通过插件与 VS code 通信, buffer 编辑由 Neovim 承担

以上两个插件, 前者因为是模拟操作, 存在着大量的 bug, 且如若配置了自定义快捷键, 禁用插件后会报错以致无法正常使用.
后者有着高昂的通信成本, 会与其他插件冲突并阻塞 VS code 进程.

VS code 体验不好, WebStorm 太吃电脑配置, 因此开始了使用终端配置 Neovim.

### 2. 完全照抄别人的配置

知乎上有位大佬分享了自己的 [Neovim 配置](https://zhuanlan.zhihu.com/p/382092667), 当时没注意只有 macos 的配置流程, 原地踏步了很久却也没有进展.

后又在 B 站刷到一从零还是配置 Neovim 的视频, 跟着做终于成功配置好了视频中的 Neovim, 基本满足开发相关的配置.

### 3. 自行配置搭建最适合自己的 Neovim

抄的配置, 必定不是最适合自己的配置. 在别人的配置上折腾确实有很大的限制. 了解到了[Lazy](https://github.com/folke/lazy.nvim)这个最新的包管理器之后, 便开始迁移之前的插件与配置, 并且在这一过程中:

- 重新组织了项目结构
- 将依赖的环境放入到了 Neovim 的文件目录下
- 了解到了终端与系统不同的代理模式
- 更加灵活的配置插件的安装与加载

Fin.
