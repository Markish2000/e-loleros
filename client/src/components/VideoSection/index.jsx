import { useState } from 'react';
import CarouselCampions from '../Carousel';
import VideoComponent from '../VideoComponent';

const VideoSection = () => {
  const [videos, setVideos] = useState([
    {
      link: 'https://www.youtube.com/embed/vzHrjOMfHPY?controls=0',
      number: 1,
    },
    {
      link: 'https://www.youtube.com/embed/vzHrjOMfHPY?controls=0',
      number: 2,
    },
    {
      link: 'https://www.youtube.com/embed/vzHrjOMfHPY?controls=0',
      number: 3,
    },
  ]);

  return <VideoComponent />;
};

export default VideoSection;
