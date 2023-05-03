import { Box, Container, Grid, Typography, useTheme } from '@mui/material';
import OfferedServices from '../OfferedServices';
import eloImageLight from '../../assets/bronceLight.PNG';
import eloImageDark from '../../assets/bronceDark.PNG';
import duoImageLight from '../../assets/hierroLight.PNG';
import duoImageDark from '../../assets/hierroDark.PNG';
import coachingImage from '../../assets/coachingProfesional.jpg';
import cuentasImage from '../../assets/cuenta.jpg';
import skinsImage from '../../assets/skins.jpg';

const SectionServices = () => {
  const theme = useTheme();
  const text =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem expedita facere blanditiis veritatis numquam, vero, dolor, laboriosam amet iste fugit dicta repudiandae maxime ipsa quis? Eum esse accusamus voluptas sint';
  return (
    <Container sx={{ marginBottom: '60px' }}>
      <Typography
        variant='h3'
        component='h3'
        sx={{
          color: 'primary.main',
          textTransform: 'uppercase',
          marginBottom: '30px',
          fontSize: { xs: '2.5rem', sm: '2.75rem', md: '3rem' },
          // paddingLeft: '10px',
        }}
      >
        Servicios ofrecidos
      </Typography>
      <Grid container spacing={2}>
        <OfferedServices
          title='Elo boost'
          text={text}
          sm='6'
          md='4'
          image={theme.palette.mode === 'light' ? eloImageLight : eloImageDark}
        />
        <OfferedServices
          title='Duo boost'
          text={text}
          sm='6'
          md='4'
          image={theme.palette.mode === 'light' ? duoImageLight : duoImageDark}
        />
        <OfferedServices
          title='Cuentas'
          text={text}
          sm='6'
          md='4'
          image={cuentasImage}
        />
        <OfferedServices
          title='Coaching Profesional'
          text={text}
          sm='6'
          md='6'
          image={coachingImage}
        />
        <OfferedServices
          title='Skins'
          text={text}
          sm='12'
          md='6'
          image={skinsImage}
        />
      </Grid>
    </Container>
  );
};

export default SectionServices;
