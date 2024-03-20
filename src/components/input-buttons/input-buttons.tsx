// Подключение библиотек
import React, { FC } from 'react';

// Подключение Redux
import { useDispatch } from 'services/hooks';
import { clearMatrix, generateMatrix } from 'services/actions/matrix';

// Подключение компонентов
import SvgCalculation from 'components/svg-calculation/svg-calculation';
import SvgGeneration from 'components/svg-generation/svg-generation';
import SvgClear from 'components/svg-clear/svg-clear';

// Подключение таблиц стилей и функций
import styles from './input-buttons.module.scss';

const InputButtons: FC = () => {
  const dispatch = useDispatch();

  const handleGenerate = () => {
    dispatch(generateMatrix());
  };

  const handleClear = () => {
    dispatch(clearMatrix());
  };

  return (
    <div className={styles.container}>
      <button type="submit" className={styles.container__button}>
        <span>Решить</span>
        <SvgCalculation extraClass={styles.container__icon} />
      </button>
      <button
        type="button"
        className={styles.container__button}
        onClick={handleGenerate}
      >
        <span>Сгенерировать</span>
        <SvgGeneration extraClass={styles.container__icon} />
      </button>
      <button
        type="button"
        className={styles.container__button}
        onClick={handleClear}
      >
        <span>Очистить</span>
        <SvgClear extraClass={styles.container__icon} />
      </button>
    </div>
  );
};

export default InputButtons;
