import React, { useState } from 'react';
import { Container, Grid } from '@mui/material';
// import data from '../../data.js';
import SingleCard from '../SingleCard';

const Cards = ({ data }) => {
  console.log(data);
  return (
    <Container>
      <Grid container spacing={2}>
        {data.length !== 0
          ? data.map((el) => (
              <Grid item key={el.id} xs={12} sm={6} md={4}>
                <SingleCard {...el} />
              </Grid>
            ))
          : 'No hay productos'}
      </Grid>
    </Container>
  );
};

export default Cards;
