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
      }}
    >
      {children}
    </Box>
  );
};

export default FormFields;
