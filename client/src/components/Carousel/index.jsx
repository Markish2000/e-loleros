import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import data from '../../data.js';
import { Box } from '@mui/material';
import styled from 'styled-components';

const CarouselCampions = ({ Component }) => {
  const settings = {
    dots: false, // Oculta los puntos de navegación
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true, // Activa el movimiento automático
    autoplaySpeed: 2000, // Intervalo de tiempo en milisegundos entre cada movimiento
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <Box>
      <Slider {...settings}>
        {data?.length !== 0 ? (
          data?.map((el) => (
            <StyledDivCarousel key={el.id}>
              <Component {...el} marginRight='10px' marginLeft='10px' />
            </StyledDivCarousel>
          ))
        ) : (
          <p>No hay personajes</p>
        )}
      </Slider>
    </Box>
  );
};

const StyledDivCarousel = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;
  // background-color: red;
`;

export default CarouselCampions;
