// Подключение библиотек
import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

// Подключение компонентов
import Header from 'components/header/header';
import Footer from 'components/footer/footer';
import InputData from 'components/input-data/input-data';

// Подключение таблиц стилей и функций
import styles from './root.module.scss';

const RootPage: FC = () => {
  return (
    <>
      <Header />
      <main className={`container ${styles.container}`}>
        <InputData />
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootPage;
