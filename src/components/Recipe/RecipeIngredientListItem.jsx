import React, { useState } from 'react';
import PropTypes from 'prop-types';  
import locales from '../../../locales';
import styles from '../../../styles/IngredientItem.module.scss';
const RecipeIngredientListItem = ({ name, isIngredient = true, onShowMoreIngredients, ingredientsAmount }) => {

    return (
        <div className={`${styles['ingredient-item']} w-full bg-black/10 shadow-sm rounded-md px-4 py-2 mb-1`} onClick={onShowMoreIngredients}>
            <p className='font-semibold text-white'>{isIngredient? name : locales.SHOW_MORE_INGREDIENTS + ' ' + ingredientsAmount}</p>
        </div>
    );
};

RecipeIngredientListItem.propTypes = {
    name: PropTypes.string.isRequired
};

export default RecipeIngredientListItem;