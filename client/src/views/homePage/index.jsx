import styles from './Home.module.css';
import Cards from '../../components/Cards';
import Paginated from '../../components/Paginated';
import { Container } from '@mui/material';

const HomePage = () => {
  return (
    <div className={styles.containerHome}>
      <Cards />
      <Paginated />
    </div>
  );
};

export default HomePage;
