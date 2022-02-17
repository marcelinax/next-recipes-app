import React from 'react';
import { BiLoader } from 'react-icons/bi';

const Spinner = () => {
    return (
        <div className='w-full h-[20vh] flex items-center justify-center'>
            <BiLoader size={50} className="fill-black/50 spinner"/>
        </div>
    );
};

export default Spinner;