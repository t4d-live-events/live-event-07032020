import React, { FC } from 'react';

import { useCalcStoreConsumer } from '../stores/CalcStore';
import { CalcForm } from '../components/CalcForm';
import { CalcHistory } from '../components/CalcHistory';

export const CalcToolContainer: FC = () => {

  const calcStore = useCalcStoreConsumer()!;

  return (
    <>
      <CalcForm {...calcStore} />
      <CalcHistory history={calcStore.history} onDeleteHistoryEntry={calcStore.onDeleteHistoryEntry} />
    </>
  );

};