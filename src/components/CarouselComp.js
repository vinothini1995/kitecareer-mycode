import React from 'react';
import Slider from 'react-slick';
import styled, { keyframes } from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../images/carousel1.jpeg';
import image2 from '../images/carousel2.jpeg';
import image3 from '../images/carousel3.jpeg';
import image4 from '../images/carousel4.jpeg';

// Keyframes for top-to-bottom animation
const slideDown = keyframes`
  from { transform: translateY(-100%); }
  to { transform: translateY(0); }
`;

// Styled components for carousel container and image
const CarouselContainer = styled.div`
  width: 100vw; /* Full viewport width */
  height: 400px; /* Adjust height as needed */
  overflow: hidden;
  position: relative;
`;

const CarouselImageWrapper = styled.div`
  width: 100%;  /* Ensure wrapper takes full width */
  height: 100%; /* Ensure wrapper takes full height */
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${slideDown} 1s ease-in-out;
  position: relative;
`;

const CarouselImage = styled.img`
  width: 100%;    /* Ensure image takes full width of the wrapper */
  height: 100%;   /* Ensure image takes full height */
  object-fit: cover;  /* Fill the container while maintaining aspect ratio */
  border-radius:20px;
  `;

const CarouselComp = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <CarouselContainer>
      <Slider {...settings}>
        <CarouselImageWrapper>
          <CarouselImage src={image1} alt="Slide 1" />
        </CarouselImageWrapper>
        <CarouselImageWrapper>
          <CarouselImage src={image2} alt="Slide 2" />
        </CarouselImageWrapper>
        <CarouselImageWrapper>
          <CarouselImage src={image3} alt="Slide 3" />
        </CarouselImageWrapper>
        <CarouselImageWrapper>
          <CarouselImage src={image4} alt="Slide 4" />
        </CarouselImageWrapper>
      </Slider>
    </CarouselContainer>
  );
};

export default CarouselComp;
