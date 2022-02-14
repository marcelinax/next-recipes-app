import React from 'react';
import PropTypes from 'prop-types';
import buttonTypes from '@constants/buttonTypes';
import Link from 'next/link';
const Button = ({ title, bgColor, textColor, onClick, type, borderColor, isLink = false, linkTo, icon, className }) => {

    const drawOutlineButton = () => {
        return <button type='button' onClick={onClick} className={`px-4 py-2 bg-transparent border-2 ${borderColor} rounded-lg ${textColor}  text-sm font-semibold hover:scale-95 transition-all cursor-pointer ${className}`}>{title}</button>;
    };

    const drawTextButton = () => {
        return <button type='button' onClick={onClick} className={`px-4 py-2 ${bgColor} rounded-lg ${textColor} text-sm font-semibold hover:scale-95 transition-all cursor-pointer ${className}`}>{title}</button>;
    };

    const drawIconButton = () => {
        return <button type='button' onClick={onClick} className={`px-4 py-2 ${bgColor} rounded-lg  text-sm font-semibold hover:scale-95 transition-all cursor-pointer ${className}`}>{icon}</button>;
    };

    const getButtonByType = () => {
        switch (type) {
        case buttonTypes.OUTLINE:
            return drawOutlineButton();
        case buttonTypes.TEXT:
            return drawTextButton();
        case buttonTypes.ICON:
            return drawIconButton();
        default:
            return drawTextButton();
        }
    };

    return isLink ? <Link href={linkTo}>{getButtonByType()}</Link> : getButtonByType();
};

Button.propTypes = {
    title: PropTypes.string.isRequired,
    bgColor: PropTypes.string,
    textColor: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    borderColor: PropTypes.string,
    isLink: PropTypes.bool,
    linkTo: PropTypes.string,
};

export default Button;