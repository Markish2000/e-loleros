import StartHome from '../../components/StartPage';
import { Box, Container } from '@mui/material';
import SectionCampions from '../../components/SectionCampions';
import imageDark from '../../assets/homeStart.jpg';
import imageLight from '../../assets/homeLight2.jpg';
import SectionProducts from '../../components/SectionProducts';
import SectionServices from '../../components/SectionServices';
import { useThemeContext } from '../../context/ThemeContext';

const HomePage = () => {
  const theme = useThemeContext();

  return (
    <Box>
      <StartHome
        image={theme.palette.mode === 'light' ? imageLight : imageDark}
        title='¡bienvenidos!'
        text='En la oscuridad nos encontramos a nosotros mismos. - Senna'
      />
      <SectionServices />
      <SectionProducts />
      <SectionCampions />
    </Box>
  );
};

export default HomePage;
