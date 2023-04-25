import styles from './Home.module.css';
import Cards from '../../components/Cards';
import Paginated from '../../components/Paginated';
import { Box, Container } from '@mui/material';

const HomePage = ({ theme }) => {
  console.log(theme);
  return (
    <Box
    // sx={
    //   theme.palette.mode === 'light'
    //     ? { backgroundColor: 'white' }
    //     : { backgroundColor: 'black' }
    // }
    >
      <Cards />
      <Paginated />
    </Box>
  );
};

export default HomePage;
