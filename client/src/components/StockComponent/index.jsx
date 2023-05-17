import React, { useEffect, useState } from 'react';
import { Typography, Button, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useTaxtContext } from '../../context/ProductContext';

const StockComponent = ({ maxStock, id }) => {
  const [quantity, setQuantity] = useState(0);
  const [product, setProduct] = useState({});
  const { addProduct, products, cleanProduct } = useTaxtContext();

  useEffect(() => {
    const productExists = products.some((el) => el.id === parseInt(id));

    if (productExists) {
      const product = products.find((el) => el.id === parseInt(id));
      setQuantity(product?.quantity);
      setProduct(product);
    }
  }, []);

  const handleIncrease = () => {
    if (quantity < maxStock) {
      setQuantity(quantity + 1);
      addProduct(product, quantity + 1);
    }
  };

  const handleDecrease = () => {
    if (parseInt(quantity) > 1) {
      setQuantity(quantity - 1);
      addProduct(product, quantity - 1);
    }
    if (parseInt(quantity) === 1) {
      setQuantity(quantity - 1);
      cleanProduct(parseInt(id));
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
