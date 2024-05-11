---
title: JS
order: 20
nav:
  title: JS
  order: 20
---

## 工具方法

### 求和

```js
// 获取系数
function coefficient(num) {
  num = num + '';
  let [, char = ''] = num.split('.'),
    len = char.length;
  return Math.pow(10, len);
}

// 求和操作
function plus(num1, num2) {
  num1 = +num1;
  num2 = +num2;
  if (isNaN(num1) || isNaN(num2)) return NaN;
  let coeffic = Math.max(coefficient(num1), coefficient(num2));
  return (num1 * coeffic + num2 * coeffic) / coeffic;
}
```

### 根据时间获取周几

```js
function getWeekDay(time) {
  const weekNum = new Date(time).getDay();
  let week = '';
  switch (weekNum) {
    case 0:
      week = '周日';
      break;
    case 1:
      week = '周一';
      break;
    case 2:
      week = '周二';
      break;
    case 3:
      week = '周三';
      break;
    case 4:
      week = '周四';
      break;
    case 5:
      week = '周五';
      break;
    case 6:
      week = '周六';
      break;
  }
  return week;
}
```

```js
function getWeek(date) {
  const days = ['日', '一', '二', '三', '四', '五', '六'];
  return `周${days[new Date(date).getDay()]}`;
}
```

### 生成 20 万条不重复的随机数

```js
// 生成不重复的随机数
function generateRandomNumber(min, max) {
  let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber.toString().padStart(12, '0');
}

// 生成20万条不重复的12位随机数
function generateUniqueRandomNumbers(count) {
  let uniqueNumbers = new Set();
  while (uniqueNumbers.size < count) {
    uniqueNumbers.add(generateRandomNumber(100000000000, 999999999999));
  }
  return Array.from(uniqueNumbers);
}

const randomNumbers = generateUniqueRandomNumbers(200000);
console.log(randomNumbers);
```

### 身份证加密

```js
let str = '110101199007075135';
let reg = /^(\d{2})(\d{13})(\d{3})$/;
str = str.replace(reg, (...arg) => {
  let [, $1, $2, $3] = arg;
  $2 = $2.replace(/\d/g, '*');
  return $1 + $2 + $3;
});
console.log(str); // 11*************135
```
