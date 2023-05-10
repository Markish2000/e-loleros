import { Box, CardMedia, Container, Typography, Button } from '@mui/material';
import { useState } from 'react';
import { useThemeContext } from '../../context/ThemeContext';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

const DetailSkillsChampions = ({ skills }) => {
  const theme = useThemeContext();
  const teclaSkills = skills.map((skill) => skill?.tecla);
  console.log(teclaSkills);
  console.log(skills);
  const [indexSkill, setIndexSkill] = useState(0);
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);

  const handleIndexSkill = (e, value) => {
    setIndexSkill(parseInt(value));
    setActiveButtonIndex(value);
  };

  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        mt: '4rem',
        mb: '4rem',
      }}
    >
      <Box
        sx={{
          width: '45%',
          pr: '30px',
        }}
      >
        <Typography
          variant='subtitle'
          color='primary'
          sx={{ fontSize: '2.5rem', textTransform: 'uppercase' }}
        >
          Habilidades
        </Typography>

        <Box
          sx={{
            mt: '0.75rem',
            display: 'flex',
            justifyContent: 'flex-start',
          }}
        >
          {teclaSkills.map((tecla, index) => (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Button
                variant='outlined'
                color={index === activeButtonIndex ? 'secondary' : 'primary'}
                size='medium'
                key={index}
                onClick={(e) => handleIndexSkill(e, index)}
                sx={{
                  mr: '10px',
                }}
              >
                {tecla}
              </Button>

              <RadioButtonCheckedIcon
                sx={{
                  mt: '0.25rem',
                  pr: '0.7rem',
                }}
                color={index === activeButtonIndex ? 'secondary' : 'primary'}
              />
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            mt: '1.5rem',
            p: '0.5rem',
          }}
        >
          <Typography
            variant='body1'
            color='secondary'
            sx={{ fontSize: '1rem' }}
          >
            {skills[indexSkill].tecla}
          </Typography>
          <Typography
            variant='subtitle'
            color='secondary'
            sx={{ fontSize: '1.5rem' }}
          >
            {skills[indexSkill].name}
          </Typography>
          <Typography
            variant='body1'
            component='p'
            sx={{
              mt: '30px',
            }}
          >
            {skills[indexSkill].detail}
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          width: '45%',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            border: '1px solid',
            borderColor: theme.palette.primary.main,
            top: '-10px',
            left: '-10px',
            right: '-10px',
            bottom: '-10px',
            zIndex: '1',
            clipPath: 'polygon(0 0, 100% 0, 100% 80%, 80% 100%, 0 100%)',
          }}
        />

        <CardMedia
          component='video'
          src={skills[indexSkill].video}
          autoplay
          controls
          // sx={{
          //   border: '1px solid',
          //   borderColor: theme.palette.divider.divider,
          //   position: 'relative',
          //   zIndex: '0',
          // }}
        />
      </Box>
    </Container>
  );
};

export default DetailSkillsChampions;
