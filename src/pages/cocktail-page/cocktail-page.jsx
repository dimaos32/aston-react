import { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ACCESS_URL } from '../../utils/constants';
import { IMAGES_INGREDIENTS_URL } from '../../utils/constants';

import styles from './cocktail-page.module.scss';
import Loader from '../../components/loader/loader';
import FavoriteButton from '../../components/favorite-button/favorite-button';
import Tags from '../../components/tags/tags';

function Ingredients({ ingredients }) {

  return (
    <ul className={styles.ingredients}>{ingredients
      .filter(item => item[0])
      .map(item => {
        return <li key={item[0]} className={styles.ingredient}>
          <div className={styles.ingredient_cover}>
            <img
              className={styles.ingredient_pic}
              src={`${IMAGES_INGREDIENTS_URL}/${item[0]}-Small.png`}
              alt={item[0]}
            />
          </div>
          <div className={styles.ingredient_content}>
            <p className={styles.ingredient_title}>
              {item[0]}
              {item[1] && <>:</>}
            </p>
            {item[1] && <p className={styles.ingredient_quantity}>{item[1]}</p>}
          </div>
        </li>})
    }</ul>
  )
}

function Content({ cocktail, cocktailId, isFavorite, handleIsFavoriteClick }) {
  const {
    strCategory,
    strDrink,
    strDrinkThumb,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strIngredient10,
    strIngredient11,
    strIngredient12,
    strIngredient13,
    strIngredient14,
    strIngredient15,
    strInstructions,
    strMeasure1,
    strMeasure2,
    strMeasure3,
    strMeasure4,
    strMeasure5,
    strMeasure6,
    strMeasure7,
    strMeasure8,
    strMeasure9,
    strMeasure10,
    strMeasure11,
    strMeasure12,
    strMeasure13,
    strMeasure14,
    strMeasure15,
    strTags,
  } = cocktail;

  const ingredients = [
    [strIngredient1, strMeasure1],
    [strIngredient2, strMeasure2],
    [strIngredient3, strMeasure3],
    [strIngredient4, strMeasure4],
    [strIngredient5, strMeasure5],
    [strIngredient6, strMeasure6],
    [strIngredient7, strMeasure7],
    [strIngredient8, strMeasure8],
    [strIngredient9, strMeasure9],
    [strIngredient10, strMeasure10],
    [strIngredient11, strMeasure11],
    [strIngredient12, strMeasure12],
    [strIngredient13, strMeasure13],
    [strIngredient14, strMeasure14],
    [strIngredient15, strMeasure15],
  ];

  return (

    <>
      <div className={styles.card}>
        <div className={styles.cover}>
          <img
            className={styles.pic}
            src={strDrinkThumb}
            width="700"
            height="700"
            alt={strDrink}
          />
          <FavoriteButton
            isFavorite={isFavorite}
            clickHandler={() => handleIsFavoriteClick(cocktailId)}
          />
        </div>
        <div className={styles.content}>
          {strTags && <Tags tags={strTags.split(',')} />}
          <p className={styles.category}>{strCategory}</p>
          <h1 className={styles.title}>{strDrink}</h1>
          {<Ingredients ingredients={ingredients} />}
        </div>
        <p className={styles.instructions}>{strInstructions}</p>
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
        setCocktail(data.drinks[0]);
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
