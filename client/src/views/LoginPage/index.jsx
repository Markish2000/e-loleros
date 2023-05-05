import {
  Box,
  Container,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
  Button,
  useTheme,
  Divider,
} from '@mui/material';
import imageLight from '../../assets/loginLight.jpg';
import imageDark from '../../assets/loginDark.jpg';
import styled from 'styled-components';
import { useThemeContext } from '../../context/ThemeContext';
import BaseAccess from '../../components/BaseAccess';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ButtonNetworks from '../../components/ButtonNetworks';

const LoginPage = ({ children, img }) => {
  const themeContext = useThemeContext();
  const theme = useTheme();
  const [mail, setMail] = useState();

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'column', md: 'row' },
      }}
    >
      <BoxImg
        image={themeContext.palette.mode === 'light' ? imageLight : imageDark}
        sx={{
          width: { xs: '100%', sm: '100%', md: '50%', lg: '65%' },
          height: { xs: '40vh', sm: '40vh', md: 'auto' },
        }}
      ></BoxImg>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          // alignItems: 'center',
          padding: '5%',
        }}
      >
        <Typography
          variant='h4'
          sx={{
            fontSize: { xs: '1.5rem', sm: '2rem', md: 'auto' },
            marginBottom: '0.75rem',
          }}
        >
          Hey, bienvenido de nuevo
        </Typography>
        <form>
          <TextField
            id='mail'
            label='Mail'
            variant='outlined'
            fullWidth
            margin='normal'
          />
          <TextField
            id='password'
            label='Contraseña'
            variant='outlined'
            type='password'
            fullWidth
            margin='normal'
          />
          <Typography
            variant='body1'
            sx={{ marginTop: '0.5rem', marginRight: '0.5rem' }}
          >
            ¿No recuerdas tu contraseña?
            <Button
              variant='text'
              color='secondary'
              sx={{ marginLeft: '0.5rem' }}
            >
              Recuperar
            </Button>
          </Typography>
          <Button
            variant='contained'
            type='submit'
            sx={{
              width: '100%',
              marginTop: '1rem',
              marginBottom: '1.5rem',
            }}
          >
            Ingresar
          </Button>
        </form>

        <DividerStyled theme={theme} />
        <ButtonNetworks />

        <Typography variant='body1'>
          ¿No tienes cuenta?
          <Button
            variant='text'
            color='secondary'
            sx={{ marginLeft: '0.5rem' }}
            component={Link}
            to='newuser'
          >
            Registrarse
          </Button>
        </Typography>
      </Box>
    </Box>
  );
};

const BoxImg = styled(Box)`
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
`;

const DividerStyled = styled(Divider)`
  border-color: ${({ theme }) => theme.palette.text.disabled};
`;

export default LoginPage;
