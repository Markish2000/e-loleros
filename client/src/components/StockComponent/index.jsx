import React, { useState } from 'react';
import { Typography, Button, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const StockComponent = ({ maxStock }) => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrease = () => {
    if (quantity < maxStock) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
      <Typography variant='h5' color='secondary' sx={{ marginBottom: '1rem' }}>
        Stock disponible: {maxStock}
      </Typography>
      <Typography variant='h6' sx={{ marginBottom: '1rem' }}>
        Cantidad: {quantity}
      </Typography>

      <Button
        variant='outlined'
        color='primary'
        onClick={handleDecrease}
        disabled={quantity <= 0}
        sx={{ marginRight: '0.75rem' }}
      >
        <RemoveIcon />
      </Button>

      <Button
        variant='outlined'
        color='primary'
        onClick={handleIncrease}
        disabled={quantity >= maxStock}
      >
        <AddIcon />
      </Button>
    </div>
  );
};

export default StockComponent;
