import { useEffect, useState } from 'react';

import { ACCESS_URL } from '../../utils/constants';
import { adaptServerDataToCocktailCard } from '../../utils/adapters';

import styles from "./random-cocktail.module.scss"
import Loader from '../loader/loader';
import CocktailCard from '../cocktail-card/cocktail-card';

function Content({ cocktail }) {

  return (
    <>
      <div className={styles.inner}>
        <CocktailCard cocktail={cocktail} />
      </div>
      <h1 className={styles.title}>Random Cocktail</h1>
    </>
  );
};

export default function RandomCocktail() {
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    fetch(`${ACCESS_URL}/random.php`)
      .then(res => res.json())
      .then(data => {
        setCocktail(adaptServerDataToCocktailCard(data.drinks[0]));
      });
  }, []);

  return (
    <section className={styles.section}>
      <div className="container">
        {cocktail ? <Content cocktail={cocktail} /> : <Loader />}
      </div>
    </section>
  );
};
