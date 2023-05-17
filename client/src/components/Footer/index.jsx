import {
  Box,
  Button,
  CardMedia,
  Container,
  Typography,
  useTheme,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import ButtonFooter from '../ButtonFooter';
import styled from 'styled-components';
import imageLight from '../../assets/footerLight.jpeg';
import imageDark from '../../assets/footerDark.jpg';
import imageLogoLight from '../../assets/Logo/logoeloleroLight.png';
import imageLogoDark from '../../assets/Logo/logoeloleroDark.png';
import imageLogo from '../../assets/logoBlanco.png';
import { useThemeContext } from '../../context/ThemeContext';
import { Link } from 'react-router-dom';

const Footer = () => {
  const theme = useTheme();
  const themeApp = useThemeContext();
  const currentYear = new Date().getFullYear();

  return (
    <BoxGeneral
      // image={themeApp.palette.mode === 'light' ? imageLight : imageDark}
      sx={{
        height: { xs: '100%', md: '25vh' },
        backgroundColor: theme.palette.nav.main,
        // backgroundImage: `url(${imageDark})`,
      }}
    >
      <Container
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'flex-start', md: 'center' },
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            height: '100%',
            // order: { xs: '2', md: '0' },
          }}
        >
          <CardMedia
            component='img'
            src={imageLogo}
            sx={{ width: '200px', pt: { xs: '2rem', md: '2rem' } }}
          />
          <Box>
            <Typography
              variant='subtitle2'
              sx={{
                marginTop: '20px',
                color: `${
                  theme.palette.mode === 'light'
                    ? theme.palette.secondary.main
                    : theme.palette.primary.main
                }`,
                // color: '#BF9A56',
                marginBottom: '30px',
              }}
            >
              Copyright © {currentYear} eLoleros, Inc.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-evenly',
            alignItems: 'flex-start',
            mt: { xs: '2rem', md: '0' },
            mb: { xs: '2rem', md: '0' },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              mr: { xs: '0px', md: '20px' },
            }}
          >
            <Typography
              variant='subtitle1'
              sx={{ ml: '0.5rem', color: 'white' }}
            >
              General
            </Typography>
            <Link to='/home'>
              <ButtonFooter text='Inicio' />
            </Link>
            <Link to='/about'>
              <ButtonFooter text='Nosotros' />
            </Link>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              mr: { xs: '0px', md: '20px' },
            }}
          >
            <Typography
              variant='subtitle1'
              sx={{ ml: '0.5rem', color: 'white' }}
            >
              Cuenta
            </Typography>
            <Link to='/login'>
              <ButtonFooter text='Iniciar sesión' />
            </Link>
            <Link to='/signIn'>
              <ButtonFooter text='Registrarse' />
            </Link>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <Typography
              variant='subtitle1'
              sx={{ ml: '0.5rem', color: 'white' }}
            >
              Ayuda
            </Typography>
            <ButtonFooter text='Término de uso' />
            <ButtonFooter text='Política de privacidad' />
          </Box>
        </Box>
      </Container>
    </BoxGeneral>
  );
};

const BoxGeneral = styled(Box)`
  width: 100%;
  background-image: url(${(props) => props.image});
  background-size: cover;
  // background-position: center;
`;

export default Footer;
