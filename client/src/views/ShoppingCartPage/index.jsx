import { Box, Container, Typography, Grid, Divider } from '@mui/material';
import ShoppingCartTable from '../../components/ShoppingCartTable';
import ShoppingCartQuantity from '../../components/ShoppingCartQuantity';
import ShoppingCartProduct from '../../components/ShoppingCartProduct';
import styled from 'styled-components';
import { useThemeContext } from '../../context/ThemeContext';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect } from 'react';
import { useTaxtContext } from '../../context/ProductContext';

const ShoppingCartPage = () => {
  const theme = useThemeContext();
  const { products } = useTaxtContext();
  console.log(products);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        pt: '70px',
        mb: '3rem',
      }}
    >
      <Container>
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
          flexDirection: 'column',
          // alignItems: 'center',
          // justifyContent: 'center',
        }}
      >
        <Container
          sx={{
            width: '100%',
          }}
        >
          {products.length !== 0 ? (
            products.map(({ stock, name, mainImage, price, quantity }) => (
              <>
                <Grid
                  container
                  md={12}
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
                  />
                  {/* <Box
                  sx={{ display: { xs: 'none', sm: 'flex' }, width: 'auto' }}
                > */}
                  <ShoppingCartQuantity
                    maxStock={stock}
                    quantityProduct={quantity}
                  />
                  {/* </Box> */}

                  <Grid
                    item
                    xs={3}
                    sm={2}
                    md={3}
                    sx={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                    }}
                  >
                    <Box>
                      <StyledIcon theme={theme} />
                    </Box>
                  </Grid>
                </Grid>
                <DividerStyled
                  theme={theme}
                  sx={{
                    mt: '20px',
                  }}
                />
              </>
            ))
          ) : (
            <Box>
              <Typography
                variant='subtitle1'
                sx={{
                  fontSize: '1rem',
                }}
              >
                No se agregaron productos 😓
              </Typography>
            </Box>
          )}
          {/* Aqui se mapea el box de abajo */}
        </Container>

        {products.length !== 0 && (
          <Box
            sx={{
              mt: '3rem',
              width: '100%',
              display: 'flex',
              justifyContent: { xs: 'center', sm: 'flex-end' },
            }}
          >
            <ShoppingCartTable />
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
