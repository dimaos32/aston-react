import { useState } from 'react';

import styles from "./cocktail-card.module.scss";
import Tags from '../tags/tags';
import FavoriteButton from '../favorite-button/favorite-button';

export default function CocktailCard({ cocktail }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const { id, thumb, tags, category, drink } = cocktail;

  const handleIsFavoriteClick = () => {
    setIsFavorite(f => !f);
    console.log(isFavorite ? 'Удаляет из избранного' : 'Добавляет в избранное');
  };

  return (
    <article className={styles.card}>
      <a className={styles.link} href={`/cocktails/${id}`}>
        <div className={styles.cover}>
          <img
            className={styles.pic}
            src={thumb}
            width="700"
            height="700"
            alt={drink}
          />
        </div>
        <div className={styles.content}>
          {tags && <Tags tags={tags} />}
          <p className={styles.category}>{category}</p>
          <h2 className={styles.title}>{drink}</h2>
        </div>
      </a>
      <FavoriteButton
        isFavorite={isFavorite}
        clickHandler={() => handleIsFavoriteClick(id)}
      />
    </article>
  );
};
