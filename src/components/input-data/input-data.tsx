// Подключение библиотек
import React, { FC, FormEvent } from 'react';

// Подключение Redux
import { useSelector, useDispatch } from 'services/hooks';
import {
  solveMaximinMinimaxSearch,
  solveRemovingDominatedStrategies,
  solveRemovingWeakStrategies,
} from 'services/actions/matrix';
import shallowEqual from 'utils/shallowEqual';

// Подключение компонентов
import TableInput from 'components/table-input/table-input';
import InputButtons from 'components/input-buttons/input-buttons';
import InputSize from 'components/input-size/input-size';

// Подключение таблиц стилей и функций
import styles from './input-data.module.scss';

const InputData: FC = () => {
  const dispatch = useDispatch();

  const { method, title } = useSelector(state => state.page, shallowEqual);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    switch (method) {
      case 'maximin-minimax-search':
        dispatch(solveMaximinMinimaxSearch());
        break;
      case 'removing-dominated-strategies':
        dispatch(solveRemovingDominatedStrategies());
        break;
      case 'removing-weak-dominated-strategies':
        dispatch(solveRemovingWeakStrategies());
        break;
      default:
        console.log('Ошибка: Неизестный метод');
    }
  };

  return (
    <section>
      <h1 className={styles.title}>{title}</h1>
      <form className={styles.container} onSubmit={handleSubmit}>
        <TableInput />
        <InputSize />
        <InputButtons />
      </form>
    </section>
  );
};

export default InputData;
