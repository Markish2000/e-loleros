import { Box, Container, Typography, useTheme } from '@mui/material';
import React from 'react';
import styles from './StartHome.module.css';
import styled from 'styled-components';

const StartPage = ({ image, title, text }) => {
  const theme = useTheme();

  return (
    <BoxGeneral image={image}>
      <BoxGradient
        sx={{
          background: `linear-gradient(to bottom, rgba(255, 255, 255, 0), ${theme.palette.background.default})`,
        }}
      >
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
              border: '1px solid',
              borderColor: 'primary.main',
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
                textTransform: 'uppercase',
                color: 'primary.main',
              }}
              className={styles.tracking}
            >
              {title}
            </Typography>

            <Typography
              variant='body1'
              sx={{
                fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
                color: 'primary.main',
                marginTop: { xs: '1.5rem', sm: '2rem', md: '3rem' },
                textAlign: 'center',
              }}
              className={styles.tracking}
            >
              {text}
            </Typography>
          </Container>
        </BoxWelcome>
      </BoxGradient>
    </BoxGeneral>
  );
};

const BoxGeneral = styled(Box)`
  width: 100%;
  height: 75vh;
  background-image: url(${(props) => props.image});
  background-size: cover;
  // background-position: center;
`;

const BoxGradient = styled(Box)`
  width: 100%;
  height: 75vh;
`;

const BoxWelcome = styled(Box)`
  display: flex;
  justify-content: center;
`;

export default StartPage;
