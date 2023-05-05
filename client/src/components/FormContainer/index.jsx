import { Box } from '@mui/material';

const FormContainer = ({ children }) => {
  return (
    <Box
      sx={{
        height: { xs: 'auto', sm: 'auto', md: '100vh' },
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'column', md: 'row' },
      }}
    >
      {children}
    </Box>
  );
};

export default FormContainer;
