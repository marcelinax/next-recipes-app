import React, { useState } from 'react';
import RecipeIngredientListItem from './RecipeIngredientListItem';

const RecipeIngredientList = ({ ingredients }) => {
    
    const [currentRenderedIngredientsAmount, setCurrentRenderedIngredientsAmount] = useState(3);

    const getRemainingIngredientsAmount = () => {
        const remainingAmount = ingredients.length > 0 && ingredients.length - currentRenderedIngredientsAmount;
        if (remainingAmount > 0 && remainingAmount <= 3) return remainingAmount;
        else if (remainingAmount > 3) return 3;
        else return 0;
    };
    const onShowMoreIngredients = () => {
        setCurrentRenderedIngredientsAmount(prevValue => prevValue + getRemainingIngredientsAmount());
        return ingredients.map((ingredient, index) => {
            if (index + 1 >= currentRenderedIngredientsAmount + getRemainingIngredientsAmount())
                return <RecipeIngredientListItem key={ingredient} name={ingredient} />;
        });
    };
    const renderIngredientItems = (amount) => {
        return ingredients && ingredients.map((ingredient, index) => {
            if (amount > index)
                return <RecipeIngredientListItem key={ingredient} name={ingredient} />;
        });
    };
    return (
        <div className='w-full flex flex-col'>
            {renderIngredientItems(currentRenderedIngredientsAmount)}
            {currentRenderedIngredientsAmount < ingredients.length && <RecipeIngredientListItem isIngredient={false} ingredientsAmount={getRemainingIngredientsAmount()} onShowMoreIngredients={onShowMoreIngredients}/>}
        </div>
    );
};

export default RecipeIngredientList;