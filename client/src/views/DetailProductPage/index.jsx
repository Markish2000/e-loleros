import {
  Box,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Button,
  Card,
  Typography,
  Paper,
} from '@mui/material';

import React from 'react';
import { useDetailProducts } from '../../hooks/products/detailProducts';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import CarouselAnt from '../../components/CarouselAnt';
import SingleCard from '../../components/SingleCard';

const DetailProductPage = () => {
  const { id } = useParams();
  const query = useDetailProducts(id);

  if (query.error) {
    return <div>{query.error.message}</div>;
  }

  console.log(query.data);
  const { title, detail, images, mainImage, price, stock } = query.data;
  console.log(images);
  return (
    <Box
      sx={{
        height: '90vh',
        marginTop: '100px',
        backgroundImage: `${mainImage}`,
      }}
    >
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
        }}
      >
        <Box
          sx={{
            height: 'autos',
            width: '500px',
            overflow: 'hidden',
          }}
        >
          <ImgMain src={mainImage} alt={title} />
          {/* <CarouselAnt data={images} Component={SingleCard} /> */}

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            {images && images.map((img) => <Img src={img} alt={title} />)}
          </Box>
        </Box>
        <Box
          sx={{
            height: 'autos',
            width: '500px',
            overflow: 'hidden',
            // display: 'flex',
            // flexDirection: 'column',
          }}
        >
          <Box sx={{ flexGrow: 1, display: 'grid', gap: 1 }}>
            <Typography
              variant='h3'
              sx={{
                marginBottom: '1.5rem',
              }}
            >
              {title}
            </Typography>
            <Typography variant='h4' component='p'>
              $ {price}
            </Typography>
            <Typography variant='h6' component='p'>
              en 12x $ {price % 12}
            </Typography>
            <Typography
              variant='body1'
              sx={{
                marginTop: '3rem',
              }}
            >
              {detail} Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Amet, consectetur provident vel error necessitatibus sit
              perspiciatis a cumque quis iste aut dicta ullam officiis quod,
              esse, quasi ipsum quibusdam ab!
            </Typography>

            <Typography variant='body1'>Unidades {stock}</Typography>
            <Typography variant='body1'>+</Typography>
            <Typography variant='body1'>-</Typography>
          </Box>

          <Button variant='outlined'>AGREGAR AL CARRITO</Button>
          <Button variant='contained'>COMPRAR AHORA</Button>
        </Box>
      </Container>
    </Box>
  );
};

const ImgMain = styled.img`
  width: 100%;
  height: 60vh;
  object-fit: cover;
  object-position: center;
`;

const Img = styled.img`
  width: 50%;
  height: 20vh;
  object-fit: cover;
  object-position: center;
`;

export default DetailProductPage;
