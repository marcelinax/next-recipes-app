import Button from '@components/Buttons/Button';
import FormPreparationStepsListItem from '@components/Form/FormPreparationStepsListItem';
import buttonTypes from '@constants/buttonTypes';
import locales from '@locales';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import messages from '@constants/messages';
import { getFilteredErrorMessages } from '@utils/getFillteredErrorMessages';
const FormPreparationStepsList = ({ steps, setSteps }) => {
    
    const [step, setStep] = useState('');
    const [errors, setErrors] = useState([]);

    const renderPreparationSteps = () => {
        return steps && steps.reverse().map((s, i) => {
            return <FormPreparationStepsListItem id={s.id} key={s.id} step={i + 1} stepDescription={s.description} disabled={s.disabled} isAdded={s.isAdded} onEdit={() => onChangePreparationStep(s.id)} onSaveChanges={() => onChangePreparationStep(s.id)} onDelete={()=> onDeletePreparationStep(s.id)} setStepDescription={(e) => stepEditHandler(i, e.target.value)}/>;
        });
    };

    const onAddNewPreparationStep = () => {
        if (!step) {
            setErrors([messages.PREPARATION_STEP_CANNOT_BE_EMPTY]);
        }
        else {
            steps.forEach(step => {
                step.disabled = true;
            });
            setSteps([...steps, {description: step, id: uuidv4(), disabled: true, isAdded: true }]);
            setStep('');
            setErrors([]);
        }
    };
  
    const onDeletePreparationStep = (id) => {
        const preparationStepIndex = steps.findIndex(step => step.id === id);
        steps.splice(preparationStepIndex, 1);
        setSteps([...steps]);
    };

    const onChangePreparationStep = (id) => {
        const preparationStepIndex = steps.findIndex(item => item.id === id);
        steps[preparationStepIndex].disabled = !steps[preparationStepIndex].disabled;
        setSteps([...steps]);
        changeSteps();
    };

    const changeSteps = () => {
        steps.forEach(step => {
            step.step--;
        });
        setSteps([...steps]);
    };

    const stepEditHandler = (index, value) => {
        steps[index].description = value;
        setSteps([...steps]);
    };

    const stepHandler = (e) => {
        setStep(e.target.value);
    }; 


    return (
        <>
            <div className='mt-5 mb-10'>
                <Button onClick={onAddNewPreparationStep} type={buttonTypes.TEXT} bgColor='bg-black/50' textColor='text-white' title={locales.ADD_NEW_STEP}/>
            </div>
            <FormPreparationStepsListItem isAdded={false} error={getFilteredErrorMessages(errors, messages.PREPARATION_STEP_CANNOT_BE_EMPTY )} key={0} step={steps.length + 1} stepDescription={step} setStepDescription={stepHandler}/>
            {renderPreparationSteps()}
        </>
    );
};

FormPreparationStepsList.propTypes = {
    steps: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FormPreparationStepsList;