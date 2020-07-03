import React, { FC, useState, ChangeEvent } from 'react';

import './CalcForm.css';

export interface CalcFormProps {
  result?: number;
  onAdd: (value: number) => void;
  onSubtract: (value: number) => void;
}

export const CalcForm: FC<CalcFormProps> = ({
  result,
  onAdd: add,
  onSubtract: subtract,
}) => {

  const [ num, setNum ] = useState(0);

  const change = (e: ChangeEvent<HTMLInputElement>) => {
    setNum(Number(e.target.value));
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
        <button type="button" onClick={() => add(num)}>+</button>
        <button type="button" onClick={() => subtract(num)}>-</button>
      </fieldset>
    </form>
  );

};

CalcForm.defaultProps = {
  result: 0,
};