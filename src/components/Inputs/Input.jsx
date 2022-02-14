import React from 'react';
import PropTypes from 'prop-types';
const Input = ({ id, value, setValue, width, outlineInput = true, error }) => {
    return (
        <div className={`${width}`}>
            <input id={id} value={value} onChange={setValue} className={`bg-white w-full p-3 outline-none font-semibold text-black/50 rounded-lg ${error && 'border-red-500'} ${outlineInput && 'border-2 border-black/20'}`}/>
        </div>
    );
};

Input.propTypes = {
    id: PropTypes.string.isRequired,
    outlineInput: PropTypes.bool,
    width: PropTypes.string.isRequired,
    error: PropTypes.string,
};

export default Input;