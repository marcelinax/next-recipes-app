import Button from '@components/Buttons/Button';
import FormRow from '@components/Form/FormRow';
import CustomSelect from '@components/Inputs/CustomSelect';
import Input from '@components/Inputs/Input';
import Textarea from '@components/Inputs/Textarea';
import difficulty from '@constants/difficulty';
import foodCategory from '@constants/foodCategory';
import locales from '@locales';
import React, { useState } from 'react';
import buttonTypes from '@constants/buttonTypes';
import FormPreparationStepsList from '@components/Form/FormPreparationStepsList';
import FormIngredientsList from '@components/Form/FormIngredientsList';
import constants from '@constants/constants';
import { convertFileToUrl } from '@utils/convertFileToUrl';
import { apiClient } from 'api/apiClient';

const Form = () => {

    const difficultyOptions = { ...difficulty };
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: '',
        difficulty: '',
        preparationTime: 0,
        servings: 0,
        photo: null,
        ingredients: [],
        preparationSteps: []
    });
    const [ingredient, setIngredient] = useState('');
    const [step, setStep] = useState('');


    const inputHandler = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
    };

    const selectHandler = (e, items) => {
        setFormData({
            ...formData,
            [items]: e.target.value
        });
    };

    const onCreateRecipe = async (e) => {
        e.preventDefault();
        try {
            await apiClient.post('create-recipe', {
                
                ...formData,
                preparationTime: +formData.preparationTime, 
                servings: +formData.servings
                
            });
           
        } catch (error) {
            console.dir(error); 
        }
    };

    const imageFileHandler = async (e) => {
        const url = await convertFileToUrl(e.target.files);
        setFormData({
            ...formData,
            photo: url
        });
    };

    return (
        <div className='w-3/4 flex mx-auto flex-col mb-10'>
            <form onSubmit={onCreateRecipe}>
                <FormRow heading={locales.TITLE} width='w-full'>
                    <Input id='title' width='w-full' value={formData.title} setValue={inputHandler}/>
                </FormRow>
                <FormRow heading={locales.DESCRIPTION} width='w-full'>
                    <Textarea id='description' width='w-full' cols='40' rows='3' value={formData.description} setValue={inputHandler}/>
                </FormRow>
                <div className='w-full flex mb-5'>
                    <FormRow heading={locales.CATEGORY} width='basis-1/2'>
                        <CustomSelect value={formData.category} setValue={(e) => selectHandler(e, constants.CATEGORY)} options={foodCategory.singular} bgColor='bg-white' width='w-full'/>
                    </FormRow>
                    <FormRow heading={locales.DIFFICULTY} width='basis-1/2' className='ml-6'>
                        <CustomSelect value={formData.difficulty} setValue={(e) => selectHandler(e, constants.DIFFICULTY)} options={delete difficultyOptions['ALL'], difficultyOptions} bgColor='bg-white' width='w-full' />
                    </FormRow>
                </div>
                <div className='w-full flex'>
                    <FormRow heading={locales.PREPARATION_TIME} width='basis-1/3'>
                        <Input id='preparationTime' width='w-full' value={+formData.preparationTime} setValue={inputHandler}/>
                    </FormRow>
                    <FormRow heading={locales.AMOUNT_OF_SERVINGS} width='basis-1/3' className='ml-6'>
                        <Input id='servings' width='w-full' value={+formData.servings} setValue={inputHandler}/>
                    </FormRow>
                    <FormRow heading={locales.CHOOSE_PHOTO} width='basis-1/3' className='ml-6'>
                        <input onChange={imageFileHandler} type="file" accept="image/jpeg" className="block w-full mt-1 text-sm text-black/50 font-semibold 
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
                    <FormIngredientsList ingredient={ingredient} setIngredient={setIngredient} setIngredients={() => setFormData({
                        ...formData,
                        ingredients: [...formData.ingredients, ingredient]
                    })}/>
                </FormRow>
                <FormRow heading={locales.PREPARATION} width='w-full mt-10'>
                    <FormPreparationStepsList setStep={setStep} step={step} setSteps={() => setFormData({
                        ...formData,
                        preparationSteps: [...formData.preparationSteps, step]
                    })}/>
                </FormRow>
                <div className='w-full mt-10 justify-end flex'>
                    <Button type={buttonTypes.OUTLINE} borderColor='border-black/50' textColor='text-black/50' title={locales.CANCEL} className='w-fit px-7 py-3 mr-3'/>
                    <Button type={buttonTypes.TEXT} bgColor='bg-black/50' textColor='text-white' title={locales.SAVE} className='w-fit px-7 py-3' onClick={onCreateRecipe}/>
                </div>
            </form>
        </div>
    );
};

export default Form;