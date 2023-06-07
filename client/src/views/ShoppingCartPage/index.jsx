import { useTaxtContext } from "../../context/ProductContext";
import { useThemeContext } from "../../context/ThemeContext";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Grid,
  Divider,
  IconButton,
  Button,
  CardMedia,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ShoppingCartTable from "../../components/ShoppingCartTable";
import ShoppingCartQuantity from "../../components/ShoppingCartQuantity";
import ShoppingCartProduct from "../../components/ShoppingCartProduct";
import imageLight from "../../assets/Gestos/poro_blue.png";
import imageDark from "../../assets/Gestos/poro_yellow.png";
import styled from "styled-components";

const ShoppingCartPage = () => {
  const theme = useThemeContext();
  const { products, cleanProduct } = useTaxtContext();
  const navigate = useNavigate();

  const handleBack = () => {
    //Vovler una página hacia atrás
    navigate(-1);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        pt: "70px",
        mb: "3rem",
      }}
    >
      <Container>
        {products.length !== 0 && (
          <Button
            size="small"
            variant="outlined"
            onClick={handleBack}
            sx={{ mt: "2rem" }}
          >
            <KeyboardArrowLeftIcon sx={{ p: "2px" }} />
            Seguir comprando
          </Button>
        )}

        <Typography
          variant="h3"
          sx={{
            mt: "2rem",
            ml: "1rem",
            mb: "1rem",
            fontSize: { xs: "2.5rem", sm: "3rem" },
          }}
        >
          Carrito
        </Typography>
        <DividerStyled theme={theme} />
      </Container>
      <Container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row", lg: "row" },
          // alignItems: 'center',
          justifyContent: "space-between",
        }}
      >
        <Container
          sx={{
            width: "100%",
          }}
        >
          {products.length !== 0 ? (
            products.map(({ id, stock, name, mainImage, price, quantity }) => (
              <Box key={id}>
                <Grid
                  container
                  sx={{
                    width: "100%",
                    height: "auto",
                    mt: "20px",
                    // display: 'flex',
                    // justifyContent: 'space-between',
                  }}
                >
                  <ShoppingCartProduct
                    stock={stock}
                    name={name}
                    mainImage={mainImage}
                    price={price}
                    quantityProduct={quantity}
                    id={id}
                  />

                  <ShoppingCartQuantity
                    maxStock={stock}
                    quantityProduct={quantity}
                    id={id}
                  />

                  <Grid
                    item
                    xs={3}
                    sm={2}
                    md={2}
                    lg={3}
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <StyledIcon
                      theme={theme}
                      onClick={() => {
                        cleanProduct(id);
                      }}
                    />
                  </Grid>
                </Grid>
                <DividerStyled
                  theme={theme}
                  sx={{
                    mt: "20px",
                  }}
                />
              </Box>
            ))
          ) : (
            <Box
              sx={{
                mt: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <CardMedia
                component="img"
                src={theme.palette.mode === "light" ? imageLight : imageDark}
                sx={{
                  mt: "1rem",
                  width: "200px",
                }}
              />
              <Typography
                variant="subtitle1"
                sx={{
                  mt: "1rem",
                  fontSize: "1.25rem",
                  mb: "2rem",
                }}
              >
                Todavía no se agregaron productos.
              </Typography>
              <Link to="/shop">
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    mt: "1rem",
                  }}
                >
                  Ir a tienda
                </Button>
              </Link>
            </Box>
          )}
          {/* Aqui se mapea el box de abajo */}
        </Container>

        {products.length !== 0 && (
          <Box
            sx={{
              mt: { xs: "3rem", md: "20px" },
              width: "100%",
              display: "flex",
              justifyContent: { xs: "center", sm: "flex-end" },
            }}
          >
            <ShoppingCartTable products={products} />
          </Box>
        )}
      </Container>
    </Box>
  );
};

const DividerStyled = styled(Divider)`
  border-color: ${({ theme }) => theme.palette.hrcolor.main};
`;

const StyledIcon = styled(CloseIcon)`
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.palette.error.main};
  }
`;

export default ShoppingCartPage;
