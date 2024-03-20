// Подключение библиотек
import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';

// Подключение компонентов
import SvgMenu from 'components/svg-menu/svg-menu';
import Navigate from 'components/navigate/navigate';

// Подключение таблиц стилей и функций
import styles from './header.module.scss';
import logo from 'assets/images/logo.svg';

const Header: FC = () => {
  const [openModal, setOpenModal] = useState(false);

  const onCloseModal = () => setOpenModal(false);
  const onOpenModal = () => setOpenModal(true);

  return (
    <>
      <header className={styles.header}>
        <div className={`container ${styles.container}`}>
          <Link to="/" className={styles.container__link}>
            <img src={logo} alt="Логотип" className={styles.container__icon} />
          </Link>

          <button className={styles.container__button} onClick={onOpenModal}>
            <SvgMenu extraClass={styles.container__menu} />
          </button>
        </div>
      </header>
      {openModal && <Navigate onClose={onCloseModal} />}
    </>
  );
};

export default Header;
