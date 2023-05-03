import Paginated from '../../components/Paginated';
import StartHome from '../../components/StartPage';
import { Box, Container } from '@mui/material';
import SingleCard from '../../components/SingleCard';
import SectionCampions from '../../components/SectionCampions';
import SingleCardCampions from '../../components/SingleCardChampions';
import imageDark from '../../assets/homeStart.jpg';
import imageLight from '../../assets/homeLight2.jpg';
import SectionProducts from '../../components/SectionProducts';
import { useThemeContext } from '../../context/ThemeContext';

const HomePage = () => {
  const theme = useThemeContext();

  return (
    <div>
      <StartHome
        image={theme.palette.mode === 'light' ? imageLight : imageDark}
        title='¡bienvenidos!'
        text='En la oscuridad nos encontramos a nosotros mismos. - Senna'
      />

      <SectionProducts />
      <SectionCampions />
      {/* <Cards Component={<SingleCard />} /> */}
    </div>
  );
};

export default HomePage;
