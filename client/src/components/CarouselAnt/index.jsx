import { Carousel } from 'antd';

const CarouselAnt = ({ Component, data }) => (
  <Carousel autoplay>
    {data.map((el, index) => (
      <Component key={index} {...el} />
    ))}
  </Carousel>
);
export default CarouselAnt;
