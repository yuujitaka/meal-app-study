import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favoriteIds: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      state.favoriteIds.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.favoriteIds.splice(state.favoriteIds.indexOf(action.payload), 1);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
