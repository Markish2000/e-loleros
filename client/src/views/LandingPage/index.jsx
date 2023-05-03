import {
  Box,
  Button,
  CardMedia,
  Container,
  Typography,
  useTheme,
} from '@mui/material';
import styles from './Landing.module.css';
import { Link } from 'react-router-dom';
import LinkRouter from '../../components/LinkRouter';
import styled from 'styled-components';
import imageLanding from '../../assets/landing11.jpg';
import imageLogo from '../../assets/logoBlanco.png';
import ColumnLanding from '../../components/ColumnLanding';
import VideoSection from '../../components/VideoSection';

const LandingPage = () => {
  const theme = useTheme();

  return (
    <StyledBoxGeneral image={imageLanding}>
      <Box
        sx={{
          background: `linear-gradient(to bottom, rgba(255, 255, 255, 0), ${theme.palette.background.default})`,
          width: '100%',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'center', md: '' },
          justifyContent: { xs: 'center', md: 'space-evenly' },
          paddingTop: { xs: '30px', md: '0px' },
          paddingBottom: { xs: '30px', md: '0px' },
        }}
      >
        <ColumnLanding>
          <CardMedia
            component='img'
            image={imageLogo}
            alt='Logo'
            title='logo'
            loading='lazy'
          />

          <Button
            component={Link}
            to='/home'
            color='primary'
            variant='contained'
            size='large'
            sx={{
              marginTop: '4rem',
            }}
          >
            Aventurarse!
          </Button>
        </ColumnLanding>

        <ColumnLanding none='none'>
          <VideoSection />
        </ColumnLanding>
      </Box>
    </StyledBoxGeneral>
  );
};

const StyledBoxGeneral = styled(Box)`
  width: auto;
  height: 100vh;
  background-image: url(${imageLanding});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  // justify-content: space-evenly;
`;

export default LandingPage;
