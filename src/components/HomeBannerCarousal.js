import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../images/logo1.png'
import banner2 from '../images/logo1.png';
import banner3 from '../images/logo1.png';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  width: 100%;
  max-height: 500px;
  overflow: hidden;
  img {
    width: 100%;
    object-fit: cover;
  }
`;

function HomeBannerCarousel() {
  return (
    <CarouselContainer>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First Slide Heading</h3>
            <p>First Slide Description</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second Slide Heading</h3>
            <p>Second Slide Description</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third Slide Heading</h3>
            <p>Third Slide Description</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </CarouselContainer>
  );
}
export default HomeBannerCarousel;
