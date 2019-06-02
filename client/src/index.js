import React from 'react';
import { render } from 'react-dom';
import App from './component/App';
import './index.css';
import '../../node_modules/hint.css'


render(<App />,document.getElementById('app'));
const video = document.createElement('video');
video.setAttribute('src','http://flash.gtarcade.net/31/static/usr/uploads/201901/20190109080139_30824/video/got-closebeta-video.mp4');
video.setAttribute('autoplay','');
video.setAttribute('loop','');
video.classList.add('bg-video')
//video.autoplay = true

console.log(video)

document.querySelector('#app').appendChild(video);

{/* <video
  src="#defer-loading"
  poster="nice-default.jpg
  autoplay
/> */}

window.React1 = require('react');
require('react-dom');
window.React2 = require('react');
console.log('%c React','color:blue; font-size:16px; font-weight:bold');
console.log(window.React1 === window.React2);