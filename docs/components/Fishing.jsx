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
    name: '虫部落',
    link: 'https://www.chongbuluo.com/',
    img: `/${base}/tool/chongbuluo.ico`,
  },
  {
    name: '音乐磁场',
    link: 'https://www.hifiti.com/',
    img: `/${base}/tool/hifiti.ico`,
  },
  {
    name: '小众软件',
    link: 'https://meta.appinn.net/',
    img: `/${base}/tool/appinn.png`,
  },
  {
    name: 'NodeLoc',
    link: 'https://nodeloc.cc/',
    img: `/${base}/tool/nodeloc.png`,
  },
  {
    name: 'iseekup',
    link: 'https://iseekup.com/',
    img: `/${base}/tool/iseekup.png`,
  },
  {
    name: 'ZMTU',
    link: 'https://zmtu.com/',
    img: `/${base}/tool/zmtu.png`,
  },
  {
    name: '色影无忌',
    link: 'https://forum.xitek.com/',
    img: `/${base}/tool/xitek.ico`,
  },
  {
    name: 'Chiphell',
    link: 'https://www.chiphell.com/',
    img: `/${base}/tool/chiphell.png`,
  },
  {
    name: '优质简报',
    link: 'https://news.nilh2a2.dev/',
    img: `/${base}/tool/nilh2a2.svg`,
  },
  {
    name: '反斗限免',
    link: 'https://free.apprcn.com/',
    img: `/${base}/tool/apprcn.png`,
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
    name: 'Papergames',
    link: 'https://papergames.io/zh/',
    img: `/${base}/tool/papergames.svg`,
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
  {
    name: '天工',
    link: 'https://www.tiangong.cn/',
    img: `/${base}/tool/tiangong.png`,
  },
  {
    name: '豆包',
    link: 'https://www.doubao.com/chat/',
    img: `/${base}/tool/doubao.png`,
  },
];
export default () => {
  return <Component data={data} />;
};
