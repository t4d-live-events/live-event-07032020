import { useState } from 'react';


export const useCalcStore = () => {

  const [ result, setResult ] = useState(0);

  const add = (value: number) => {
    setResult(result + value);
  };

  const subtract = (value: number) => {
    setResult(result - value);
  };

  return {
    result,
    onAdd: add,
    onSubtract: subtract,
  };

};