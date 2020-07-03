import React, { FC, createContext, useContext } from 'react';

import { CalcStoreType } from '../types/CalcStoreTypes';
import { useCalcStore } from '../hooks/useCalcStore';


const CalcStoreContext = createContext<CalcStoreType | null>(null);


export const CalcStoreProvider: FC = ({ children }) => {

  const calcStoreProps = useCalcStore();

  return <CalcStoreContext.Provider value={calcStoreProps}>
    {children}
  </CalcStoreContext.Provider>;

};

export const useCalcStoreConsumer = () => useContext(CalcStoreContext);




