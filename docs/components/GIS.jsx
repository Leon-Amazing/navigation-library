import React from 'react';
import Component from './index';
import { base } from './config';
const data = [
  {
    name: 'ThreeJS',
    link: 'https://threejs.org/',
    img: `/${base}/tool/threejs.png`,
  },
  {
    name: 'ThreeJS-discourse',
    link: 'https://discourse.threejs.org/',
    img: `/${base}/tool/threejs.png`,
  },
  {
    name: 'EvoMap',
    link: 'http://evomap.cn/',
    img: `/${base}/tool/threejs.png`,
  },
  {
    name: 'ThreeJS 中线的那些事',
    link: 'https://zhuanlan.zhihu.com/p/487445697',
    img: `/${base}/tool/threejs.png`,
  },
  {
    name: 'ThreeJS 按鼠标位置缩放场景',
    link: 'https://zhuanlan.zhihu.com/p/146841312?from_voters_page=true&ivk_sa=1024320u',
    img: `/${base}/tool/threejs.png`,
  },
  {
    name: 'ThreeJS 生成带宽度线',
    link: 'https://juejin.cn/post/7047777058964897799',
    img: `/${base}/tool/threejs.png`,
  },
  {
    name: 'WebGL 课件',
    link: 'https://github.com/buglas/threejs-lesson',
    img: `/${base}/tool/Github.png`,
  },
  {
    name: '李伟-bilibili',
    link: 'https://space.bilibili.com/1028978784?spm_id_from=333.788.0.0',
    img: `/${base}/tool/bilibili.png`,
  },
  {
    name: 'Cesium中文网',
    link: 'http://cesiumcn.org/',
    img: `/${base}/tool/cesiumcn.png`,
  },
  {
    name: 'xt3d',
    link: 'http://211.149.185.229:8080/home',
    img: `/${base}/tool/xt3d.png`,
  },
  {
    name: 'cesium崩溃解决思路',
    link: 'https://www.jianshu.com/p/683086516037?ivk_sa=1024320u',
    img: `/${base}/tool/jianshu.png`,
  },
  {
    name: 'OpenLayers',
    link: 'https://openlayers.org/',
    img: `/${base}/tool/openlayers.svg`,
  },
  {
    name: 'Vue Baidu Map',
    link: 'https://dafrok.github.io/vue-baidu-map/#/zh/start/installation',
    img: `/${base}/tool/vue3.svg`,
  },
  {
    name: 'DataV',
    link: 'http://datav.jiaminghi.com/guide/',
    img: `/${base}/tool/DataV.png`,
  },
  {
    name: '百度地图开放平台',
    link: 'https://lbsyun.baidu.com/apiconsole/key#/home',
    img: `/${base}/tool/baidu.png`,
  },
];
export default () => {
  return <Component data={data} />;
};
