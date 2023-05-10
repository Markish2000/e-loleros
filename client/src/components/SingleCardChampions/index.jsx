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
import { Link } from 'react-router-dom';

const SingleCardChampions = ({
  id = 1,
  name,
  image,
  difficulty,
  role,
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
      <Link to={`/champions/${id}`}>
        <CardMedia component='img' image={image} height='300' alt={name} />
      </Link>
      <StyledCardContent>
        <Typography
          variant='h5'
          sx={{ textAlign: 'center', color: 'primary.main' }}
        >
          {name}
        </Typography>
      </StyledCardContent>

      <CardContent
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
        }}
      >
        <Typography variant='subtitle1' sx={{ color: 'secondary.main' }}>
          {role}
        </Typography>
        <Typography variant='subtitle1' sx={{ color: 'secondary.main' }}>
          {difficulty}
        </Typography>
      </CardContent>
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
