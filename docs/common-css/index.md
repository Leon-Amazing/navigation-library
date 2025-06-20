---
title: CSS
order: 19
nav:
  title: CSS
  order: 19
---

### 展示不全显示省略号

单行

```css
display: inline-block;
width: 100%;
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
```

多行

```css
word-break: break-all;
display: -webkit-box;
width: 200px;
overflow: hidden;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
```

### 换行

```css
word-break: break-all;
// 这个属性在过长的单词处强制换行，即使这可能导致断词。它会忽略单词的边界，根据容器的宽度进行换行。

word-wrap: break-word;
// 这个属性在遇到过长的单词时也会换行，但它会在单词边界处断开，避免断词。它会将单词移至下一行，而不是强制放置在当前行末尾。

white-space: pre-wrap;
//这个属性定义了如何处理元素中的空白符。它允许文本中的连续空白符按照其原始的换行方式进行换行，同时还可以在普通单词处进行换行。
```

### 图片错误处理

```html
<div class="img-error"><img [src]="course.headCoverUrl" /></div>
```

```css
.img-error {
  width: calc(202 / 750 * 100vw);
  height: calc(148 / 750 * 100vw);
  border-radius: 4px;
  margin-right: 12px;
  overflow: hidden;
  background: #f2f2f2
    url(data:image/png;base64,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)
    no-repeat 100% / cover;
}
img[src=''],
img:not([src]) {
  opacity: 0;
}
```

### 让网站变灰

```css
filter: grayscale(100%);
```

### 文字渐变色

```css
background: linear-gradient(180deg, #ffbebe 14%, #ff6a6b 86%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
color: transparent;
```
