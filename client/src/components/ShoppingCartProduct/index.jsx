import { Typography, Grid, CardMedia, Box } from '@mui/material';
import styled from 'styled-components';
import CheckIcon from '@mui/icons-material/Check';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';

const ShoppingCartProduct = ({ stock, mainImage, name, price }) => {
  console.log('soy stock', stock);
  return (
    <Grid
      item
      md={6}
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
              fontSize: '1.5rem',
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
        </Box>

        <Box>
          {stock !== 0 ? (
            <Box sx={{ display: 'flex' }}>
              <ThumbUpOffAltIcon
                color='success'
                sx={{ mr: '0.5rem', pt: '5px' }}
              />
              <Typography
                sx={{
                  fontSize: '1.15rem',
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
                  fontSize: '1.15rem',
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

// const DividerStyled = styled(Divider)`
//   border-color: ${({ theme }) => theme.palette.text.disabled};
// `;

export default ShoppingCartProduct;
