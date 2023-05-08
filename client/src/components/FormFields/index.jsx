import { Box } from '@mui/material';

const FormFields = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        // alignItems: 'center',
        padding: '5%',
        width: { xs: '100%', sm: '100%', md: '50%', lg: '35%' },
        mt: { xs: '0', sm: '0', md: '60px' },
      }}
    >
      {children}
    </Box>
  );
};

export default FormFields;
