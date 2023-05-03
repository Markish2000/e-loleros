import { Box, Button, Container, Typography, useTheme } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import ButtonFooter from '../ButtonFooter';
import styled from 'styled-components';

const Footer = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <Box
      sx={{
        height: 'auto',
        backgroundColor: 'primary.main',
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
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-evenly',
            width: '220px',
            marginBottom: '15px',
            marginTop: '30px',
            scrollSnapMarginTop: '15px',
            color: theme.palette.third.main,
          }}
          theme={theme}
        >
          <a
            href='https://www.facebook.com/'
            target='_blank'
            theme={theme}
            rel='noreferrer'
          >
            <FacebookIcon />
          </a>

          <a href='https://www.instagram.com/' target='_blank' rel='noreferrer'>
            <InstagramIcon />
          </a>

          <a
            href='https://github.com/Markish2000/e-loleros'
            target='_blank'
            rel='noreferrer'
          >
            <GitHubIcon />
          </a>

          <a href='mailto:eloleros2023@gmail.com'>
            <MailIcon />
          </a>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'column', md: 'row' },
            marginTop: '30px',
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
            color: theme.palette.third.main,
            marginBottom: '20px',
          }}
        >
          Copyright © {currentYear} eLoleros, Inc.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
