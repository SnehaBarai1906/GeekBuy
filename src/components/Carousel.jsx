// src/components/Carousel.jsx
import React from 'react';
import Slider from 'react-slick';
import { Box, Fade, Image } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade:true
  };

  return (
    <Box maxW="1500px" mx="auto" mt="2">
      <Slider {...settings}>
        <Box>
          <Image src="https://img.gkbcdn.com/s3/pi/20240712/ban1.jpg" alt="Slide 1" />
        </Box>
        <Box>
          <Image src="https://img.gkbcdn.com/s3/pi/20240710/ban1.jpg" alt="Slide 2" />
        </Box>
        <Box>
          <Image src="https://img.gkbcdn.com/pi/20240625/ban1._p1_.jpg" alt="Slide 3" />
        </Box>
        <Box>
          <Image src="https://img.gkbcdn.com/s3/pi/20240709/ban1.jpg" alt="Slide 4" />
        </Box>
        
      </Slider>
    </Box>
  );
};

export default Carousel;
