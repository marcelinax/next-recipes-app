import { configureStore } from '@reduxjs/toolkit';
import recipesSlice from 'store/recipesSlice';

export default configureStore({
    reducer: {
        recipes : recipesSlice
    },
});