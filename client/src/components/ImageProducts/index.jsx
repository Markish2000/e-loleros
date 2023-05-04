import { Box } from '@mui/material';
import styled from 'styled-components';

const ImageProducts = ({ image, title }) => {
  return (
    <Box>
      <Img src={image} alt={title} />
    </Box>
  );
};

const Img = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center;
`;

export default ImageProducts;
