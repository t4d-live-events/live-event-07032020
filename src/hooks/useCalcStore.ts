import { useState } from 'react';

import { CalcStoreType, DoOpType } from '../types/CalcStoreTypes';

export const useCalcStore: () => CalcStoreType = () => {

  const [ result, setResult ] = useState(0);

  const doOp: DoOpType = (value, computeFn) => {
    setResult(computeFn(result, value));
  };

  return {
    result,
    onDoOp: doOp,
  };

};