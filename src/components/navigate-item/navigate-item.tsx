// Подключение библиотек
import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

// Подключение компонентов
import SvgLink from 'components/svg-link/svg-link';
import SvgDevelopment from 'components/svg-development/svg-development';

// Подключение таблиц стилей и функций
import styles from './navigate-item.module.scss';

interface INavigateItemProps {
  linkText: string;
  linkPath: string;
  isRelease: boolean;
}

type NavLinkProps = {
  isActive: boolean;
};

const NavigateItem: FC<INavigateItemProps> = ({
  linkText,
  linkPath,
  isRelease,
}) => {
  const defaultClassNavLink = `${styles.container} ${styles.container__content}`;

  const classNavLink = ({ isActive }: NavLinkProps) =>
    isActive
      ? `${defaultClassNavLink} ${styles.container__content_active}`
      : defaultClassNavLink;

  if (isRelease) {
    return (
      <NavLink className={classNavLink} to={linkPath}>
        <span>{linkText}</span>
        <SvgLink extraClass={styles.container__icon} />
      </NavLink>
    );
  }

  return (
    <div
      className={`${defaultClassNavLink} ${styles.container__content_disable}`}
    >
      <span>{linkText}</span>
      <SvgDevelopment extraClass={styles.container__icon} />
    </div>
  );
};

export default NavigateItem;
