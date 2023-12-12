import styles from './header.module.scss';

import Container from '../container/container.jsx';
import Logo from '../logo/logo.jsx';
import Nav from '../nav/nav.jsx';

export default function Header() {


  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.inner}>
          <Logo classes={styles.logo} />
          <Nav classes={styles.nav} />
        </div>
      </Container>
    </header>
  )
}
