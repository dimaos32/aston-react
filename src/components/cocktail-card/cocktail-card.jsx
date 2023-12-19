import { useState } from 'react';

import styles from "./cocktail-card.module.scss";
import Tags from '../tags/tags';
import FavoriteButton from '../favorite-button/favorite-button';

export default function CocktailCard({ cocktail }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const { idDrink, strDrinkThumb, strTags, strCategory, strDrink } = cocktail;

  const handleIsFavoriteClick = () => {
    setIsFavorite(f => !f);
    console.log(isFavorite ? 'Удаляет из избранного' : 'Добавляет в избранное');
  };

  return (
    <article className={styles.card}>
      <a className={styles.link} href={`/cocktails/${idDrink}`}>
        <div className={styles.cover}>
          <img
            className={styles.pic}
            src={strDrinkThumb}
            width="700"
            height="700"
            alt={strDrink}
          />
        </div>
        <div className={styles.content}>
          {strTags && <Tags tags={strTags.split(',')} />}
          <p className={styles.category}>{strCategory}</p>
          <h2 className={styles.title}>{strDrink}</h2>
        </div>
      </a>
      <FavoriteButton
        isFavorite={isFavorite}
        clickHandler={() => handleIsFavoriteClick(idDrink)}
      />
    </article>
  );
};
