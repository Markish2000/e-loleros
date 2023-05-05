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

const NavBarDrawer = ({ open, handleDrawerToggle, handleThemeChange }) => {
  return (
    <Drawer
      open={open}
      anchor='right'
      onClose={handleDrawerToggle}
      sx={{
        display: { xs: 'block', sm: 'block', md: 'none' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '60vw' },
        zIndex: 1200,
      }}
    >
      <Box sx={{ p: 2 }}>
        <List>
          <Switch onChange={handleThemeChange} />
          <ListItem button component={Link} to='home'>
            <ListItemText primary='Inicio' />
          </ListItem>

          <ListItem button component={Link} to='shop'>
            <ListItemText primary='Tienda' />
          </ListItem>

          <ListItem button component={Link} to='champions'>
            <ListItemText primary='Campeones' />
          </ListItem>

          <ListItem button component={Link} to='about'>
            <ListItemText primary='Nosotros' />
          </ListItem>

          <ListItem button component={Link} to='login'>
            <Button variant='contained'>Iniciar sesión</Button>
          </ListItem>

          <ListItem button component={Link} to='sigIn'>
            <Button variant='contained'>Registrarse</Button>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default NavBarDrawer;
