import React, { useState } from 'react';
import { IoMdTime } from 'react-icons/io';
import { IoPersonOutline, IoPencil } from 'react-icons/io5';
import { IoCellular, IoHeart, IoHeartOutline, IoTrashOutline } from 'react-icons/io5';
import PropTypes from 'prop-types';
import locales from '@locales';
import { getDifficultyColor } from '@utils/getDifficultyColor';
import RecipeIngredientList from '@components/Recipe/RecipeIngredientList';
import RecipePreparationStepsItem from '@components/Recipe/RecipePreparationStepsItem';
import { translateDifficulty } from '@utils/translateDifficulty';
import Button from '@components/Buttons/Button';
import buttonTypes from '@constants/buttonTypes';
import { apiClient } from 'api/apiClient';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import Modal from '@components/Composition/Modal';

const RecipeView = ({ id, bgImg, title, description, servings, difficulty, time, ingredients, preparationSteps, isFavourite, onToggleIsFavourite }) => {
    
    const router = useRouter();
    const [showModal, setShowModal] = useState(false);
    const onDeleteRecipe = async () => {
        try {
            await apiClient.delete(`recipe/${id}`, {
                id
            });
            await toast.success(locales.RECIPE_HAS_BEEN_DELETED);
            router.push('/');
        } catch (error) {
            console.log(error);
        }
    };

    const getIngredientsNames = () => {
        return ingredients && ingredients.map(ingredient => ingredient.ingredient);
    };

    const renderPreparationSteps = () => {
        return preparationSteps && preparationSteps.map((step, index) => (
            <RecipePreparationStepsItem key={step.id} description={step.description} step={index + 1}/>
        ));
    };

   

    return (
        <div className='w-full px-2 md:px-0 md:w-3/4 lg:w-2/3 xl:w-1/2 flex flex-col mx-auto mb-20'>
            <Modal isOpen={showModal} title={locales.ARE_YOU_SURE_YOU_WANT_TO_DELETE_RECIPE} description={locales.THIS_ACTION_CANNOT_BE_UNDONE} onConfirm={onDeleteRecipe} onCancel={()=> setShowModal(false) }/>
            <div className='w-full flex flex-col md:flex-row mb-5 md:items-center md:justify-between'>
                <h1 className='font-semibold text-3xl drop-shadow-2xl mr-3 w-[90%]'>{title}</h1>
                <div className='flex items-center mt-2 md:mt-0'>
                    <Button type={buttonTypes.ICON} onClick={onToggleIsFavourite} bgColor='bg-white' className='shadow-2xl px-1 py-1 mr-1' icon={isFavourite ? <IoHeart size={22} className='fill-red-600' /> : <IoHeartOutline size={22} className='stroke-red-600' />}/>
                    <Button type={buttonTypes.ICON} onClick={()=> router.push(`/edit-recipe/${id}`)} bgColor='bg-white' className='shadow-2xl px-1 py-1 mr-1' icon={<IoPencil size={22} className='stroke-black/50' /> }/>
                    <Button type={buttonTypes.ICON} onClick={() => setShowModal(true)} bgColor='bg-white' className='shadow-2xl px-1 py-1' icon={<IoTrashOutline size={22} className='stroke-black/50' /> }/>
                </div>
            </div>
            <div className='w-full flex flex-col h-[500px]'>
                <div className='h-4/5 w-full bg-no-repeat bg-center bg-cover shadow-md rounded-md' style={{backgroundImage: `url(${bgImg})`}} />
                <div className='w-full md:h-1/5 bg-white shadow-sm mt-1 flex flex-col md:flex-row py-2 items-center px-6 justify-around rounded-md'>
                    <div className='flex flex-col items-center md:basis-1/3 mb-2 md:mb-0'>
                        <p className='font-semibold'>{locales.PREPARATION_TIME}</p>
                        <div className='w-full flex items-center justify-center mt-1'>
                            <IoMdTime size={18} className="fill-gray-400"/>
                            <p className='ml-2 text-gray-400'>{time} {locales.MINUTES}</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center md:basis-1/3 mb-2 md:mb-0'>
                        <p className='font-semibold'>{locales.DIFFICULTY}</p>
                        <div className='w-full flex items-center justify-center mt-1'>
                            <IoCellular size={18} fill={getDifficultyColor(translateDifficulty(difficulty.toUpperCase()))}/>
                            <p className='ml-2 text-gray-400'>{(translateDifficulty(difficulty.toUpperCase()))}</p>
                        </div>
                    </div>
                    <div className='flex flex-col md:basis-1/3 items-center'>
                        <p className='font-semibold'>{locales.AMOUNT_OF_SERVINGS}</p>
                        <div className='w-full flex items-center justify-center mt-1'>
                            <IoPersonOutline size={18} className="stroke-gray-400"/>
                            <p className='ml-2 text-gray-400'>{servings}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full mt-10'>
                <p className='text-black/50 font-medium'>{description}</p>
            </div>
            <div className='mt-10 w-full flex flex-col'>
                <h2 className='mb-2 font-semibold text-lg'>{locales.INGREDIENTS}</h2>
                <div className='w-full relative bg-zinc-200 h-[3px]  mb-5 rounded-lg overflow-hidden after:w-6 after:bg-red-500 after:h-full after:left-0 after:top-0 after:absolute' />
                <RecipeIngredientList ingredients={getIngredientsNames()}/>
            </div>
            <div className='mt-10 w-full flex flex-col'>
                <h2 className='mb-2 font-semibold text-lg'>{locales.PREPARATION}</h2>
                <div className='w-full relative bg-zinc-200 h-[3px] my-2 rounded-lg overflow-hidden after:w-6 after:bg-red-500 after:h-full after:left-0 after:top-0 after:absolute' />
                <div className='w-full flex flex-col'>
                    {renderPreparationSteps()}
                </div>
            </div>
        </div>
    );
};

RecipeView.propTypes = {
    id: PropTypes.string.isRequired,
    bgImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
    difficulty: PropTypes.string.isRequired,
    servings: PropTypes.number.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.object).isRequired,
    preparationSteps: PropTypes.arrayOf(PropTypes.object).isRequired,
    isFavourite: PropTypes.bool.isRequired
};

export default RecipeView;