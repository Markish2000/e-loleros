import Paginated from '../../components/Paginated';
import StartHome from '../../components/StartPage';
import { Box, Container } from '@mui/material';
import SingleCard from '../../components/SingleCard';
import SectionCampions from '../../components/SectionCampions';
import SingleCardCampions from '../../components/SingleCardCampions';
import image from '../../assets/homeStart.jpg';
import SectionProducts from '../../components/SectionProducts';

const HomePage = ({ theme }) => {
  return (
    <div>
      <StartHome
        image={image}
        title='¡bienvenidos!'
        text='En la oscuridad nos encontramos a nosotros mismos. - Senna'
      />

      <SectionProducts />
      <SectionCampions />
      {/* <Cards Component={<SingleCard />} /> */}
      <Paginated />
    </div>
  );
};

export default HomePage;
