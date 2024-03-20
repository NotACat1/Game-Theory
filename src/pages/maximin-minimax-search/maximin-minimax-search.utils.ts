const minMaxElements = (
  matrix: number[][],
): { minInRows: number[]; maxInColumns: number[] } => {
  const minInRows: number[] = [];
  const maxInColumns: number[] = [];

  // Находим минимальные элементы в строках
  for (let i = 0; i < matrix.length; i++) {
    let min = matrix[i][0];
    for (let j = 1; j < matrix[i].length; j++) {
      if (matrix[i][j] < min) {
        min = matrix[i][j];
      }
    }
    minInRows.push(min);
  }

  // Находим максимальные элементы в столбцах
  for (let j = 0; j < matrix[0].length; j++) {
    let max = matrix[0][j];
    for (let i = 1; i < matrix.length; i++) {
      if (matrix[i][j] > max) {
        max = matrix[i][j];
      }
    }
    maxInColumns.push(max);
  }

  return { minInRows, maxInColumns };
};

const findMinIndex = (arr: number[]): number => {
  let minIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[minIndex]) {
      minIndex = i;
    }
  }
  return minIndex;
};

const findMaxIndex = (arr: number[]): number => {
  let maxIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[maxIndex]) {
      maxIndex = i;
    }
  }
  return maxIndex;
};

export { minMaxElements, findMinIndex, findMaxIndex };
