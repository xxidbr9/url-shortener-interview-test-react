import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/styles/global.css';
import App from './app';

const dom = document.getElementById('zelda');
const root = ReactDOM.createRoot(dom!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
