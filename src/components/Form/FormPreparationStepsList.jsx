import Button from '@components/Buttons/Button';
import FormPreparationStepsListItem from '@components/Form/FormPreparationStepsListItem';
import buttonTypes from '@constants/buttonTypes';
import locales from '@locales';
import React, { useState } from 'react';

const FormPreparationStepsList = () => {
    
    const [currentStep, setCurrentStep] = useState(1);
    const [steps, setSteps] = useState([]);
    const [step, setStep] = useState('');

    const renderPreparationSteps = () => {
        return steps && steps.reverse().map(s => {
            return <FormPreparationStepsListItem key={s.key} step={s.props.step} stepDescription={s.props.stepDescription} isAdded={true}/>;
        });
    };

    const onAddNewPreparationStep = () => {
        setCurrentStep(prevValue => prevValue + 1);
        setStep('');
        setSteps([...steps, <FormPreparationStepsListItem key={currentStep} step={currentStep} setStepDescription={stepHandler} stepDescription={step} />]);
    };

    const stepHandler = (e) => {
        setStep(e.target.value);
    }; 

    return (
        <>
            <div className='mt-5 mb-10'>
                <Button onClick={onAddNewPreparationStep} type={buttonTypes.TEXT} bgColor='bg-black/50' textColor='text-white' title={locales.ADD_NEW_STEP}/>
            </div>
            <FormPreparationStepsListItem key={currentStep} step={currentStep} stepDescription={step} setStepDescription={stepHandler}/>
            {renderPreparationSteps()}
            
        </>
    );
};

export default FormPreparationStepsList;