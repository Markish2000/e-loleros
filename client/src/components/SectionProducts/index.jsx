import CarouselCampions from '../Carousel';
import { Button, Container, Typography, Box } from '@mui/material';
import SingleCard from '../SingleCard';
import { Link } from 'react-router-dom';

const SectionProducts = ({ Component }) => {
  return (
    <Container
      sx={{
        paddingLeft: '10px',
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '40px',
        // marginTop: '30px',
      }}
    >
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
        Productos
      </Typography>

      <CarouselCampions Component={SingleCard} />

      <Box
        sx={{
          display: 'flex',
          justifyContent: { xs: 'flex-start', sm: 'flex-end' },
        }}
      >
        <Button
          variant='outlined'
          size='large'
          component={Link}
          to='/shop'
          color='secondary'
          sx={{
            marginLeft: '10px',
            marginRight: '10px',
            // marginTop: '20px',
            width: '200px',
          }}
        >
          Ver Más
        </Button>
      </Box>
    </Container>
  );
};

export default SectionProducts;
