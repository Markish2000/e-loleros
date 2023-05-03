import React from 'react';
import { Container, Grid } from '@mui/material';
import data from '../../data.js';
import SingleCardChampions from '../SingleCardChampions/index.jsx';

const CardsChampions = ({ Component }) => {
  return (
    <Container>
      <Grid container spacing={2}>
        {data.length !== 0
          ? data.map(({ id, name, price, mainImage }) => (
              <Grid item key={id} xs={12} sm={6} md={4}>
                <SingleCardChampions
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

export default CardsChampions;
