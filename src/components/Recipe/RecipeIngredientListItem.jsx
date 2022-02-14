import React from 'react';
import PropTypes from 'prop-types';  
import locales from '@locales';
const RecipeIngredientListItem = ({ name, isIngredient = true, onShowMoreIngredients, ingredientsAmount, animate }) => {
    return (
        <div className={`${animate ? 'ingredient-item-animation' : ''} w-full bg-black/10 shadow-sm rounded-md px-4 py-2 mb-1 ${!isIngredient && 'cursor-pointer'}`} onClick={onShowMoreIngredients}>
            <p className={`font-semibold text-white ${!isIngredient && 'text-center'}`}>{isIngredient ? name : `${locales.SHOW_MORE_INGREDIENTS} (${ingredientsAmount})` }</p>
        </div>
    );
};

RecipeIngredientListItem.propTypes = {
    name: PropTypes.string,
    isIngredient: PropTypes.bool,
    ingredientsAmount: PropTypes.number,
    animate: PropTypes.bool.isRequired
};

export default RecipeIngredientListItem;