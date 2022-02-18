
import RecipeListItem from './../src/components/Recipe/RecipeListItem';
import Layout from '@layouts/Layout';

import locales from '@locales';
import React from 'react';

import { useSelector } from 'react-redux';

const Favourites = () => {
    
    const favouriteRecipes = useSelector(state => state.recipes.favouriteRecipes);
    
    const renderRecipes = () => {
        return favouriteRecipes && favouriteRecipes.map(recipe => (
            <RecipeListItem key={recipe._id} id={recipe._id} bgImg={recipe.photo} category={recipe.category} description={recipe.description} difficulty={recipe.difficulty} time={recipe.preparationTime} title={recipe.title}/>
        ));
    };

    return (
        <Layout>
            <div className="w-full flex mt-5 flex-wrap">
                {favouriteRecipes.length > 0 ? renderRecipes() :
                    <div className='w-full flex items-center justify-center'>
                        <h1 className='font-semibold text-black/50 text-xl'>{locales.YOU_HAVE_ANY_FAVOURITE_RECIPES}</h1>
                    </div>
                }
            </div>
        </Layout>
    );
};

export default Favourites;