import {
  Box,
  CardMedia,
  Container,
  Button,
  Typography,
} from '@mui/material';
import Modal from '@mui/material/Modal';
import React, { useState } from 'react';
import { useDetailProducts } from '../../hooks/products/detailProducts';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import StockComponent from '../../components/StockComponent';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import Paginated from '../../components/Paginated';

const DetailProductPage = () => {
  const { id } = useParams();
  const query = useDetailProducts(id);
  const { title, detail, images, mainImage, price, stock } = query.data;
  const [currentImage, setCurrentImage] = useState(mainImage);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const imagesPruebas = [
    'https://rare-gallery.com/mocahbig/1376556-vayne-sentinel-lol-league-of-legends-game-art.jpg',
    'https://i.blogs.es/a4c048/vayne-lol/1366_2000.jpeg',
    'https://p4.wallpaperbetter.com/wallpaper/562/284/1024/spirit-blossom-vayne-vayne-league-of-legends-league-of-legends-riot-games-hd-wallpaper-preview.jpg',
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/81a47c79-6cb6-41fa-807d-56eeeaa5a906/dbufjxt-ccdbc232-abe3-4d93-ac85-4230f4062850.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzgxYTQ3Yzc5LTZjYjYtNDFmYS04MDdkLTU2ZWVlYWE1YTkwNlwvZGJ1Zmp4dC1jY2RiYzIzMi1hYmUzLTRkOTMtYWM4NS00MjMwZjQwNjI4NTAuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.386EVZY0mCrxvoq19nAg03OzAu9lsFW_54W5jvtkp4Q',
    'https://images5.alphacoders.com/123/1237421.jpg',
    'https://images2.alphacoders.com/720/720032.jpg',
    'https://rare-gallery.com/mocahbig/394969-vayne-spirit-blossom-lol-league-of-legends-game.jpg',
    'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/b33351bb-a14b-4762-a276-66548d3fdc00/width=450/381970.jpeg',
    'https://c4.wallpaperflare.com/wallpaper/591/554/367/league-of-legends-riot-games-vayne-league-of-legends-spirit-blossom-blue-hair-hd-wallpaper-preview.jpg',
    'https://c4.wallpaperflare.com/wallpaper/591/554/367/league-of-legends-riot-games-vayne-league-of-legends-spirit-blossom-blue-hair-hd-wallpaper-preview.jpg',
    'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/b33351bb-a14b-4762-a276-66548d3fdc00/width=450/381970.jpeg',
  ];

  const itemsPerPage = 3;

  let totalPage = Math.ceil(imagesPruebas.length / itemsPerPage);
  console.log(totalPage);
  console.log(imagesPruebas.length);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, imagesPruebas.length);

  const visibleImages = imagesPruebas.slice(startIndex, endIndex);

  const handlePageChange = (e, page) => {
    setCurrentPage(page);
  };

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const handleBack = () => {
    //Vovler una página hacia atrás
    navigate(-1);
  };

  if (query.error) {
    return <div>{query.error.message}</div>;
  }

  //!! CAPTURAR EMAIL DEL USUARIO POR EL LOCAL STORAGE.
  const email = 'marcosparella2000@gmail.com';
  const handleByNow = async () => {
    try {
      const response = await axios.post(
        'http://localhost:3001/api/v1/products/buy',
        {
          id,
          title,
          price,
          email,
          quantity: 1,
        }
      );
      window.location.href = response.data;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box
      sx={{
        height: { xs: '100%', sm: '100%', md: '90vh' },
        marginTop: '5rem',
        mb: '5rem',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'column', md: 'row' },
          justifyContent: {
            xs: 'center',
            sm: 'space-evenly',
            md: 'space-evenly',
          },
          alignItems: { xs: 'center', sm: 'unset', md: 'unset' },
          height: '100%',
        }}
      >
        <Box
          sx={{
            height: 'auto',
            width: { xs: '100%', sm: '100%', md: '500px', lg: '600px' },
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            padding: { xs: '10px', sm: '30px', md: '0' },
          }}
        >
          <CardMedia
            component='img'
            src={currentImage}
            onClick={handleShowModal}
            alt={title}
            sx={{
              width: { xs: '100%', sm: '100%', md: '100%' },
              height: { xs: '400px', sm: '400px', md: '75vh' },
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
          <Modal
            open={showModal}
            onClose={handleShowModal}
            aria-labelledby='parent-modal-title'
            aria-describedby='parent-modal-description'
          >
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: { xs: '400px', sm: '600px', md: '800px', lg: '1000px' },
                overflow: 'hidden',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  right: '0',
                }}
              >
                <Button
                  size='small'
                  variant='contained'
                  onClick={handleShowModal}
                >
                  <CloseIcon />
                </Button>
              </Box>
              <ImgModal src={currentImage} alt={title} />
            </Box>
          </Modal>

          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'flex-start',
              mt: '0.5rem',
              flexGrow: 1,
            }}
          >
            {visibleImages &&
              visibleImages.map((img, index) => (
                <Box
                  sx={{
                    width:
                      visibleImages.length < 3
                        ? {
                            xs: '30%',
                            sm: '30%',
                            md: '170px',
                            lg: '200px',
                          }
                        : {
                            xs: '100%',
                            sm: '100%',
                            md: '170px',
                            lg: '200px',
                          },
                  }}
                >
                  <CardMedia
                    component='img'
                    key={index}
                    alt={`Image ${index}`}
                    src={img}
                    onClick={() => setCurrentImage(img)}
                    sx={{
                      width: '100%',
                      height: '100px',
                      width: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center',
                      cursor: 'pointer',
                    }}
                  />
                </Box>
              ))}
          </Box>
          {totalPage > 1 && (
            <Box
              sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}
            >
              <Paginated
                page={currentPage}
                handlePageChange={handlePageChange}
                totalPage={totalPage}
                size='small'
              />
            </Box>
          )}
        </Box>
        <Box>
          <Button
            variant='text'
            size='medium'
            sx={{ ml: { xs: '15px', sm: '30px' } }}
            onClick={handleBack}
          >
            Volver
          </Button>
          <Box
            sx={{
              height: 'auto',
              width: { md: '450px', lg: '500px' },
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: { xs: '10px', sm: '30px' },
            }}
          >
            <Box>
              <Typography
                variant='h3'
                color='primary'
                sx={{
                  fontSize: '2.5rem',
                  marginBottom: '1.5rem',
                  mt: { xs: '1.5rem', sm: '0px' },
                }}
              >
                {title}
              </Typography>
              <Typography variant='h4' component='p' sx={{ fontSize: '2rem' }}>
                $ {price}
              </Typography>
              <Typography
                variant='h6'
                component='p'
                sx={{ marginTop: '0.5rem' }}
              >
                en 12x $ {price % 12}
              </Typography>
              <Typography
                variant='body1'
                sx={{
                  marginTop: '3rem',
                  marginBottom: '3rem',
                }}
              >
                {detail} Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Amet, consectetur provident vel error necessitatibus sit
                perspiciatis a cumque quis iste aut dicta ullam officiis quod,
                esse, quasi ipsum quibusdam ab!
              </Typography>

              <StockComponent maxStock={stock} />
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'colum', md: 'row' },
                justifyContent: 'space-between',
                width: '100%',
                marginTop: '3rem',
              }}
            >
              <Button
                variant='outlined'
                size='medium'
                color='secondary'
                sx={{
                  mb: { xs: '15px', sm: '15px', md: '0px' },
                }}
              >
                AGREGAR AL CARRITO
              </Button>
              <Button
                variant='contained'
                size='medium'
                color='secondary'
                onClick={handleByNow}
              >
                COMPRAR AHORA
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

const ImgModal = styled.img`
  width: 100%;
`;

export default DetailProductPage;
