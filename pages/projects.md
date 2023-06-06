---
title: Repositories - l0vsAkI
display: Projects
description: List of projects that I am proud of
plum: true
wrapperClass: 'text-center'
projects:
  Roven`s work:
    - name: 'l0vsAkI.github.io'
      link: 'https://github.com/l0vsAkI/l0vsAkI.github.io'
      desc: 'My personal website as blog'
      icon: 'i-icomoon-free-blog'
    - name: 'neovim-config'
      link: 'https://github.com/l0vsAkI/neovim-config'
      desc: 'Neovim config based on LazyVim'
      icon: 'i-simple-icons:neovim'
    - name: 'vitepress-blog'
      link: 'https://github.com/l0vsAkI/vitepress-blog-Abandoned'
      desc: 'First blog built on vitepress'
      icon: 'i-fa6-brands:blogger-b'
  Games:
    - name: 'valheim-plugins-config'
      link: 'https://github.com/l0vsAkI/valheim-plugins-config'
      desc: '瓦尔海姆插件配置'
      icon: 'i-game-icons-wood-axe'
---

<!-- @layout-full-width -->

<ListProjects :projects="frontmatter.projects" />
