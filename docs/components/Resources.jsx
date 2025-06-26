import React from 'react';
import Component from './index';
import { base } from './config';
const data = [
  {
    name: '抖音',
    link: 'https://www.douyin.com/',
    img: `/${base}/tool/douyin.png`,
  },
  {
    name: 'bilibili',
    link: 'https://www.bilibili.com/',
    img: `/${base}/tool/bilibili.png`,
  },
  {
    name: '腾讯视频',
    link: 'https://v.qq.com/',
    img: `/${base}/tool/v.qq.png`,
  },
  {
    name: '爱奇艺',
    link: 'https://www.iqiyi.com/',
    img: `/${base}/tool/iqiyi.png`,
  },
  {
    name: 'JRKAN直播',
    link: 'https://www.jrs33.com/',
    img: `/${base}/tool/jrs33.png`,
  },
  {
    name: '低端影视',
    link: 'https://ddys.pro/',
    img: `/${base}/tool/ddys.webp`,
  },
  {
    name: '厂长资源',
    link: 'https://www.czzy77.com/',
    img: `/${base}/tool/czzy77.png`,
  },
  {
    name: '4K影视',
    link: 'https://www.4kvm.net/',
    img: `/${base}/tool/4kvm.png`,
  },
  {
    name: '人人视频',
    link: 'https://rrsp.com.cn/pc',
    img: `/${base}/tool/rrsp.png`,
  },
  {
    name: '新剧坊(百度)',
    link: 'https://www.xinjuc.com/',
    img: `/${base}/tool/xinjuc.png`,
  },
  {
    name: '4K世界(夸克)',
    link: 'https://www.4khdr.cn/',
    img: `/${base}/tool/4khdr.png`,
  },
  {
    name: '韩剧看看',
    link: 'https://www.hanjukankan.com/',
    img: `/${base}/tool/hanjukankan.png`,
  },
  {
    name: '动画排行榜',
    link: 'https://bangumi.tv/anime/browser/?sort=rank',
    img: `/${base}/tool/bangumi.png`,
  },
  {
    name: '动漫蛋新番',
    link: 'https://www.dmdan8.com/',
    img: `/${base}/tool/dmdan8.png`,
  },
  {
    name: '色花堂',
    link: 'https://www.sehuatang.net/',
    img: `/${base}/tool/sehuatang.png`,
  },
  {
    name: '可可影视',
    link: 'https://www.keke9.com/',
    img: `/${base}/tool/keke.png`,
  },
  {
    name: '动漫花园',
    link: 'https://www.dmhy.org/topics/list',
    img: `/${base}/tool/dmhy.png`,
  },
  {
    name: 'Kindle漫画',
    link: 'https://kox.moe/',
    img: `/${base}/tool/kox.png`,
  },
  {
    name: 'LibreTV',
    link: 'https://dy.705678.xyz/',
    img: `/${base}/tool/libretv.png`,
  },
  {
    name: 'SquidWTF(音乐下载)',
    link: 'https://us.qobuz.squid.wtf/',
    img: `/${base}/tool/squid.png`,
  },
  {
    name: 'Animeko',
    link: 'https://myani.org/',
    img: `/${base}/tool/animeko.png`,
  },
  {
    name: 'Mihon',
    link: 'https://mihon.app/',
    img: `/${base}/tool/mihon.png`,
  },
  {
    name: '电报导航',
    link: 'https://tgdriver.com/',
    img: `/${base}/tool/tgdriver.png`,
  },
  {
    name: '电报频道',
    link: 'https://telegramnav.github.io/',
    img: `/${base}/tool/tgdriver.png`,
  },
  {
    name: '电报值得看',
    link: 'https://dbzdk.com/',
    img: `/${base}/tool/dbzdk.png`,
  },
  {
    name: 'TelegramFind',
    link: 'https://telegramfind.com/',
    img: `/${base}/tool/telegramfind.png`,
  },
  {
    name: 'TGSO.PRO',
    link: 'https://tgso.pro/',
    img: `/${base}/tool/tgso.png`,
  },
  {
    name: '电报频道',
    link: 'https://telegramchannels.me/zh',
    img: `/${base}/tool/telegramchannels.png`,
  },
  {
    name: 'Telemetr',
    link: 'https://telemetr.io/en/catalog/global',
    img: `/${base}/tool/telemetr.png`,
  },
];
export default () => {
  return <Component data={data} />;
};
