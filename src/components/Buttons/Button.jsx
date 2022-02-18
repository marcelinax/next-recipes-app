import React from 'react';
import PropTypes from 'prop-types';
import buttonTypes from '@constants/buttonTypes';
import Link from 'next/link';
const Button = ({ title, bgColor, textColor, onClick, type, borderColor, isLink = false, linkTo, icon, className }) => {

    const getDefaultClassName = () => {
        return 'flex items-center justify-center px-4 py-2 rounded-lg hover:scale-95 transition-all cursor-pointer';
    };

    const drawOutlineButton = () => {
        return <button type='button' onClick={onClick} className={`${getDefaultClassName()} bg-transparent border-2 ${borderColor} ${textColor} text-sm font-semibold ${className}`}>{title}</button>;
    };

    const drawTextButton = () => {
        return <button type='button' onClick={onClick} className={`${getDefaultClassName()} ${bgColor} ${textColor} text-sm font-semibold ${className}`}>{title}</button>;
    };

    const drawIconButton = () => {
        return <button type='button' onClick={onClick} className={`${getDefaultClassName()} ${bgColor}  ${className}`}>{icon}</button>;
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
    title: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
    type: PropTypes.string.isRequired,
    borderColor: PropTypes.string,
    isLink: PropTypes.bool,
    linkTo: PropTypes.string,
};

export default Button;