import StartPage from '../../components/StartPage';
import image from '../../assets/productsStart.jpg';
import Cards from '../../components/Cards';
import { Pagination, Box } from '@mui/material';
import { useState } from 'react';
import { useAllProducts } from '../../services/products';

const ShopPage = () => {
  const text =
    'Sólo tu puedes oírme invocador ¿Qué obra maestra vamos a tocar hoy? -Sona';

  const [currentPage, setCurrentPage] = useState(1);

  const query = useAllProducts(currentPage)

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  if (query.error) {
    return <div>{query.error.message}</div>;
  }

  const totalPage = query.data?.pages || 1; // Establecer 1 como valor predeterminado si no hay datos disponibles

  const data = query.data.response?.data;

  return (
    <Box>
      <StartPage image={image} title='productos' text={text} />
      <Cards data={data} />
      <Pagination
        page={currentPage}
        onChange={handlePageChange}
        count={totalPage}
      />
    </Box>
  );
};

export default ShopPage;
