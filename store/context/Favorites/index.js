import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  favoriteIds: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

const FavoritesProvider = ({ children }) => {
  const [favoriteIds, setFavoriteIds] = useState([]);

  const addFavorite = (id) => {
    setFavoriteIds((current) => [...current, id]);
  };

  const removeFavorite = (id) => {
    setFavoriteIds((current) => current.filter((mealId) => mealId !== id));
  };

  const value = { favoriteIds, addFavorite, removeFavorite };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
