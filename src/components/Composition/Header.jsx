import locales from '@locales';
import React from 'react';
import { IoIosHeartEmpty } from 'react-icons/io';

const Header = () => {
    return (
        <div className='w-full bg-black/20 shadow-md'>
            <div className='container mx-auto py-10 flex justify-between items-center'>
                <h1 className='text-white font-bold text-3xl te'>{locales.RECIPES_WORLD}</h1>
                <div className='flex relative cursor-pointer'>
                    <IoIosHeartEmpty size={20} className='fill-white'/>
                    <span className='absolute -top-3 -right-5 p-0.5 px-1.5 text-xs text-black/50 font-bold rounded-sm bg-white'>3</span>
                </div>
            </div>
        </div>
    );
};

export default Header;