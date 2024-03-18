// Подключение Redux
import { ThunkAction } from 'redux-thunk';

// Импортирование Actions
import { TExampleActions } from './actions/example';

// Импортирование Actions
import { rootReducer } from './reducers/';
import { store } from './store';

// Типизация всех экшенов приложения
type TApplicationActions = TExampleActions;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  TApplicationActions
>;
