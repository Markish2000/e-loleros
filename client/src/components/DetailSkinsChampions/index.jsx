import { Box, Button, CardMedia, Typography } from '@mui/material';
import { Carousel, Modal } from 'antd';
import Slider from 'react-slick';
import styled from 'styled-components';
import { useThemeContext } from '../../context/ThemeContext';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Paginated from '../Paginated';

const DetailSkinsChampions = ({ skins }) => {
  const theme = useThemeContext();
  const [currentImage, setCurrentImage] = useState(skins[0].image);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const imageSkins = skins.map((skin) => skin.image);
  // console.log(imageSkins);
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

  let totalPage = Math.ceil(skins.length / itemsPerPage);
  console.log(totalPage);
  console.log(skins.length);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, skins.length);

  const visibleImages = skins.slice(startIndex, endIndex);
  console.log('holis,', visibleImages);
  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const handlePageChange = (e, page) => {
    setCurrentPage(page);
  };

  return (
    <Box
      sx={{
        height: 'auto',
        width: { xs: '100%', sm: '100%', md: '100%', lg: '100%' },
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
        // alt={name}
        sx={{
          width: { xs: '100%', sm: '100%', md: '100%' },
          height: { xs: '400px', sm: '400px', md: '75vh' },
          objectFit: 'cover',
          objectPosition: 'center',
          mb: { xs: '2rem', sm: '2rem', md: '0.5rem' },
        }}
      />
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'column', md: 'row' },
          justifyContent: 'flex-start',
          mt: '0.5rem',
          flexGrow: 1,
        }}
      >
        {visibleImages &&
          visibleImages.map((skin, index) => (
            <Box
              sx={{
                position: 'relative',
                width:
                  visibleImages.length < 3
                    ? { xs: '100%', sm: '100%', md: '400px', lg: '400px' }
                    : { xs: '100%', sm: '100%', md: '100%', lg: '100%' },
              }}
            >
              <Typography
                variant='subtitle1'
                sx={{
                  textTransform: 'uppercase',
                  position: 'absolute',
                  top: '80%',
                  left: '0',
                  zIndex: '1',
                  width: '100%',
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  color: 'white',
                  textAlign: 'center',
                  padding: '8px',
                }}
              >
                {skin.name}
              </Typography>
              <CardMedia
                component='img'
                key={index}
                alt={`Image ${index}`}
                src={skin.image}
                onClick={() => setCurrentImage(skin.image)}
                sx={{
                  width: '100%',
                  height: '200px',
                  width: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  cursor: 'pointer',
                  mt: '0.5rem',
                }}
              />
            </Box>
          ))}
      </Box>
      {totalPage > 1 && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <Paginated
            page={currentPage}
            handlePageChange={handlePageChange}
            totalPage={totalPage}
            size='medium'
            show='show'
          />
        </Box>
      )}
    </Box>
  );
};

export default DetailSkinsChampions;
