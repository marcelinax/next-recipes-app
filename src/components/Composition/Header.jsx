import Button from '@components/Buttons/Button';
import buttonTypes from '@constants/buttonTypes';
import locales from '@locales';
import Link from 'next/link';
import React from 'react';
import { IoIosHeartEmpty } from 'react-icons/io';

import { useSelector } from 'react-redux';
const Header = () => {
    
    const favouriteRecipes = useSelector(state => state.recipes.favouriteRecipes);

    return (
        <div className='w-full bg-black/20 shadow-md'>
            <div className='container mx-auto py-10 flex justify-between items-center'>
                <Link href='/'>
                    <a className='text-white font-bold text-3xl'>{locales.RECIPES_WORLD}</a>
                </Link>
                <div className='flex items-center'>
                    <Button bgColor='bg-white' textColor='text-black/40' title={locales.NEW_RECIPE} type={buttonTypes.TEXT} isLink={true} linkTo='/create-recipe' className='mr-5'/>
                    <div className='flex relative cursor-pointer'>
                        <Link href='/favourites'>
                            <a>
                                <IoIosHeartEmpty size={25} className='fill-white' />
                            </a>
                        </Link>
                        <span className='absolute -top-3 -right-5 p-0.5 px-1.5 text-xs text-black/50 font-bold rounded-sm bg-white'>{favouriteRecipes.length}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Header;