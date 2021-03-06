import React, { FC } from 'react';

import { HistoryEntry } from '../models/HistoryEntry';

import './CalcHistory.css';

export interface CalcHistoryProps {
  history: HistoryEntry[];
  onDeleteHistoryEntry: (historyEntryId: number) => void;
}

export const CalcHistory: FC<CalcHistoryProps> = ({
  history,
  onDeleteHistoryEntry: deleteHistoryEntry,
}) => {


  return (
    <>
      <header>
        <h2>Calculator History</h2>
      </header>
      <table>
        <thead>
          <tr>
            <th>Op Name</th>
            <th>Op Value</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {history.map(historyEntry => <tr key={historyEntry.id}>
            <td>{historyEntry.name}</td>
            <td>{historyEntry.value}</td>
            <td>
              <button type="button" onClick={() => deleteHistoryEntry(historyEntry.id)}>
                X
              </button>
            </td>
          </tr>)}
        </tbody>
      </table>
    </>
  );

};