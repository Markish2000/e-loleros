import React from 'react';
import CarouselCampions from '../Carousel';
import { Button, Container, Typography, Box } from '@mui/material';
import SingleCardCampions from '../SingleCardChampions';
import { Link } from 'react-router-dom';

const SectionCampions = ({ Component }) => {
  return (
    <Container
      sx={{
        paddingLeft: '10px',
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '30px',
        marginTop: '30px',
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
        Campeones
      </Typography>

      <CarouselCampions Component={SingleCardCampions} />

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
          to='/campions'
          color='secondary'
          sx={{
            marginLeft: '10px',
            marginRight: '10px',
            marginTop: '10px',
            width: '200px',
          }}
        >
          Ver Más
        </Button>
      </Box>
    </Container>
  );
};

export default SectionCampions;
