import { Box, CardMedia, Typography } from '@mui/material';
import { useState } from 'react';
import Paginated from '../Paginated';

const DetailSkinsChampions = ({ skins }) => {
  const [currentImage, setCurrentImage] = useState(skins[0].image);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);

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
