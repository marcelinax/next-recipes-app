import React from 'react';
import PropTypes from 'prop-types';
const FormHeading = ({title}) => {
    return (
        <h1 className='font-semibold text-black/40 text-lg mb-2'>{title.toUpperCase()}</h1>
    );
};

FormHeading.propTypes = {
    title: PropTypes.string.isRequired
};

export default FormHeading;