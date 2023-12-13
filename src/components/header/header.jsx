import styles from './header.module.scss';

import Container from '../container/container';
import Logo from '../logo/logo';
import Nav from '../nav/nav';

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
