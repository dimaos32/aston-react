import cn from 'classnames';

import styles from './nav.module.scss';

export default function Nav({ classes }) {
  return (
    <nav className={cn(styles.nav, classes)}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <a  href="/favorites">Favorites</a></li>
        <li className={styles.item}>
          <a  href="/history">History</a></li>
        <li className={styles.item}>
          <a  href="/signout">Sign out</a></li>
      </ul>
    </nav>
  );
}
