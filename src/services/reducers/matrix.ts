// Импорт Types
import {
  CLEAR_MATRIX,
  GENERATE_MATRIX,
  INPUT_MATRIX_VALUE,
  SET_MATRIX_SIZE,
  SOLVE_MAXIMIN_MINIMAX_SEARCH,
  SOLVE_REMOVING_DOMINATED_STRATEGIES,
  SOLVE_REMOVING_WEAK_STRATEGIES,
} from '../types/matrix';

// Импорт Actions
import { TMatrixActions } from '../actions/matrix';

type TMatrixState = {
  matrix: number[][];
  rows: number;
  cols: number;
  solveMaximinMinimaxSearch: { matrix: number[][]; rows: number; cols: number };
  solveRemovingDominatedStrategies: {
    matrix: number[][];
    rows: number;
    cols: number;
  };
  solveRemovingWeakStrategies: {
    matrix: number[][];
    rows: number;
    cols: number;
  };
};

// Начальное состояние хранилища
const initialState: TMatrixState = {
  matrix: [
    [1, 2, 3],
    [4, 5, 6],
  ],
  rows: 2,
  cols: 3,
  solveMaximinMinimaxSearch: { matrix: [[]], rows: 0, cols: 0 },
  solveRemovingDominatedStrategies: { matrix: [[]], rows: 0, cols: 0 },
  solveRemovingWeakStrategies: { matrix: [[]], rows: 0, cols: 0 },
};

const maxValue = 10;
const minValue = -10;

// Редуктор для управления состоянием хранилища
export const matrixReducer = (state = initialState, action: TMatrixActions) => {
  switch (action.type) {
    case CLEAR_MATRIX: {
      const clearedMatrix = state.matrix.map(row => row.map(() => 0));
      return {
        ...state,
        matrix: clearedMatrix,
      };
    }
    case GENERATE_MATRIX: {
      const generateMatrix = state.matrix.map(row =>
        row.map(
          () =>
            Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue,
        ),
      );
      return {
        ...state,
        matrix: generateMatrix,
      };
    }
    case INPUT_MATRIX_VALUE: {
      const { rowIndex, colIndex, value } = action.payload;
      const updatedMatrix = state.matrix.map(row => [...row]);
      updatedMatrix[rowIndex][colIndex] = value;
      return {
        ...state,
        matrix: [...updatedMatrix],
      };
    }
    case SET_MATRIX_SIZE: {
      const { rows, cols } = action.payload;
      const currentRows = state.rows;
      const currentCols = state.cols;

      // Создаем новую матрицу с новыми размерами
      const newMatrix: number[][] = [];
      for (let i = 0; i < rows; i++) {
        const newRow: number[] = [];
        for (let j = 0; j < cols; j++) {
          if (i < currentRows && j < currentCols) {
            newRow.push(state.matrix[i][j]);
          } else {
            newRow.push(0);
          }
        }
        newMatrix.push(newRow);
      }

      return {
        ...state,
        matrix: newMatrix,
        rows: rows,
        cols: cols,
      };
    }
    case SOLVE_MAXIMIN_MINIMAX_SEARCH: {
      const updatedSolveMatrix = [...state.matrix];
      const updatedSolveRows = state.rows;
      const updatedSolveCols = state.cols;
      return {
        ...state,
        solveMaximinMinimaxSearch: {
          matrix: updatedSolveMatrix,
          rows: updatedSolveRows,
          cols: updatedSolveCols,
        },
      };
    }
    case SOLVE_REMOVING_DOMINATED_STRATEGIES: {
      const updatedSolveMatrix = [...state.matrix];
      const updatedSolveRows = state.rows;
      const updatedSolveCols = state.cols;
      return {
        ...state,
        solveRemovingDominatedStrategies: {
          matrix: updatedSolveMatrix,
          rows: updatedSolveRows,
          cols: updatedSolveCols,
        },
      };
    }
    case SOLVE_REMOVING_WEAK_STRATEGIES: {
      const updatedSolveMatrix = [...state.matrix];
      const updatedSolveRows = state.rows;
      const updatedSolveCols = state.cols;
      return {
        ...state,
        solveRemovingWeakStrategies: {
          matrix: updatedSolveMatrix,
          rows: updatedSolveRows,
          cols: updatedSolveCols,
        },
      };
    }
    // Если действие не определено, возвращаем текущее состояние
    default: {
      return state;
    }
  }
};
