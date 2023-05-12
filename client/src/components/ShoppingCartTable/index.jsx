import {
  Box,
  Container,
  Paper,
  Typography,
  Button,
  Divider,
} from '@mui/material';
// import { Table } from 'antd';
import React from 'react';
import { useThemeContext } from '../../context/ThemeContext';
import styled from 'styled-components';

const ShoppingCartTable = ({ products }) => {
  const theme = useThemeContext();
  const subTotal = products.reduce(
    (accumulator, el) => accumulator + el.price * el.quantity,
    0
  );
  const shipping = 50;
  const total = subTotal + shipping;

  return (
    <Box
      sx={{
        width: { xs: '100%', sm: 'auto' },
      }}
    >
      <Container
        sx={{
          width: { xs: '100%', sm: '550px', md: '450px', lg: '550px' },
        }}
      >
        <Box
          sx={{
            backgroundColor: theme.palette.section.main,
            p: '20px',
            borderRadius: '10px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              m: '20px',
            }}
          >
            <Typography>Subtotal</Typography>
            <Typography>$ {subTotal}</Typography>
          </Box>
          <DividerStyled theme={theme} />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              m: '20px',
            }}
          >
            <Typography>Envío</Typography>
            <Typography>$ {shipping}</Typography>
          </Box>
          <DividerStyled theme={theme} />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              m: '20px',
            }}
          >
            <Typography
              sx={{
                fontSize: '1.5rem',
              }}
            >
              Total
            </Typography>
            <Typography
              sx={{
                fontSize: '1.5rem',
              }}
            >
              $ {total}
            </Typography>
          </Box>
        </Box>
        <Button
          variant='contained'
          size='large'
          sx={{
            width: '100%',
            mt: '1rem',
          }}
        >
          Comprar
        </Button>
      </Container>
    </Box>
  );
};

const DividerStyled = styled(Divider)`
  border-color: ${({ theme }) => theme.palette.hrcolor.main};
`;

export default ShoppingCartTable;
