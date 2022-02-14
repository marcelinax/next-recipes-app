import FormHeading from '@components/Form/FormHeading';
import React from 'react';
import PropTypes from 'prop-types';
const FormRow = ({ heading, children, width, className }) => {
    return (
        <div className={`${width} flex flex-col mb-5 ${className}`}>
            <FormHeading title={heading}/>
            {children}
        </div>
    );
};

FormRow.propTypes = {
    heading: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default FormRow;