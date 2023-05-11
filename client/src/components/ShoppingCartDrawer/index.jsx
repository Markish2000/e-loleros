import {
  Box,
  ListItem,
  ListItemText,
  Drawer,
  Switch,
  Button,
  List,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const ShoppingCartDrawer = ({ open, onClose }) => {
  return (
    <Drawer
      open={open}
      anchor='right'
      onClose={onClose}
      sx={{
        display: { xs: 'block', sm: 'block', md: 'none' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '60vw' },
        zIndex: 1200,
      }}
    >
      <Box sx={{ p: 2 }}>
        <List>
          <ListItem button component={Link} to='home'>
            <ListItemText primary='Inicio' />
          </ListItem>

          <ListItem button component={Link} to='shop'>
            <ListItemText primary='Tienda' />
          </ListItem>

          <ListItem button component={Link} to='shop'>
            <ListItemText primary='Ver carrito' />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default ShoppingCartDrawer;
