import React from 'react';
import { Container, Grid } from '@mui/material';
// import data from '../../data.js';
import SingleCardChampions from '../SingleCardChampions/index.jsx';

const CardsChampions = ({ data }) => {
  return (
    <Container>
      <Grid container spacing={{ xs: 3, sm: 3, md: 3, lg: 2 }}>
        {data.length !== 0
          ? data.map((el) => (
              <Grid item key={el.id} xs={12} sm={12} md={4} lg={3}>
                <SingleCardChampions {...el} />
              </Grid>
            ))
          : 'No hay productos'}
      </Grid>
    </Container>
  );
};

export default CardsChampions;
