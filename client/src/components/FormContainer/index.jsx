import { Box } from '@mui/material';

const FormContainer = ({ children }) => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'column', md: 'row' },
      }}
    >
      {children}
    </Box>
  );
};

export default FormContainer;
