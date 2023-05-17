import {
  Box,
  ListItem,
  ListItemText,
  Drawer,
  Switch,
  Button,
  List,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const NavBarDrawer = ({ open, handleDrawerToggle, handleThemeChange }) => {
  const [showMenu, setShowMenu] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (user && Object.keys(user).length !== 0) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  }, [user]);
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
        </List>

        {!showMenu && (
          <Box sx={{ width: { xs: '100%', sm: '250px', md: '' } }}>
            <ListItem button component={Link} to='login'>
              <Button variant='contained' sx={{ width: '100%' }}>
                Iniciar sesión
              </Button>
            </ListItem>

            <ListItem button component={Link} to='signIn'>
              <Button variant='contained' sx={{ width: '100%' }}>
                Registrarse
              </Button>
            </ListItem>
          </Box>
        )}
      </Box>
    </Drawer>
  );
};

export default NavBarDrawer;
