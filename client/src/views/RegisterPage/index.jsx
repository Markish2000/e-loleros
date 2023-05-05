import { Box, Button, useTheme, Divider } from '@mui/material';
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

const RegisterPage = () => {
  const theme = useTheme();
  const [fieldOne, setFiledOne] = useState(true);
  const [fieldTwo, setFiledTwo] = useState(false);
  const genre = [
    'Femenino',
    'Masculino',
    'No binario',
    'Prefiero no decirlo',
    'Otro',
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

  return (
    <FormContainer>
      <FormImage imageLight={imageLight} imageDark={imageDark} />
      <FormFields>
        <FormTitle text='Regístrate en eLoleros' />
        <form>
          <Box sx={{ display: `${fieldOne ? '' : 'none'}` }}>
            <FormInput id='nickName' label='Usuario' type='text' />
            <FormInput id='firstName' label='Nombre' type='text' />
            <FormInput id='lastName' label='Apellido' type='text' />
            <FormInput id='email' label='Email' type='text' />
            <FormSelect data={genre} id='genre' label='Género' />
            <Button
              onClick={handleClickFiled}
              sx={{ mt: '0.75rem', mb: '0.75rem' }}
            >
              Siguiente
            </Button>
          </Box>

          <Box sx={{ display: `${fieldTwo ? '' : 'none'}` }}>
            <FormDate />

            <FormSelect data={countries} id='nationality' label='País' />
            <FormInput id='password' label='Contraseña' type='password' />
            <FormInput
              id='password'
              label='Repite tu contraseña'
              type='password'
            />
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
    </FormContainer>
  );
};

const DividerStyled = styled(Divider)`
  border-color: ${({ theme }) => theme.palette.text.disabled};
`;

export default RegisterPage;
