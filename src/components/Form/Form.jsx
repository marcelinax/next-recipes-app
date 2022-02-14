import Button from '@components/Buttons/Button';
import FormRow from '@components/Form/FormRow';
import CustomSelect from '@components/Inputs/CustomSelect';
import Input from '@components/Inputs/Input';
import Textarea from '@components/Inputs/Textarea';
import difficulty from '@constants/difficulty';
import foodCategory from '@constants/foodCategory';
import locales from '@locales';
import React from 'react';
import buttonTypes from '@constants/buttonTypes';
import FormPreparationStepsList from '@components/Form/FormPreparationStepsList';
import FormIngredientsList from '@components/Form/FormIngredientsList';

const Form = () => {

    return (
        <div className='w-3/4 flex mx-auto flex-col mb-10'>
            <form>
                <FormRow heading={locales.TITLE} width='w-full'>
                    <Input id='title' width='w-full'/>
                </FormRow>
                <FormRow heading={locales.DESCRIPTION} width='w-full'>
                    <Textarea width='w-full' cols='40' rows='3'/>
                </FormRow>
                <div className='w-full flex mb-5'>
                    <FormRow heading={locales.CATEGORY} width='basis-1/2'>
                        <CustomSelect options={foodCategory.singular} bgColor='bg-white' width='w-full'/>
                    </FormRow>
                    <FormRow heading={locales.DIFFICULTY} width='basis-1/2' className='ml-6'>
                        <CustomSelect options={difficulty} bgColor='bg-white' width='w-full'/>
                    </FormRow>
                </div>
                <div className='w-full flex'>
                    <FormRow heading={locales.PREPARATION_TIME} width='basis-1/3'>
                        <Input id='preparation-time' width='w-full'/>
                    </FormRow>
                    <FormRow heading={locales.AMOUNT_OF_SERVINGS} width='basis-1/3' className='ml-6'>
                        <Input id='amount' width='w-full'/>
                    </FormRow>
                    <FormRow heading={locales.CHOOSE_PHOTO} width='basis-1/3' className='ml-6'>
                        <input type="file" accept="image/jpeg" className="block w-full mt-1 text-sm text-black/50 font-semibold 
                        file:mr-4 file:py-3 file:px-6
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-white file:text-black/50
                        file:shadow-sm
                        hover:file:bg-violet-100 file:cursor-pointer file:transition-all hover:file:bg-black/50 hover:file:text-white"
                        />
                    </FormRow>
                </div>
                <FormRow heading={locales.INGREDIENTS} width='w-full mt-5'>
                    <FormIngredientsList/>
                </FormRow>
                <FormRow heading={locales.PREPARATION} width='w-full mt-10'>
                    <FormPreparationStepsList/>
                </FormRow>
                <div className='w-full mt-10 justify-end flex'>
                    <Button type={buttonTypes.OUTLINE} borderColor='border-black/50' textColor='text-black/50' title={locales.CANCEL} className='w-fit px-7 py-3 mr-3'/>
                    <Button type={buttonTypes.TEXT} bgColor='bg-black/50' textColor='text-white' title={locales.SAVE} className='w-fit px-7 py-3' />
                </div>
            </form>
        </div>
    );
};

export default Form;