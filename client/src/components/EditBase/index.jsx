import React from 'react';
import StartDashboard from '../../components/StartDashboard';
import FormFields from '../../components/FormFields';
import FormTitle from '../../components/FormTitle';
import { Link } from 'react-router-dom';
import { Box, Button } from '@mui/material';

const EditBase = ({ children }) => {
  return (
    <Box
      sx={{
        height: { xs: '100%', md: '100vh' },
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
      }}
    >
      <StartDashboard />

      <FormFields>
        <FormTitle text='Hey, hora de cambiar datos' />
        {children}
        <Box>
          <Button
            component={Link}
            to='/profile'
            sx={{
              mt: '0.75rem',
              mb: '0.75rem',
            }}
          >
            Volver
          </Button>
        </Box>
      </FormFields>
    </Box>
  );
};

export default EditBase;
