import React from 'react';
import { render } from 'react-dom';
import './index.css';
import Routes from './routes';

render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
