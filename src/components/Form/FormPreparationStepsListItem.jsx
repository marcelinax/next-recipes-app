import Textarea from '@components/Inputs/Textarea';
import React from 'react';
import PropTypes from 'prop-types';
const FormPreparationStepsListItem = ({ step, stepDescription, setStepDescription, className, isAdded = false }) => {

    return (
        <div className={`w-full flex items-center mb-2 preparation-step-animation ${className}`}>
            <div className='bg-black/50 rounded-lg w-10 h-10 flex items-center justify-center mr-5'>
                <p className='text-white font-bold'>{step}</p>
            </div>
            <Textarea disabled={isAdded} cols='40' rows='2' width='w-full' value={stepDescription} setValue={setStepDescription} />
        </div>
    );
};

FormPreparationStepsListItem.propTypes = {
    step: PropTypes.number.isRequired,
    stepDescription: PropTypes.string.isRequired,
    className: PropTypes.string,
    isAdded: PropTypes.bool,
};

export default FormPreparationStepsListItem;