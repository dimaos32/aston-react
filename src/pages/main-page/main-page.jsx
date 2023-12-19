import { useEffect, useState } from 'react';

import SearchBar from "../../components/search-bar/search-bar";
import RandomCocktail from '../../components/random-cocktail/random-cocktail'

export default function MainPage() {
  const [cocktail, setCocktail] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    if (!isFetching) {
      setIsFetching(true);
      fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then(res => res.json())
        .then(data => {
          setCocktail(data.drinks[0]);
          setIsFetching(false);
        });
    }
  }, [])

  return (
    <>
      <SearchBar />
      <RandomCocktail cocktail={cocktail} />
    </>
  );
}
