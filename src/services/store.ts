// Подключение Redux
import { configureStore } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk'; // Redux Thunk - middleware для обработки асинхронных действий в Redux

// rootReducer - корневой редюсер, объединяющий все редюсеры в приложении
import { rootReducer } from './reducers/index';

// Импорт middleware
// Здесь ваши middleware

export const store = configureStore({
  reducer: rootReducer,
  //middleware: getDefaultMiddleware =>
  //  getDefaultMiddleware().prepend(
  //    thunk,
  //    socketMiddleware(ALL_ORDERS_URL, wsActions),
  //  ),
  devTools: process.env.NODE_ENV !== 'production',
});
