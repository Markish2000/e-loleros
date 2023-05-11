import {
  Box,
  CardMedia,
  Container,
  TextField,
  Typography,
  Grid,
  Divider,
  Button,
} from '@mui/material';
import ShoppingCartTable from '../../components/ShoppingCartTable';
import ShoppingCartQuantity from '../../components/ShoppingCartQuantity';
import ShoppingCartProduct from '../../components/ShoppingCartProduct';
import styled from 'styled-components';
import { useThemeContext } from '../../context/ThemeContext';
import CloseIcon from '@mui/icons-material/Close';

const ShoppingCartPage = () => {
  const theme = useThemeContext();
  const data = [
    {
      id: 1,
      name: 'Ahri',
      price: 10,
      mainImage:
        'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_15.jpg',
      image:
        'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_15.jpg',
      stock: 5,
      availability: true,
    },
    {
      id: 1,
      name: 'Ahri',
      price: 10,
      mainImage:
        'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_15.jpg',
      image:
        'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_15.jpg',
      stock: 5,
      availability: true,
    },
  ];

  return (
    <Box
      sx={{
        height: '100vh',
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
          alignItems: 'center',
        }}
      >
        <Container
          sx={{
            width: '100%',
          }}
        >
          {data.map(({ stock, name, mainImage, price }) => (
            <>
              <Grid
                container
                md={12}
                sx={{
                  width: '100%',
                  height: '180px',
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
                />

                <ShoppingCartQuantity maxStock={stock} quantityProduct={2} />

                <Grid
                  item
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
          ))}
          {/* Aqui se mapea el box de abajo */}
        </Container>
        <Box
          sx={{
            mt: '3rem',
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <ShoppingCartTable />
        </Box>
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
