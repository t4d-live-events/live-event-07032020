import React, { FC, useState, ChangeEvent } from 'react';

import './CalcForm.css';

import { DoOpType, ComputeFnType } from '../types/CalcStoreTypes';

export interface CalcFormProps {
  result?: number;
  onDoOp: DoOpType;
}

export const CalcForm: FC<CalcFormProps> = ({
  result,
  onDoOp,
}) => {

  const [ num, setNum ] = useState(0);

  const change = (e: ChangeEvent<HTMLInputElement>) => {
    setNum(Number(e.target.value));
  };

  const add: ComputeFnType = (valA, valB) => valA + valB;
  const subtract: ComputeFnType = (valA, valB) => valA - valB;
  const multiply: ComputeFnType = (valA, valB) => valA * valB;
  const divide: ComputeFnType = (valA, valB) => valA / valB;

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
        <button type="button" onClick={() => onDoOp(num, add)}>+</button>
        <button type="button" onClick={() => onDoOp(num, subtract)}>-</button>
        <button type="button" onClick={() => onDoOp(num, multiply)}>*</button>
        <button type="button" onClick={() => onDoOp(num, divide)}>/</button>
      </fieldset>
    </form>
  );

};

CalcForm.defaultProps = {
  result: 0,
};