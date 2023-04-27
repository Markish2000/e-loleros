import StartPage from '../../components/StartPage';
import image from '../../assets/productsStart.jpg';
import Cards from '../../components/Cards';
import { Pagination } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

const ShopPage = () => {
  const text =
    'Sólo tu puedes oírme invocador ¿Qué obra maestra vamos a tocar hoy? -Sona';

  const getAllProducts = async ({ queryKey }) => {
    const [_key, page] = queryKey;

    const response = await axios.get(
      `http://localhost:3001/api/v1/products?page=${page}`
    );

    return response.data;
  };

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const query = useQuery(['products', currentPage], getAllProducts, {
    keepPreviousData: true,
  });

  if (query.error) {
    return <div>{query.error.message}</div>;
  }

  const totalPage = query.data?.pages || 1; // Establecer 1 como valor predeterminado si no hay datos disponibles

  const data = query.data.response?.data;

  return (
    <div>
      <StartPage image={image} title='productos' text={text} />
      <Cards data={data} />
      <Pagination
        page={currentPage}
        onChange={handlePageChange}
        count={totalPage}
      />
    </div>
  );
};

export default ShopPage;
