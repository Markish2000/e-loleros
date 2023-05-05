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
  Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LinkRouter from '../LinkRouter';
import ButtonComponent from '../Button';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  useThemeContext,
  useThemeToggleContext,
} from '../../context/ThemeContext';
import imageLogo from '../../assets/logoBlanco.png';
import NavBarDrawer from '../NavBarDrawer';

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
          // background: `linear-gradient(to bottom, rgba(255, 255, 255, 0), ${theme.palette.background.default})`,
          // background: trigger
          //   ? 'rgba(255, 255, 255, 0)'
          //   : `rgba(255, 255, 255, 0)`,
          background: trigger
            ? `${theme.palette.nav.main}`
            : `rgba(255, 255, 255, 0)`,
          // background: 'transparent',
          backdropFilter: trigger ? '' : `blur(15px)`,
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
            color='white'
            size='large'
            onClick={handleDrawerToggle}
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
              to='signIn'
              value='registrarse'
              variant='contained'
              color='white'
            />
            <Switch onChange={handleThemeChange} />
          </Box>
        </Toolbar>
      </AppBar>

      <NavBarDrawer
        open={open}
        handleDrawerToggle={handleDrawerToggle}
        handleThemeChange={handleThemeChange}
      />
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
