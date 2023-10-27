---
title: css手抄本
date: 2023-10-13
duration:
---

[[toc]]

记录些有关 css 使用的技巧和遇到的问题与其解决的方法

## [问题] margin 塌陷

2023-10-19

还是在写代表直接得时候, 遇到了 margin 高度塌陷的问题, 父子元素共用了各个方向最大的 margin 值.

### 解决问题

通过触发元素的[BFC(Block Formatting Context)](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)使用 BFC 语法规则来移除 margin 塌陷.

有以下几种常用的处理方式:

| 属性     | 值                                                |
| -------- | ------------------------------------------------- |
| float    | left / right                                      |
| overflow | hidden / scroll / auto                            |
| position | absolute / fixed                                  |
| display  | inline-block / tabel / tabel-cell / tabel-catioon |

推荐一种不需要使用`before`伪元素的时候的解决方法

```css
.parent::before {
  content: '';
  display: tabel;
}
```

## [问题] relative 父元素的 absolute 子元素导致的层级错误

2023-10-13

写代表之家的时候, 需要给一个 _card_ 添加背景图片.

采用的方案是在文件服务器上传图片, 通过`<img>`标签的绝对定位将*bg-img*
作为 _card_ 的背景图片, _card_ 的内容为 _desc_ .

### 遇到问题

_bg-img_ 用 absolute 定位在父元素*card*上, 显示正常. 但是正常定位并且 z-index 大于
_bg-img_ 的 _desc_ 中的文本内容会被 _bg-img_ 遮挡, 而`<img>`标签会正常显示.

```scss
.card {
  position: relative;
  z-index: 0;

  .bg-img {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
  }

  .desc {
    z-index: 1;
  }
}
```

### 解析问题

_desc_ 是 static 定位, 与其他指定了定位的元素不是同一大的层级, z-index 无效.

### 处理问题

给 _desc_ 添加定位`relative`, 可完成正常的层级展示.

> 这个其实是很基础的问题, 以前应该也遇到过, 但是没有记录下来,
> 开发的时候再次遇见这个问题却完全没有了印象.

---

## [技巧] 保持图片纵横比

基础布局

```html
<article class="card" style="width:300px">
  <div class="ratable-img">
    <img src="image/9.jfif" alt="" />
  </div>
</article>
```

### 旧的实现

```scss
.ratable-img {
  position: relative;
  padding-top: 75%;

  img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
```

### 新的实现

```scss
.ratable-img {
  aspect-ratio: 4/3;
  width: 400px;

  img {
    width: 100%;
    height: 100%;
  }
}
```

---

## [技巧] 防止滚动条抖动

```css
.elem {
  padding-right: calc(100vw - 100%);
}
```

---

## [技巧] 单行文本省略

```css
.single-ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

---

## [技巧] 多行文本省略

```css
.muilt-break {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; // 第几行的末尾省略
  overflow: hidden;
  word-break: break-all;
  text-overflow: ellipsis;
}
```

---

## [技巧] 伪元素装饰线

```scss
.parent {
  &::before {
    content: '';
    display: inline-block; // 需要指定为block, 非block无内容不显示
    vertical-align: middle; // 调整伪元素的中部对准(父元素的基线加上父元素小写字母x的height的一半)
    width: 4px;
    height: 20px;
    background: #1482f0;
  }
}
```
