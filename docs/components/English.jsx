import React from 'react';
import Component from './index';
import { base } from './config';
const data = [
  {
    name: 'English Study',
    link: 'https://leon-amazing.github.io/english/',
    img: `/${base}/tool/common-blog.png`,
  },
  {
    name: '程序员英语词汇宝典',
    link: 'https://learn-english.dev/',
    img: `/${base}/tool/common-blog.png`,
  },
  {
    name: 'A-Programmers-Guide-to-English',
    link: 'https://github.com/yujiangshui/A-Programmers-Guide-to-English',
    img: `/${base}/tool/common-blog.png`,
  },
  {
    name: "Emily's Pronunciation Class",
    link: 'https://chifenchen.tripod.com/',
    img: `/${base}/tool/common-blog.png`,
  },
  {
    name: "Longman",
    link: 'https://www.ldoceonline.com/dictionary',
    img: `/${base}/tool/Longman.png`,
  },
  {
    name: "Deepl Translate",
    link: 'https://www.deepl.com/translator',
    img: `/${base}/tool/deepl.svg`,
  },
  {
    name: 'Qwerty Learner',
    link: 'https://qwerty.kaiyi.cool/',
    img: `/${base}/tool/qwerty.svg`,
  },
  {
    name: 'italki',
    link: 'https://www.italki.cn/zh-cn/teachers/english',
    img: `/${base}/tool/italki.png`,
  },
  {
    name: 'dev.to',
    link: 'https://dev.to/',
    img: `/${base}/tool/dev.to.png`,
  },
  {
    name: 'julebu',
    link: 'https://julebu.co/',
    img: `/${base}/tool/julebu.png`,
  },
];
export default () => {
  return <Component data={data} />;
};
