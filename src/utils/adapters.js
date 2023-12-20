const adaptServerDataToCocktailPage = ({
  strCategory,
  idDrink,
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
}) => {
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
  ].filter(item => item[0]);

  return {
    id: idDrink,
    drink: strDrink,
    thumb: strDrinkThumb,
    tags: strTags ? strTags.split(',') : null,
    category: strCategory,
    instructions: strInstructions,
    ingredients,
  };
};

const adaptServerDataToCocktailCard = ({
  idDrink,
  strDrinkThumb,
  strTags,
  strCategory,
  strDrink
}) => {
  return {
    id: idDrink,
    drink: strDrink,
    thumb: strDrinkThumb,
    tags: strTags ? strTags.split(',') : null,
    category: strCategory,
  };
};

export { adaptServerDataToCocktailPage, adaptServerDataToCocktailCard };
