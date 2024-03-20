type Matrix = number[][];

interface Result {
  matrix: Matrix;
  remainingRows: number[];
  remainingCols: number[];
}

function removeWeakDominatedStrategies(matrix: Matrix): Result {
  const numRows = matrix.length;
  const numCols = matrix[0].length;

  // Находим слабо доминируемые строки
  const weaklyDominatedRows: boolean[] = new Array(numRows).fill(false);
  for (let i = 0; i < numRows; i++) {
    if (!weaklyDominatedRows[i]) {
      for (let j = 0; j < numRows; j++) {
        if (i !== j) {
          let weaklyDominates = true;
          for (let k = 0; k < numCols; k++) {
            if (matrix[i][k] < matrix[j][k]) {
              weaklyDominates = false;
              break;
            }
          }
          if (weaklyDominates) {
            weaklyDominatedRows[i] = true;
            break;
          }
        }
      }
    }
  }

  // Находим слабо доминируемые столбцы
  const weaklyDominatedCols: boolean[] = new Array(numCols).fill(false);
  for (let j = 0; j < numCols; j++) {
    if (!weaklyDominatedCols[j]) {
      for (let i = 0; i < numCols; i++) {
        if (i !== j) {
          let weaklyDominates = true;
          for (let k = 0; k < numRows; k++) {
            if (matrix[k][j] < matrix[k][i]) {
              weaklyDominates = false;
              break;
            }
          }
          if (weaklyDominates) {
            weaklyDominatedCols[j] = true;
            break;
          }
        }
      }
    }
  }

  // Формируем новую матрицу и массивы с номерами оставшихся строк и столбцов
  const newMatrix: Matrix = [];
  const remainingRows: number[] = [];
  const remainingCols: number[] = [];
  for (let i = 0; i < numRows; i++) {
    if (!weaklyDominatedRows[i]) {
      const newRow: number[] = [];
      for (let j = 0; j < numCols; j++) {
        if (!weaklyDominatedCols[j]) {
          newRow.push(matrix[i][j]);
        }
      }
      newMatrix.push(newRow);
      remainingRows.push(i);
    }
  }
  for (let j = 0; j < numCols; j++) {
    if (!weaklyDominatedCols[j]) {
      remainingCols.push(j);
    }
  }

  return { matrix: newMatrix, remainingRows, remainingCols };
}

export { removeWeakDominatedStrategies };
