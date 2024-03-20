// Подключение библиотек
import React, { FC } from 'react';

// Подключение Redux
import { useSelector, useDispatch } from 'services/hooks';
import { inputValue } from 'services/actions/matrix';
import shallowEqual from 'utils/shallowEqual';

// Подключение таблиц стилей и функций
import styles from './table-input.module.scss';

const TableInput: FC = () => {
  const dispatch = useDispatch();

  const { matrix, cols, rows } = useSelector(
    state => state.matrix,
    shallowEqual,
  );

  const handleMatrixChange = (
    rowIndex: number,
    colIndex: number,
    value: string,
  ) => {
    const numValue = parseFloat(value);
    if (isNaN(numValue)) return;
    if (numValue > 100 || numValue < -100) return;
    dispatch(inputValue(rowIndex, colIndex, numValue));
  };

  const classNameDataCell = `${styles.table__cell} ${styles.table__cell_data}`;

  return (
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
                <input
                  type="number"
                  min={-100}
                  max={100}
                  value={cellData}
                  className={styles.table__input}
                  onChange={e =>
                    handleMatrixChange(rowIndex, colIndex, e.target.value)
                  }
                />
              </td>
            ))}
          </tr>
        ))}
      </table>
    </div>
  );
};

export default TableInput;
