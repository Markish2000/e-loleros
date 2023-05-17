import {
  Box,
  CardMedia,
  Container,
  Divider,
  IconButton,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useThemeContext } from '../../context/ThemeContext';
import { useUserContext } from '../../context/UserContext';
import EditIcon from '@mui/icons-material/Edit';

import StartDashboard from '../../components/StartDashboard';
import { Link } from 'react-router-dom';

const DashboardUserPage = () => {
  const theme = useThemeContext();
  // const { user } = useUserContext();
  // const {
  //   firstName,
  //   lastName,
  //   nickName,
  //   dateOfBirth,
  //   email,
  //   nationality,
  //   genre,
  //   image,
  // } = user;
  const [user, setUser] = useState({
    id: '',
    firstName: '',
    lastName: '',
    nickName: '',
    email: '',
    genre: '',
    nationality: '',
    dateOfBirth: '',
    image: '',
  });

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    setUser(userData);
  }, []);

  const infoUser = [
    {
      property: 'Usuario',
      value: user.nickName,
      to: '/profile/edit-nickName',
    },
    {
      property: 'Email',
      value: user.email,
      to: '/profile/edit-email',
    },
    {
      property: 'Contraseña',
      value: '**********',
      to: '/profile/edit-password',
    },
    {
      property: 'Género',
      value: user.genre,
      to: '/profile/edit-genre',
    },
    {
      property: 'País',
      value: user.nationality,
      to: '/profile/edit-nationality',
    },
    {
      property: 'Fecha de cumpleaños',
      value: user.dateOfBirth,
      to: '/profile/edit-dateOfBirth',
    },
  ];

  return (
    <Box
      sx={{
        height: { xs: '100%', md: '100vh' },
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
      }}
    >
      <StartDashboard />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '5%',
          width: { xs: '100%', sm: '100%', md: '50%', lg: '35%' },
          mb: { xs: '2rem', md: '0' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            mb: '1rem',
          }}
        >
          {user && (
            <>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  // justifyContent: 'space-between',
                  alignItems: 'flex-end',
                  width: '100%',
                  mb: '1rem',
                }}
              >
                <CardMedia
                  component='img'
                  src='https://i.pinimg.com/550x/79/ab/93/79ab931fa013149b710b7b3366cdb22e.jpg'
                  sx={{
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    border: '5px solid',
                    borderColor: theme.palette.primary.main,
                  }}
                />

                <IconButton sx={{ height: '40px', width: '40px' }}>
                  <EditIcon
                    sx={{
                      color: theme.palette.secondary.main,
                      height: '18px',
                      width: '18px',
                    }}
                  />
                </IconButton>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '100%',
                }}
              >
                <Typography
                  variant='subtitle1'
                  sx={{
                    fontSize: '2rem',
                    color: theme.palette.primary.main,
                    fontWeight: '600',
                  }}
                >
                  {user.firstName} {user.lastName}
                </Typography>
                <Link to='/profile/edit-name'>
                  <IconButton sx={{ height: '40px', width: '40px' }}>
                    <EditIcon
                      sx={{
                        color: theme.palette.secondary.main,
                        height: '18px',
                        width: '18px',
                      }}
                    />
                  </IconButton>
                </Link>
              </Box>
            </>
          )}
        </Box>
        {infoUser &&
          infoUser.map(({ property, value, to }) => (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
              }}
            >
              <Typography
                variant='subtitle1'
                sx={{
                  fontSize: '1.15rem',
                  color: theme.palette.primary.main,
                  mt: '0.5rem',
                  fontWeight: '600',
                }}
              >
                {property}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  mb: '0.25rem',
                }}
              >
                <Typography
                  sx={{
                    fontSize: '1rem',
                  }}
                >
                  {value}
                </Typography>
                <Link to={to}>
                  <IconButton>
                    <EditIcon
                      sx={{
                        color: theme.palette.secondary.main,
                        height: '18px',
                        width: '18px',
                      }}
                    />
                  </IconButton>
                </Link>
              </Box>
              <DividerStyled theme={theme} />
            </Box>
          ))}
      </Box>
    </Box>
  );
};

const DividerStyled = styled(Divider)`
  border-color: ${({ theme }) => theme.palette.hrcolor.main};
`;

export default DashboardUserPage;
