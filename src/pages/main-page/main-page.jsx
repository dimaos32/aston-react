import { useEffect, useState } from 'react';

import { ACCESS_URL } from '../../utils/constants';

import SearchBar from "../../components/search-bar/search-bar";
import RandomCocktail from '../../components/random-cocktail/random-cocktail'

export default function MainPage() {

  return (
    <>
      <SearchBar />
      <RandomCocktail />
    </>
  );
}
