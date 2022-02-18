import React from 'react';
import { useRouter } from 'next/router';
import { useRecipeForm } from 'hooks/useRecipeForm';
import Form from '@components/Form/Form';
import formTypes from '@constants/formTypes';
import { apiClient } from 'api/apiClient';
import { toast } from 'react-toastify';
import locales from '@locales';

const EditForm = ({recipe}) => {

    const router = useRouter();
    const {formData, errors, validateForm, inputHandler, selectHandler, imageFileHandler, ingredientsHandler, preparationStepsHandler } = useRecipeForm(recipe);

    const onEditRecipe = async (e) => {
        e.preventDefault();
        try {
            if (validateForm()) {
                await apiClient.put(`recipe/${recipe._id}`, {
                    id: recipe._id,
                    ...formData
                });
                await toast.success(locales.RECIPE_HAS_BEEN_EDITED);
                router.push('/');
            }
        } catch (error) {
            console.log(error); 
        }
    };
   
    return (
        <Form recipe={recipe} formType={formTypes.EDIT} onSubmit={onEditRecipe} errors={errors} formData={formData} imageFileHandler={imageFileHandler} ingredientsHandler={ingredientsHandler} inputHandler={inputHandler} preparationStepsHandler={preparationStepsHandler} selectHandler={selectHandler} validateForm={validateForm}/>
    );
};

export default EditForm;