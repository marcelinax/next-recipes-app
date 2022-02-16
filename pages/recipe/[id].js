import RecipeView from '@components/views/Recipe.view';
import Layout from '@layouts/Layout';
import { apiClient } from 'api/apiClient';
import React from 'react';

const Recipe = ({ recipe }) => {
    

    return (
        recipe && <RecipeView ingredients={recipe.ingredients} preparationSteps={recipe.preparationSteps} title={recipe.title} servings={recipe.servings} time={recipe.preparationTime} difficulty={recipe.difficulty} bgImg={recipe.photo} description={recipe.description}/>
        
    );
};

export const getServerSideProps = async (context) => {
    const res = await apiClient.get('get-recipe', {
        params: {
            id: context.params.id
        }
    });
    const recipe = res.data;
    return {props: {recipe}};
};


Recipe.getLayout = function getLayout(page) {
    return (
        <Layout>
            <></>
            {page}
        </Layout>
    );
};

export default Recipe;