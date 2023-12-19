import { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

import { ACCESS_URL } from '../../utils/constants';

import styles from './search-page.module.scss'
import SearchBar from '../../components/search-bar/search-bar'
import Loader from '../../components/loader/loader';
import CocktailCard from '../../components/cocktail-card/cocktail-card';

function Results({ cocktails }) {


  return (
    cocktails
      ? <>
          <h1 className={styles.title}>Search results</h1>
          <ul className={styles.list}>
            {cocktails.map(item => (
              <li key={item.idDrink}  className={styles.item}>
                <CocktailCard cocktail={item} />
              </li>
            ))}
          </ul>
        </>
      : <h1 className={styles.title}>Nothing was found</h1>
  );
};

export default function SearchPage() {
  const location = useLocation();
  const [cocktails, setCocktails] = useState(null);
  const [isResponseReceived, setIsResponseReceived] = useState(false);

  const aaa = useCallback(setIsResponseReceived);

  useEffect(() => {
    fetch(`${ACCESS_URL}/search.php${location.search}`)
      .then(res => res.json())
      .then(data => {
        setCocktails(data.drinks);
        setIsResponseReceived(true);
      });
  }, [location]);

  return (
    <section className={styles.section}>
      <div className="container">
        <SearchBar />
        {isResponseReceived ? <Results cocktails={cocktails} /> : <Loader />}
      </div>
    </section>
  );
}
