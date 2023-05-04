import { Box } from '@mui/material';
import { Carousel, theme } from 'antd';
import styled from 'styled-components';
import { useThemeContext } from '../../context/ThemeContext';

const CarouselAnt = ({ Component, data }) => {
  const theme = useThemeContext();
  let colorLine = '';

  theme.palette.mode === 'light'
    ? (colorLine = '#030640')
    : (colorLine = '#BF9A56');

  return (
    <Box
      sx={{
        marginBottom: '20px',
        border: 'none',
      }}
    >
      <StyledCarousel
        autoplay
        slidesToShow={3}
        dotPosition='bottom'
        colorLine={colorLine}
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

  .slick-slide {
    border: none;
  }

  .slick-dots li button {
    background-color: ${(props) => props.colorLine};
  }
`;

export default CarouselAnt;
