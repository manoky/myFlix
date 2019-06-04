import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import App from './component/App';
import './index.css';
import '../../node_modules/hint.css'
import store from './store';


render(
  <Provider store={store}>
    <App />
  </Provider>
  ,document.getElementById('app'));


// const video = document.createElement('video');
// video.setAttribute('src','http://flash.gtarcade.net/31/static/usr/uploads/201901/20190109080139_30824/video/got-closebeta-video.mp4');
// video.setAttribute('autoplay','');
// video.setAttribute('loop','');
// video.classList.add('bg-video')


// document.querySelector('#bg-video').appendChild(video);

{/* <video
  src='http://flash.gtarcade.net/31/static/usr/uploads/201901/20190109080139_30824/video/got-closebeta-video.mp4'
  poster="nice-default.jpg
  autoplay
/> */}

