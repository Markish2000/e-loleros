import { Box, Container, Grid, Typography } from '@mui/material';
import StartPage from '../../components/StartPage';
import { textAbout } from '../../texts/startText';
import imageDark from '../../assets/aboutDark.jpg';
import imageLight from '../../assets/aboutLight.jpg';
import { useThemeContext } from '../../context/ThemeContext';
import imageAboutFlorDark from '../../assets/florDark.png';
import imageAboutFlorLight from '../../assets/florLight.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import styled from 'styled-components';

const AboutPage = () => {
  const theme = useThemeContext();
  return (
    <Box>
      <StartPage
        title='Nosotros'
        text={textAbout}
        image={theme.palette.mode === 'light' ? imageLight : imageDark}
      />
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            mt: '1rem',
          }}
        >
          <Typography
            variant='h3'
            color='primary'
            sx={{
              fontSize: { xs: '1.75rem', sm: '1.75rem', md: '2rem' },
              mb: '2rem',
              mt: '2rem',
            }}
          >
            Conozcámonos un poco más ❤️
          </Typography>
          <Typography variant='body1' sx={{ mb: '0.5rem' }}>
            Somos un equipo de dos graduados del bootcamp Soy Henry, apasionados
            por el mundo de la tecnología y comprometidos en aprender y crecer
            en esta industria. Nos encanta aplicar nuestras habilidades técnicas
            para descubrir soluciones creativas y atractivas para los usuarios.
          </Typography>
          <Typography variant='body1' sx={{ mb: '0.5rem' }}>
            Es importante destacar que nuestra plataforma ha sido creada
            exclusivamente con fines de aprendizaje y nunca con la intención de
            generar ingresos. Nos apasiona el mundo de la programación y por eso
            quisimos poner en práctica nuestras habilidades con este proyecto.
          </Typography>
          <Typography variant='body1' sx={{ mb: '0.5rem' }}>
            ¿Qué esperas para unirte a nuestra comunidad de gamers? ¡Te
            esperamos en la Grieta del Invocador!
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6}>
              <Box
                sx={{
                  width: '100%',
                  // border: '1px solid',
                  // borderRadius: '20px',
                  height: 'auto',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  mt: '1rem',
                  padding: '20px',
                }}
              >
                <Box>
                  <StyledImg
                    src={
                      theme.palette.mode === 'light'
                        ? imageAboutFlorLight
                        : imageAboutFlorDark
                    }
                  />
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant='h5'>Florencia Medina</Typography>
                  <Typography variant='subtitle1'>
                    FullStack Developer
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-evenly',
                      width: '200px',
                      marginTop: '20px',
                    }}
                    theme={theme}
                  >
                    <StyledA
                      href='mailto:eloleros2023@gmail.com'
                      theme={theme}
                      rel='noreferrer'
                    >
                      <LinkedInIcon sx={{ fontSize: '25px' }} />
                    </StyledA>
                    <StyledA
                      href='https://github.com/Markish2000/e-loleros'
                      target='_blank'
                      theme={theme}
                      rel='noreferrer'
                    >
                      <GitHubIcon sx={{ fontSize: '25px' }} />
                    </StyledA>

                    <StyledA
                      href='mailto:eloleros2023@gmail.com'
                      theme={theme}
                      rel='noreferrer'
                    >
                      <MailIcon sx={{ fontSize: '25px' }} />
                    </StyledA>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Box
                sx={{
                  width: '100%',
                  // border: '1px solid',
                  // borderRadius: '20px',
                  height: 'auto',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  mt: '1rem',
                  padding: '20px',
                }}
              >
                <Box>
                  <StyledImg
                    src={
                      theme.palette.mode === 'light'
                        ? imageAboutFlorLight
                        : imageAboutFlorDark
                    }
                  />
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant='h5'>Florencia Medina</Typography>
                  <Typography variant='subtitle1'>
                    FullStack Developer
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-evenly',
                      width: '200px',
                      marginTop: '20px',
                    }}
                    theme={theme}
                  >
                    <StyledA
                      href='mailto:eloleros2023@gmail.com'
                      theme={theme}
                      rel='noreferrer'
                    >
                      <LinkedInIcon sx={{ fontSize: '25px' }} />
                    </StyledA>
                    <StyledA
                      href='https://github.com/Markish2000/e-loleros'
                      target='_blank'
                      theme={theme}
                      rel='noreferrer'
                    >
                      <GitHubIcon sx={{ fontSize: '25px' }} />
                    </StyledA>

                    <StyledA
                      href='mailto:eloleros2023@gmail.com'
                      theme={theme}
                      rel='noreferrer'
                    >
                      <MailIcon sx={{ fontSize: '25px' }} />
                    </StyledA>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Box
        sx={{
          backgroundColor: theme.palette.section.main,
          pt: '1rem',
          pb: '1rem',
        }}
      >
        <Container>
          <Typography
            variant='h3'
            color='primary'
            sx={{
              fontSize: { xs: '1.75rem', sm: '1.75rem', md: '2rem' },
              mb: '1rem',
              mt: '1rem',
            }}
          >
            Sobre la aplicación 🤯😎
          </Typography>
          <Typography variant='body1' sx={{ mb: '0.5rem' }}>
            En eLoleros, hemos creado una plataforma de e-commerce inspirada en
            League of Legends, el famoso juego de estrategia que nos encanta
            jugar con nuestros amigos. ¿El objetivo? Ofrecerte los mejores
            servicios para mejorar tu experiencia en el juego.
          </Typography>
          <Typography variant='body1' sx={{ mb: '0.5rem' }}>
            Nuestra plataforma cuenta con una amplia variedad de servicios para
            todos los gustos, desde EloBoost hasta DouBoost y Coaching
            Profesional. Además, ofrecemos una gran selección de skins de
            campeones para que puedas personalizar tus partidas y destacar en la
            Grieta del Invocador. ¡Y eso no es todo! También hemos incluido una
            sección exclusiva con información detallada de cada campeón, para
            que puedas conocer más acerca de sus habilidades, roles y
            dificultad.
          </Typography>
          <Typography variant='body1' sx={{ mb: '0.5rem' }}>
            Nos tomamos muy en serio la seguridad de tus datos y tu dinero. Es
            por eso que hemos implementado un proceso de pago seguro y eficiente
            que te permitirá comprar o contratar nuestros servicios sin
            preocupaciones.
          </Typography>
        </Container>
      </Box>

      <Box>
        <Container>
          <Typography
            variant='h3'
            color='primary'
            sx={{
              fontSize: { xs: '1.75rem', sm: '1.75rem', md: '2rem' },
              mb: '2rem',
              mt: '2rem',
            }}
          >
            Tecnologías utilizadas 🦾
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

const StyledA = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.palette.primary.main};
`;

const StyledImg = styled.img`
  width: 300px;
  // height: 300px;
`;

export default AboutPage;
