// Импорт Types
import { EXAMPLE } from '../types/example';

export interface IExample {
  readonly type: typeof EXAMPLE;
  readonly payload: number;
}

export type TExampleActions = IExample;

// Создание действий (action creators)
export const example = (num: number): IExample => ({
  type: EXAMPLE,
  payload: num,
});
