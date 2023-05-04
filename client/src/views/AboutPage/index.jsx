import { Box, Container } from '@mui/material';
import StartPage from '../../components/StartPage';
import { textAbout } from '../../texts/startText';
import imageDark from '../../assets/aboutDark.jpg';
import imageLight from '../../assets/aboutLight.jpg';
import { useThemeContext } from '../../context/ThemeContext';

const AboutPage = () => {
  const theme = useThemeContext();
  return (
    <Box>
      <StartPage
        title='Nosotros'
        text={textAbout}
        image={theme.palette.mode === 'light' ? imageLight : imageDark}
      />
    </Box>
  );
};

export default AboutPage;
