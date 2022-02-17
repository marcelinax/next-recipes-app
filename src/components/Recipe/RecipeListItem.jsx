import React from 'react';
import { IoMdTime } from 'react-icons/io';
import {IoCellular } from 'react-icons/io5';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { getDifficultyColor } from '@utils/getDifficultyColor';
import locales from '@locales';
const RecipeListItem = ({ id, title, description, bgImg, category, difficulty, time }) => {
    return (
        <Link href={{
            pathname: '/recipe/[id]',
            query:{id}
        }}>
            <a className='p-6 basis-1/3 max-w-[33.3333%] h-[470px] relative'>
                <div className='w-full h-full flex flex-col shadow-md rounded-lg bg-white overflow-hidden cursor-pointer group hover:scale-95 transition-all'>
                    <div className='h-1/2 w-full bg-no-repeat bg-cover bg-center relative group-hover:opacity-90' style={{backgroundImage: `url(${bgImg})`}} >
                        <div className='absolute top-5 right-5 bg-black/40 py-2 px-3 rounded-lg'>
                            <p className='text-white text-sm font-semibold'>{category.toUpperCase()}</p>
                        </div>
                    </div>
                    <div className='flex w-full flex-col h-1/2'>
                        <div className='w-full px-10 py-7 h-2/3'>
                            <h1 className='text-center text-xl font-bold'>{title}</h1>
                            <p className='text-stone-400 mt-2 mb-3 text-center w-full line-clamp-2'>{description}</p>
                        </div>
                        <div className='w-full border-t-2 border-stone-100 flex h-1/3'>
                            <div className='basis-1/2 flex border-r-2 border-stone-100'>
                                <div className='flex items-center w-full py-5 justify-center '>
                                    <IoMdTime className='fill-gray-400' size={18}/>
                                    <p className='ml-2 text-sm text-gray-400'>{time} {locales.MINUTES}</p>
                                </div>
                            </div>
                            <div className='basis-1/2 flex'>
                                <div className='flex items-center w-full py-5 justify-center'>
                                    <IoCellular fill={getDifficultyColor(difficulty)} size={18}/>
                                    <p className='ml-2 text-sm text-gray-400'>{difficulty}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </a>
        </Link>
    );
};

RecipeListItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    bgImg: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    difficulty: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
};

export default RecipeListItem;