// Подключение библиотек
import React, { FC, useEffect, useMemo } from 'react';

// Подключение Redux
import { useSelector, useDispatch } from 'services/hooks';
import { setPageTitle, setMethod } from 'services/actions/page';
import shallowEqual from 'utils/shallowEqual';

// Подключение таблиц стилей и функций
import styles from './removing-weak-dominated-strategies.module.scss';
import { removeWeakDominatedStrategies } from './removing-weak-dominated-strategies.utils';

const RemovingWeakDominatedStrategiesPage: FC = () => {
  const dispatch = useDispatch();

  const { solveRemovingWeakStrategies } = useSelector(
    state => state.matrix,
    shallowEqual,
  );
  const { matrix, cols, rows } = solveRemovingWeakStrategies;

  useEffect(() => {
    document.title = 'Теория игр: Удаление слабо доминируемых стратегий';
    dispatch(setPageTitle('Удаление слабо доминируемых стратегий'));
    dispatch(setMethod('removing-weak-dominated-strategies'));
  }, []);

  const {
    matrix: resultMatrix,
    remainingCols,
    remainingRows,
  } = useMemo(() => removeWeakDominatedStrategies(matrix), [matrix]);

  if (matrix[0].length == 0) return null;

  const classNameDataCell = `${styles.table__cell} ${styles.table__cell_data}`;

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
            {remainingCols.map((item, index) => (
              <th key={index} className={styles.table__cell}>
                A{item + 1}
              </th>
            ))}
          </tr>
          <tr>
            <th
              rowSpan={rows + 1}
              className={`${styles.table__cell} ${styles.table__cell_vertical}`}
            >
              Игрок 2
            </th>
          </tr>
          {resultMatrix.map((rowData, rowIndex) => (
            <tr key={rowIndex}>
              <th className={styles.table__cell}>
                B{remainingRows[rowIndex] + 1}
              </th>
              {rowData.map((cellData, colIndex) => (
                <td key={colIndex} className={classNameDataCell}>
                  {cellData}
                </td>
              ))}
            </tr>
          ))}
        </table>
      </div>
    </section>
  );
};

export default RemovingWeakDominatedStrategiesPage;
