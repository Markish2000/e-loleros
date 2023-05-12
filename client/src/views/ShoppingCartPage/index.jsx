import {
  Box,
  Container,
  Typography,
  Grid,
  Divider,
  IconButton,
  Button,
} from '@mui/material';
import ShoppingCartTable from '../../components/ShoppingCartTable';
import ShoppingCartQuantity from '../../components/ShoppingCartQuantity';
import ShoppingCartProduct from '../../components/ShoppingCartProduct';
import styled from 'styled-components';
import { useThemeContext } from '../../context/ThemeContext';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect } from 'react';
import { useTaxtContext } from '../../context/ProductContext';
import { Link, useNavigate } from 'react-router-dom';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const ShoppingCartPage = () => {
  const theme = useThemeContext();
  const { products, cleanProduct } = useTaxtContext();
  const navigate = useNavigate();

  const handleBack = () => {
    //Vovler una página hacia atrás
    navigate(-1);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        pt: '70px',
        mb: '3rem',
      }}
    >
      <Container>
        {products.length !== 0 && (
          <Button size='small' onClick={handleBack} sx={{ mb: '1rem' }}>
            <KeyboardArrowLeftIcon sx={{ p: '2px' }} />
            Seguir comprando
          </Button>
        )}

        <Typography
          variant='h3'
          sx={{
            ml: '1rem',
            mb: '1rem',
            fontSize: { xs: '2.5rem', sm: '3rem' },
          }}
        >
          Carrito
        </Typography>
        <DividerStyled theme={theme} />
      </Container>
      <Container
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row', lg: 'row' },
          // alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Container
          sx={{
            width: '100%',
          }}
        >
          {products.length !== 0 ? (
            products.map(({ id, stock, name, mainImage, price, quantity }) => (
              <Box key={id}>
                <Grid
                  container
                  sx={{
                    width: '100%',
                    height: 'auto',
                    mt: '20px',
                    // display: 'flex',
                    // justifyContent: 'space-between',
                  }}
                >
                  <ShoppingCartProduct
                    stock={stock}
                    name={name}
                    mainImage={mainImage}
                    price={price}
                    quantityProduct={quantity}
                    id={id}
                  />

                  <ShoppingCartQuantity
                    maxStock={stock}
                    quantityProduct={quantity}
                    id={id}
                  />

                  <Grid
                    item
                    xs={3}
                    sm={2}
                    md={2}
                    lg={3}
                    sx={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                    }}
                  >
                    <StyledIcon
                      theme={theme}
                      onClick={() => {
                        cleanProduct(id);
                      }}
                    />
                  </Grid>
                </Grid>
                <DividerStyled
                  theme={theme}
                  sx={{
                    mt: '20px',
                  }}
                />
              </Box>
            ))
          ) : (
            <Box sx={{ mt: '20px' }}>
              <Typography
                variant='subtitle1'
                sx={{
                  fontSize: '1.5rem',
                }}
              >
                Todavía no se agregaron productos 😓
              </Typography>
              <Link to='/shop'>
                <Button
                  variant='contained'
                  size='large'
                  sx={{
                    mt: '1rem',
                  }}
                >
                  Ir a tienda
                </Button>
              </Link>
            </Box>
          )}
          {/* Aqui se mapea el box de abajo */}
        </Container>

        {products.length !== 0 && (
          <Box
            sx={{
              mt: { xs: '3rem', md: '20px' },
              width: '100%',
              display: 'flex',
              justifyContent: { xs: 'center', sm: 'flex-end' },
            }}
          >
            <ShoppingCartTable products={products} />
          </Box>
        )}
      </Container>
    </Box>
  );
};

const DividerStyled = styled(Divider)`
  border-color: ${({ theme }) => theme.palette.hrcolor.main};
`;

const StyledIcon = styled(CloseIcon)`
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.palette.error.main};
  }
`;

export default ShoppingCartPage;
