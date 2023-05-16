import { Box, TextField, Button } from '@mui/material';
import React from 'react';
import StartDashboard from '../../components/StartDashboard';
import FormFields from '../../components/FormFields';
import FormTitle from '../../components/FormTitle';
import FormButton from '../../components/FormButton';
import { Link } from 'react-router-dom';

const EditNamePage = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <StartDashboard />

      <FormFields>
        <FormTitle text='Hey, a cambiar datos' />
        <form>
          <TextField
            name='email'
            label='Nombre'
            variant='outlined'
            fullWidth
            margin='normal'
            // value={values.email}
            // onChange={handleChange}
            // onBlur={handleBlur}
            // error={touched.email && Boolean(errors.email)}
            // helperText={touched.email && errors.email}
          />
          <TextField
            name='email'
            label='Apellido'
            variant='outlined'
            fullWidth
            margin='normal'
            // value={values.email}
            // onChange={handleChange}
            // onBlur={handleBlur}
            // error={touched.email && Boolean(errors.email)}
            // helperText={touched.email && errors.email}
          />
          <FormButton
            text='Cambiar'
            // isValid={isValid}
            // isSubmitting={isSubmitting}
          />
        </form>
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

export default EditNamePage;
