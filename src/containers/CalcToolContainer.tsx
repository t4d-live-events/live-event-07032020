import React, { FC } from 'react';

import { useCalcStoreConsumer } from '../stores/CalcStore';
import { CalcForm } from '../components/CalcForm';
import { CalcHistory } from '../components/CalcHistory';

export const CalcToolContainer: FC<{ headerText: string }> = ({ headerText }) => {

  const calcStore = useCalcStoreConsumer()!;

  return (
    <div>
      <h2>{headerText}</h2>
      <CalcForm {...calcStore} />
      <CalcHistory history={calcStore.history} onDeleteHistoryEntry={calcStore.onDeleteHistoryEntry} />
    </div>
  );

};