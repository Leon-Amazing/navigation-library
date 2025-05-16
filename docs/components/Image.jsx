import React from 'react';
import Component from './index';
import { base } from './config';
const data = [
  {
    name: 'TinyPNG',
    link: 'https://tinypng.com/',
    img: `/${base}/tool/tinypng.png`,
  },
  {
    name: 'Recompressor',
    link: 'https://zh.recompressor.com/',
    img: `/${base}/tool/recompressor.png`,
  },
  {
    name: 'zippic',
    link: 'https://www.zippic.cn/zh',
    img: `/${base}/tool/zippic.webp`,
  },
  {
    name: 'Post Cover(zippic)',
    link: 'https://cover.zippic.cn/',
    img: `/${base}/tool/zippic.png`,
  },
  {
    name: 'favicon',
    link: 'https://favicon.io/',
    img: `/${base}/tool/iconfont.svg`,
  },
  {
    name: 'iconfont',
    link: 'https://www.iconfont.cn/',
    img: `/${base}/tool/favicon.png`,
  },
  {
    name: 'IconPark',
    link: 'https://iconpark.oceanengine.com/home',
    img: `/${base}/tool/iconpark.svg`,
  },
  {
    name: '背景消除',
    link: 'https://www.remove.bg/zh',
    img: `/${base}/tool/remove.png`,
  },
  {
    name: '必应图片',
    link: 'https://bing.ioliu.cn/',
    img: `/${base}/tool/bing.png`,
  },
  {
    name: 'Pexels图片',
    link: 'https://www.pexels.com/zh-cn/',
    img: `/${base}/tool/pexels.png`,
  },
  {
    name: 'Pixabay图片',
    link: 'https://pixabay.com/zh/',
    img: `/${base}/tool/pixabay.png`,
  },
  {
    name: 'Unsplash图片',
    link: 'https://unsplash.com/',
    img: `/${base}/tool/unsplash.png`,
  },
  {
    name: 'Alphacoders图片',
    link: 'https://wall.alphacoders.com/',
    img: `/${base}/tool/alphacoders.png`,
  },
  {
    name: 'PIC图片',
    link: 'https://pic.netbian.com/',
    img: `/${base}/tool/pic.png`,
  },
  {
    name: 'Haowallpaper',
    link: 'https://haowallpaper.com/',
    img: `/${base}/tool/haowallpaper.png`,
  },
  {
    name: '图片分割',
    link: 'https://gridmaker.co/zh-CN',
    img: `/${base}/tool/gridmaker.png`,
  },
  {
    name: 'imgur',
    link: 'https://imgur.com/',
    img: `/${base}/tool/imgur.png`,
  },
];
export default () => {
  return <Component data={data} />;
};
