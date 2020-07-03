

export type ComputeFnType = (valA: number, valB: number) => number;

export type DoOpType = (value: number, computeFn: ComputeFnType) => void;

export type CalcStoreType = {
  result: number;
  onDoOp: DoOpType;
}