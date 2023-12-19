import styles from "./search-bar.module.scss"
import SearchForm from '../search-form/search-form';

export default function SearchBar() {

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.inner}>
          <SearchForm />
        </div>
      </div>
    </section>
  );
};
