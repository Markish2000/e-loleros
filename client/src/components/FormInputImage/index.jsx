import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Typography,
  useTheme,
} from '@mui/material';
import { Field } from 'formik';
import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import imageLight from '../../assets/imageFormLight.jpg';
import imageDark from '../../assets/imageFormDark.jpg';

const FormInputImage = ({ errors, touched, setFieldValue }) => {
  const theme = useTheme();
  const [previewSource, setPreviewSource] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(null);

  const handleImageUpload = async (event) => {
    try {
      const file = event.target.files[0];
      const preview = URL.createObjectURL(file);
      setPreviewSource(preview);
      setUploadStatus('loading');

      // Upload image to Cloudinary
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'eloleros');
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/dwyt8jlrl/image/upload',
        formData
      );

      // Update the value of `values.image`
      setFieldValue('image', response.data.secure_url);
      setUploadStatus('success');
    } catch (error) {
      console.error('Error uploading image to Cloudinary: ', error);
      setUploadStatus('error');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        mb: '0.75rem',
      }}
    >
      <Field>
        {({ field, form }) => (
          <>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                mt: '0.75rem',
                width: 'auto',
                height: '250px',
                border: '1px solid',
                borderColor: theme.palette.primary.dark,
                mb: '1rem',
                overflow: 'hidden',
              }}
            >
              {uploadStatus === 'loading' ? (
                <CircularProgress />
              ) : previewSource ? (
                <ImgStyled src={previewSource} alt='Preview' width='300px' />
              ) : (
                <ImgStyled
                  src={theme.palette.mode === 'light' ? imageLight : imageDark}
                  alt='Default Profile'
                />
              )}
            </Box>
            <input
              {...field}
              accept='image/*'
              id='upload-image'
              name='image'
              type='file'
              style={{ display: 'none' }}
              onChange={(event) => {
                field.onChange(event);
                handleImageUpload(event);
              }}
              onBlur={field.onBlur}
              value='' // dejar el valor vacío
            />
            <label htmlFor='upload-image'>
              <Button
                variant='outlined'
                color='primary'
                size='large'
                component='span'
                sx={{ width: '100%' }}
              >
                Subir imagen de perfil
              </Button>
            </label>

            {touched.image && errors.image && (
              <Typography
                variant='body2'
                sx={{
                  mt: '0.75rem',
                  color: theme.palette.error.main,
                  ml: '1rem',
                  fontSize: '0.80rem',
                }}
              >
                {errors.image}
              </Typography>
            )}

            {uploadStatus === 'success' && (
              <Alert
                severity='success'
                variant='outlined'
                sx={{
                  mt: '0.75rem',
                  color: theme.palette.success.main,
                  borderColor: theme.palette.success.main,
                }}
              >
                La imagen se ha subido con éxito.
              </Alert>
            )}

            {uploadStatus === 'error' && (
              <Alert
                severity='error'
                variant='outlined'
                sx={{
                  mt: '0.75rem',
                  color: theme.palette.error.main,
                  borderColor: theme.palette.error.main,
                }}
              >
                Error al subir la imagen. Por favor, inténtalo de nuevo.
              </Alert>
            )}
          </>
        )}
      </Field>
    </Box>
  );
};

const ImgStyled = styled.img`
  width: 300px;
  height: 300px;
`;

export default FormInputImage;
