import RecipeView from '@components/views/Recipe.view';
import Layout from '@layouts/Layout';
import { apiClient } from 'api/apiClient';
import React, { useState } from 'react';

const Recipe = ({ recipe }) => {

    const [innerRecipe, setInnerRecipe] = useState(recipe);

    const onToggleIsFavourite = async () => {
        try {
            const updatedRecipe = await apiClient.post(`recipe/toggle/${recipe._id}`);
            setInnerRecipe(updatedRecipe.data);
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <Layout>
            {recipe && <RecipeView id={innerRecipe._id} ingredients={innerRecipe.ingredients} preparationSteps={innerRecipe.preparationSteps} isFavourite={innerRecipe.isFavourite} onToggleIsFavourite={onToggleIsFavourite} title={innerRecipe.title} servings={innerRecipe.servings} time={innerRecipe.preparationTime} difficulty={innerRecipe.difficulty} bgImg={innerRecipe.photo} description={innerRecipe.description}/> }
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