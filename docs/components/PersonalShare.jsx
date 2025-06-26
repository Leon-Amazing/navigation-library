import React from 'react';
import Component from './index';
import { base } from './config';
const data = [
  {
    name: "Leon's Blog",
    link: 'https://leon-amazing.github.io/blog/',
    img: `/${base}/tool/blog.png`,
  },
  {
    name: '小林coding',
    link: 'https://xiaolincoding.com/',
    img: `/${base}/tool/common-blog.png`,
  },
  {
    name: 'geekdaxue',
    link: 'https://geekdaxue.co/books/Functional-Light-JS',
    img: `/${base}/tool/common-blog.png`,
  },
  {
    name: '后盾人',
    link: 'https://doc.houdunren.com/',
    img: `/${base}/tool/common-blog.png`,
  },
  {
    name: '李伟的博客',
    link: 'http://yxyy.name/blog/',
    img: `/${base}/tool/common-blog.png`,
  },
  {
    name: 'aresn',
    link: 'https://www.aresn.com/',
    img: `/${base}/tool/common-blog.png`,
  },
  {
    name: 'DanielJia Blog',
    link: 'https://danieljia.com/',
    img: `/${base}/tool/common-blog.png`,
  },
  {
    name: 'Mengke',
    link: 'https://www.mengke.me/',
    img: `/${base}/tool/common-blog.png`,
  },
  {
    name: 'Manuelmoreale',
    link: 'https://manuelmoreale.com/',
    img: `/${base}/tool/common-blog.png`,
  },
  {
    name: 'Markdown 官方教程',
    link: 'https://markdown.com.cn/',
    img: `/${base}/tool/common-blog.png`,
  },
  {
    name: 'JS心智模型',
    link: 'https://sudongyuer.github.io/javascript-mental-models/',
    img: `/${base}/tool/sudongyuer.png`,
  },
  {
    name: 'React设计模式',
    link: 'https://sudongyuer.github.io/react-patterns/',
    img: `/${base}/tool/sudongyuer.png`,
  },
  {
    name: 'ESLint 通关小册',
    link: 'https://sudongyuer.github.io/learn-eslint/',
    img: `/${base}/tool/sudongyuer.png`,
  },
  {
    name: 'Vim 通关小册',
    link: 'https://sudongyuer.github.io/learn-vim/',
    img: `/${base}/tool/sudongyuer.png`,
  },
  {
    name: 'david-hckh',
    link: 'https://www.david-hckh.com/',
    img: `/${base}/tool/sudongyuer.png`,
  },
  {
    name: 'lusion',
    link: 'https://labs.lusion.co/',
    img: `/${base}/tool/sudongyuer.png`,
  },
  {
    name: '编程胶囊',
    link: 'https://www.codejiaonang.com/#/',
    img: `/${base}/tool/codejiaonang.png`,
  },
  {
    name: '独立博客列表',
    link: 'https://github.com/timqian/chinese-independent-blogs?utm_source=gold_browser_extension',
    img: `/${base}/tool/Github.png`,
  },
  {
    name: 'Sinqi Tools',
    link: 'https://sinqi.tools/zh',
    img: `/${base}/tool/sinqi.webp`,
  },
  {
    name: 'roadmap',
    link: 'https://roadmap.sh/frontend',
    img: `/${base}/tool/roadmap.png`,
  },
];
export default () => {
  return <Component data={data} />;
};
