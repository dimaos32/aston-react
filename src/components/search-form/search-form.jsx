import {  useNavigate } from 'react-router-dom';

import styles from "./search-form.module.scss"
import Input from '../input/input';
import Button from '../button/button';

export default function SearchForm() {
  const navigate = useNavigate();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    let searchQuery = evt.target.search.value;

    if (searchQuery) {
      navigate(`/search?s=${searchQuery}`);
      evt.target.search.value = '';
    };
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input
        classes={styles.input}
        type="search"
        name="search"
        id="search"
        placeholder="Daiquiri"
        label="Search cocktail"
        labelClasses="visually-hidden"
      />
      <Button classes={styles.button} type="submit">Search</Button>
    </form>
  );
};
