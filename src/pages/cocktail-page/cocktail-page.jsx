import { useParams } from 'react-router-dom';

import styles from './cocktail-page.module.scss'

export default function CocktailPage() {
  const { cocktailId } = useParams();

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.inner}>
          <h1>Cocktail page</h1>
          <p>Coctkail id: {cocktailId}</p>
        </div>
      </div>
    </section>
  );
}
