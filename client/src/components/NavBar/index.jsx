import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Switch,
  useScrollTrigger,
  useTheme,
  Typography,
  Button,
  CardMedia,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LinkRouter from '../LinkRouter';
import ButtonComponent from '../Button';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NavBarDrawer from '../NavBarDrawer';
import ShoppingCartDrawer from '../ShoppingCartDrawer';
import { useTaxtContext } from '../../context/ProductContext';
import MenuUsers from '../MenuUsers';
import imageLogo from '../../assets/logoBlanco.png';

const NavBar = ({ handleThemeChange }) => {
  const theme = useTheme();
  const location = useLocation();
  const currentPath = location.pathname;
  const { products } = useTaxtContext();
  const [open, setOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [openShoppingCartDrawer, setOpenShoppingCartDrawer] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const user = JSON.parse(localStorage.getItem('user'));

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const handleDrawerToggle = () => {
    setOpen(!open);
    setShowMenu(false);
  };

  const handleShoppingCartToggle = () => {
    setOpenShoppingCartDrawer(!openShoppingCartDrawer);
  };

  useEffect(() => {
    if (products && products.length !== 0) {
      setQuantity(products.length);
    } else {
      setQuantity(0);
    }

    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setOpen(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [products]);

  useEffect(() => {
    if (user && Object.keys(user).length !== 0) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  }, [user]);

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
            : `${theme.palette.nav.light}`,
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
          <CardMedia
            component='img'
            src={imageLogo}
            alt='Logo'
            sx={{ width: '70px' }}
          />

          <Box sx={{ display: { xs: 'flex', sm: 'flex', md: 'none' } }}>
            {showMenu && <MenuUsers />}
            <Link to='/shoppingCart'>
              <IconButton
                // variant='outlined'
                color={theme.palette.mode === 'light' ? 'secondary' : 'primary'}
                sx={{
                  color: 'white',
                  marginRight: '10px',
                  mt: '5px',
                  mb: '5px',
                  border: '1px solid',
                  borderColor: '#BF9A56',
                  width: '42px',
                  height: '42px',
                }}
              >
                {/* Carrito */}
                <ShoppingCartIcon sx={{ color: 'white', width: '22px' }} />
              </IconButton>
              {quantity !== 0 && (
                <Box
                  sx={{
                    position: 'absolute',
                    top: { xs: '0.3rem', sm: '0.5rem', md: '0.5rem' },
                    right: { xs: '3.8rem', sm: '4.2rem', md: '4.5rem' },
                    backgroundColor: theme.palette.primary.main,
                    color: 'white',
                    borderRadius: '50%',
                    width: '1.5rem',
                    height: '1.5rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '0.875rem',
                    fontWeight: 'bold',
                  }}
                >
                  {quantity}
                </Box>
              )}
            </Link>

            <IconButton
              color='white'
              size='large'
              onClick={handleDrawerToggle}
              sx={{
                border: '1px solid',
                borderColor: '#BF9A56',
                width: '42px',
                height: '42px',
                mt: '5px',
              }}
            >
              <MenuIcon sx={{ color: 'white' }} />
            </IconButton>
          </Box>

          <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}>
            <LinkRouter to='home' value='inicio' colorText='white' />
            <LinkRouter to='shop' value='tienda' colorText='white' />
            <LinkRouter to='champions' value='campeones' colorText='white' />
            <LinkRouter to='about' value='nosotros' colorText='white' />

            {showMenu ? (
              <MenuUsers />
            ) : (
              <>
                {location.pathname !== '/login' && (
                  <LinkRouter
                    to='login'
                    value='Iniciar sesión'
                    variant='contained'
                    colorText='white'
                    color={
                      theme.palette.mode === 'light' ? 'secondary' : 'primary'
                    }
                  />
                )}

                {location.pathname !== '/signIn' && (
                  <LinkRouter
                    to='signIn'
                    value='registrarse'
                    variant='contained'
                    colorText='white'
                    color={
                      theme.palette.mode === 'light' ? 'secondary' : 'primary'
                    }
                  />
                )}
              </>
            )}
            <Link to='/shoppingCart'>
              <IconButton
                // variant='outlined'
                color={theme.palette.mode === 'light' ? 'secondary' : 'primary'}
                sx={{
                  color: 'white',
                  marginRight: '10px',
                  mt: '5px',
                  mb: '5px',
                  border: '1px solid',
                  borderColor: '#BF9A56',
                  width: '42px',
                  height: '42px',
                }}
              >
                {/* Carrito */}
                <ShoppingCartIcon sx={{ color: 'white', width: '22px' }} />
              </IconButton>
              {quantity !== 0 && (
                <Box
                  sx={{
                    position: 'absolute',
                    top: '0.5rem',
                    right: '4.5rem',
                    backgroundColor: theme.palette.primary.main,
                    color: 'white',
                    borderRadius: '50%',
                    width: '1.5rem',
                    height: '1.5rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '0.875rem',
                    fontWeight: 'bold',
                  }}
                >
                  {quantity}
                </Box>
              )}
            </Link>
            <Box sx={{ width: '45px' }}>
              <Switch
                onChange={handleThemeChange}
                sx={{ mt: '0.5rem', transform: 'scale(0.9)' }}
                color='secondary'
              />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      {/* <ShoppingCartDrawer
        open={openShoppingCartDrawer}
        onClose={handleShoppingCartToggle}
      /> */}

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
