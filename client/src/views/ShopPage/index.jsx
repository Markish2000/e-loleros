import StartPage from '../../components/StartPage';
import imageDark from '../../assets/productsStart.jpg';
import imageLight from '../../assets/shopLight.jpg';
import Cards from '../../components/Cards';
import { Box, Typography, Container } from '@mui/material';
import { useState } from 'react';
import { useAllProducts } from '../../hooks/useProducts/useAllProducts';
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
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            display: { xs: 'none', sm: 'none', md: 'flex' },
            width: '100%',
            height: '70px',
            border: '1px solid',
            borderColor: theme.palette.hrcolor.main,
            mb: '2rem',
          }}
        >
          <Container></Container>
        </Box>

        <Box>
          <Cards data={data} />
        </Box>
      </Box>
      <Paginated
        page={currentPage}
        handlePageChange={handlePageChange}
        totalPage={totalPage}
        size='large'
        show='show'
      />
    </Box>
  );
};

export default ShopPage;
