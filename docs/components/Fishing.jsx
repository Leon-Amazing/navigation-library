import React from 'react';
import Component from './index';
import { base } from './config';
const data = [
  {
    name: 'LINUX DO',
    link: 'https://linux.do/',
    img: `/${base}/tool/linux.do.png`,
  },
  {
    name: 'V2EX',
    link: 'https://www.v2ex.com/',
    img: `/${base}/tool/v2ex.png`,
  },
  {
    name: '优质简报',
    link: 'https://news.nilh2a2.dev/',
    img: `/${base}/tool/nilh2a2.svg`,
  },
  {
    name: 'PixelsTech',
    link: 'https://www.pixelstech.net/',
    img: `/${base}/tool/pixelstech.png`,
  },
  {
    name: 'Ruby China',
    link: 'https://ruby-china.org/',
    img: `/${base}/tool/ruby-china.png`,
  },
  {
    name: 'ZMTU',
    link: 'https://zmtu.com/',
    img: `/${base}/tool/zmtu.png`,
  },
  {
    name: '反斗限免',
    link: 'https://free.apprcn.com/',
    img: `/${base}/tool/apprcn.png`,
  },
  {
    name: 'Hacker News',
    link: 'https://news.ycombinator.com/over?points=350',
    img: `/${base}/tool/ycombinator.svg`,
  },
  {
    name: '国外热榜中文对照',
    link: 'https://www.buzzing.cc/',
    img: `/${base}/tool/buzzing.png`,
  },
  {
    name: '每日最佳产品',
    link: 'https://www.producthunt.com/',
    img: `/${base}/tool/producthunt.png`,
  },
  {
    name: 'techurl',
    link: 'https://techurls.com/',
    img: `/${base}/tool/techurl.png`,
  },
  {
    name: '今日热榜',
    link: 'https://tophub.today/',
    img: `/${base}/tool/tophub.png`,
  },
  {
    name: '速知',
    link: 'https://suzhi.fun/',
    img: `/${base}/tool/suzhi.svg`,
  },
  {
    name: '吾爱破解',
    link: 'https://www.52pojie.cn/forum-16-1.html',
    img: `/${base}/tool/forum.png`,
  },
  {
    name: 'DeepSeek',
    link: 'https://chat.scnet.cn/#/home',
    img: `/${base}/tool/common-blog.png`,
  },
  {
    name: 'chatgptp',
    link: 'https://chatgptplus.cn/',
    img: `/${base}/tool/common-blog.png`,
  },
];
export default () => {
  return <Component data={data} />;
};
