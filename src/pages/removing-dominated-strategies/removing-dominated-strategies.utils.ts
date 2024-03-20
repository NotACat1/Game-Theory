type Matrix = number[][];

interface Result {
  matrix: Matrix;
  remainingRows: number[];
  remainingCols: number[];
}

function removeStrictlyDominatedStrategies(matrix: Matrix): Result {
  const numRows = matrix.length;
  const numCols = matrix[0].length;
  const remainingRows: number[] = [];
  const remainingCols: number[] = [];

  // Проверка доминирования по строкам
  for (let i = 0; i < numRows; i++) {
    let isDominated = false;
    for (let j = 0; j < numRows; j++) {
      if (i !== j) {
        let allSmaller = true;
        for (let k = 0; k < numCols; k++) {
          if (matrix[i][k] <= matrix[j][k]) {
            allSmaller = false;
            break;
          }
        }
        if (allSmaller) {
          isDominated = true;
          break;
        }
      }
    }
    if (!isDominated) {
      remainingRows.push(i);
    }
  }

  // Проверка доминирования по столбцам
  for (let j = 0; j < numCols; j++) {
    let isDominated = false;
    for (let i = 0; i < numCols; i++) {
      if (i !== j) {
        let allSmaller = true;
        for (let k = 0; k < numRows; k++) {
          if (matrix[k][j] <= matrix[k][i]) {
            allSmaller = false;
            break;
          }
        }
        if (allSmaller) {
          isDominated = true;
          break;
        }
      }
    }
    if (!isDominated) {
      remainingCols.push(j);
    }
  }

  // Создание новой матрицы на основе оставшихся строк и столбцов
  const newMatrix: Matrix = [];
  for (let i = 0; i < remainingRows.length; i++) {
    const newRow: number[] = [];
    for (let j = 0; j < remainingCols.length; j++) {
      newRow.push(matrix[remainingRows[i]][remainingCols[j]]);
    }
    newMatrix.push(newRow);
  }

  return { matrix: newMatrix, remainingRows, remainingCols };
}

export { removeStrictlyDominatedStrategies };
