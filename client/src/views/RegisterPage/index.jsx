import { Box, Button, useTheme, Divider, TextField } from '@mui/material';
import imageLight from '../../assets/registerLight.jpg';
import imageDark from '../../assets/registerDark.jpg';
import styled from 'styled-components';
import { useState } from 'react';
import { useAllCountries } from '../../hooks/countries';
import ButtonNetworks from '../../components/ButtonNetworks';
import FormImage from '../../components/FormImage';
import FormContainer from '../../components/FormContainer';
import FormFields from '../../components/FormFields';
import FormButton from '../../components/FormButton';
import FormTitle from '../../components/FormTitle';
import FormInput from '../../components/FormInput';
import FormInputImage from '../../components/FormInputImage';
import FormSelect from '../../components/FormSelect';
import FormDate from '../../components/FormDate';
import { useRegisterUser } from '../../hooks/users/registerUser';
import { useNavigate } from 'react-router-dom';
import { Formik, useFormik } from 'formik';
import validationSchema from './validation';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Field } from 'formik';

const RegisterPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [fieldOne, setFiledOne] = useState(true);
  const [fieldTwo, setFiledTwo] = useState(false);
  const [errorAlertOpen, setErrorAlertOpen] = useState(false);
  const registerUser = useRegisterUser();
  const genre = [
    'Femenino',
    'Masculino',
    'No binario',
    'Prefiero no decirlo',
    'Otro',
  ];
  const fields = [
    {
      field: 'nickName',
      label: 'Usuario',
    },
    {
      field: 'firstName',
      label: 'Nombre',
    },
    {
      field: 'lastName',
      label: 'Apellido',
    },
    {
      field: 'email',
      label: 'Correo electrónico',
    },
  ];

  const query = useAllCountries();
  const countries = query.data;

  if (query.error) {
    <div>Error</div>;
  }

  const handleClickFiled = () => {
    setFiledOne(!fieldOne);
    setFiledTwo(!fieldTwo);
  };

  const handleSubmit = (values) => {
    // registerUser.mutate(values, {
    //   onSuccess: () => {
    //     navigate('/home');
    //   },
    //   onError: () => {
    //     setErrorAlertOpen(true);
    //   },
    // });
    console.log('me estoy enviando');
    console.log(values);
  };

  const initialValues = {
    nickName: '',
    firstName: '',
    lastName: '',
    email: '',
    genre: '',
    dateOfBirth: null,
    nationality: '',
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
      }) => (
        <FormContainer>
          <FormImage imageLight={imageLight} imageDark={imageDark} />
          <FormFields>
            <FormTitle text='Regístrate en eLoleros' />
            <form onSubmit={handleSubmit}>
              <Box sx={{ display: `${fieldOne ? '' : 'none'}` }}>
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
                  data={genre}
                  name='genre'
                  label='Género'
                  values={values}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  errors={errors}
                  touched={touched}
                />
                <Button
                  onClick={handleClickFiled}
                  sx={{ mt: '0.75rem', mb: '0.75rem' }}
                >
                  Siguiente
                </Button>
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
                {/* <FormInput id='password' label='Contraseña' type='password' /> */}
                <TextField
                  name='password'
                  label='Contaseña'
                  variant='outlined'
                  type='password'
                  fullWidth
                  margin='normal'
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                />

                
                <FormInput label='Repite tu contraseña' type='password' />
                <FormInputImage />
                <FormButton text='Registrarse' />
                <Button
                  onClick={handleClickFiled}
                  sx={{ mt: '1.25rem', mb: '0.75rem' }}
                >
                  Atrás
                </Button>
              </Box>
            </form>
            <DividerStyled theme={theme} />
            <ButtonNetworks />
          </FormFields>
          {console.log(values)}
        </FormContainer>
      )}
    </Formik>
  );
};

const DividerStyled = styled(Divider)`
  border-color: ${({ theme }) => theme.palette.text.disabled};
`;

export default RegisterPage;
