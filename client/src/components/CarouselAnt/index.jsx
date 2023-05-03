import { Box } from '@mui/material';
import { Carousel, theme } from 'antd';
import styled, { useTheme } from 'styled-components';

const CarouselAnt = ({ Component, data }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        marginBottom: '20px',
      }}
    >
      <StyledCarousel
        autoplay
        slidesToShow={3}
        dotPosition='bottom'
        theme={theme}
      >
        {data.map((el) => (
          <Component key={el.id} {...el} marginRight='10px' />
        ))}
      </StyledCarousel>
    </Box>
  );
};

const StyledCarousel = styled(Carousel)`
  .slick-dots {
    bottom: -20px; /* Ajusta la posición vertical de los indicadores */
  }

  .slick-dots li button {
    background-color: ${theme.palette
      .primary}; /* Cambia el color de los indicadores */
  }
`;

export default CarouselAnt;
