import { Box, Button } from '@mui/material';
import React from 'react';
import imageGoogle from '../../assets/google.png';
import imageFacebook from '../../assets/facebook.png';

const ButtonNetworks = () => {
  return (
    <Box>
      <Button
        variant='outlined'
        type='submit'
        sx={{
          width: '100%',
          marginTop: '1.5rem',
          marginBottom: '1rem',
        }}
      >
        <Box
          component='img'
          src={imageGoogle}
          alt='Google Logo'
          sx={{ width: '15px', height: '15px', mr: '1rem' }}
        />
        Continuar con google
      </Button>
      <Button
        variant='outlined'
        type='submit'
        sx={{
          width: '100%',
          // marginTop: '1.5rem',
          marginBottom: '1rem',
        }}
      >
        <Box
          component='img'
          src={imageFacebook}
          alt='Google Logo'
          sx={{ width: '15px', height: '15px', mr: '1rem' }}
        />
        Continuar con facebook
      </Button>
    </Box>
  );
};

export default ButtonNetworks;
