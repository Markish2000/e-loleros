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
import styled from 'styled-components';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

const SingleCard = ({
  id,
  name,
  price,
  mainImage,
  maxWidth,
  marginRight,
  marginLeft,
}) => {
  return (
    <Card
      sx={{
        maxWidth,
        marginRight,
        marginLeft,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        border: '1px solid',
        borderColor: 'primary.main',
        paddingBottom: '15px',
      }}
    >
      <CardMedia component='img' image={mainImage} height='280' alt={name} />

      <CardContent>
        <Typography
          variant='h5'
          sx={{ textAlign: 'center', color: 'primary.main' }}
        >
          {name}
        </Typography>
      </CardContent>

      <CardActions
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          paddingLeft: '15px',
          paddingRight: '15px',
        }}
      >
        <Typography variant='h5' color='secondary' sx={{ textAlign: 'center' }}>
          $ {price}
        </Typography>
        <Button
          variant='outlined'
          size='medium'
          color='secondary'
          onClick={() => {}}
        >
          <LocalGroceryStoreIcon />
        </Button>
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
