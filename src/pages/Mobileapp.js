import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import bgImage from '../images/mobileappbg.jpg';
import mobile1 from '../images/BG1.webp';
import mobile2 from '../images/BG1.webp';
import mobile3 from '../images/BG1.webp';
import { div } from 'framer-motion/client';
import Header from '../components/Header';

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const MobileAppSection = styled.section`
  background-image: url('${bgImage}');
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  animation: ${fadeIn} 0.8s ease-in-out;
`;

const Heading = styled.h1`
  font-size: 3.5rem;
  color: white;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
`;

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  width: 100%;
  max-width: 600px;
  transition: transform 0.5s;

  &:hover {
    transform: scale(1.05);
  }
`;

const AppImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 15px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
  margin-bottom: 1rem;
`;

const AppTitle = styled.h2`
  font-size: 2rem;
  color: #ffcc00;
  margin-bottom: 0.5rem;
`;

const AppDescription = styled.p`
  font-size: 1.2rem;
  color: white;
  max-width: 500px;
`;

const Mobileapp = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  return (
    <div><Header />
    <MobileAppSection>
      <Heading>Explore Our Mobile Applications</Heading>

      <AppWrapper data-aos="fade-up">
        <AppImage src={mobile1} alt="Mobile App 1" />
        <AppTitle>Mobile App 1</AppTitle>
        <AppDescription>
          A robust app for seamless user experience and features.
        </AppDescription>
      </AppWrapper>

      <AppWrapper data-aos="fade-up" data-aos-delay="200">
        <AppImage src={mobile2} alt="Mobile App 2" />
        <AppTitle>Mobile App 2</AppTitle>
        <AppDescription>
          A feature-rich app designed to cater to your needs.
        </AppDescription>
      </AppWrapper>

      <AppWrapper data-aos="fade-up" data-aos-delay="400">
        <AppImage src={mobile3} alt="Mobile App 3" />
        <AppTitle>Mobile App 3</AppTitle>
        <AppDescription>
          An innovative app with the latest technologies.
        </AppDescription>
      </AppWrapper>
    </MobileAppSection>
    </div>
  );
};

export default Mobileapp;
