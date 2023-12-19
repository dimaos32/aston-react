import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainPage from "../../pages/main-page/main-page";
import Layout from '../layout/layout';
import ErrorPage from '../../pages/error-page/error-page';
import CocktailPage from '../../pages/cocktail-page/cocktail-page';
import SearchPage from '../../pages/search-page/search-page';
import HistoryPage from '../../pages/history-page/history-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import SignupPage from '../../pages/signup-page/signup-page';
import SigninPage from '../../pages/signin-page/signin-page';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <MainPage />,
      },
      {
        path: "cocktails/:cocktailId",
        element: <CocktailPage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "history",
        element: <HistoryPage />,
      },
      {
        path: "favorites",
        element: <FavoritesPage />,
      },
      {
        path: "signup",
        element: <SignupPage />,
      },
      {
        path: "signin",
        element: <SigninPage />,
      },
    ],
  },
]);

export default function App() {

  return (
    <RouterProvider router={router} />
  )
}
