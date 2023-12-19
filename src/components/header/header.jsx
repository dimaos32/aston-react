import styles from './header.module.scss';

import Logo from '../logo/logo';
import Nav from '../nav/nav';

export default function Header() {


  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.inner}>
          <Logo classes={styles.logo} />
          <Nav classes={styles.nav} />
        </div>
      </div>
    </header>
  )
}
