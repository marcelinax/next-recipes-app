import React from 'react';
import PropTypes from 'prop-types';
const Textarea = ({ width, error }) => {
    return (
        <div className={`${width}`}>
            <textarea cols="40" rows="4" className={`bg-white w-full p-3 outline-none border-2 font-semibold border-black/20 text-black/50 rounded-lg resize-none ${error && 'border-red-500'}`}/>
        </div>
    );
};

Textarea.propTypes = {
    width: PropTypes.string.isRequired,
    error: PropTypes.string,
};

export default Textarea;