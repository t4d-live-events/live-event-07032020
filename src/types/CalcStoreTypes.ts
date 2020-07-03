import { HistoryEntry } from '../models/HistoryEntry';

export type ComputeFnType = (valA: number, valB: number) => number;

export type DoOpType = (name: string, value: number, computeFn: ComputeFnType) => void;

export type CalcStoreType = {
  history: HistoryEntry[];
  onDoOp: DoOpType;
  onDeleteHistoryEntry: (historyEntryId: number) => void;
  onClearHistory: () => void;
};