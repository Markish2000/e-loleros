import { Typography, TextField, MenuItem, Grid, Box } from '@mui/material';

const ShoppingCartQuantity = ({ maxStock, quantityProduct }) => {
  const createStockArray = (stock) => {
    const stockArray = [];
    for (let i = 1; i <= stock; i++) {
      stockArray.push(i);
    }
    return stockArray;
  };

  const result = createStockArray(maxStock);

  return (
    <Grid
      item
      sm={2}
      md={3}
      sx={{
        display: { xs: 'none', sm: 'flex' },
        justifyContent: 'center',
      }}
    >
      <TextField
        size='small'
        name='quantity'
        select
        fullWidth
        defaultValue={quantityProduct}
        sx={{ width: '70px' }}
      >
        {result.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
    </Grid>
  );
};

export const ShoppingCartQuantityBox = ({ maxStock, quantityProduct }) => {
  const createStockArray = (stock) => {
    const stockArray = [];
    for (let i = 1; i <= stock; i++) {
      stockArray.push(i);
    }
    return stockArray;
  };

  const result = createStockArray(maxStock);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <TextField
        size='small'
        name='quantity'
        select
        fullWidth
        defaultValue={quantityProduct}
        sx={{ width: '70px' }}
      >
        {result.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
};

export default ShoppingCartQuantity;
