import React from 'react';
import Component from './index';
import { base } from './config';
const data = [
  {
    name: 'Element-UI',
    link: 'https://element.eleme.cn/#/zh-CN/',
    img: `/${base}/tool/element-ui.png`,
  },
  {
    name: 'Element-Plus',
    link: 'https://element-plus.org/zh-CN/',
    img: `/${base}/tool/element-ui.png`,
  },
  {
    name: 'Vxe-Table',
    link: 'https://vxetable.cn/#/table/start/install',
    img: `/${base}/tool/vxe-table.png`,
  },
  {
    name: 'Ant Design',
    link: 'https://ant.design/index-cn',
    img: `/${base}/tool/AntDesign.svg`,
  },
  {
    name: 'ProComponents',
    link: 'https://procomponents.ant.design/',
    img: `/${base}/tool/ProComponents.svg`,
  },
  {
    name: 'Vant',
    link: 'https://vant-ui.github.io/vant/#/zh-CN',
    img: `/${base}/tool/vant.png`,
  },
  {
    name: 'Flex 布局',
    link: 'http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html',
    img: `/${base}/tool/common-blog.png`,
  },
  {
    name: 'Flex最后一行左对齐',
    link: 'https://www.zhangxinxu.com/wordpress/2019/08/css-flex-last-align/',
    img: `/${base}/tool/common-blog.png`,
  },
  {
    name: 'FlexBoxFroggy',
    link: 'https://flexboxfroggy.com/',
    img: `/${base}/tool/frog-green.svg`,
  },
  {
    name: 'TailWind',
    link: 'https://tailwindui.com/',
    img: `/${base}/tool/tailwindui.png`,
  },
  {
    name: 'Css-Tricks',
    link: 'https://css-tricks.com/',
    img: `/${base}/tool/css-tricks.png`,
  },
  {
    name: 'Web Dev',
    link: 'https://web.dev/',
    img: `/${base}/tool/web.dev.png`,
  },
  {
    name: 'vivify CSS',
    link: 'http://vivify.mkcreative.cz/',
    img: `/${base}/tool/common-blog.png`,
  },
  {
    name: 'Animate.css',
    link: 'https://animate.style/',
    img: `/${base}/tool/animate.png`,
  },
  {
    name: 'ColorDrop',
    link: 'https://www.colordrop.io/',
    img: `/${base}/tool/colordrop.png`,
  },
  {
    name: '乐吾乐可视化',
    link: 'https://2ds.le5le.com/',
    img: `/${base}/tool/le5le.jpg`,
  },
  {
    name: '图扑可视化',
    link: 'https://www.hightopo.com/',
    img: `/${base}/tool/hightopo.png`,
  },
  {
    name: 'Storytale',
    link: 'https://storytale.io/',
    img: `/${base}/tool/storytale.png`,
  },
  {
    name: 'css.bqrdh',
    link: 'https://css.bqrdh.com/',
    img: `/${base}/tool/bqrdh.png`,
  },
];
export default () => {
  return <Component data={data} />;
};
