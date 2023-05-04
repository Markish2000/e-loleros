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
  useScrollTrigger,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LinkRouter from '../LinkRouter';
import ButtonComponent from '../Button';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ButtonTheme from '../ButtonTheme';
import {
  useThemeContext,
  useThemeToggleContext,
} from '../../context/ThemeContext';
import imageLogo from '../../assets/logoBlanco.png';

const NavBar = ({ handleThemeChange }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setOpen(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <AppBar
        component='nav'
        position='fixed'
        sx={{
          background: `linear-gradient(to bottom, rgba(255, 255, 255, 0), ${theme.palette.background.default})`,
          background: trigger
            ? 'rgba(255, 255, 255, 0)'
            : `rgba(255, 255, 255, 0)`,
          backdropFilter: trigger ? 'blur(30px)' : `blur(10px)`,
          color: trigger ? 'white' : 'black',
          boxShadow: trigger ? '0px 2px 4px rgba(0, 0, 0, 0.1)' : 'none',
          transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            backgroundColor: 'transparent',
          }}
        >
          <img src='' alt='' />

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
            <LinkRouter to='champions' value='campeones' />
            <LinkRouter to='about' value='nosotros' />
            <LinkRouter
              to='login'
              value='Iniciar sesión'
              variant='contained'
              color='white'
            />
            <LinkRouter
              to='newuser'
              value='registrarse'
              variant='contained'
              color='white'
            />
            <Switch onChange={handleThemeChange} />
          </Box>
        </Toolbar>
      </AppBar>

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
            <ListItem
              button
              component={Link}
              to='home'
              onClick={() => setOpen(false)}
            >
              <ListItemText primary='Inicio' />
            </ListItem>

            <ListItem
              button
              component={Link}
              to='shop'
              onClick={() => setOpen(false)}
            >
              <ListItemText primary='Tienda' />
            </ListItem>

            <ListItem
              button
              component={Link}
              to='champions'
              onClick={() => setOpen(false)}
            >
              <ListItemText primary='Campeones' />
            </ListItem>

            <ListItem
              button
              component={Link}
              to='about'
              onClick={() => setOpen(false)}
            >
              <ListItemText primary='Nosotros' />
            </ListItem>

            <ListItem
              button
              component={Link}
              to='login'
              onClick={() => setOpen(false)}
            >
              <ListItemText primary='Iniciar sesión' />
            </ListItem>

            <ListItem
              button
              component={Link}
              to='newuser'
              onClick={() => setOpen(false)}
            >
              <ListItemText primary='Registrarse' />
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
