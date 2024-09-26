// src/pages/ProductDevelopment.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faDraftingCompass, faTasks, faCode, faTools, faRocket } from '@fortawesome/free-solid-svg-icons';
import productBanner from '../images/Productbanner.jpg'; // Replace with your banner image path
import Header from '../components/Header';

// Keyframes for animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideIn = keyframes`
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
`;

// Styled components
const PageContainer = styled.div`
  padding-bottom: 40px;
  background: linear-gradient(to right, #295F98, #ffffff);
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Banner = styled.div`
  width: 100%;
 height: 100vh;
   background: url(${productBanner}) no-repeat center center/cover;
  margin-bottom: 40px;
  animation: ${fadeIn} 1s ease-out;
`;

const Header1 = styled.h1`
  font-size: 2.5rem;
  animation: ${fadeIn} 1s ease-out;
`;

const Description = styled.p`
  font-size: 1.2rem;
  text-align: center;
  max-width: 800px;
  animation: ${fadeIn} 1s ease-out;
  margin-bottom: 40px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 40px;
`;

const Card = styled.div`
  background-color: #fff;
  color: #295F98;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 300px;
  text-align: center;
  padding: 20px;
  transition: transform 0.3s ease;
  animation: ${slideIn} 1s ease-out;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
    background:#295F98;
    color:white
  }
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 15px;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 20px;
`;

const IconContainer = styled.div`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #295F98;
  transition: transform 0.3s ease;

  ${Card}:hover & {
    transform: scale(1.2);
    color:white;
  }
`;

// Product Development Service Page Component
const Productdevelopment = () => {
  return (
    <div>
      <Header />
      <PageContainer>
        <Banner />
        <Header1>Product Development Services</Header1>
        <Description>
          Our comprehensive product development services provide end-to-end solutions, from ideation to product launch. We integrate cutting-edge technology, agile methodologies, and customer-centric design to bring your ideas to life.
        </Description>
        <CardContainer>
          {/* Product Design */}
          <Card>
            <IconContainer>
              <FontAwesomeIcon icon={faDraftingCompass} />
            </IconContainer>
            <CardTitle>Product Design</CardTitle>
            <CardDescription>
              From wireframes to detailed product designs, we ensure a user-centric, aesthetically pleasing, and functional design.
            </CardDescription>
          </Card>

          {/* Software Development */}
          <Card>
            <IconContainer>
              <FontAwesomeIcon icon={faCode} />
            </IconContainer>
            <CardTitle>Software Development</CardTitle>
            <CardDescription>
              Our team of experts develops custom software solutions to meet your business needs, with a focus on performance and scalability.
            </CardDescription>
          </Card>

          {/* Testing & QA */}
          <Card>
            <IconContainer>
              <FontAwesomeIcon icon={faTasks} />
            </IconContainer>
            <CardTitle>Testing & QA</CardTitle>
            <CardDescription>
              Ensure product quality with our rigorous testing and QA processes, delivering a bug-free, reliable product.
            </CardDescription>
          </Card>

          {/* Prototyping */}
          <Card>
            <IconContainer>
              <FontAwesomeIcon icon={faTools} />
            </IconContainer>
            <CardTitle>Prototyping</CardTitle>
            <CardDescription>
              Rapid prototyping to visualize your ideas and test functionalities before the full-scale development.
            </CardDescription>
          </Card>

          {/* Launch & Deployment */}
          <Card>
            <IconContainer>
              <FontAwesomeIcon icon={faRocket} />
            </IconContainer>
            <CardTitle>Launch & Deployment</CardTitle>
            <CardDescription>
              Seamless product launch and deployment services to ensure your product is ready for the market without delays.
            </CardDescription>
          </Card>

          {/* Post-launch Support */}
          <Card>
            <IconContainer>
              <FontAwesomeIcon icon={faCogs} />
            </IconContainer>
            <CardTitle>Post-launch Support</CardTitle>
            <CardDescription>
              Continuous support and maintenance to keep your product up-to-date and functioning optimally post-launch.
            </CardDescription>
          </Card>
        </CardContainer>
      </PageContainer>
    </div>
  );
};

export default Productdevelopment;
