import locales from '@locales';
import React from 'react';
import { IoSearch } from 'react-icons/io5';

const Search = ({value, setValue}) => {
    return (
        <div className='flex items-center basis-1/2 border-2 border-black/20 rounded-lg py-2 px-3'>
            <IoSearch size={22} className='fill-black/40'/>
            <input value={value} onChange={setValue} type='text' placeholder={locales.SEARCH} className='outline-none w-full placeholder:text-black/30 ml-2 text-black/50 font-semibold'/>
        </div>
    );
};

export default Search;