import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RecipeIngredientListItem from './RecipeIngredientListItem';
const RecipeIngredientList = ({ ingredients }) => {
    
    const dontAnimateUntilIndex = 2;
    const [currentRenderedIngredientsAmount, setCurrentRenderedIngredientsAmount] = useState(3);

    const getRemainingIngredientsAmount = () => {
        const remainingAmount = ingredients.length > 0 && ingredients.length - currentRenderedIngredientsAmount;
        if (remainingAmount > 0 && remainingAmount <= 3) return remainingAmount;
        else if (remainingAmount > 3) return 3;
        else return 0;
    };
    const onShowMoreIngredients = () => {
        setCurrentRenderedIngredientsAmount(prevValue => prevValue + getRemainingIngredientsAmount());
      
    };
    const renderIngredientItems = (amount) => {
        return ingredients && ingredients.map((ingredient, index) => {
            if (amount > index)
                return <RecipeIngredientListItem key={ingredient} name={ingredient} animate={index > dontAnimateUntilIndex }/>;
        });
    };
    return (
        <div className='w-full flex flex-col'>
            {renderIngredientItems(currentRenderedIngredientsAmount)}
            {currentRenderedIngredientsAmount < ingredients.length && <RecipeIngredientListItem isIngredient={false} ingredientsAmount={getRemainingIngredientsAmount()} onShowMoreIngredients={onShowMoreIngredients}/>}
        </div>
    );
};

RecipeIngredientList.propTypes = {
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default RecipeIngredientList;