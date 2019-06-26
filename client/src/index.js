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