import { Box, Container, Grid, Typography } from "@mui/material";
import StartPage from "../../components/StartPage";
import { textAbout } from "../../texts/startText";
import imageDark from "../../assets/aboutDark.jpg";
import imageLight from "../../assets/aboutLight.jpg";
import { useThemeContext } from "../../context/ThemeContext";
import imageAboutFlorDark from "../../assets/florDark.png";
import imageAboutFlorLight from "../../assets/florLight.png";
import imageAboutMarcosLight from "../../assets/marcosLight.png";
import imageAboutMarcosDark from "../../assets/marcosDark.png";
import PresentationLetter from "../../components/PresentationLetter";
import tecnologiasFront from "../../assets/Tecnologias/Frontend/tecnologiasFront.png";
import tecnologiasBack from "../../assets/Tecnologias/Backend/tecnologiasBack.png";
import styled from "styled-components";

const AboutPage = () => {
  const theme = useThemeContext();
  const developers = [
    {
      name: "Florencia Medina",
      linkedin: "https://www.linkedin.com/in/flormedinav/",
      github: "https://github.com/flormedinav",
      mail: "mailto:flormedinav7@gmail.com",
      imageLight: imageAboutFlorLight,
      imageDark: imageAboutFlorDark,
    },
    {
      name: "Marcos Hernán Parella",
      linkedin: "https://www.linkedin.com/in/marcoshernanparella/",
      github: "https://github.com/Markish2000",
      mail: "mailto:marcosparella2000@gmail.com",
      imageLight: imageAboutMarcosLight,
      imageDark: imageAboutMarcosDark,
    },
  ];

  return (
    <Box>
      <StartPage
        title="Nosotros"
        text={textAbout}
        image={theme.palette.mode === "light" ? imageLight : imageDark}
      />
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            mt: "1rem",
            mb: "3rem",
          }}
        >
          <Typography
            variant="h3"
            color="primary"
            sx={{
              fontSize: { xs: "1.75rem", sm: "1.75rem", md: "2rem" },
              mb: "2rem",
              mt: "2rem",
            }}
          >
            Conozcámonos un poco más ❤️
          </Typography>
          <Typography variant="body1" sx={{ mb: "0.5rem" }}>
            Somos un equipo de dos graduados del bootcamp Soy Henry, apasionados
            por el mundo de la tecnología y comprometidos en aprender y crecer
            en esta industria. Nos encanta aplicar nuestras habilidades técnicas
            para descubrir soluciones creativas y atractivas para los usuarios.
          </Typography>
          <Typography variant="body1" sx={{ mb: "0.5rem" }}>
            Es importante destacar que nuestra plataforma ha sido creada
            exclusivamente con fines de aprendizaje y nunca con la intención de
            generar ingresos. Nos apasiona el mundo de la programación y por eso
            quisimos poner en práctica nuestras habilidades con este proyecto.
          </Typography>
          <Typography variant="body1" sx={{ mb: "0.5rem" }}>
            ¿Qué esperas para unirte a nuestra comunidad de gamers? ¡Te
            esperamos en la Grieta del Invocador!
          </Typography>
          <Grid container spacing={2}>
            {developers.map((el) => (
              <PresentationLetter {...el} />
            ))}
          </Grid>
        </Box>
      </Container>

      <Box
        sx={{
          backgroundColor: theme.palette.section.main,
          pt: "1rem",
          pb: "1rem",
        }}
      >
        <Container
          sx={{
            mb: "2rem",
            mt: "2rem",
          }}
        >
          <Typography
            variant="h3"
            color="primary"
            sx={{
              fontSize: { xs: "1.75rem", sm: "1.75rem", md: "2rem" },
              mb: "1rem",
              mt: "1rem",
            }}
          >
            Sobre la aplicación 🤯😎
          </Typography>
          <Typography variant="body1" sx={{ mb: "0.5rem" }}>
            En eLoleros, hemos creado una plataforma de e-commerce inspirada en
            League of Legends, el famoso juego de estrategia que nos encanta
            jugar con nuestros amigos. ¿El objetivo? Ofrecerte los mejores
            servicios para mejorar tu experiencia en el juego.
          </Typography>
          <Typography variant="body1" sx={{ mb: "0.5rem" }}>
            Nuestra plataforma cuenta con una amplia variedad de servicios para
            todos los gustos, desde EloBoost hasta DouBoost y Coaching
            Profesional. Además, ofrecemos una gran selección de skins de
            campeones para que puedas personalizar tus partidas y destacar en la
            Grieta del Invocador. ¡Y eso no es todo! También hemos incluido una
            sección exclusiva con información detallada de cada campeón, para
            que puedas conocer más acerca de sus habilidades, roles y
            dificultad.
          </Typography>
          <Typography variant="body1" sx={{ mb: "0.5rem" }}>
            Nos tomamos muy en serio la seguridad de tus datos y tu dinero. Es
            por eso que hemos implementado un proceso de pago seguro y eficiente
            que te permitirá comprar o contratar nuestros servicios sin
            preocupaciones.
          </Typography>
        </Container>
      </Box>

      <Box sx={{ mb: "4rem" }}>
        <Container
          sx={{
            mb: "2rem",
            mt: "2rem",
          }}
        >
          <Typography
            variant="h3"
            color="primary"
            sx={{
              fontSize: { xs: "1.75rem", sm: "1.75rem", md: "2rem" },
              mb: "2rem",
              mt: "3rem",
            }}
          >
            Tecnologías utilizadas 🦾
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={12} md={6}>
              <Typography
                variant="subtitle1"
                sx={{ fontSize: "1.5rem", mb: "0.75rem" }}
              >
                Frontend
              </Typography>
              <Typography variant="body1">
                HTML5 | CSS3 | Responsive design | React Js | Axios | React
                Query | Jest | Material UI | TailwindCSS | SweetAlert2 |
                Cloudinary | Storybook.
              </Typography>
              <Box
                sx={{
                  overflow: "hidden",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <StyledImgTechnologies
                  src={tecnologiasFront}
                  alt="Tecnologías Frontend"
                />
              </Box>
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
              <Typography
                variant="subtitle1"
                sx={{ fontSize: "1.5rem", mb: "0.75rem" }}
              >
                Backend
              </Typography>
              <Typography variant="subtitle1">
                NodeJs | Express | Joi | MercadoPago | Nodemailer | Sequelize |
                Swagger | Jest | Supertest | JWT | Passport.
              </Typography>
              <Box
                sx={{
                  overflow: "hidden",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <StyledImgTechnologies
                  src={tecnologiasBack}
                  alt="Tecnologías Backend"
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

const StyledImgTechnologies = styled.img`
  margin-top: 2rem;
  width: 70%;
  // height: 300px;
`;

export default AboutPage;
