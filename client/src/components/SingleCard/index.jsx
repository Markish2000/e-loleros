import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
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
} from "@mui/material";
import styled from "styled-components";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import { Link } from "react-router-dom";
import { useTaxtContext } from "../../context/ProductContext";
import { useThemeContext } from "../../context/ThemeContext";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

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
  const theme = useThemeContext();
  const { addProduct, products, cleanProduct } = useTaxtContext();
  const [quantity, setQuantity] = useState(0);
  const [showIcon, setShowIcon] = useState(quantity === 0);

  useEffect(() => {
    const productExists = products.some((el) => el.id === id);

    if (productExists) {
      const product = products.find((el) => el.id === id);
      setQuantity(product.quantity);
      setShowIcon(product.quantity === 0);
    }
  }, []);

  const handleShowIcon = () => {
    setQuantity(quantity + 1);
    addProduct({ id, title, mainImage, price, stock }, quantity + 1);
    setShowIcon(!showIcon);
  };

  const handleIncrease = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
      addProduct({ id, title, mainImage, price, stock }, quantity + 1);
      setShowIcon(false);
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      addProduct({ id, title, mainImage, price, stock }, quantity - 1);
    }
    if (quantity === 1) {
      setQuantity(quantity - 1);
      cleanProduct(id);
      setShowIcon(true);
    }
  };

  return (
    <StyledCard
      elevation={2}
      sx={{
        marginRight,
        marginLeft,
        display: "flex",
        flexDirection: { xs: "row", sm: "rox", md: "column" },
        alignItems: "flex-start",
        justifyContent: "flex-start",
        border: "1px solid",
        borderColor: theme.palette.hrcolor.main,
        backgroundColor: theme.palette.section.main,
        borderRadius: "10px",
        backgroundImage: "none",
        height: { xs: "220px", sm: "220px", md: "auto" },
      }}
    >
      <StyledCardMediaContainer
        sx={{
          overflow: "hidden",
          p: "16px",
        }}
      >
        <Link to={`/shop/${id}`}>
          <CardMedia
            component="img"
            image={mainImage}
            alt={title}
            title={title}
            loading="lazy"
            sx={{
              height: { xs: "188px", sm: "188px", md: "300px" },
              border: "1px solid",
              borderColor: theme.palette.hrcolor.main,
              borderRadius: "10px",
            }}
          />
        </Link>
      </StyledCardMediaContainer>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "column" },
          justifyContent: { xs: "space-between", md: "space-between" },
        }}
      >
        <StyledLink to={`/shop/${id}`}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "column", md: "column" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: "16px",
                pl: { xs: "0px", md: "16px" },
                pb: { xs: "0px", sm: "16px" },
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  color: "primary.main",
                  fontSize: "1.25rem",
                  fontWeight: "600",
                }}
              >
                {title}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  fontSize: "1rem",
                  color: theme.palette.text.secondary,
                }}
              >
                Categoría
              </Typography>
              <Typography
                variant="subtitle1"
                // color='secondary'
                sx={{
                  fontSize: { xs: "1.15rem", md: "1.25rem" },
                  color: theme.palette.text.primary,
                  display: { xs: "flex", sm: "none" },
                  mr: "0.75rem",
                }}
              >
                $ {price}
              </Typography>
            </Box>
          </Box>
        </StyledLink>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column", sm: "row", md: "row" },
            justifyContent: {
              xs: "space-between",
              sm: "space-between",
              md: "space-between",
            },
            alignItems: "flex-end",
            p: "16px",
            pt: { xs: "16px", sm: "32px", md: "0px" },
          }}
        >
          <Typography
            variant="subtitle1"
            // color='secondary'
            sx={{
              fontSize: { xs: "1.15rem", md: "1.25rem" },
              color: theme.palette.text.primary,
              display: { xs: "none", sm: "flex" },
              mr: "0.75rem",
            }}
          >
            $ {price}
          </Typography>

          {showIcon ? (
            <IconButton
              size="medium"
              color="secondary"
              onClick={handleShowIcon}
            >
              <LocalGroceryStoreIcon />
            </IconButton>
          ) : (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <IconButton
                onClick={handleDecrease}
                disabled={quantity <= 0}
                sx={{ marginRight: "0.75rem" }}
                color="secondary"
              >
                <RemoveIcon />
              </IconButton>
              <Typography variant="body1" sx={{ pt: "7px" }}>
                {quantity}
              </Typography>
              <IconButton
                onClick={handleIncrease}
                disabled={quantity >= stock}
                color="secondary"
                sx={{ ml: "0.75rem" }}
              >
                <AddIcon />
              </IconButton>
            </Box>
          )}
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
