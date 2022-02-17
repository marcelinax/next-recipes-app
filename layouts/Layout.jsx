import { apiClient } from 'api/apiClient';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setFavouriteRecipes } from 'store/recipesSlice';
import Header from '../src/components/Composition/Header';


const Layout = ({ children, includesHomepageLayout = false }) => {

    const dispatch = useDispatch();

    useEffect(() => {
        fetchFavouriteRecipes();
    }, []);

    const fetchFavouriteRecipes = async () => {
        try {
            const res = await apiClient.get('recipes/favourites');
            dispatch(setFavouriteRecipes(res.data));
        } catch (error) {
            console.log({error});
        }
    };

    return (
        <div className='min-h-screen max-w-screen'>
            <Header/>
            {includesHomepageLayout && children[0]}
            <div className='container mx-auto flex flex-col mt-10'>
                {includesHomepageLayout ? children[1] : children}
            </div>
        </div>
    );
};

export default Layout;