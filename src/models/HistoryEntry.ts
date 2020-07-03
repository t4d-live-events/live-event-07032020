import { ComputeFnType } from '../types/CalcStoreTypes';

export interface HistoryEntry {
  id: number;
  name: string;
  value: number;
  computeFn: ComputeFnType;
}