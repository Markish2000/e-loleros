import { Box, TextField, Button } from '@mui/material';
import React from 'react';
import StartDashboard from '../../components/StartDashboard';
import FormFields from '../../components/FormFields';
import FormTitle from '../../components/FormTitle';
import FormButton from '../../components/FormButton';
import { Link } from 'react-router-dom';

const EditPasswordPage = () => {
  const passwordFields = [
    {
      field: 'password',
      label: 'Contraseña',
    },
    {
      field: 'repeatPassword',
      label: 'Repetir contraseña',
    },
  ];

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
          {passwordFields.map(({ field, label }) => (
            <TextField
              name={field}
              label={label}
              type='password'
              variant='outlined'
              fullWidth
              margin='normal'
              // value={values[field]}
              // onChange={handleChange}
              // onBlur={handleBlur}
              // error={touched[field] && Boolean(errors[field])}
              // helperText={touched[field] && errors[field]}
            />
          ))}
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

export default EditPasswordPage;
