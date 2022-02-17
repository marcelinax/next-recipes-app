import React, { useState } from 'react';
import PropTypes from 'prop-types';
const FoodCategoryItem = ({ category, onClick, isChosen }) => {

    return (
        <div className='p-2'>
            <div className={`shadow-md px-3 rounded-md py-2 hover:bg-black/20 group transition-all cursor-pointer ${isChosen ? 'bg-black/50' : 'bg-white'}`} onClick={onClick}>
                <p className={`font-bold text-sm group-hover:text-white ${isChosen ? 'text-white' : 'text-black/50'}`}>{category.toUpperCase()}</p>
            </div>
        </div>
    );
};

FoodCategoryItem.propTypes = {
    category: PropTypes.string.isRequired
};

export default FoodCategoryItem;
