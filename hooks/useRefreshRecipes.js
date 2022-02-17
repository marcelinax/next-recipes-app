import { apiClient } from 'api/apiClient';
import { useDispatch } from 'react-redux';
import { setRecipes } from 'store/recipesSlice';


export const useRefreshRecipes = () => {
    const dispatch = useDispatch();

    const refresh = async (body) => {
        try {
            const res = await apiClient.post('recipes/search', body);
            dispatch(setRecipes(res.data));
        } catch (error) {
            console.log({error});
        }
    };
    return { refresh };
};