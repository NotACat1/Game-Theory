// Импорт Types
import { EXAMPLE } from '../types/example';

// Импорт Actions
import { TExampleActions } from '../actions/example';

type TExampleState = {
  num: number;
};

// Начальное состояние хранилища
const initialState: TExampleState = {
  num: 0,
};

// Редуктор для управления состоянием хранилища
export const burgerReducer = (
  state = initialState,
  action: TExampleActions,
) => {
  switch (action.type) {
    case EXAMPLE: {
      return {
        ...state,
        num: action.payload,
      };
    }
    // Если действие не определено, возвращаем текущее состояние
    default: {
      return state;
    }
  }
};
