import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MuiModal from '@mui/material/Modal';
import Button from '@components/Buttons/Button';
import buttonTypes from '@constants/buttonTypes';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 5
};

const Modal = ({ isOpen, onCancel, onConfirm, title, description }) => {

    return (
        <div>
            <MuiModal
                open={isOpen}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{
                        '&.MuiTypography-h6': {
                            fontWeight: '700'
                        }
                    }}>
                        {title}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {description}
                    </Typography>
                    <div className='w-full flex items-center mt-7'>
                        <Button type={buttonTypes.OUTLINE} title='Anuluj' borderColor='border-black' textColor='text-black' className='mr-3' onClick={onCancel}/>
                        <Button type={buttonTypes.TEXT} title='Potwierdź' bgColor='bg-black' textColor='text-white' onClick={onConfirm}/>
                    </div>
                </Box>
            </MuiModal>
        </div>
    );
};

export default Modal;