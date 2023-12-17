import styles from "./search-bar.module.scss"
import Container from '../container/container';
import SearchForm from '../search-form/search-form';

export default function SearchBar() {

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.inner}>
          <SearchForm />
        </div>
      </Container>
    </section>
  );
};
