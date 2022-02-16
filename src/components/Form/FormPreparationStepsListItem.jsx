import Textarea from '@components/Inputs/Textarea';
import React from 'react';
import PropTypes from 'prop-types';
import { IoMdCreate, IoMdTrash } from 'react-icons/io';
import { IoCheckmark } from 'react-icons/io5';
import Button from '@components/Buttons/Button';
import buttonTypes from '@constants/buttonTypes';

const FormPreparationStepsListItem = ({ step, stepDescription, setStepDescription, className, isAdded, disabled = false, error, onDelete, onEdit, onSaveChanges }) => {

    return (
        <div className={`w-full flex items-center mb-2 preparation-step-animation ${!isAdded && 'pr-7'} ${className}`}>
            <div className={`bg-black/50 rounded-lg min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px] flex items-center justify-center mr-5 ${error && 'mb-5'}`}>
                <p className='text-white font-bold'>{step}</p>
            </div>
            <Textarea id='preparation-step' error={error} disabled={disabled} cols='40' rows='2' width='w-full' value={stepDescription} setValue={setStepDescription} />
            {isAdded && (
                <div className='flex flex-col items-center justify-center ml-2'>
                    {disabled ? (
                        <>
                            <IoMdCreate size={20} className='mb-3 fill-black/50 cursor-pointer' onClick={onEdit}/>
                            <IoMdTrash size={20} className='fill-red-400 cursor-pointer' onClick={onDelete} />
                        </>
                    ) :
                        <Button icon={<IoCheckmark size={20} className='stroke-white'/>} bgColor='bg-emerald-300' type={buttonTypes.ICON} className='h-10 w-10 px-0 py-0' onClick={onSaveChanges}/>
                    }
                </div>
            )}
        </div>
    );
};

FormPreparationStepsListItem.propTypes = {
    step: PropTypes.number.isRequired,
    stepDescription: PropTypes.string.isRequired,
    className: PropTypes.string,
    error: PropTypes.string,
    isAdded: PropTypes.bool.isRequired,
    disabled: PropTypes.bool,
};

export default FormPreparationStepsListItem;