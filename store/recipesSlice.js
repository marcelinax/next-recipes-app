import { createSlice } from '@reduxjs/toolkit';

export const recipesSlice = createSlice({
    name: 'recipes',
    initialState: {
        recipes: {searchingRecipes: [], totalRecipes: 0}
    },
    reducers: {
        setRecipes: (state, action) => {
            const { searchingRecipes, totalRecipes} = action.payload;

            state.recipes = {searchingRecipes: [...searchingRecipes], totalRecipes};
        }
    }
});

export const { setRecipes } = recipesSlice.actions;

export default recipesSlice.reducer;