import styles from './Home.module.css';
import Cards from '../../components/Cards';
import Paginated from '../../components/Paginated';
import StartHome from '../../components/StartHome';
import { Box, Container } from '@mui/material';
import CarouselComponent from '../../components/Carousel';
import SingleCard from '../../components/SingleCard';
import CardsCampions from '../../components/CardsCampions';
import SectionCampions from '../../components/SectionCampions';
import SingleCardCampions from '../../components/SingleCardCampions';

const HomePage = ({ theme }) => {
  console.log(theme);
  return (
    <div>
      <StartHome />
      <SectionCampions />
      <SectionCampions />
      <SectionCampions />
      {/* <Cards Component={<SingleCard />} /> */}
      <Paginated />
    </div>
  );
};

export default HomePage;
