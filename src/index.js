import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import './cayman.css';
import registerServiceWorker from './registerServiceWorker.js';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
registerServiceWorker();
