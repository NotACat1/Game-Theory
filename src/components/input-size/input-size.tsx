// Подключение библиотек
import React, { FC, ChangeEvent, useState } from 'react';

// Подключение Redux
import { useSelector, useDispatch } from 'services/hooks';
import { setMatrixSize } from 'services/actions/matrix';
import shallowEqual from 'utils/shallowEqual';

// Подключение компонентов
import SvgChange from 'components/svg-change/svg-change';

// Подключение таблиц стилей и функций
import styles from './input-size.module.scss';

const InputSize: FC = () => {
  const dispatch = useDispatch();

  const { cols: colsData, rows: rowsData } = useSelector(
    state => state.matrix,
    shallowEqual,
  );

  const [rows, setRows] = useState<number>(rowsData);
  const [cols, setCols] = useState<number>(colsData);

  const handleSetMatrixSize = () => {
    dispatch(setMatrixSize(rows, cols));
  };

  const handleRowsChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (isNaN(value)) return;
    if (value > 100 || value < 1) return;
    setRows(value);
  };

  const handleColsChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (isNaN(value)) return;
    if (value > 100 || value < 1) return;
    setCols(value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.container__inputs}>
        <input
          type="number"
          min={1}
          max={100}
          value={rows}
          className={styles.container__input}
          onChange={handleRowsChange}
        />
        <span>X</span>
        <input
          type="number"
          min={1}
          max={100}
          value={cols}
          className={styles.container__input}
          onChange={handleColsChange}
        />
      </div>
      <button
        type="button"
        className={styles.container__button}
        onClick={handleSetMatrixSize}
      >
        <span>Изменить</span>
        <SvgChange extraClass={styles.container__icon} />
      </button>
    </div>
  );
};

export default InputSize;
