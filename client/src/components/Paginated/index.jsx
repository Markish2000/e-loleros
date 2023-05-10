import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Paginated = ({
  currentPage,
  handlePageChange,
  totalPage,
  size,
  show,
}) => {
  return (
    <Stack spacing={2}>
      {show ? (
        <Pagination
          count={totalPage}
          page={currentPage}
          onChange={handlePageChange}
          showFirstButton
          showLastButton
          color='primary'
          size={size}
          sx={{ marginBottom: '50px', marginTop: '50px' }}
        />
      ) : (
        <Pagination
          count={totalPage}
          page={currentPage}
          onChange={handlePageChange}
          color='primary'
          size={size}
          sx={{ marginTop: '20px' }}
        />
      )}
    </Stack>
  );
};

export default Paginated;
