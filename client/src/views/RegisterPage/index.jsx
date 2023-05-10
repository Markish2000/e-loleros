import {
  Box,
  Button,
  useTheme,
  Divider,
  TextField,
  Alert,
  CircularProgress,
  Typography,
} from '@mui/material';
import imageLight from '../../assets/registerLight.jpg';
import imageDark from '../../assets/registerDark.jpg';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useAllCountries } from '../../hooks/useCountries';
import ButtonNetworks from '../../components/ButtonNetworks';
import FormImage from '../../components/FormImage';
import FormContainer from '../../components/FormContainer';
import FormFields from '../../components/FormFields';
import FormButton from '../../components/FormButton';
import FormTitle from '../../components/FormTitle';
import FormInputImage from '../../components/FormInputImage';
import FormSelect from '../../components/FormSelect';
import FormDate from '../../components/FormDate';
import { useRegisterUser } from '../../hooks/users/registerUser';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import validationSchema from './validation';
import dayjs from 'dayjs';
import { getErrorMessage } from './errorMessage';
import { passwordFields, fields, genreOptions } from './formFields';

const RegisterPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [fieldOne, setFieldOne] = useState(true);
  const [fieldTwo, setFieldTwo] = useState(false);
  const [fieldThree, setFieldThree] = useState(false);
  const [errorAlertOpen, setErrorAlertOpen] = useState(false);
  const [errorStatus, setErrorStatus] = useState('');
  const [errorAlertMessage, setErrorAlertMessage] = useState('');
  // const [hasFieldOneErrors, setHasFieldOneErrors] = useState(true);

  const registerUser = useRegisterUser();

  const query = useAllCountries();
  const countries = query.data;

  if (query.error) {
    <div>Error</div>;
  }

  const handleClickField = () => {
    if (fieldOne) {
      setFieldOne(false);
      setFieldTwo(true);
    } else if (fieldTwo) {
      setFieldTwo(false);
      setFieldThree(true);
    }
  };

  const handleClickBack = () => {
    if (fieldTwo) {
      setFieldTwo(false);
      setFieldOne(true);
    } else if (fieldThree) {
      setFieldThree(false);
      setFieldTwo(true);
      setErrorAlertOpen(false); //Ver esto
    }
  };

  const handleSubmit = (values) => {
    // delete values.repeatPassword;
    let newValues = { ...values };
    delete newValues.repeatPassword;

    newValues = {
      ...newValues,
      dateOfBirth: dayjs(values.dateOfBirth).format('MM/DD/YYYY'),
    };

    setErrorStatus('loading');

    registerUser.mutate(newValues, {
      onSuccess: () => {
        setErrorStatus('success');
        navigate('/home');
      },
      onError: (error) => {
        setErrorAlertOpen(true);
        setErrorAlertMessage(getErrorMessage(error));
        setErrorStatus('error');
      },
    });
  };

  const initialValues = {
    nickName: '',
    firstName: '',
    lastName: '',
    email: '',
    genre: '',
    dateOfBirth: null,
    nationality: '',
    password: '',
    repeatPassword: '',
    image: '',
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
        setFieldValue,
        isValid,
        isSubmitting,
      }) => (
        <FormContainer>
          <FormImage imageLight={imageLight} imageDark={imageDark} />
          <FormFields>
            <FormTitle text='Regístrate en eLoleros' />
            <form onSubmit={handleSubmit}>
              <Box
                sx={{
                  display: `${fieldOne ? '' : 'none'}`,
                }}
              >
                {fields.map(({ field, label }) => (
                  <TextField
                    name={field}
                    label={label}
                    variant='outlined'
                    fullWidth
                    margin='normal'
                    value={values[field]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched[field] && Boolean(errors[field])}
                    helperText={touched[field] && errors[field]}
                  />
                ))}
                <FormSelect
                  data={genreOptions}
                  name='genre'
                  label='Género'
                  values={values}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  errors={errors}
                  touched={touched}
                />
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    width: '100%',
                  }}
                >
                  <Button
                    onClick={handleClickField}
                    sx={{
                      mt: '0.75rem',
                      mb: '0.75rem',
                    }}
                  >
                    Siguiente
                  </Button>
                </Box>
              </Box>

              <Box sx={{ display: `${fieldTwo ? '' : 'none'}` }}>
                <FormDate
                  values={values}
                  handleBlur={handleBlur}
                  errors={errors}
                  touched={touched}
                />

                <FormSelect
                  data={countries}
                  name='nationality'
                  label='País'
                  values={values}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  errors={errors}
                  touched={touched}
                />

                {passwordFields.map(({ field, label }) => (
                  <TextField
                    name={field}
                    label={label}
                    type='password'
                    variant='outlined'
                    fullWidth
                    margin='normal'
                    value={values[field]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched[field] && Boolean(errors[field])}
                    helperText={touched[field] && errors[field]}
                  />
                ))}

                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Button
                    onClick={handleClickBack}
                    sx={{ mt: '1.25rem', mb: '0.75rem' }}
                  >
                    Atrás
                  </Button>
                  <Button
                    onClick={handleClickField}
                    sx={{ mt: '1.25rem', mb: '0.75rem' }}
                  >
                    Siguiente
                  </Button>
                </Box>
              </Box>
              <Box sx={{ display: `${fieldThree ? '' : 'none'}` }}>
                <FormInputImage
                  name='image'
                  errors={errors}
                  touched={touched}
                  setFieldValue={setFieldValue}
                />

                <FormButton
                  text='Registrarse'
                  isValid={isValid}
                  isSubmitting={isSubmitting}
                />

                {!isValid && (
                  <Typography
                    variant='body2'
                    sx={{
                      mt: '0.75rem',
                      color: theme.palette.error.main,
                      ml: '1rem',
                      fontSize: '0.80rem',
                    }}
                  >
                    Por favor, corrige los errores en el formulario.
                  </Typography>
                )}

                {errorStatus === 'loading' && (
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                    <CircularProgress />
                  </Box>
                )}

                {errorStatus === 'error' && errorAlertOpen && (
                  <Alert
                    variant='outlined'
                    severity='error'
                    sx={{
                      mt: '0.75rem',
                      color: theme.palette.error.main,
                      borderColor: theme.palette.error.main,
                    }}
                  >
                    {errorAlertMessage}
                  </Alert>
                )}

                <Button
                  onClick={handleClickBack}
                  sx={{ mt: '1.25rem', mb: '0.75rem' }}
                >
                  Atrás
                </Button>
              </Box>
            </form>

            <DividerStyled theme={theme} />
            <ButtonNetworks />
          </FormFields>
        </FormContainer>
      )}
    </Formik>
  );
};

const DividerStyled = styled(Divider)`
  border-color: ${({ theme }) => theme.palette.text.disabled};
`;

export default RegisterPage;
