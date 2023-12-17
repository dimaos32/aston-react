import styles from "./search-form.module.scss"
import Input from '../input/input';
import Button from '../button/button';

export default function SearchForm() {

  return (
    <form className={styles.form}>
      <Input
        classes={styles.input}
        type="search"
        name="search"
        id="search"
        placeholder="Daiquiri"
        label="Search cocktail"
        labelClasses="visually-hidden"
      />
      <Button classes={styles.button} type="button">Search</Button>
    </form>
  );
};
