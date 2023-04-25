import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  CardContent,
  CardMedia,
  Typography,
  Card,
  CardActions,
} from '@mui/material';

import ButtonComponent from '../Button';

const SingleCard = ({ id, name, price, mainImage, maxWidth }) => {
  return (
    <Card sx={{ maxWidth }}>
      <CardMedia component='img' image={mainImage} height='200' alt={name} />

      <CardContent>
        <Typography variant='h5'>{name}</Typography>
        <Typography variant='body1' component='p'>
          {price}
        </Typography>
      </CardContent>

      <CardActions>
        <ButtonComponent
          variant='outlined'
          size='medium'
          text='ADD CARD'
          onClick={() => {}}
        >
          ADD CARD
        </ButtonComponent>
      </CardActions>
    </Card>
  );
};

SingleCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  mainImage: PropTypes.string.isRequired,
  maxWidth: PropTypes.string,
};

ButtonComponent.defaultProps = {
  maxWidth: '100%',
};

export default SingleCard;
