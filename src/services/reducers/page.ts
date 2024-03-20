// Импорт Types
import { SET_PAGE_TITLE, SET_METHOD } from '../types/page';

// Импорт Actions
import { TPageActions } from '../actions/page';

type TPageState = {
  title: string;
  method: string;
};

// Начальное состояние хранилища
const initialState: TPageState = {
  title: 'Теория игр',
  method: 'Теория игр',
};

// Редуктор для управления состоянием хранилища
export const pageReducer = (state = initialState, action: TPageActions) => {
  switch (action.type) {
    case SET_PAGE_TITLE: {
      const newTitle = action.payload;
      return {
        ...state,
        title: newTitle,
      };
    }
    case SET_METHOD: {
      const newMethod = action.payload;
      return {
        ...state,
        method: newMethod,
      };
    }
    // Если действие не определено, возвращаем текущее состояние
    default: {
      return state;
    }
  }
};
