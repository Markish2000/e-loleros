import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Paginated = ({ currentPage, handlePageChange, totalPage }) => {
  return (
    <Stack spacing={2}>
      <Pagination
        count={totalPage}
        page={currentPage}
        onChange={handlePageChange}
        showFirstButton
        showLastButton
        color='primary'
        size='large'
        sx={{ marginBottom: '50px', marginTop: '50px' }}
      />
    </Stack>
  );
};

export default Paginated;
