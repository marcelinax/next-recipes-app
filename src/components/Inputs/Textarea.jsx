import React from 'react';
import PropTypes from 'prop-types';
const Textarea = ({ id, width, error, cols, rows, value, setValue, disabled = false }) => {
    return (
        <div className={`${width}`}>
            <textarea id={id} disabled={disabled} value={value} onChange={setValue} cols={cols} rows={rows} className={`bg-white w-full p-3 outline-none border-2 font-semibold border-black/20 text-black/50 rounded-lg resize-none ${error && 'border-red-500'} `}/>
        </div>
    );
};

Textarea.propTypes = {
    width: PropTypes.string.isRequired,
    cols: PropTypes.string.isRequired,
    rows: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    error: PropTypes.string,
    disabled: PropTypes.bool
};

export default Textarea;