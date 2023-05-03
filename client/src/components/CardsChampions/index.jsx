import React from 'react';
import { Container, Grid } from '@mui/material';
// import data from '../../data.js';
import SingleCardChampions from '../SingleCardChampions/index.jsx';

const CardsChampions = ({ data }) => {
  return (
    <Container>
      <Grid container spacing={2}>
        {data.length !== 0
          ? data.map((el) => (
              <Grid item key={el.id} xs={12} sm={6} md={4}>
                <SingleCardChampions {...el} />
              </Grid>
            ))
          : 'No hay productos'}
      </Grid>
    </Container>
  );
};

export default CardsChampions;
