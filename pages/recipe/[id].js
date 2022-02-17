import RecipeView from '@components/views/Recipe.view';
import Layout from '@layouts/Layout';
import { apiClient } from 'api/apiClient';
import React from 'react';

const Recipe = ({ recipe }) => {
    return (
        <Layout>
            {recipe && <RecipeView ingredients={recipe.ingredients} preparationSteps={recipe.preparationSteps} title={recipe.title} servings={recipe.servings} time={recipe.preparationTime} difficulty={recipe.difficulty} bgImg={recipe.photo} description={recipe.description}/> }
        </Layout>
    );
};

export const getServerSideProps = async (context) => {

    const id = context.params.id;
    const res = await apiClient.get(`recipe/${id}`, {
        params: {
            id
        }
    });
   
    const recipe = res.data;
    return {props: {recipe}};
};

export default Recipe;