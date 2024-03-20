// Подключение библиотек
import React, { FC, useMemo } from 'react';

// Подключение таблиц стилей и функций
import styles from './footer.module.scss';
import { contacts } from './footer.utils';

const Footer: FC = () => {
  const contactsItems = useMemo(() => {
    return contacts.map(({ iconPath, iconText, link }, index) => (
      <li key={index}>
        <a href={link} target="_blank" className={styles.container__link}>
          <img
            src={iconPath}
            alt={iconText}
            className={styles.container__icon}
          />
        </a>
      </li>
    ));
  }, [contacts]);

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <span className={styles.container__copyright}>© Made with paws</span>
        <ul className={styles.container__list}>{contactsItems}</ul>
      </div>
    </footer>
  );
};

export default Footer;
