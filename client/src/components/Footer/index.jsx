import { Box, Button, Container, Typography, useTheme } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import ButtonFooter from '../ButtonFooter';
import styled from 'styled-components';
import imageLight from '../../assets/footerLight.jpeg';
import imageDark from '../../assets/footerDark.jpg';
import { useThemeContext } from '../../context/ThemeContext';

const Footer = () => {
  const theme = useTheme();
  const themeApp = useThemeContext();
  const currentYear = new Date().getFullYear();

  return (
    <BoxGeneral
      image={themeApp.palette.mode === 'light' ? imageLight : imageDark}
      sx={{
        height: 'auto',
        // backgroundColor: 'primary.main',
        // backgroundImage: `url(${imageDark})`,
      }}
    >
      <Container
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* <Typography
          variant='h4'
          sx={{
            marginTop: '30px',
            color: theme.palette.primary.main,
          }}
        >
          E-LOLEROS
        </Typography> */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-evenly',
            width: '250px',
            marginTop: '30px',
            scrollSnapMarginTop: '15px',
          }}
          theme={theme}
        >
          <StyledA
            href='https://www.facebook.com/'
            target='_blank'
            theme={theme}
            rel='noreferrer'
          >
            <FacebookIcon sx={{ fontSize: '30px' }} />
          </StyledA>

          <StyledA
            href='https://www.instagram.com/'
            target='_blank'
            theme={theme}
            rel='noreferrer'
          >
            <InstagramIcon sx={{ fontSize: '30px' }} />
          </StyledA>

          <StyledA
            href='https://github.com/Markish2000/e-loleros'
            target='_blank'
            theme={theme}
            rel='noreferrer'
          >
            <GitHubIcon sx={{ fontSize: '30px' }} />
          </StyledA>

          <StyledA
            href='mailto:eloleros2023@gmail.com'
            theme={theme}
            rel='noreferrer'
          >
            <MailIcon sx={{ fontSize: '30px' }} />
          </StyledA>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'column', md: 'row' },
            marginTop: { xs: '10px', sm: '10px', md: '30px' },
          }}
        >
          <ButtonFooter text='Término de uso' mr='30px' />
          <ButtonFooter text='Política de privacidad' mr='30px' />
          <ButtonFooter text='Política de cookies' mr='0' />
        </Box>

        <Typography
          variant='subtitle2'
          sx={{
            marginTop: '20px',
            color: theme.palette.primary.main,
            marginBottom: '30px',
          }}
        >
          Copyright © {currentYear} eLoleros, Inc.
        </Typography>
      </Container>
    </BoxGeneral>
  );
};

const StyledA = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.palette.primary.main};
`;

const BoxGeneral = styled(Box)`
  width: 100%;
  background-image: url(${(props) => props.image});
  background-size: cover;
  // background-position: center;
`;

export default Footer;
