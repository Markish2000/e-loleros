import {
  Box,
  TextField,
  Typography,
  Button,
  useTheme,
  Divider,
  MenuItem,
} from '@mui/material';
// import DatePicker from '@mui/lab/DatePicker';
import imageLight from '../../assets/loginLight.jpg';
import imageDark from '../../assets/loginDark.jpg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ButtonNetworks from '../../components/ButtonNetworks';
import FormImage from '../../components/FormImage';
import FormContainer from '../../components/FormContainer';
import FormFields from '../../components/FormFields';
import FormButton from '../../components/FormButton';
import FormTitle from '../../components/FormTitle';
import FormInput from '../../components/FormInput';

const RegisterPage = () => {
  const theme = useTheme();
  const genre = [
    'Femenino',
    'Masculino',
    'No binario',
    'Prefiero no decirlo',
    'Otro',
  ];

  return (
    <FormContainer>
      <FormImage imageLight={imageLight} imageDark={imageDark} />
      <FormFields>
        <FormTitle text='Regístrate en eLoleros' />
        <form>
          <Box>
            <FormInput id='nickName' label='Usuario' type='text' />
            <FormInput id='firstName' label='Nombre' type='text' />
            <FormInput id='lastName' label='Apellido' type='text' />
            <FormInput id='email' label='Email' type='text' />

            <TextField
              id='genre'
              select
              label='Select'
              fullWidth
              margin='normal'
            >
              {genre.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Box>

          <Box>{/* <DatePicker label='Basic date picker' /> */}</Box>

          <Box>
            <FormInput id='password' label='Contraseña' type='password' />
            <FormInput
              id='password'
              label='Repite tu contraseña'
              type='password'
            />
            <FormButton text='Registrarse' />
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
