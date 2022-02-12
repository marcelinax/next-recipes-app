import React from 'react';
import PropTypes from 'prop-types';
import buttonTypes from '@constants/buttonTypes';
import Link from 'next/link';
const Button = ({ title, bgColor, textColor, onClick, type, borderColor, isLink = false, linkTo }) => {

    const drawOutlineButton = () => {
        return <button onClick={onClick} className={`mr-5 px-4 py-2 bg-transparent border-2 ${borderColor} rounded-lg ${textColor}  text-sm font-semibold hover:scale-95 transition-all cursor-pointer`}>{title}</button>;
    };

    const drawTextButton = () => {
        return <button onClick={onClick} className={`mr-5 px-4 py-2 ${bgColor} rounded-lg ${textColor} text-sm font-semibold hover:scale-95 transition-all cursor-pointer}`}>{title}</button>;
    };

    const getButtonByType = () => {
        switch (type) {
        case buttonTypes.OUTLINE:
            return drawOutlineButton();
        case buttonTypes.TEXT:
            return drawTextButton();
        default:
            return drawTextButton();
        }
    };

    return isLink ? <Link href={linkTo}>{getButtonByType()}</Link> : getButtonByType();
};

Button.propTypes = {
    title: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    borderColor: PropTypes.string,
    isLink: PropTypes.bool,
    linkTo: PropTypes.string,
};

export default Button;