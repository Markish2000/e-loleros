import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import data from '../../data.js';
import SingleCard from '../SingleCard';

const Cards = () => {
  return (
    <Container sx={{ pt: '120px' }}>
      <Grid container spacing={2} pr='16px'>
        {data.length !== 0
          ? data.map(({ id, name, price, mainImage }) => (
              <Grid item key={id} xs={12} sm={6} md={4}>
                <SingleCard
                  id={id}
                  name={name}
                  price={price}
                  mainImage={mainImage}
                />
              </Grid>
            ))
          : 'No hay productos'}
      </Grid>
    </Container>
  );
};

export default Cards;