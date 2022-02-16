import React from 'react';
import PropTypes from 'prop-types';
const Input = ({ id, value, setValue, width, outlineInput = true, error }) => {
    return (
        <div className={`${width}`}>
            <input id={id} value={value} onChange={setValue} className={`bg-white w-full px-3 py-2 outline-none font-semibold text-black/50 rounded-lg ${outlineInput && 'border-2 border-black/20'}`}/>
            {error && <span className='text-xs text-red-600 font-medium'>{error}</span>}
        </div>
    );
};

Input.propTypes = {
    id: PropTypes.string.isRequired,
    outlineInput: PropTypes.bool,
    width: PropTypes.string.isRequired,
    error: PropTypes.string,
    placeholder: PropTypes.string,
};

export default Input;