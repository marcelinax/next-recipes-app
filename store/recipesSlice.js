import { createSlice } from '@reduxjs/toolkit';

export const recipesSlice = createSlice({
    name: 'recipes',
    initialState: {
        recipes: { searchingRecipes: [], totalRecipes: 0 },
        favouriteRecipes: []
    },
    reducers: {
        setRecipes: (state, action) => {
            const { searchingRecipes, totalRecipes} = action.payload;

            state.recipes = {searchingRecipes: [...searchingRecipes], totalRecipes};
        },
        setFavouriteRecipes: (state, action) => {
            state.favouriteRecipes = [...action.payload];
        }
    }
});

export const { setRecipes, setFavouriteRecipes } = recipesSlice.actions;

export default recipesSlice.reducer;