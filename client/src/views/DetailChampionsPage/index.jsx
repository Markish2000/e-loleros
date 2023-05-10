import { Box, CardMedia, Container, Typography, Button } from '@mui/material';
import styled from 'styled-components';
import dataChampion from '../../dataChampions';
import { useThemeContext } from '../../context/ThemeContext';
import {
  getDifficultyImage,
  getRoleImage,
} from '../../helpers/detailChampions';
import DetailSkillsChampions from '../../components/DetailSkillsChampions';
import ColumnLanding from '../../components/ColumnLanding';
import DetailSkinsChampions from '../../components/DetailSkinsChampions';

const DetailChampionsPage = () => {
  const theme = useThemeContext();
  const frase = 'LA MUJER ZORRO DE NUEVE COLAS';
  const { name, image, role, difficulty, history, skills, skins } =
    dataChampion;

  const imageDifficulty = getDifficultyImage(difficulty);
  const imageRole = getRoleImage(role);

  const teclaSkills = skills.map((skill) => skill.tecla);
  console.log('soyname', teclaSkills);

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <BoxGeneral image={image}>
        <BoxGradient
          sx={{
            // background: `radial-gradient(
            //   ellipse at center,
            //   rgba(255, 255, 255, 0) 0%,
            //   ${theme.palette.background.default} 100%
            // )`,
            background: `linear-gradient(to bottom, rgba(255, 255, 255, 0), ${theme.palette.background.default})`,
            pt: '100px',
          }}
        >
          <Container
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Box sx={{ position: 'relative' }}>
              <CardMedia component='img' src={image} />
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                  background: `linear-gradient(to bottom, rgba(255, 255, 255, 0), ${theme.palette.background.default})`,
                }}
              ></Box>
            </Box>
          </Container>
        </BoxGradient>
      </BoxGeneral>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '80%',
          zIndex: 2,
        }}
      >
        <Typography
          variant='subtitle1'
          sx={{ mb: '1rem', fontSize: '1.5rem', textTransform: 'uppercase' }}
        >
          {frase}
        </Typography>
        <Typography
          variant='h3'
          color='primary'
          sx={{ mb: '1rem', fontSize: '4rem', textTransform: 'uppercase' }}
        >
          {name}
        </Typography>
        <Container
          sx={{
            width: '100%',
            height: 'auto',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              width: { xs: '90%', lg: '80%' },
              border: '1px solid',
              borderColor: theme.palette.divider.divider,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              p: '30px',
            }}
          >
            <Box
              sx={{
                width: '50%',
                display: 'flex',
                justifyContent: 'space-evenly',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  height: '120px',
                  width: '100px',
                }}
              >
                <CardMedia
                  component='img'
                  src={imageDifficulty}
                  sx={{
                    width: '100px',
                  }}
                />
                <Typography
                  variant='subtitle1'
                  color='primary'
                  sx={{ mt: '15px' }}
                >
                  Dificultad
                </Typography>
                <Typography>{difficulty}</Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  height: '120px',
                  width: '100px',
                }}
              >
                <CardMedia
                  component='img'
                  src={imageRole}
                  sx={{
                    width: '40px',
                    height: '40px',
                  }}
                />
                <Typography
                  variant='subtitle1'
                  color='primary'
                  sx={{ mt: '10px' }}
                >
                  Rol
                </Typography>
                <Typography>{role}</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                width: '50%',
              }}
            >
              <Typography variant='body1'>{history}</Typography>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box
        sx={{
          width: '100%',
          mt: '30px',
          backgroundColor: theme.palette.section.main,
        }}
      >
        <DetailSkillsChampions skills={skills} />
      </Box>

      <Container sx={{ mt: '3rem' }}>
        <DetailSkinsChampions skins={skins} />
      </Container>
    </Box>
  );
};

const BoxGeneral = styled(Box)`
  width: 100%;
  height: 75vh;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
`;

const BoxGradient = styled(Box)`
  width: 100%;
  height: 75vh;
`;

export default DetailChampionsPage;
