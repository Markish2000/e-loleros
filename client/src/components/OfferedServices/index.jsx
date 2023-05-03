import {
  Box,
  Card,
  CardMedia,
  Typography,
  Grid,
  Button,
  useTheme,
} from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const OfferedServices = ({ title, text, image, sm, md }) => {
  const theme = useTheme();

  return (
    <Grid item xs={12} sm={sm} md={md}>
      <Card
        elevation={4}
        sx={{
          padding: '30px',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography
          variant='h4'
          sx={{
            textAlign: 'center',
            marginBottom: '20px',
            color: 'primary.main',
          }}
        >
          {title}
        </Typography>
        <StyleCardMedia
          component='img'
          image={image}
          alt={title}
          title={title}
          loading='lazy'
          sx={{
            width: { xs: '150px', md: '200px' },
            height: { xs: '150px', md: '200px' },
          }}
        />
        <Typography
          variant='body1s'
          sx={{ textAlign: 'center', marginBottom: '20px' }}
        >
          {text}
        </Typography>
        <Button color='secondary' variant='outlined'>
          Ver más
        </Button>
      </Card>
    </Grid>
  );
};

const StyleCardMedia = styled(CardMedia)`
  border-radius: 50%;
  margin-bottom: 20px;
  transition: transform 0.3s ease-in-out;
  overflow: hidden;
  &:hover {
    transform: scale(1.05);
  }
`;

export default OfferedServices;
