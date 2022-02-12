import React from 'react';
import { IoMdTime } from 'react-icons/io';
import { IoPersonOutline } from 'react-icons/io5';
import {IoCellular } from 'react-icons/io5';
import PropTypes from 'prop-types';
import locales from '@locales';
import { getDifficultyColor } from '@utils/getDifficultyColor';
import RecipeIngredientList from '@components/Recipe/RecipeIngredientList';
const RecipeView = ({bgImg, title, description, servings, difficulty, time}) => {
    return (
        <div className='w-1/2 flex flex-col mx-auto mb-20'>
            <h1 className='font-semibold text-3xl mb-5 drop-shadow-2xl'>{title}</h1>
            <div className='w-full flex flex-col h-[500px]'>
                <div className='h-4/5 w-full bg-no-repeat bg-center bg-cover shadow-md rounded-md' style={{backgroundImage: `url(${bgImg})`}} />
                <div className='w-full h-1/5 bg-white shadow-sm mt-1 flex py-2 items-center px-6 justify-around rounded-md'>
                    <div className='flex flex-col basis-1/3 items-center'>
                        <p className='font-semibold'>{locales.PREPARATION_TIME}</p>
                        <div className='w-full flex items-center justify-center mt-1'>
                            <IoMdTime size={18} className="fill-gray-400"/>
                            <p className='ml-2 text-gray-400'>{time} {locales.MINUTES}</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center basis-1/3'>
                        <p className='font-semibold'>{locales.DIFFICULTY}</p>
                        <div className='w-full flex items-center justify-center mt-1'>
                            <IoCellular size={18} fill={getDifficultyColor(difficulty)}/>
                            <p className='ml-2 text-gray-400'>{difficulty}</p>
                        </div>
                    </div>
                    <div className='flex flex-col basis-1/3 items-center'>
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
                <RecipeIngredientList ingredients={['200g masła', '100g cukru', '300g mąki', '100 ml mleka', 'op. cukru waniliowego','300g mąki', '100 ml mleka', 'op. cukru waniliowego']}/>
            </div>
            <div className='mt-10 w-full flex flex-col'>
                <h2 className='mb-2 font-semibold text-lg'>{locales.PREPARATION}</h2>
                <div className='w-full relative bg-zinc-200 h-[3px] my-2 rounded-lg overflow-hidden after:w-6 after:bg-red-500 after:h-full after:left-0 after:top-0 after:absolute' />
                <div className='mt-5 flex flex-col w-full shadow-sm bg-white rounded-md px-4 py-2'>
                    <h3 className='text-lg font-semibold mb-2 text-slate-400'>KROK 1</h3>
                    <p>Żółtka oddzielamy od białek i ubijamy w misce z syropem klonowym oraz nasionkami laski wanilii. Do ubijanych żółtek stopniowo dodajemy rozpuszczone masło. Mieszamy tak długo, aż ciasto będzie miało jednolitą, aksamitną konsystencję.</p>
                </div>
                <div className='mt-5 flex flex-col w-full shadow-sm bg-white rounded-md px-4 py-2'>
                    <h3 className='text-lg font-semibold mb-2 text-slate-400'>KROK 1</h3>
                    <p>Żółtka oddzielamy od białek i ubijamy w misce z syropem klonowym oraz nasionkami laski wanilii. Do ubijanych żółtek stopniowo dodajemy rozpuszczone masło. Mieszamy tak długo, aż ciasto będzie miało jednolitą, aksamitną konsystencję.</p>
                </div>
            </div>
        </div>
    );
};

RecipeView.propTypes = {
    bgImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    difficulty: PropTypes.string.isRequired,
    servings: PropTypes.number.isRequired
};

export default RecipeView;