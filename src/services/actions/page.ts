// Импорт Types
import { SET_PAGE_TITLE, SET_METHOD } from '../types/page';

export interface ISetPageTitle {
  readonly type: typeof SET_PAGE_TITLE;
  readonly payload: string;
}

export interface ISetMethod {
  readonly type: typeof SET_METHOD;
  readonly payload: string;
}

export type TPageActions = ISetPageTitle | ISetMethod;

// Создание действий (action creators)
export const setPageTitle = (title: string): ISetPageTitle => ({
  type: SET_PAGE_TITLE,
  payload: title,
});

export const setMethod = (method: string): ISetMethod => ({
  type: SET_METHOD,
  payload: method,
});
