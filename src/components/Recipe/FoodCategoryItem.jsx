import React from 'react';
import PropTypes from 'prop-types';
const FoodCategoryItem = ({category}) => {
    return (
        <div className='p-2'>
            <div className='shadow-md bg-white px-3 rounded-md py-2 hover:bg-black/20 group transition-all cursor-pointer'>
                <p className='font-bold text-sm text-black/60 group-hover:text-white'>{category.toUpperCase()}</p>
            </div>
        </div>
    );
};

FoodCategoryItem.propTypes = {
    category: PropTypes.string.isRequired
};

export default FoodCategoryItem;
