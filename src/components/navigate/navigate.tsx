// Подключение библиотек
import React, { FC, useMemo, useEffect } from 'react';
import ReactDOM from 'react-dom';

// Подключение компонентов
import NavigateOverlay from 'components/navigate-overlay/navigate-overlay';
import NavigateItem from 'components/navigate-item/navigate-item';
import SvgClose from 'components/svg-close/svg-close';

// Подключение таблиц стилей и функций
import styles from './navigate.module.scss';
import { navigateLinks, portalRoot } from './navigate.utils';

interface INavigateProps {
  onClose: () => void;
}

const Navigate: FC<INavigateProps> = ({ onClose }) => {
  if (!portalRoot) return null;

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    // Добавление слушателя события "keydown" при монтировании компонента
    document.addEventListener('keydown', handleEsc);

    // Удаление слушателя события "keydown" при размонтировании компонента
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  const navigateItems = useMemo(() => {
    return navigateLinks.map(({ text, link, release }, index) => (
      <li key={index}>
        <NavigateItem linkText={text} linkPath={link} isRelease={release} />
      </li>
    ));
  }, [navigateLinks]);

  return ReactDOM.createPortal(
    <>
      <nav className={`container-fluid ${styles.container}`}>
        <NavigateOverlay onClose={onClose} />
        <div className="row">
          <div
            className={`col-12 col-md-8 col-lg-6 ${styles.container__content}`}
          >
            <button className={styles.container__button} onClick={onClose}>
              <SvgClose extraClass={styles.container__icon} />
            </button>
            <ul className={styles.container__list}>{navigateItems}</ul>
          </div>
        </div>
      </nav>
    </>,
    portalRoot,
  );
};

export default Navigate;
