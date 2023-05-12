import { Typography, TextField, MenuItem, Grid, Box } from '@mui/material';
import { useTaxtContext } from '../../context/ProductContext';
import { useState } from 'react';

const ShoppingCartQuantity = ({ maxStock, quantityProduct, id }) => {
  const { updateProductQuantity } = useTaxtContext();
  const [selectedValue, setSelectedValue] = useState(quantityProduct);

  const handleSelectChange = (event) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
    updateProductQuantity(id, newValue);
  };

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
      md={2}
      lg={3}
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
        value={selectedValue}
        onChange={handleSelectChange}
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

export const ShoppingCartQuantityBox = ({ maxStock, quantityProduct, id }) => {
  const { updateProductQuantity } = useTaxtContext();
  const [selectedValue, setSelectedValue] = useState(quantityProduct);

  const handleSelectChange = (event) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
    updateProductQuantity(id, newValue);
  };

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
      md={2}
      lg={3}
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
        value={selectedValue}
        onChange={handleSelectChange}
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
