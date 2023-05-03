import {
  Box,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material';
import styled from 'styled-components';
import { useState } from 'react';
import { List } from 'antd';

const VideoComponent = ({ number, link }) => {
  const theme = useTheme();

  const [videos, setVideos] = useState({
    link: 'https://www.youtube.com/embed/Nw1PwlD4NsY',
    title: '¡GG NO TEAM!',
  });

  return (
    <>
      <Typography
        variant='h3'
        color='primary'
        sx={{
          fontSize: { xs: '1rem', sm: '1.5rem', md: '2.5rem' },
          marginBottom: '2rem',
        }}
      >
        {videos.title}
      </Typography>

      <Typography
        variant='subtitle1'
        sx={{
          marginBottom: '20px',
          fontSize: '1.25rem',
        }}
      >
        Si estás cansado de que:
      </Typography>

      <Typography variant='body1'>
        El jungla no gankee, el support robe las kils, el top fedee, el mid no
        avisa cuando se van de linea y el adc se crea dueño de minions.
      </Typography>

      <Typography
        variant='subtitle1'
        sx={{
          marginTop: '20px',
          fontSize: '1.25rem',
        }}
      >
        Entonces... Estás en el lugar CORRECTO
      </Typography>

      <Box
        sx={{
          width: '100%',
          marginTop: '30px',
        }}
      >
        <Video
          src={videos.link}
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowfullscreen
        ></Video>
      </Box>
    </>
  );
};

const Video = styled.iframe`
  width: 100%;
  height: 315px;
  border: 1px solid rgba(255, 255, 255, 0.5);
`;

export default VideoComponent;
