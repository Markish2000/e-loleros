import { Box } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { useThemeContext } from '../../context/ThemeContext';
import imageDark from '../../assets/Portadas/profileDark1.jpg';
import imageLight from '../../assets/Portadas/profileLight2.jpg';

const StartDashboard = () => {
  const themeContext = useThemeContext();
  return (
    <BoxImg
      image={themeContext.palette.mode === 'light' ? imageLight : imageDark}
      sx={{
        width: { xs: '100%', sm: '100%', md: '50%', lg: '65%' },
        height: { xs: '35vh', sm: '35vh', md: 'auto' },
      }}
    />
  );
};

const BoxImg = styled(Box)`
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
`;

export default StartDashboard;
