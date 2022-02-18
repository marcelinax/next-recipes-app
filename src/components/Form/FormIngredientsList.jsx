import Button from '@components/Buttons/Button';
import FormIngredientListItem from '@components/Form/FormIngredientListItem';
import Input from '@components/Inputs/Input';
import buttonTypes from '@constants/buttonTypes';
import locales from '@locales';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import messages from '@constants/messages';
import { getFilteredErrorMessages } from '@utils/getFillteredErrorMessages';

const FormIngredientsList = ({ ingredients, setIngredients }) => {
    
    const [ingredient, setIngredient] = useState('');
    const [errors, setErrors] = useState([]);

    const onAddIngredient = () => {
        if (validate()) {
            setIngredients([...ingredients, {ingredient, id: uuidv4()}]);
            setIngredient('');
            setErrors([]);
        }
    };
    
    const checkIngredientUniqueness = () => {
        const existingIngredient = ingredients.filter(item => item.name === ingredient);
        return existingIngredient.length > 0;
    };

    const validate = () => {
        let isValid = true;
        const errs = [];
        if (!ingredient) {
            isValid = false;
            errs.push(messages.INGREDIENT_CANNOT_BE_EMPTY);
        }
        if (checkIngredientUniqueness()) {
            isValid = false;
            errs.push(messages.INGREDIENT_ALREADY_EXISTS);
        }
        setErrors([...errs]);
        return isValid;
    };

    const renderIngredients = () => {
        return ingredients && ingredients.map(ing => (
            <FormIngredientListItem key={ing.id} name={ing.ingredient} onDelete={() => onDeleteIngredientItem(ing.id)}/>
        ));
    };

    const onDeleteIngredientItem = (id) => {
        const ingredientIndex = ingredients.findIndex(ingredient => ingredient.id === id);
        ingredients.splice(ingredientIndex, 1);
        setIngredients([...ingredients]);
    };

    const ingredientHandler = (e) => {
        setIngredient(e.target.value);
    };

    return (
        <div className='w-full flex flex-col md:flex-row'>
            <div className='w-full md:basis-1/2 flex flex-col'>
                <Input id='ingredient' width='w-full' setValue={ingredientHandler} value={ingredient} error={getFilteredErrorMessages(errors, messages.INGREDIENT_CANNOT_BE_EMPTY) || getFilteredErrorMessages(errors, messages.INGREDIENT_ALREADY_EXISTS)}/>
                <Button onClick={onAddIngredient} type={buttonTypes.TEXT} bgColor='bg-black/50' textColor='text-white' title={locales.ADD_NEW_INGREDIENT} className='mt-5 w-fit'/>
            </div>
            <div className='w-full md:basis-1/2 md:ml-5 mt-8 md:mt-0'>
                <div className='w-full p-5 bg-zinc-200 rounded-lg shadow-inner h-44 max-h-44 overflow-y-auto scrollbar'>
                    {renderIngredients()}
                </div>
            </div>
        </div>
    );
};

FormIngredientsList.propTypes = {
    ingredients: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FormIngredientsList;