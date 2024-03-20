// Подключение библиотек
import React, { FC } from 'react';

interface INavigateOverlayProps {
  onClose: () => void;
}

// Подключение таблиц стилей и функций
import styles from './navigate-overlay.module.scss';

const NavigateOverlay: FC<INavigateOverlayProps> = ({ onClose }) => {
  return <div className={styles.container} onClick={onClose}></div>;
};

export default NavigateOverlay;
