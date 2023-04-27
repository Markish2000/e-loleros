import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Switch,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LinkRouter from '../LinkRouter';
import ButtonComponent from '../Button';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonTheme from '../ButtonTheme';

const NavBar = ({ handleThemeChange }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar
        component='nav'
        position='fixed'
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: 'transparent',
          color: 'white',
          boxShadow: 'none',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            backgroundColor: 'transparent',
          }}
        >
          <Typography variant='h5'>E-LOLEROS</Typography>

          <IconButton
            color='inherit'
            size='large'
            onClick={() => setOpen(true)}
            sx={{ display: { xs: 'flex', sm: 'flex', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}>
            <LinkRouter to='home' value='inicio' />
            <LinkRouter to='shop' value='tienda' />
            <LinkRouter to='about' value='nosotros' />
            <LinkRouter to='login' value='Iniciar sesión' />
            <LinkRouter to='singin' value='registrarse' />
            {/* <Switch onChange={handleThemeChange} /> */}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        open={open}
        anchor='right'
        onClose={() => setOpen(false)}
        sx={{
          display: { xs: 'block', sm: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '60vw' },
        }}
      >
        <Box sx={{ p: 2 }}>
          <List>
            <ButtonTheme />
            <ListItem
              button
              component={Link}
              to='home'
              onClick={() => setOpen(false)}
            >
              <ListItemText primary='Home' />
            </ListItem>
            <ListItem
              button
              component={Link}
              to='shop'
              onClick={() => setOpen(false)}
            >
              <ListItemText primary='Shop' />
            </ListItem>
            <ListItem
              button
              component={Link}
              to='about'
              onClick={() => setOpen(false)}
            >
              <ListItemText primary='About' />
            </ListItem>
            <ListItem
              button
              component={Link}
              to='login'
              onClick={() => setOpen(false)}
            >
              <ListItemText primary='Contact' />
            </ListItem>
            <ListItem
              button
              component={Link}
              to='singin'
              onClick={() => setOpen(false)}
            >
              <ListItemText primary='Contact' />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

NavBar.propTypes = {
  handleThemeChange: PropTypes.func,
};

ButtonComponent.defaultProps = {
  handleThemeChange: undefined,
};

export default NavBar;
