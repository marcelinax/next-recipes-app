
import React from 'react';
import { apiClient } from 'api/apiClient';
import { useRouter } from 'next/router';
import { useRecipeForm } from 'hooks/useRecipeForm';
import Form from '@components/Form/Form';
import formTypes from '@constants/formTypes';

const CreateForm = () => {

    const router = useRouter();
    const {formData, errors, validateForm, inputHandler, selectHandler, imageFileHandler, ingredientsHandler, preparationStepsHandler } = useRecipeForm();

    const onCreateRecipe = async (e) => {
        e.preventDefault();
        try {
            if (validateForm()) {
                await apiClient.post('recipes', {
                    ...formData,
                    preparationTime: +formData.preparationTime, 
                    servings: +formData.servings
                    
                });
                router.push('/');
            }
        } catch (error) {
            console.log(error); 
        }
    };
   
    return (
        <Form formType={formTypes.CREATE} onSubmit={onCreateRecipe} errors={errors} formData={formData} imageFileHandler={imageFileHandler} ingredientsHandler={ingredientsHandler} inputHandler={inputHandler} preparationStepsHandler={preparationStepsHandler} selectHandler={selectHandler} validateForm={validateForm} />
    );
};

export default CreateForm;