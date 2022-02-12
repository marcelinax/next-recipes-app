import React from 'react';
import PropTypes from 'prop-types';
import locales from '@locales';
const RecipePreparationItem = ({step, description}) => {
    return (
        <div className='mt-5 flex flex-col w-full shadow-sm bg-white rounded-md px-4 py-2'>
            <h3 className='text-lg font-semibold mb-2 text-slate-400'>{locales.STEP} {step}</h3>
            <p>{description}</p>
        </div>
    );
};

RecipePreparationItem.propTypes = {
    step: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired
};

export default RecipePreparationItem;