// Подключение библиотек
import React, { FC } from 'react';
import { RouterProvider, createHashRouter } from 'react-router-dom';

// Подключение компонентов
import RootPage, { loader as rootLoader } from 'pages/root/root';

// Создаем роутер
const router = createHashRouter([
  {
    path: '/',
    loader: rootLoader,
    element: <RootPage />,
    //errorElement: <ErrorPage />,
  },
]);

const App: FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
