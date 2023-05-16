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
import { useUserContext } from '../../context/UserContext';
import MenuUsers from '../MenuUsers';
import { useMenuContext } from '../../context/MenuContext';

const NavBar = ({ handleThemeChange }) => {
  const theme = useTheme();
  const location = useLocation();
  const { products } = useTaxtContext();
  const { user } = useUserContext();
  // const { showMenu, setShowMenu } = useMenuContext();
  const [open, setOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [openShoppingCartDrawer, setOpenShoppingCartDrawer] = useState(false);
  const [quantity, setQuantity] = useState(0);

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

          <Box sx={{ display: { xs: 'flex', sm: 'flex', md: 'none' } }}>
            <Link to='/shoppingCart'>
              <IconButton
                color='white'
                size='large'
                // onClick={handleDrawerToggle}
                sx={{ mr: '0.5rem' }}
              >
                <ShoppingCartIcon />
              </IconButton>
              {quantity !== 0 && (
                <Box
                  sx={{
                    position: 'absolute',
                    top: { xs: '0.5rem', sm: '0.7rem', md: '0.5rem' },
                    right: { xs: '4.2rem', sm: '4.7rem', md: '5.5rem' },
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

            <IconButton color='white' size='large' onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          </Box>

          <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}>
            <LinkRouter to='home' value='inicio' />
            <LinkRouter to='shop' value='tienda' />
            <LinkRouter to='champions' value='campeones' />
            <LinkRouter to='about' value='nosotros' />

            {showMenu ? (
              <MenuUsers />
            ) : (
              <>
                {location.pathname !== '/login' && (
                  <LinkRouter
                    to='login'
                    value='Iniciar sesión'
                    variant='contained'
                    color='white'
                  />
                )}

                {location.pathname !== '/signIn' && (
                  <LinkRouter
                    to='signIn'
                    value='registrarse'
                    variant='contained'
                    color='white'
                  />
                )}
              </>
            )}

            <Link to='/shoppingCart'>
              <IconButton
                color='white'
                size='large'
                // onClick={handleDrawerToggle}
                sx={{ mr: '0.5rem' }}
              >
                <ShoppingCartIcon />
              </IconButton>
              {quantity !== 0 && (
                <Box
                  sx={{
                    position: 'absolute',
                    top: '0.5rem',
                    right: '5.5rem',
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

            <Switch onChange={handleThemeChange} />
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
