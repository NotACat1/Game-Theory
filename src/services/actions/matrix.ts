// Импорт Types
import {
  CLEAR_MATRIX,
  INPUT_MATRIX_VALUE,
  GENERATE_MATRIX,
  SET_MATRIX_SIZE,
  SOLVE_MAXIMIN_MINIMAX_SEARCH,
  SOLVE_REMOVING_DOMINATED_STRATEGIES,
  SOLVE_REMOVING_WEAK_STRATEGIES,
} from '../types/matrix';

export interface IClearMatrix {
  readonly type: typeof CLEAR_MATRIX;
}

export interface IInputValue {
  readonly type: typeof INPUT_MATRIX_VALUE;
  readonly payload: {
    rowIndex: number;
    colIndex: number;
    value: number;
  };
}

export interface IGenerateMatrix {
  readonly type: typeof GENERATE_MATRIX;
}

export interface ISetMatrixSize {
  readonly type: typeof SET_MATRIX_SIZE;
  readonly payload: {
    rows: number;
    cols: number;
  };
}

export interface ISolveMaximinMinimaxSearch {
  readonly type: typeof SOLVE_MAXIMIN_MINIMAX_SEARCH;
}

export interface ISolveRemovingDominatedStrategies {
  readonly type: typeof SOLVE_REMOVING_DOMINATED_STRATEGIES;
}

export interface ISolveRemovingWeakStrategies {
  readonly type: typeof SOLVE_REMOVING_WEAK_STRATEGIES;
}

export type TMatrixActions =
  | IClearMatrix
  | IInputValue
  | IGenerateMatrix
  | ISetMatrixSize
  | ISolveMaximinMinimaxSearch
  | ISolveRemovingDominatedStrategies
  | ISolveRemovingWeakStrategies;

// Создание действий (action creators)
export const clearMatrix = (): IClearMatrix => ({
  type: CLEAR_MATRIX,
});

export const inputValue = (
  rowIndex: number,
  colIndex: number,
  value: number,
): IInputValue => ({
  type: INPUT_MATRIX_VALUE,
  payload: { rowIndex, colIndex, value },
});

export const generateMatrix = (): IGenerateMatrix => ({
  type: GENERATE_MATRIX,
});

export const setMatrixSize = (rows: number, cols: number): ISetMatrixSize => ({
  type: SET_MATRIX_SIZE,
  payload: {
    rows,
    cols,
  },
});

export const solveMaximinMinimaxSearch = (): ISolveMaximinMinimaxSearch => ({
  type: SOLVE_MAXIMIN_MINIMAX_SEARCH,
});

export const solveRemovingDominatedStrategies =
  (): ISolveRemovingDominatedStrategies => ({
    type: SOLVE_REMOVING_DOMINATED_STRATEGIES,
  });

export const solveRemovingWeakStrategies =
  (): ISolveRemovingWeakStrategies => ({
    type: SOLVE_REMOVING_WEAK_STRATEGIES,
  });
