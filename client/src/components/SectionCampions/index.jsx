import React from 'react';
import CarouselCampions from '../Carousel';
import { Button, Container, Typography } from '@mui/material';
import SingleCardCampions from '../SingleCardCampions';

const SectionCampions = () => {
  return (
    <Container
      sx={{
        paddingLeft: '10px',
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '30px',
      }}
    >
      <Typography
        variant='h3'
        component='h3'
        sx={{
          color: '#BF9A56',
          textTransform: 'uppercase',
          marginBottom: '30px',
          // paddingLeft: '10px',
        }}
      >
        Campions
      </Typography>
      <CarouselCampions Component={<SingleCardCampions />} />

      <Button
        variant='text'
        size='large'
        sx={{
          marginLeft: '10px',
          marginRight: '10px',
          marginTop: '10px',
          width: '200px',
        }}
      >
        Ver Más
      </Button>
    </Container>
  );
};

export default SectionCampions;
