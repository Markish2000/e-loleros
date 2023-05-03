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

const SingleCardChampions = ({
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
        border: '1px solid',
        borderColor: 'primary.main',
      }}
      onClick={() => {}}
    >
      <CardMedia component='img' image={mainImage} height='300' alt={name} />

      <StyledCardContent>
        <Typography
          variant='h5'
          sx={{ textAlign: 'center', color: 'primary.main' }}
        >
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

export default SingleCardChampions;
