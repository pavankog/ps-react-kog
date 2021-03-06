import React from 'react';
import ReactDOM from 'react-dom';
import Docs from './docs/Docs'
import './index.css';
import '../node_modules/highlight.js/styles/ocean.css';
ReactDOM.render(
  <React.StrictMode>
    <Docs />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
