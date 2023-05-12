import { Typography, Grid, CardMedia, Box } from '@mui/material';
import styled from 'styled-components';
import CheckIcon from '@mui/icons-material/Check';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ShoppingCartQuantity from '../ShoppingCartQuantity';
import { ShoppingCartQuantityBox } from '../ShoppingCartQuantity';

const ShoppingCartProduct = ({
  id,
  stock,
  mainImage,
  name,
  price,
  quantityProduct,
}) => {
  return (
    <Grid
      item
      xs={9}
      sm={8}
      md={8}
      lg={6}
      sx={{
        width: '100%',
        display: 'flex',
      }}
    >
      <Box
        sx={{
          mr: '1rem',
        }}
      >
        <CardMedia
          component='img'
          src={mainImage}
          sx={{
            width: '150px',
            height: '180px',
            borderRadius: '3px',
          }}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <Typography
            variant='subtitle1'
            sx={{
              fontSize: { xs: '1.25rem', sm: '1.5rem' },
            }}
          >
            {name}
          </Typography>
          <Typography
            variant='subtitle1'
            sx={{
              fontSize: '1.15rem',
            }}
          >
            $ {price}
          </Typography>
          <Box
            sx={{
              display: { xs: 'flex', sm: 'none' },
              mt: '1rem',
              mb: '1.5rem',
            }}
          >
            <ShoppingCartQuantityBox
              maxStock={stock}
              quantityProduct={quantityProduct}
              id={id}
            />
          </Box>
        </Box>

        <Box>
          {stock !== 0 ? (
            <Box sx={{ display: 'flex' }}>
              <ThumbUpOffAltIcon
                color='success'
                sx={{
                  mr: '0.5rem',
                  pt: { xs: '0px', sm: '5px' },
                  pb: { xs: '5px', sm: '0px' },
                }}
              />
              <Typography
                sx={{
                  fontSize: { xs: '0.90rem', sm: '1.15rem' },
                }}
              >
                En stock
              </Typography>
            </Box>
          ) : (
            <Box sx={{ display: 'flex' }}>
              <ThumbDownOffAltIcon
                color='error'
                sx={{ mr: '0.5rem', pt: '5px' }}
              />
              <Typography
                sx={{
                  fontSize: '0.75rem',
                }}
              >
                Sin stock
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </Grid>
  );
};

export default ShoppingCartProduct;
