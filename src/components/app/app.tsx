// Подключение библиотек
import React, { FC } from 'react';
import { RouterProvider, createHashRouter } from 'react-router-dom';

// Подключение компонентов
import RootPage from 'pages/root/root';
import MaximinMinimaxSearchPage from 'pages/maximin-minimax-search/maximin-minimax-search';
import RemovingDominatedStrategiesPage from 'pages/removing-dominated-strategies/removing-dominated-strategies';
import RemovingWeakDominatedStrategiesPage from 'pages/removing-weak-dominated-strategies/removing-weak-dominated-strategies';

// Создаем роутер
const router = createHashRouter([
  {
    path: '/',
    element: <RootPage />,
    children: [
      {
        index: true,
        element: <MaximinMinimaxSearchPage />,
      },
      {
        path: 'removing-dominated-strategies',
        element: <RemovingDominatedStrategiesPage />,
      },
      {
        path: 'removing-weak-dominated-strategies',
        element: <RemovingWeakDominatedStrategiesPage />,
      },
    ],
  },
]);

const App: FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
