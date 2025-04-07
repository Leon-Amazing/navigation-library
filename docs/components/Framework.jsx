import React from 'react';
import Component from './index';
import { base } from './config';
const data = [
  {
    name: 'React 中文文档',
    link: 'https://reactjs.bootcss.com/',
    img: `/${base}/tool/react.png`,
  },
  {
    name: 'Redux 中文文档',
    link: 'https://www.redux.org.cn/',
    img: `/${base}/tool/redux.png`,
  },
  {
    name: 'React Redux',
    link: 'https://react-redux.js.org/',
    img: `/${base}/tool/redux.png`,
  },
  {
    name: 'Ant Design Pro',
    link: 'https://pro.ant.design/zh-CN/',
    img: `/${base}/tool/AntDesignPro.svg`,
  },
  {
    name: 'ArcoPro',
    link: 'https://arco.design/',
    img: `/${base}/tool/arco.png`,
  },
  {
    name: 'Dumi嘟米',
    link: 'https://d.umijs.org/',
    img: `/${base}/tool/dumi.png`,
  },
  {
    name: 'Vue3',
    link: 'https://vue3js.cn/',
    img: `/${base}/tool/vue3.svg`,
  },
  {
    name: 'Vue CLI',
    link: 'https://cli.vuejs.org/',
    img: `/${base}/tool/vue3.svg`,
  },
  {
    name: 'VuePress中文网',
    link: 'https://www.vuepress.cn/',
    img: `/${base}/tool/vuepress.png`,
  },
  {
    name: 'VitePress',
    link: 'https://vitepress.dev/',
    img: `/${base}/tool/vuepress.png`,
  },
  {
    name: 'Vite 官方中文文档',
    link: 'https://cn.vitejs.dev/',
    img: `/${base}/tool/vite.svg`,
  },
  {
    name: 'Ionic',
    link: 'https://ionicframework.com/',
    img: `/${base}/tool/ionic.webp`,
  },
  {
    name: 'Jquery',
    link: 'https://jquery.cuishifeng.cn/',
    img: `/${base}/tool/jquery.png`,
  },
  {
    name: 'vue-element-admin',
    link: 'https://panjiachen.github.io/vue-element-admin-site/zh/guide/#%E5%8A%9F%E8%83%BD',
    img: `/${base}/tool/panjiachen.png`,
  },
  {
    name: 'RuoYi',
    link: 'http://doc.ruoyi.vip/ruoyi-vue/',
    img: `/${base}/tool/ruoyi.png`,
  },
  {
    name: 'vue-pure-admin',
    link: 'https://github.com/pure-admin/vue-pure-admin',
    img: `/${base}/tool/Github.png`,
  },
  {
    name: 'vue-naive-admin',
    link: 'https://github.com/zclzone/vue-naive-admin',
    img: `/${base}/tool/Github.png`,
  },
  {
    name: 'vben admin',
    link: 'https://github.com/vbenjs/vue-vben-admin',
    img: `/${base}/tool/Github.png`,
  },
  {
    name: 'NEXT.js',
    link: 'https://nextjs.org/',
    img: `/${base}/tool/nextjs.ico`,
  },
  {
    name: 'NUXTJS',
    link: 'https://nuxtjs.ir/',
    img: `/${base}/tool/nuxtjs.ico`,
  },
  {
    name: 'AntV',
    link: 'https://x6.antv.antgroup.com/',
    img: `/${base}/tool/antv.png`,
  },
  {
    name: 'relation-graph',
    link: 'https://www.relation-graph.com/#/index',
    img: `/${base}/tool/relation-graph.ico`,
  },
  {
    name: 'Flutter',
    link: 'https://flutter.dev/',
    img: `/${base}/tool/flutter.png`,
  },
  {
    name: 'unibest',
    link: 'https://unibest.tech/',
    img: `/${base}/tool/unibest.svg`,
  },
  {
    name: 'hexo',
    link: 'https://hexo.io/',
    img: `/${base}/tool/hexo.svg`,
  },
];
export default () => {
  return <Component data={data} />;
};
