import React, { FC } from 'react';

import { useCalcStoreConsumer } from '../stores/CalcStore';
import { CalcForm } from '../components/CalcForm';

export const CalcFormContainer: FC<{ headerText: string }> = ({ headerText }) => {

  return (
    <div>
      <h2>{headerText}</h2>
      <CalcForm {...useCalcStoreConsumer()!} />
    </div>
  );

};