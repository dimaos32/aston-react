import styles from "./random-cocktail.module.scss"
import Loader from '../loader/loader';
import CocktailCard from '../cocktail-card/cocktail-card';

export default function RandomCocktail({ cocktail }) {
  let content;

  if (cocktail) {
    content = (
      <>
        <div className={styles.wrapper}>
          <CocktailCard cocktail={cocktail} />
        </div>
        <h1 className={styles.title}>Random Cocktail</h1>
      </>
    )
  }

  return (
    <section className={styles.section}>
      <div className="container">
        {cocktail ? content : <Loader />}
      </div>
    </section>
  );
};
