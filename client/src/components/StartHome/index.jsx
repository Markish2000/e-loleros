import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import styles from './StartHome.module.css';
import image from '../../assets/landing3.jpg';
import styled from 'styled-components';

const StartHome = () => {
  return (
    <BoxGeneral image={image}>
      <BoxGradient>
        <BoxWelcome
          sx={{
            paddingLeft: { xs: 2, sm: 3, md: 4 },
            paddingRight: { xs: 2, sm: 3, md: 4 },
          }}
        >
          <Container
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              clipPath: 'polygon(0 0, 100% 0, 100% 80%, 80% 100%, 0 100%)',
              border: '1px solid #BF9A56',
              marginTop: '25vh',
              height: 'auto',
              padding: '40px',
            }}
          >
            <Typography
              variant='h1'
              component='h2'
              sx={{
                fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
                color: 'white',
              }}
              className={styles.tracking}
            >
              ¡BIENVENIDOS!
            </Typography>

            <Typography
              variant='body1'
              sx={{
                fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
                color: 'white',
                marginTop: '3rem',
              }}
              className={styles.tracking}
            >
              En la oscuridad nos encontramos a nosotros mismos. - Senna
            </Typography>
          </Container>
        </BoxWelcome>
      </BoxGradient>
    </BoxGeneral>
  );
};

const BoxGeneral = styled(Box)`
  width: 100%;
  height: 70vh;
  background-image: url(${(props) => props.image});
  background-size: cover;
`;

const BoxGradient = styled(Box)`
  width: 100%;
  height: 70vh;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0), #07121a);
`;

const BoxWelcome = styled(Box)`
  display: flex;
  justify-content: center;
`;

export default StartHome;
