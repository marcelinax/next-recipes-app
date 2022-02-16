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

const FormIngredientsList = ({ setIngredients, ingredient, setIngredient, deleteIngredient }) => {

    const [ingredientsItems, setIngredientsItems] = useState([]);
    const [errors, setErrors] = useState([]);

    const onAddIngredient = () => {
        if (validate()) {
            setIngredientsItems([...ingredientsItems, <FormIngredientListItem key={ingredient} id={uuidv4()} name={ingredient} />]);
            setIngredients();
            setIngredient('');
            setErrors([]);
        }
    };
    
    const checkIngredientUniqueness = () => {
        const existingIngredient = ingredientsItems.filter(item => item.props.name === ingredient);
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
        return ingredientsItems && ingredientsItems.map(ing => (
            <FormIngredientListItem key={ing.key} name={ing.props.name} onDelete={() => onDeleteIngredientItem(ing.props.id)}/>
        ));
    };

    const onDeleteIngredientItem = (id) => {
        const ingredientIndex = ingredientsItems.findIndex(ingredient => ingredient.props.id === id);
        ingredientsItems.splice(ingredientIndex, 1);
        setIngredientsItems([...ingredientsItems]);
        deleteIngredient(ingredientIndex);
    };

    const ingredientHandler = (e) => {
        setIngredient(e.target.value);
    };

    return (
        <div className='w-full flex'>
            <div className='basis-1/2 flex flex-col'>
                <Input id='ingredient' width='w-full' setValue={ingredientHandler} value={ingredient} error={getFilteredErrorMessages(errors, messages.INGREDIENT_CANNOT_BE_EMPTY) || getFilteredErrorMessages(errors, messages.INGREDIENT_ALREADY_EXISTS)}/>
                <Button onClick={onAddIngredient} type={buttonTypes.TEXT} bgColor='bg-black/50' textColor='text-white' title={locales.ADD_NEW_INGREDIENT} className='mt-5 w-fit'/>
            </div>
            <div className='basis-1/2 ml-5'>
                <div className='w-full p-5 bg-zinc-200 rounded-lg shadow-inner h-44 max-h-44 overflow-y-auto scrollbar'>
                    {renderIngredients()}
                </div>
            </div>
        </div>
    );
};

FormIngredientsList.propTypes = {
    error: PropTypes.string,
    ingredient: PropTypes.string.isRequired,
};

export default FormIngredientsList;