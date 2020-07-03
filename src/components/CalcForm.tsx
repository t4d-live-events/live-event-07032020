import React, { FC, useState, ChangeEvent } from 'react';

import './CalcForm.css';

import { DoOpType, ComputeFnType } from '../types/CalcStoreTypes';

export interface CalcFormProps {
  result?: number;
  onDoOp: DoOpType;
  onClearHistory: () => void;
}

export const CalcForm: FC<CalcFormProps> = ({
  result,
  onDoOp: doOp,
  onClearHistory,
}) => {

  const [ num, setNum ] = useState(0);

  const change = (e: ChangeEvent<HTMLInputElement>) => {
    setNum(Number(e.target.value));
  };

  const add: ComputeFnType = (valA, valB) => valA + valB;
  const subtract: ComputeFnType = (valA, valB) => valA - valB;
  const multiply: ComputeFnType = (valA, valB) => valA * valB;
  const divide: ComputeFnType = (valA, valB) => valA / valB;

  const clearHistory = () => {
    setNum(0);
    onClearHistory();
  };

  return (
    <form>
      <div>
        Result: {result}
      </div>
      <div>
        <label htmlFor="num-input">Num: </label>
        <input type="number" id="num-input" value={num} onChange={change} />
      </div>
      <fieldset>
        <button type="button" onClick={() => doOp('Add', num, add)}>+</button>
        <button type="button" onClick={() => doOp('Subtract', num, subtract)}>-</button>
        <button type="button" onClick={() => doOp('Multiply', num, multiply)}>*</button>
        <button type="button" onClick={() => doOp('Divide', num, divide)}>/</button>
        <button type="button" onClick={clearHistory}>Clear</button>
      </fieldset>
    </form>
  );

};

CalcForm.defaultProps = {
  result: 0,
};