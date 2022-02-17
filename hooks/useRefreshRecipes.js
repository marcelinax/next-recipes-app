import { apiClient } from 'api/apiClient';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setRecipes } from 'store/recipesSlice';


export const useRefreshRecipes = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    const refresh = async (body) => {
        try {
            const res = await apiClient.post('recipes/search', body);
            dispatch(setRecipes(res.data));
            setLoading(false);
        } catch (error) {
            console.log({error});
        }
    };
    return { refresh, loading };
};