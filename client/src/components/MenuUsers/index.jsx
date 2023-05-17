import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import { useUserContext } from '../../context/UserContext';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useThemeContext } from '../../context/ThemeContext';

export default function MenuUsers() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const theme = useThemeContext();
  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    navigate('/home');
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        {/* <Typography>Bienvenid@</Typography> */}
        <Tooltip title='Account settings'>
          <Button
            onClick={handleClick}
            size='small'
            variant='outlined'
            sx={{ mr: 2, fontWeight: '600' }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            color={theme.palette.mode === 'light' ? 'secondary' : 'primary'}
          >
            Bienvenid@ {user?.firstName}
          </Button>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id='account-menu'
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <LinkStyled to='/profile' theme={theme}>
          <MenuItem onClick={handleClose} sx={{ mb: '10px' }}>
            <Avatar src={user.image} alt='Avatar' />
            Perfil
          </MenuItem>
        </LinkStyled>
        <DividerStyled theme={theme} />
        <MenuItem onClick={handleLogout} sx={{ mt: '10px' }}>
          <ListItemIcon>
            <Logout fontSize='small' />
          </ListItemIcon>
          Cerrar sesión
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.palette.primary.main};
`;

const DividerStyled = styled(Divider)`
  border-color: ${({ theme }) => theme.palette.hrcolor.main};
`;
