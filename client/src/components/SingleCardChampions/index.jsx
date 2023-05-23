import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  CardContent,
  CardMedia,
  Typography,
  Card,
  CardActions,
  Paper,
  Box,
  Container,
  Divider,
} from "@mui/material";

import styled from "styled-components";
import { Link } from "react-router-dom";
import { useThemeContext } from "../../context/ThemeContext";
import {
  getDifficultyImage,
  getRoleImage,
} from "../../helpers/detailChampions";

const SingleCardChampions = ({
  id = 1,
  name,
  image,
  difficulty,
  role,
  maxWidth,
  marginLeft,
  marginRight,
}) => {
  const theme = useThemeContext();
  const imageDifficulty = getDifficultyImage(difficulty);
  const imageRole = getRoleImage(role);

  return (
    <StyledCard
      elevation={2}
      sx={{
        marginRight,
        marginLeft,
        display: "flex",
        flexDirection: { xs: "row", sm: "row", md: "column" },
        alignItems: "center",
        justifyContent: "flex-start",
        border: "1px solid",
        borderColor: theme.palette.hrcolor.main,
        backgroundColor: theme.palette.section.main,
        borderRadius: "10px",
        backgroundImage: "none",
        height: { xs: "250px", sm: "220px", md: "auto" },
      }}
    >
      <StyledCardMediaContainer
        sx={{
          overflow: "hidden",
          p: "16px",
        }}
      >
        <Link to={`/champions/${id}`}>
          <CardMedia
            component="img"
            image={image}
            alt={name}
            title={name}
            loading="lazy"
            sx={{
              height: { xs: "218px", sm: "188px", md: "300px" },
              border: "1px solid",
              borderColor: theme.palette.hrcolor.main,
              borderRadius: "10px",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </Link>
      </StyledCardMediaContainer>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
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
          {name}
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            p: "10px",
            width: { xs: "180px", sm: "100%" },
            pr: { xs: "16px", sm: "10px" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: { xs: "70px", sm: "90px" },
              width: "100%",
              border: "1px solid",
              borderColor: theme.palette.hrcolor.main,
              borderRadius: {
                xs: "10px 10px 0px 0px",
                sm: "10px 0px 0px 10px",
              },
            }}
          >
            <Typography
              variant="subtitle1"
              color="primary"
              sx={{ mt: "15px", fontWeight: "600" }}
            >
              Dificultad
            </Typography>
            <CardMedia
              component="img"
              src={imageDifficulty}
              sx={{
                width: { xs: "70px", sm: "100px" },
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "90px",
              width: "100%",
              border: "1px solid",
              borderColor: theme.palette.hrcolor.main,
              borderRadius: {
                xs: "0px 0px 10px 10px",
                sm: "0px 10px 10px 0px",
              },
            }}
          >
            <Typography
              variant="subtitle1"
              color="primary"
              sx={{ mt: "10px", fontWeight: "600" }}
            >
              Rol
            </Typography>
            <CardMedia
              component="img"
              src={imageRole}
              sx={{
                width: "40px",
                height: "40px",
              }}
            />
          </Box>
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

const StyledCardContent = styled(CardContent)`
  &:hover {
    background-color: #182526;
    transition: 1s;
  }
`;

const StyledCardMediaContainer = styled(Box)`
  overflow: hidden;
  background-size: cover;
  background-position: center;
`;

export default SingleCardChampions;
