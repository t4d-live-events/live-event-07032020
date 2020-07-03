import React from 'react';

import { useCalcStore } from './hooks/useCalcStore';
import { CalcForm } from './components/CalcForm';

import './App.css';

export const App = () => {

  const calcFormProps = useCalcStore();

  return (
    <div className="layout">
      <header id="page-header">
        <h2>Calculator</h2>
      </header>
      <main id="page-content">
        <CalcForm {...calcFormProps} />
      </main>
      <footer id="page-footer">
        <small>&copy; 2020 Training 4 Developers, Inc. - MIT License</small>
      </footer>
    </div>
  );
}
