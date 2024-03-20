// Подключение Redux
import { combineReducers } from 'redux';

// Подключение отдельных редюсеров
import { matrixReducer } from './matrix';
import { pageReducer } from './page';

// Корневой редюсер, объединяющий все редюсеры
export const rootReducer = combineReducers({
  matrix: matrixReducer,
  page: pageReducer,
});
