import {
  Box,
  CardMedia,
  Container,
  Divider,
  Grid,
  IconButton,
  MenuItem,
  Typography,
} from '@mui/material';
import React from 'react';
import StartPage from '../../components/StartPage';
// import imageProfile from '../../assets/Portadas/profileDark.jpg';
import imageProfileDark from '../../assets/Portadas/profileImageDark.png';
import imageProfileLight from '../../assets/Portadas/profileImageLight.jpg';
import imageLight from '../../assets/footerLight.jpeg';
import imageDark from '../../assets/footerDark.jpg';
import { textProfile } from '../../texts/startText';
import styled from 'styled-components';
import { useThemeContext } from '../../context/ThemeContext';
import { useUserContext } from '../../context/UserContext';
import EditIcon from '@mui/icons-material/Edit';
import FormImage from '../../components/FormImage';
import FormFields from '../../components/FormFields';
import Avatar from '@mui/material/Avatar';
import Logout from '@mui/icons-material/Logout';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const UserProfile = () => {
  const theme = useThemeContext();
  const { user } = useUserContext();
  const {
    firstName,
    lastName,
    nickName,
    dateOfBirth,
    email,
    nationality,
    genre,
    image,
  } = user;

  const infoUser = [
    {
      property: 'Email',
      value: email,
    },
    {
      property: 'Usuario',
      value: nickName,
    },
    {
      property: 'Género',
      value: genre,
    },
    {
      property: 'País',
      value: nationality,
    },
    {
      property: 'Fecha de cumpleaños',
      value: dateOfBirth,
    },
    {
      property: 'Contraseña',
      value: '**********',
    },
  ];

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        mt: '100px',
        width: '100%',
        height: '100%',
        backgroundColor: theme.palette.section.main,
      }}
    >
      <Box>
        {user && (
          <Box
            sx={{
              backgroundColor: theme.palette.primary.main,
              height: '100%',
              width: '300px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <CardMedia
                component='img'
                src='https://i.pinimg.com/550x/79/ab/93/79ab931fa013149b710b7b3366cdb22e.jpg'
                sx={{
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  border: '3px solid',
                  borderColor: theme.palette.text.default,
                  // mt: '2rem',
                }}
              />
              <IconButton>
                <EditIcon
                  sx={{
                    color: theme.palette.text.default,
                  }}
                />
              </IconButton>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                mt: '1.5rem',
              }}
            >
              <Typography
                variant='subtitle1'
                sx={{
                  fontSize: '2rem',
                  color: theme.palette.text.default,
                  fontWeight: '600',
                }}
              >
                {firstName} {lastName}
              </Typography>
              <Typography
                variant='subtitle1'
                sx={{
                  color: theme.palette.text.default,
                }}
              >
                Invocador
              </Typography>
              <IconButton>
                <EditIcon
                  sx={{
                    color: theme.palette.text.default,
                  }}
                />
              </IconButton>
            </Box>
          </Box>
        )}
      </Box>
      <Grid
        container
        spacing={{ xs: 2, sm: 2, md: 4, lg: 4 }}
        sx={{ p: '3rem' }}
      >
        {infoUser &&
          infoUser.map(({ property, value }) => (
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Typography
                variant='subtitle1'
                sx={{
                  fontSize: '1.15rem',
                  color: theme.palette.primary.main,
                  fontWeight: '600',
                }}
              >
                {property}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  mb: '0.5rem',
                }}
              >
                <Typography
                  sx={{
                    fontSize: '1rem',
                    pb: '0.75rem',
                  }}
                >
                  {value}
                </Typography>
                <IconButton>
                  <EditIcon
                    sx={{
                      color: theme.palette.primary.main,
                    }}
                  />
                </IconButton>
              </Box>
              <DividerStyled theme={theme} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

const DividerStyled = styled(Divider)`
  border-color: ${({ theme }) => theme.palette.hrcolor.main};
`;

export default UserProfile;
