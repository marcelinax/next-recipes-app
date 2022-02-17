import MuiPagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import React from 'react';
import PropTypes from 'prop-types';
import colors from 'themes/colors';

const Pagination = ({ page, setPage, count }) => {
    return (
        <Stack spacing={2}>
            <MuiPagination count={count} showFirstButton showLastButton page={page} onChange={setPage} shape="rounded" sx={{
                '& .MuiPaginationItem-root': {
                    backgroundColor: colors.LIGHT_GRAY,
                    color: 'white',
                    ':hover': {
                        backgroundColor: colors.GRAY,
                    },
                    '&.Mui-selected': {
                        backgroundColor: colors.GRAY,
                    }
                }
            }}/>
        </Stack>
    );
};

Pagination.propTypes = {
    page: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
};

export default Pagination;

