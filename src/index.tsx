import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { BrowserRouter } from 'react-router-dom';
import { attachLogger } from 'effector-logger';
import { startMirage } from './mockServer/server';

import './assets/styles/index.scss';

if (process.env.NODE_ENV === 'development') {
  attachLogger();
}

if (process.env.NODE_ENV === 'development') {
  startMirage();
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
