import { useState } from 'react';
import cn from "classnames";
import styles from "./cocktail-card.module.scss";

export default function CocktailCard({ cocktail }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const { idDrink, strDrinkThumb, strTags, strCategory, strDrink } = cocktail;

  const handleIsFavoriteClick = () => setIsFavorite(f => !f);

  function Tags({ tags }) {
    return (
      <ul className={styles.tags}>
        {tags.map(item => <li className={styles.tag} key={item}>{item}</li>)}
      </ul>
    );
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
      <button
        className={cn(styles.btn, {[styles.favorite]: isFavorite})}
        onClick={handleIsFavoriteClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24">
          <path stroke="#bb2525" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.7 4C18.87 4 21 6.98 21 9.76 21 15.39 12.16 20 12 20c-.16 0-9-4.61-9-10.24C3 6.98 5.13 4 8.3 4c1.82 0 3.01.91 3.7 1.71A4.77 4.77 0 0 1 15.7 4Z" fill="currentColor"/>
        </svg>
      </button>
    </article>
  )
}
