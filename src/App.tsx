import React, { FC } from 'react';

import { CalcFormContainer } from './containers/CalcFormContainer';

import './App.css';

export const App: FC = () => {

  return (
    <div className="layout">
      <header id="page-header">
        <h2>Calculator</h2>
      </header>
      <main id="page-content">
        <CalcFormContainer headerText="Calc Form 1" />
        <CalcFormContainer headerText="Calc Form 2" />
      </main>
      <footer id="page-footer">
        <small>&copy; 2020 Training 4 Developers, Inc. - MIT License</small>
      </footer>
    </div>
  );
}
