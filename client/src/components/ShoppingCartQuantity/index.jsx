import { Typography, TextField, MenuItem, Grid } from '@mui/material';

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
      md={3}
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <TextField
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

export default ShoppingCartQuantity;
