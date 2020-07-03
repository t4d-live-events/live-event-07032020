import React, { FC } from 'react';

import { CalcToolContainer } from './containers/CalcToolContainer';

import './App.css';

export const App: FC = () => {

  return (
    <div className="layout">
      <header id="page-header">
        <h2>Calculator</h2>
      </header>
      <main id="page-content">
        <CalcToolContainer headerText="Calc Tool 1" />
        <CalcToolContainer headerText="Calc Tool 2" />
      </main>
      <footer id="page-footer">
        <small>&copy; 2020 Training 4 Developers, Inc. - MIT License</small>
      </footer>
    </div>
  );
}
