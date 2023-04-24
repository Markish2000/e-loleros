import React from 'react';
import {
  Button,
  CardContent,
  CardMedia,
  Typography,
  Card,
  CardActions,
} from '@mui/material';

const SingleCard = ({ id, name, price, mainImage }) => {
  return (
    <Card sx={{ maxWidth: '100%' }}>
      <CardMedia component='img' image={mainImage} height='200' alt={name} />

      <CardContent>
        <Typography variant='h5'>{name}</Typography>
        <Typography variant='body1' component='p'>
          {price}
        </Typography>
      </CardContent>

      <CardActions>
        <Button variant='outlined'>ADD CARD</Button>
      </CardActions>
    </Card>
  );
};

export default SingleCard;
