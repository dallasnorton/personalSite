import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import './cayman.css';
import registerServiceWorker from './registerServiceWorker.js';
import ReactGA from 'react-ga';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
registerServiceWorker();

ReactGA.initialize('UA-101588969-1', {});
ReactGA.pageview('home');