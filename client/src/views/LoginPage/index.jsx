import {
  TextField,
  Typography,
  Button,
  useTheme,
  Divider,
  Alert,
  AlertTitle,
} from '@mui/material';
import imageLight from '../../assets/loginLight.jpg';
import imageDark from '../../assets/loginDark.jpg';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import ButtonNetworks from '../../components/ButtonNetworks';
import FormContainer from '../../components/FormContainer';
import FormImage from '../../components/FormImage';
import FormFields from '../../components/FormFields';
import FormTitle from '../../components/FormTitle';
import FormButton from '../../components/FormButton';
import { Formik } from 'formik';
import validationSchema from './validation';
import { useLoginUser } from '../../hooks/users/loginUser';
import Swal from 'sweetalert2';
import { useState } from 'react';

const LoginPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const loginUser = useLoginUser();
  const [errorAlertOpen, setErrorAlertOpen] = useState(false);
  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (values) => {
    loginUser.mutate(values, {
      onSuccess: () => {
        navigate('/home');
      },
      onError: () => {
        // Alerta de error
        // Swal.fire(
        //   'Error al iniciar sesión',
        //   'Hubo un error al iniciar sesión',
        //   'error'
        // );
        setErrorAlertOpen(true);
      },
    });
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
      }) => (
        <FormContainer>
          <FormImage imageLight={imageLight} imageDark={imageDark} />
          <FormFields>
            <FormTitle text='Hey, bienvenido de nuevo' />
            <form onSubmit={handleSubmit}>
              <TextField
                name='email'
                label='Correo electrónico'
                variant='outlined'
                fullWidth
                margin='normal'
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />

              <TextField
                name='password'
                type='password'
                label='Contraseña'
                variant='outlined'
                fullWidth
                margin='normal'
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />

              <Typography
                variant='body1'
                sx={{ marginTop: '0.5rem', marginRight: '0.5rem' }}
              >
                ¿No recuerdas tu contraseña?
                <Button
                  variant='text'
                  color='secondary'
                  size='small'
                  sx={{ marginLeft: '0.5rem' }}
                >
                  Recuperar
                </Button>
              </Typography>

              <FormButton text='Ingresar' />
            </form>

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
                Error al iniciar sesión
              </Alert>
            )}
            <DividerStyled theme={theme} />
            <ButtonNetworks />

            <Typography variant='body1'>
              ¿No tienes cuenta?
              <Button
                variant='text'
                color='secondary'
                size='small'
                sx={{ marginLeft: '0.5rem' }}
                component={Link}
                to='/sigIn'
              >
                Registrarse
              </Button>
            </Typography>
          </FormFields>
        </FormContainer>
      )}
    </Formik>
  );
};

const DividerStyled = styled(Divider)`
  border-color: ${({ theme }) => theme.palette.text.disabled};
`;

export default LoginPage;
