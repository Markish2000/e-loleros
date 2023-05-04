import StartPage from '../../components/StartPage';
import imageDark from '../../assets/productsStart.jpg';
import imageLight from '../../assets/shopLight.jpg';
import Cards from '../../components/Cards';
import { Pagination, Box } from '@mui/material';
import { useState } from 'react';
import { useAllProducts } from '../../hooks/products/allProducts';
import { useThemeContext } from '../../context/ThemeContext';
import Paginated from '../../components/Paginated';

const ShopPage = () => {
  const text =
    'Sólo tu puedes oírme invocador ¿Qué obra maestra vamos a tocar hoy? -Sona';

  const theme = useThemeContext();

  const [currentPage, setCurrentPage] = useState(1);

  const query = useAllProducts(currentPage);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  if (query.error) {
    return <div>{query.error.message}</div>;
  }

  const totalPage = query.data?.pages || 1; // Establecer 1 como valor predeterminado si no hay datos disponibles

  const data = query.data.data?.products;

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
        title='productos'
        text={text}
      />
      <Cards data={data} />
      <Paginated
        page={currentPage}
        handlePageChange={handlePageChange}
        totalPage={totalPage}
      />
    </Box>
  );
};

export default ShopPage;
