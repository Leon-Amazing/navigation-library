---
title: nodeJS
order: 30
nav:
  title: nodeJS
  order: 30
---

### 数组按行输出到 txt

```js
const fs = require('fs');

const logger = fs.createWriteStream('example.txt', {
  flags: 'w', // 'a' means appending (old data will be preserved)
});

const arr = [
  'cn351643976829',
  'cn682328454239',
  'cn676393011952',
  'cn758412976835',
  'cn349026946065',
];

arr.forEach((txt) => {
  logger.write(`${txt}\n`);
});

logger.end(); // close string

// cn351643976829
// cn682328454239
// cn676393011952
// cn758412976835
// cn349026946065
```

### txt 按行平均 10 等分

```js
const fs = require('fs');

// 读取txt文件内容
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('读取文件出错：', err);
    return;
  }

  // 将文件内容按行拆分成数组
  const lines = data.split('\n');

  console.log(lines, 'lines');

  // 计算每个等分的行数
  const linesPerPartition = Math.ceil(lines.length / 10);

  // 分割文件内容成10个等分
  for (let i = 0; i < 10; i++) {
    const start = i * linesPerPartition;
    const end = start + linesPerPartition;
    const partition = lines.slice(start, end).join('\n');

    // 将每个等分保存为一个新的txt文件
    fs.writeFile(`newok${i + 1}.txt`, partition, 'utf8', (err) => {
      if (err) {
        console.error('写入文件出错：', err);
        return;
      }
      console.log(`newok${i + 1}.txt 创建成功`);
    });
  }
});
```
