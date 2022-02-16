import Button from '@components/Buttons/Button';
import FormIngredientListItem from '@components/Form/FormIngredientListItem';
import Input from '@components/Inputs/Input';
import buttonTypes from '@constants/buttonTypes';
import locales from '@locales';
import React, { useState } from 'react';

const FormIngredientsList = ({ setIngredients, ingredient, setIngredient}) => {

    const [ingredientsItems, setIngredientsItems] = useState([]);

    const onAddIngredient = () => {
        setIngredientsItems([...ingredientsItems, <FormIngredientListItem key={ingredient} name={ingredient} />]);
        setIngredients();
    };

    const renderIngredients = () => {
        return ingredientsItems && ingredientsItems.map(ing => (
            <FormIngredientListItem key={ing.key} name={ing.props.name}/>
        ));
    };

    const ingredientHandler = (e) => {
        setIngredient(e.target.value);
    };

    return (
        <div className='w-full flex'>
            <div className='basis-1/2 flex flex-col'>
                <Input id='ingredient' width='w-full' setValue={ingredientHandler} value={ingredient}/>
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

export default FormIngredientsList;