import { useState, useMemo, useCallback } from 'react';

import { HistoryEntry } from '../models/HistoryEntry';
import { CalcStoreType, DoOpType } from '../types/CalcStoreTypes';

export const useCalcStore: () => CalcStoreType = () => {

  const [ history, setHistory ] = useState<HistoryEntry[]>([]);

  const doOp: DoOpType = useCallback((name, value, computeFn) => {
    setHistory([
      ...history,
      {
        id: Math.max(...history.map(h => h.id), 0) + 1,
        name,
        value,
        computeFn,
      },
    ]);
  }, [ history ]);

  const deleteHistoryEntry = useCallback((historyEntryId: number) => {
    setHistory(history.filter(h => h.id !== historyEntryId));
  }, [ history ]);

  const clearHistory = useCallback(() => {
    setHistory([]);
  }, []);


  const result = useMemo(() => {
    return history.reduce( (result, historyEntry) => {
      return historyEntry.computeFn(result, historyEntry.value);
    }, 0);
  }, [ history ]);

  return {
    history,
    result,
    onDoOp: doOp,
    onDeleteHistoryEntry: deleteHistoryEntry,
    onClearHistory: clearHistory,
  };

};