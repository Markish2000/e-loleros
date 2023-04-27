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

const SingleCardCampions = ({
  name,
  mainImage,
  maxWidth,
  marginLeft,
  marginRight,
}) => {
  return (
    <Card
      sx={{
        maxWidth,
        marginLeft,
        marginRight,
        cursor: 'pointer',
        // clipPath: 'polygon(0 0, 100% 0, 100% 80%, 80% 100%, 0 100%)',
        border: '1px solid #BF9A56',
      }}
      onClick={() => {}}
    >
      <CardMedia component='img' image={mainImage} height='300' alt={name} />

      <StyledCardContent sx={{ backgroundColor: '#00070D' }}>
        <Typography variant='h5' sx={{ textAlign: 'center', color: 'white' }}>
          {name}
        </Typography>
      </StyledCardContent>
    </Card>
  );
};

const StyledCardContent = styled(CardContent)`
  &:hover {
    background-color: #182526;
    transition: 1s;
  }
`;

export default SingleCardCampions;
