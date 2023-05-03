import StartPage from '../../components/StartPage';
import imageDark from '../../assets/campionsStart.jpg';
import imageLight from '../../assets/championsLight.jpeg';
import { useThemeContext } from '../../context/ThemeContext';
import { useState } from 'react';
import { useAllChampions } from '../../hooks/champions/allChampions';
import Paginated from '../../components/Paginated';
import CardsChampions from '../../components/CardsChampions';
import { Box } from '@mui/material';

const ChampionsPage = () => {
  const text =
    'La vida es un milagro tan curioso, creo que entre más extraña es la vida más sentido tiene -Ivern';

  const theme = useThemeContext();

  const [currentPage, setCurrentPage] = useState(1);

  const query = useAllChampions(currentPage);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  if (query.error) {
    return <div>{query.error.message}</div>;
  }

  const totalPage = query.data?.pages || 1; // Establecer 1 como valor predeterminado si no hay datos disponibles

  const data = query.data;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <StartPage
        image={theme.palette.mode === 'light' ? imageLight : imageDark}
        title='campeones'
        text={text}
      />
      <CardsChampions data={data} />
      <Paginated
        page={currentPage}
        handlePageChange={handlePageChange}
        totalPage={totalPage}
      />
    </Box>
  );
};

export default ChampionsPage;
