import { Box, Container } from '@mui/material';
import styled from 'styled-components';
import { useThemeContext } from '../../context/ThemeContext';

const BaseAccess = ({ children, imageDark, imageLight }) => {
  const themeContext = useThemeContext();

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'column', md: 'row' },
      }}
    >
      <BoxImg
        image={themeContext.palette.mode === 'light' ? imageLight : imageDark}
        sx={{
          width: { xs: '100%', sm: '100%', md: '50%', lg: '65%' },
          height: { xs: '40vh', sm: '40vh', md: 'auto' },
        }}
      ></BoxImg>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '5%',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

const BoxImg = styled(Box)`
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
`;

export default BaseAccess;
