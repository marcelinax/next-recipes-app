import RecipeView from '@components/views/Recipe.view';
import difficulty from '@constants/difficulty';
import Layout from '@layouts/Layout';
import React from 'react';

const Recipe = () => {
    return (
        <RecipeView title='Gofry na słodko' servings={4} time='20' difficulty={difficulty.EASY} bgImg='https://cdn.galleries.smcloud.net/t/galleries/gf-RadU-dkf1-uYhP_gofry-na-slodko-przepis-z-programu-tvp2-pytanie-na-sniadanie-664x442-nocrop.jpg' description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'/>
    );
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