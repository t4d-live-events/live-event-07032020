import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { CalcStoreProvider } from './stores/CalcStore';
import { App } from './App';


ReactDOM.render(
  <React.StrictMode>
    <CalcStoreProvider>
      <App />
    </CalcStoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

