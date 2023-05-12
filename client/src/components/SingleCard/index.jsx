import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  CardContent,
  CardMedia,
  Typography,
  Card,
  CardActions,
  Box,
  IconButton,
  Paper,
} from '@mui/material';

import ButtonComponent from '../Button';
import styled from 'styled-components';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { Link } from 'react-router-dom';
import { useTaxtContext } from '../../context/ProductContext';
import { useThemeContext } from '../../context/ThemeContext';

const SingleCard = ({
  id,
  title,
  price,
  mainImage,
  stock,
  maxWidth,
  marginRight,
  marginLeft,
}) => {
  const { addProduct } = useTaxtContext();
  const theme = useThemeContext();
  return (
    <StyledCard
      elevation={2}
      sx={{
        marginRight,
        marginLeft,
        display: 'flex',
        flexDirection: { xs: 'row', sm: 'rox', md: 'column' },
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        border: '1px solid',
        borderColor: theme.palette.hrcolor.main,
        backgroundColor: theme.palette.section.main,
        borderRadius: '10px',
        backgroundImage: 'none',
        height: { xs: '220px', sm: '220px', md: 'auto' },
      }}
    >
      <StyledCardMediaContainer
        sx={{
          overflow: 'hidden',
          p: '16px',
          // width: { xs: '300px', sm: '50%', md: 'auto' },
        }}
      >
        <CardMedia
          component='img'
          image={mainImage}
          alt={title}
          title={title}
          loading='lazy'
          sx={{
            // width: { xs: '180px', sm: '180px', md: '100%' },
            height: { xs: '188px', sm: '188px', md: '300px' },
            border: '1px solid',
            borderColor: theme.palette.hrcolor.main,
            borderRadius: '10px',
          }}
        />
      </StyledCardMediaContainer>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'column', md: 'column' },
          justifyContent: { xs: 'space-between', md: 'space-between' },
        }}
      >
        <StyledLink to={`/shop/${id}`}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'column', md: 'column' },
              // width: { xs: '300px', sm: '50%', md: 'auto' },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                padding: '16px',
                pl: { xs: '0px', md: '16px' },
                pb: { xs: '0px', sm: '16px' },
              }}
            >
              <Typography
                variant='subtitle1'
                sx={{
                  color: 'primary.main',
                  fontSize: '1.25rem',
                  fontWeight: '600',
                }}
              >
                {title}
              </Typography>
              <Typography
                variant='subtitle1'
                sx={{
                  fontSize: '1rem',
                  color: theme.palette.text.secondary,
                }}
              >
                Categoría
              </Typography>
            </Box>
          </Box>
        </StyledLink>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: { xs: 'unset', md: 'space-between' },
            alignItems: 'flex-end',
            p: '16px',
            pt: { xs: '16px', sm: '32px', md: '0px' },
          }}
        >
          <Typography
            variant='subtitle1'
            // color='secondary'
            sx={{
              fontSize: { xs: '1.15rem', md: '1.25rem' },
              color: theme.palette.text.primary,
              order: { xs: '1', md: '0' },
            }}
          >
            $ {price}
          </Typography>

          <IconButton
            size='medium'
            color='secondary'
            onClick={() =>
              addProduct({ id, title, mainImage, price, stock }, 1)
            }
            // sx={{ backgroundColor: theme.palette.hrcolor.secondary }}
          >
            <LocalGroceryStoreIcon />
          </IconButton>
        </Box>
      </Box>
    </StyledCard>
  );
};

const StyledCard = styled(Paper)`
  position: relative;
  transition: transform 0.3s ease-in-out;
  overflow: hidden;
  object-fit: cover; /* Añade esta línea para ajustar y recortar la imagen */
  &:hover {
    transform: scale(1.01);
  }
}
`;

const StyledCardMediaContainer = styled(Box)`
  overflow: hidden;
`;

const StyledCardMedia = styled(CardMedia)`
  transition: transform 0.3s ease-in-out;
  overflow: hidden;
  object-fit: cover; /* Añade esta línea para ajustar y recortar la imagen */
  &:hover {
    transform: scale(1.01);
  }
`;

const StyledBox = styled(Box)``;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

// SingleCard.propTypes = {
//   name: PropTypes.string.isRequired,
//   price: PropTypes.string.isRequired,
//   mainImage: PropTypes.string.isRequired,
//   maxWidth: PropTypes.string,
// };

// ButtonComponent.defaultProps = {
//   maxWidth: '100%',
// };

export default SingleCard;
