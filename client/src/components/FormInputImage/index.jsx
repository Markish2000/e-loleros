import { Box, Button, Typography } from '@mui/material';
import { useState } from 'react';

const FormInputImage = () => {
  const [imageName, setImageName] = useState('');

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImageName(file.name);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        // justifyContent: '',
        flexDirection: 'column',
        mt: '0.75rem',
        mb: '0.75rem',
      }}
    >
      <input
        accept='image/*'
        id='upload-image'
        type='file'
        style={{ display: 'none' }}
        onChange={handleImageUpload}
      />
      <label htmlFor='upload-image'>
        <Button
          variant='outlined'
          color='primary'
          size='large'
          component='span'
          sx={{ width: '100%' }}
        >
          Subir imagen
        </Button>
      </label>

      {imageName && (
        <Typography variant='body2' sx={{ mt: '0.75rem' }}>
          {imageName}
        </Typography>
      )}
    </Box>
  );
};

export default FormInputImage;
