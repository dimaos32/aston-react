import { NavLink } from 'react-router-dom';

import cn from 'classnames';

import styles from './nav.module.scss';

export default function Nav({ classes }) {
  return (
    <nav className={cn(styles.nav, classes)}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink
            to="/favorites"
            className={({ isActive }) => isActive
              ? styles.is_active
              : undefined}
            >Favorites</NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            to="/history"
            className={({ isActive }) => isActive
              ? styles.is_active
              : undefined}
          >History</NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            to="/signout"
            className={({ isActive }) => isActive
              ? styles.is_active
              : undefined}
          >Sign out</NavLink>
        </li>
      </ul>
    </nav>
  );
}
