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

const ShoppingCartTable = ({ total, subtotal, shipping }) => {
  const theme = useThemeContext();
  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      <Container
        sx={{
          width: { xs: '100%', sm: '550px', md: '600px' },
          height: '300px',
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
            <Typography>$500</Typography>
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
            <Typography>$50</Typography>
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
              $550
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
