import React from 'react';
import Component from './index';
import { base } from './config';
const data = [
  {
    name: '前端助手',
    link: 'https://web-abin.github.io/abinWeb/',
    img: `/${base}/tool/common-blog.png`,
  },
  {
    name: 'Excalidraw',
    link: 'https://excalidraw.com/',
    img: `/${base}/tool/excalidraw.png`,
  },
  {
    name: 'JS-CSS压缩',
    link: 'https://tool.css-js.com/',
    img: `/${base}/tool/css-js.png`,
  },
  {
    name: '正则大全',
    link: 'https://any86.github.io/any-rule/',
    img: `/${base}/tool/any-rule.png`,
  },
  {
    name: '正则表达式',
    link: 'https://c.runoob.com/front-end/854/',
    img: `/${base}/tool/runoob.png`,
  },
  {
    name: 'Regulex',
    link: 'https://jex.im/regulex/#!flags=&re=%5E(a%7Cb)*%3F%24',
    img: `/${base}/tool/regulex.png`,
  },
  {
    name: 'Regexr',
    link: 'https://regexr.com/',
    img: `/${base}/tool/regexr.png`,
  },
  {
    name: 'Chrome插件',
    link: 'https://www.cnplugins.com/',
    img: `/${base}/tool/chrome.png`,
  },
  {
    name: 'Chrome插件',
    link: 'https://www.gugeapps.net/',
    img: `/${base}/tool/gugeapps.png`,
  },
  {
    name: 'Download Chrome',
    link: 'https://www.slimjet.com/chrome/google-chrome-old-version.php',
    img: `/${base}/tool/google-chrome-old-version.png`,
  },
  {
    name: 'RGB颜色查询对照表',
    link: 'https://destiny001.gitee.io/color/',
    img: `/${base}/tool/common-blog.png`,
  },
  {
    name: '在线身份证号码生成',
    link: 'http://sfz.uzuzuz.com/?region=110101&birthday=19900707&sex=1&num=5&r=85',
    img: `/${base}/tool/uzuzuz.png`,
  },
  {
    name: '网名在线生成器',
    link: 'https://www.qmsjmfb.com/',
    img: `/${base}/tool/common-blog.png`,
  },
  {
    name: '站长之家',
    link: 'https://www.chinaz.com/',
    img: `/${base}/tool/chinaz.png`,
  },
  {
    name: 'Wappalyzer',
    link: 'https://www.wappalyzer.com/',
    img: `/${base}/tool/wappalyzer.png`,
  },
  {
    name: 'ScreenToGif',
    link: 'https://www.screentogif.com/',
    img: `/${base}/tool/screentogif.png`,
  },
  {
    name: 'Flyint',
    link: 'https://go.flyint.date/#/dashboard',
    img: `/${base}/tool/flyint.png`,
  },
  {
    name: '一元机场',
    link: 'https://xn--4gq62f52gdss.com/#/dashboard',
    img: `/${base}/tool/common-blog.png`,
  },
  {
    name: '一分机场',
    link: 'https://xn--4gqx1hgtfdmt.com/#/dashboard',
    img: `/${base}/tool/common-blog.png`,
  },
  {
    name: '云盟',
    link: 'https://www.ym321.net/',
    img: `/${base}/tool/common-blog.png`,
  },
  {
    name: 'CloudFlare',
    link: 'https://dash.cloudflare.com/',
    img: `/${base}/tool/cloudflare.png`,
  },
  {
    name: 'typingclub',
    link: 'https://www.typingclub.com/',
    img: `/${base}/tool/typingclub.png`,
  },
  {
    name: 'youtube-downloader',
    link: 'https://www.123videotool.com/youtube-downloader',
    img: `/${base}/tool/youtube-downloader.png`,
  },
  {
    name: '字幕工具导航',
    link: 'https://subtools.site/',
    img: `/${base}/tool/subtools.svg`,
  },
];
export default () => {
  return <Component data={data} />;
};
