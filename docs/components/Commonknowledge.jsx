import React from 'react';
import Component from './index';
import { base } from './config';
const data = [
  {
    name: 'Github',
    link: 'https://gitee.com/',
    img: `/${base}/tool/Github2.png`,
  },
  {
    name: 'Github',
    link: 'https://github.com/',
    img: `/${base}/tool/Github.png`,
  },
  {
    name: 'Github1s',
    link: 'https://github1s.com/',
    img: `/${base}/tool/Github.png`,
  },
  {
    name: 'keybr',
    link: 'https://www.keybr.com/',
    img: `/${base}/tool/keybr.png`,
  },
  {
    name: 'Stackoverflow',
    link: 'https://stackoverflow.com/questions',
    img: `/${base}/tool/stackoverflow.png`,
  },
  {
    name: '文件转base64',
    link: 'https://www.zhangxinxu.com/sp/base64.html',
    img: `/${base}/tool/common-blog.png`,
  },
  {
    name: '面试宝典',
    link: 'https://fe.ecool.fun/',
    img: `/${base}/tool/ecool.png`,
  },
  {
    name: 'Can I use',
    link: 'https://caniuse.com/',
    img: `/${base}/tool/caniuse.png`,
  },
  {
    name: 'VueUse',
    link: 'https://vueuse.org/',
    img: `/${base}/tool/vueuse.png`,
  },
  {
    name: 'VueUse中文文档',
    link: 'https://www.vueusejs.com/',
    img: `/${base}/tool/vueuse.png`,
  },
  {
    name: '高阶函数',
    link: 'https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/ch1.html',
    img: `/${base}/tool/common-blog.png`,
  },
  {
    name: 'ES6 入门教程',
    link: 'https://es6.ruanyifeng.com/',
    img: `/${base}/tool/es6.png`,
  },
  {
    name: 'WebSocket 教程',
    link: 'https://www.ruanyifeng.com/blog/2017/05/websocket.html',
    img: `/${base}/tool/common-blog.png`,
  },
  {
    name: 'Web Components',
    link: 'https://www.ruanyifeng.com/blog/2019/08/web_components.html',
    img: `/${base}/tool/common-blog.png`,
  },
  {
    name: 'Promises/A+',
    link: 'https://promisesaplus.com/',
    img: `/${base}/tool/promisesaplus.png`,
  },
  {
    name: 'MDN',
    link: 'https://developer.mozilla.org/zh-CN/',
    img: `/${base}/tool/MDN.png`,
  },
  {
    name: 'ECMAScript 2015',
    link: 'https://262.ecma-international.org/6.0/',
    img: `/${base}/tool/ECMAScript.png`,
  },
  {
    name: '牛客',
    link: 'https://www.nowcoder.com/',
    img: `/${base}/tool/nowcoder.png`,
  },
  {
    name: 'Babel',
    link: 'https://www.babeljs.cn/',
    img: `/${base}/tool/babeljs.png`,
  },
  {
    name: 'Rollup',
    link: 'https://rollupjs.org/',
    img: `/${base}/tool/rollupjs.png`,
  },
  {
    name: 'esbuild',
    link: 'https://esbuild.github.io/',
    img: `/${base}/tool/esbuild.svg`,
  },
  {
    name: 'Print.js',
    link: 'https://printjs.crabbly.com/',
    img: `/${base}/tool/printjs.png`,
  },
  {
    name: 'pdfmake',
    link: 'http://pdfmake.org/',
    img: `/${base}/tool/common-blog.png`,
  },
  {
    name: 'html-docx-js-typescript',
    link: 'https://www.npmjs.com/package/html-docx-js-typescript',
    img: `/${base}/tool/common-blog.png`,
  },
  {
    name: 'Ezuikit.js',
    link: 'https://npmmirror.com/package/ezuikit-js',
    img: `/${base}/tool/ezuikit.png`,
  },
  {
    name: 'Interview Handbook',
    link: 'https://www.techinterviewhandbook.org/software-engineering-interview-guide/',
    img: `/${base}/tool/interview.png`,
  },
  {
    name: 'Alibaba Formily',
    link: 'https://formilyjs.org/',
    img: `/${base}/tool/formilyjs.png`,
  },
  {
    name: 'Npm',
    link: 'https://www.npmjs.com/',
    img: `/${base}/tool/npmjs.png`,
  },
  {
    name: 'Node.js',
    link: 'https://nodejs.cn/api/',
    img: `/${base}/tool/nodejs.png`,
  },
  {
    name: 'TortoiseGit',
    link: 'https://tortoisegit.org/download/',
    img: `/${base}/tool/tortoisegit.png`,
  },
  {
    name: 'Git-for-windows',
    link: 'https://registry.npmmirror.com/binary.html?path=git-for-windows/',
    img: `/${base}/tool/tortoisegit.png`,
  },
  {
    name: '阿里云图片处理',
    link: 'https://help.aliyun.com/document_detail/44688.html?spm=5176.8466032.help.dexternal.75901450OuovBS',
    img: `/${base}/tool/aliyun.png`,
  },
  {
    name: 'UEditor',
    link: 'http://fex.baidu.com/ueditor/',
    img: `/${base}/tool/ueditor.png`,
  },
  {
    name: 'Tinymce',
    link: 'https://www.tiny.cloud/docs/tinymce/6/',
    img: `/${base}/tool/tinymce.png`,
  },
  {
    name: 'wangEditor',
    link: 'https://www.wangeditor.com/',
    img: `/${base}/tool/wangeditor.png`,
  },
  {
    name: 'BootCDN',
    link: 'https://www.bootcdn.cn/',
    img: `/${base}/tool/bootcdn.png`,
  },
  {
    name: 'DevDocs',
    link: 'https://devdocs.io/',
    img: `/${base}/tool/devdocs.png`,
  },
  {
    name: 'cdnjs',
    link: 'https://cdnjs.com/',
    img: `/${base}/tool/cdnjs.webp`,
  },
  {
    name: 'SheetJS CE',
    link: 'https://docs.sheetjs.com/docs/',
    img: `/${base}/tool/sheetjs.png`,
  },
  {
    name: 'Valine',
    link: 'https://valine.js.org/',
    img: `/${base}/tool/valine.png`,
  },
  {
    name: 'Swiper',
    link: 'https://www.swiper.com.cn/',
    img: `/${base}/tool/swiper.png`,
  },
  {
    name: '开发者客栈',
    link: 'https://www.developers.pub/resume/',
    img: `/${base}/tool/developers.png`,
  },
  {
    name: 'CodeCV',
    link: 'https://www.wuxiancv.com/',
    img: `/${base}/tool/wuxiancv.svg`,
  },
  {
    name: 'StackBlitz',
    link: 'https://stackblitz.com/',
    img: `/${base}/tool/stackblitz.svg`,
  },
  {
    name: 'AIEditor',
    link: 'https://www.aieditor.com.cn/',
    img: `/${base}/tool/aieditor.png`,
  },
];
export default () => {
  return <Component data={data} />;
};
