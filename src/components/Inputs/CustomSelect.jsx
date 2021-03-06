import React from 'react';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import PropTypes from 'prop-types';
import colors from 'themes/colors';

const CustomSelect = ({ value, setValue, label, options, width, margin, bgColor = 'bg-transparent', error }) => {
    const CustomMenuItem = styled(MenuItem)(() => ({
        '&.MuiMenuItem-root': {
            color: colors.GRAY,
            fontWeight: '600',
            ':hover': {
                backgroundColor: colors.GRAY,
                color: 'white'
            }
        }
    }));

    const renderSelectOptions = () => {
        return Object.entries(options).map(entry => [<CustomMenuItem value={entry[0].toLowerCase()} key={entry[0]}>{entry[1].toUpperCase()}</CustomMenuItem>]); 
    };
    return (
        <Box className={`${width} ${margin} ${bgColor}`}>
            <FormControl fullWidth
                sx={{
                    '& .MuiFormLabel-filled': {
                        backgroundColor: 'white',
                        fontWeight: '700',
                        paddingX: '5px',
                        color: colors.GRAY,
                        '&.Mui-focused': {
                            color: colors.GRAY,
                        }
                    },
                    '& .MuiSelect-root': {
                        borderRadius: '0.5rem',
                    },
                    '& .MuiSelect-select': {
                        paddingY: '10px',
                        backgroundColor: 'transparent'
                    },
                    '& .MuiOutlinedInput-input': {
                        color: colors.GRAY,
                        fontWeight: '700',
                    }
                }}>
                <InputLabel id={label}
                >{label}</InputLabel>
                <Select
                    labelId={label}
                    id="demo-simple-select"
                    value={value}
                    label={label}
                    onChange={setValue}
                    className={`border-2 ${error ? 'border-red-600' : 'border-black/20'}`}
                    sx={{
                        '& .css-1d3z3hw-MuiOutlinedInput-notchedOutline':{
                            border: '0'
                        },                 
                    }}
                >
                    {renderSelectOptions()}
                </Select>
            </FormControl>
        </Box>
    );
};

CustomSelect.propTypes = {
    label: PropTypes.string,
    width: PropTypes.string.isRequired,
    margin: PropTypes.string,
    bgColor: PropTypes.string,
    options: PropTypes.object.isRequired,
    error: PropTypes.string,
};

export default CustomSelect;