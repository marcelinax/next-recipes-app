import React from 'react';
import { IoClose } from 'react-icons/io5';
import PropTypes from 'prop-types';

const FormIngredientListItem = ({ id, name, onDelete }) => {

    return (
        <div id={id} className='w-full flex group hover:bg-black/50 p-2 justify-between rounded-md'>
            <p className='text-black/50 font-semibold mr-2 group-hover:text-white'>{name}</p>
            <IoClose className='fill-black/50 group-hover:fill-white cursor-pointer' size={20} onClick={onDelete}/>
        </div>
    );
};
FormIngredientListItem.propTypes = {
    name: PropTypes.string.isRequired
};

export default FormIngredientListItem;