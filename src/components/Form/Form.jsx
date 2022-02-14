import Button from '@components/Buttons/Button';
import FormRow from '@components/Form/FormRow';
import CustomSelect from '@components/Inputs/CustomSelect';
import Input from '@components/Inputs/Input';
import Textarea from '@components/Inputs/Textarea';
import difficulty from '@constants/difficulty';
import foodCategory from '@constants/foodCategory';
import locales from '@locales';
import React from 'react';

const Form = () => {

    return (
        <div className='w-3/4 flex mx-auto flex-col'>
            <form>
                <FormRow heading={locales.TITLE} width='w-full'>
                    <Input width='w-full'/>
                </FormRow>
                <FormRow heading={locales.DESCRIPTION} width='w-full'>
                    <Textarea width='w-full'/>
                </FormRow>
                <div className='w-full flex mb-5'>
                    <FormRow heading={locales.CATEGORY} width='basis-1/2'>
                        <CustomSelect options={foodCategory.singular} bgColor='bg-white'/>
                    </FormRow>
                    <FormRow heading={locales.DIFFICULTY} width='basis-1/2' className='ml-6'>
                        <CustomSelect options={difficulty} bgColor='bg-white'/>
                    </FormRow>
                </div>
                <div className='w-full flex'>
                    <FormRow heading={locales.PREPARATION_TIME} width='basis-1/3'>
                        <Input width='w-full'/>
                    </FormRow>
                    <FormRow heading={locales.AMOUNT_OF_SERVINGS} width='basis-1/3' className='ml-6'>
                        <Input width='w-full'/>
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
                <FormRow heading={locales.INGREDIENTS} width='w-full'>
                    <div className='w-full flex'>
                        <div className='basis-1/2 flex flex-col'>
                            <Input width='w-full' />
                            <Button type='text' bgColor='bg-black/50' textColor='text-white' title={locales.ADD_NEW_INGREDIENT} className='mt-5 w-fit'/>
                        </div>
                        <div className='basis-1/2 ml-5'>
                            <div className='w-full p-5 bg-zinc-200 rounded-lg shadow-inner max-h-44 overflow-y-auto scrollbar'>
                                <p className='text-black/50 font-semibold'>300g masła</p>
                                <p className='text-black/50 font-semibold'>300g masła</p>
                                <p className='text-black/50 font-semibold'>300g masła</p>
                                <p className='text-black/50 font-semibold'>300g masła</p>
                                <p className='text-black/50 font-semibold'>300g masła</p>
                               
                            </div>
                        </div>
                    </div>
                </FormRow>
                <FormRow heading={locales.PREPARATION} width='w-full' />
            </form>
        </div>
    );
};

export default Form;