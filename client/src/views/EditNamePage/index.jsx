import { Box, TextField, Button, Alert } from '@mui/material';
import React, { useState } from 'react';
import StartDashboard from '../../components/StartDashboard';
import FormFields from '../../components/FormFields';
import FormTitle from '../../components/FormTitle';
import FormButton from '../../components/FormButton';
import { Link, useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import validationSchema from './validate';
import { useThemeContext } from '../../context/ThemeContext';
import { useUpdateUser } from '../../hooks/useUsers/useUpdateUser';
import { useUserContext } from '../../context/UserContext';
import Swal from 'sweetalert2';

const EditNamePage = () => {
  const navigate = useNavigate();
  const [errorAlertOpen, setErrorAlertOpen] = useState(false);
  // const { user } = useUserContext();
  const user = JSON.parse(localStorage.getItem('user'));
  const theme = useThemeContext();
  const updateUser = useUpdateUser();
  const initialValues = {
    firstName: '',
    lastName: '',
  };

  const handleSubmit = (values) => {
    updateUser.mutate(
      { nickNameUser: user.nickName, formData: values },
      {
        onSuccess: () => {
          navigate('/profile');
          Swal.fire({
            icon: 'success',
            title: 'Cambios realizados con éxitos',
            showConfirmButton: false,
            timer: 2000,
          });
          return;
        },
        onError: () => {
          setErrorAlertOpen(true);
          console.log('algo salio mal');
        },
      }
    );
    console.log('me estoy enviando');
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        errors,
        touched,
        isValid,
        isSubmitting,
      }) => (
        <Box
          sx={{
            height: { xs: '100%', md: '100vh' },
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          <StartDashboard />

          <FormFields>
            <FormTitle text='Hey, ahora de cambiar datos' />
            <form onSubmit={handleSubmit}>
              <TextField
                name='firstName'
                label='Nombre'
                variant='outlined'
                fullWidth
                margin='normal'
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.firstName && Boolean(errors.firstName)}
                helperText={touched.firstName && errors.firstName}
              />
              <TextField
                name='lastName'
                label='Apellido'
                variant='outlined'
                fullWidth
                margin='normal'
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.lastName && Boolean(errors.lastName)}
                helperText={touched.lastName && errors.lastName}
              />
              <FormButton
                text='Cambiar'
                isValid={isValid}
                isSubmitting={isSubmitting}
              />

              {errorAlertOpen && (
                <Alert
                  variant='outlined'
                  severity='error'
                  sx={{
                    mt: '0.75rem',
                    mb: '0.75rem',
                    color: theme.palette.error.main,
                    borderColor: theme.palette.error.main,
                  }}
                >
                  Error modificar los datos
                </Alert>
              )}
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
      )}
    </Formik>
  );
};

export default EditNamePage;
