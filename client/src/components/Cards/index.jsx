import React, { useState } from "react";
import { Container, Grid } from "@mui/material";
// import data from '../../data.js';
import SingleCard from "../SingleCard";

const Cards = ({ data }) => {
  console.log(data);
  return (
    <Container>
      <Grid container spacing={{ xs: 2, sm: 2, md: 4, lg: 3 }}>
        {data.length !== 0
          ? data.map((el) => (
              <Grid item key={el.id} xs={12} sm={12} md={4} lg={4}>
                <SingleCard {...el} />
              </Grid>
            ))
          : "No hay productos"}
      </Grid>
    </Container>
  );
};

export default Cards;
