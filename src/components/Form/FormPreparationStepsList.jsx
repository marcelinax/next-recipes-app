import Button from '@components/Buttons/Button';
import FormPreparationStepsListItem from '@components/Form/FormPreparationStepsListItem';
import buttonTypes from '@constants/buttonTypes';
import locales from '@locales';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
const FormPreparationStepsList = ( {step, setStep, setSteps, error }) => {
    
    const [currentStep, setCurrentStep] = useState(1);
    const [stepsItems, setStepsitems] = useState([]);

    const renderPreparationSteps = () => {
        return stepsItems && stepsItems.reverse().map(s => {
            return <FormPreparationStepsListItem key={s.key} step={s.props.step} stepDescription={s.props.stepDescription} isAdded={true}/>;
        });
    };

    const onAddNewPreparationStep = () => {
        setCurrentStep(prevValue => prevValue + 1);
        setStep('');
        setStepsitems([...stepsItems, <FormPreparationStepsListItem key={currentStep} step={currentStep} setStepDescription={stepHandler} stepDescription={step} />]);
        setSteps();
    };

    const stepHandler = (e) => {
        setStep(e.target.value);
    }; 

    return (
        <>
            <div className='mt-5 mb-10'>
                <Button onClick={onAddNewPreparationStep} type={buttonTypes.TEXT} bgColor='bg-black/50' textColor='text-white' title={locales.ADD_NEW_STEP}/>
            </div>
            <FormPreparationStepsListItem error={error} key={currentStep} step={currentStep} stepDescription={step} setStepDescription={stepHandler}/>
            {renderPreparationSteps()}
            
        </>
    );
};

FormPreparationStepsList.propTypes = {
    error: PropTypes.string,
    step: PropTypes.string.isRequired,
};

export default FormPreparationStepsList;