// Подключение библиотек
import React, { FC, useEffect, useMemo } from 'react';

// Подключение Redux
import { useSelector, useDispatch } from 'services/hooks';
import { setPageTitle, setMethod } from 'services/actions/page';
import shallowEqual from 'utils/shallowEqual';

// Подключение компонентов

// Подключение таблиц стилей и функций
import styles from './maximin-minimax-search.module.scss';
import {
  minMaxElements,
  findMaxIndex,
  findMinIndex,
} from './maximin-minimax-search.utils';

const MaximinMinimaxSearchPage: FC = () => {
  const dispatch = useDispatch();

  const { solveMaximinMinimaxSearch } = useSelector(
    state => state.matrix,
    shallowEqual,
  );
  const { matrix, cols, rows } = solveMaximinMinimaxSearch;

  useEffect(() => {
    document.title = 'Теория игр: Поиск максимина/минимакса';
    dispatch(setPageTitle('Поиск максимина/минимакса'));
    dispatch(setMethod('maximin-minimax-search'));
  }, []);

  const { minInRows, maxInColumns } = useMemo(
    () => minMaxElements(matrix),
    [matrix],
  );

  const maxMinIndex = useMemo(() => findMaxIndex(minInRows), [minInRows]);
  const minMaxIndex = useMemo(() => findMinIndex(maxInColumns), [maxInColumns]);

  const classNameDataCell = `${styles.table__cell} ${styles.table__cell_data}`;
  const classNameDataCellActive = `${styles.table__cell} ${styles.table__cell_active}`;

  if (matrix[0].length == 0) return null;

  return (
    <section>
      <h2 className={styles.title}>Решение:</h2>
      <div className={styles.container}>
        <table className={styles.table}>
          <tr>
            <td></td>
            <td></td>
            <th colSpan={cols} className={styles.table__cell}>
              Игрок 1
            </th>
          </tr>
          <tr>
            <td></td>
            <td></td>
            {matrix[0].map((_, index) => (
              <th key={index} className={styles.table__cell}>
                A{index + 1}
              </th>
            ))}
            <th className={styles.table__cell}>min</th>
          </tr>
          <tr>
            <th
              rowSpan={rows + 1}
              className={`${styles.table__cell} ${styles.table__cell_vertical}`}
            >
              Игрок 2
            </th>
          </tr>
          {matrix.map((rowData, rowIndex) => (
            <tr key={rowIndex}>
              <th className={styles.table__cell}>B{rowIndex + 1}</th>
              {rowData.map((cellData, colIndex) => (
                <td key={colIndex} className={classNameDataCell}>
                  {cellData}
                </td>
              ))}
              <th
                className={
                  rowIndex == maxMinIndex
                    ? classNameDataCellActive
                    : styles.table__cell
                }
              >
                {minInRows[rowIndex]}
              </th>
            </tr>
          ))}
          <tr>
            <td></td>
            <th className={styles.table__cell}>max</th>
            {maxInColumns.map((max, index) => (
              <th
                key={index}
                className={
                  index == minMaxIndex
                    ? classNameDataCellActive
                    : styles.table__cell
                }
              >
                {max}
              </th>
            ))}
            <td></td>
          </tr>
        </table>
      </div>
    </section>
  );
};

export default MaximinMinimaxSearchPage;
