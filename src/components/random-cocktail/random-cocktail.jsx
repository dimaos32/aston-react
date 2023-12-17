import styles from "./random-cocktail.module.scss"
import Container from '../container/container';
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
      <Container>
        {cocktail ? content : <Loader />}
      </Container>
    </section>
  );
};
