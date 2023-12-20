import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ACCESS_URL, IMAGES_INGREDIENTS_URL } from '../../utils/constants';
import { adaptServerDataToCocktailPage } from '../../utils/adapters';

import styles from './cocktail-page.module.scss';
import Loader from '../../components/loader/loader';
import FavoriteButton from '../../components/favorite-button/favorite-button';
import Tags from '../../components/tags/tags';

function Ingredients({ ingredients }) {

  return (
    <ul className={styles.ingredients}>
      {ingredients.map(([ingredient, quantity]) => {
        return (
          <li key={`${ingredient}${quantity}`} className={styles.ingredient}>
            <div className={styles.ingredient_cover}>
              <img
                className={styles.ingredient_pic}
                src={`${IMAGES_INGREDIENTS_URL}/${ingredient}-Small.png`}
                alt={ingredient}
              />
            </div>
            <div className={styles.ingredient_content}>
              <p className={styles.ingredient_title}>
                {ingredient}
                {quantity && <>:</>}
              </p>
              {quantity && <p className={styles.ingredient_quantity}>{quantity}</p>}
            </div>
          </li>
        )
      })}
    </ul>
  )
}

function Content({ cocktail, isFavorite, handleIsFavoriteClick }) {
  const {
    id,
    drink,
    thumb,
    tags,
    category,
    instructions,
    ingredients,
  } = cocktail;

  return (

    <>
      <div className={styles.card}>
        <div className={styles.cover}>
          <img
            className={styles.pic}
            src={thumb}
            width="700"
            height="700"
            alt={drink}
          />
          <FavoriteButton
            isFavorite={isFavorite}
            clickHandler={() => handleIsFavoriteClick(id)}
          />
        </div>
        <div className={styles.content}>
          {tags && <Tags tags={tags} />}
          <p className={styles.category}>{category}</p>
          <h1 className={styles.title}>{drink}</h1>
          {<Ingredients ingredients={ingredients} />}
        </div>
        <p className={styles.instructions}>{instructions}</p>
      </div>
    </>
  );
};

export default function CocktailPage() {
  const { cocktailId } = useParams();
  const [isFavorite, setIsFavorite] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  const handleIsFavoriteClick = () => {
    setIsFavorite(f => !f);
    console.log(isFavorite ? 'Удаляет из избранного' : 'Добавляет в избранное');
  };

  useEffect(() => {
    fetch(`${ACCESS_URL}/lookup.php?i=${cocktailId}`)
      .then(res => res.json())
      .then(data => {
        setCocktail(adaptServerDataToCocktailPage(data.drinks[0]));
      });
  }, []);

  return (
    <section className={styles.section}>
      <div className="container">
        {cocktail
          ? <Content
            cocktail={cocktail}
            isFavorite={isFavorite}
            handleIsFavoriteClick={handleIsFavoriteClick}
          />
          : <Loader />}
      </div>
    </section>
  );
};
