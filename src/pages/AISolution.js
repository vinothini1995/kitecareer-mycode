// src/pages/AISolution.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faNetworkWired, faMicrochip, faCogs } from '@fortawesome/free-solid-svg-icons';
import bannerImage from '../images/AI&IOTbanner.jpg'; // Adjust the path to your banner image
import Header from '../components/Header';
import { Helmet } from 'react-helmet';

// Define keyframes for animations
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
  background: url(${bannerImage}) no-repeat center center/cover;
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
    color:white;
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

// AI Solution Page Component
const AISolution = () => {
  return (
    <div>
      <Helmet>
        <title>Service-AISolution</title>
      </Helmet>
      <Header />
      <PageContainer>
        <Banner />
        <Header1>AI Services</Header1>
        <Description>
          Discover our AI solutions that are designed to transform industries by automating workflows, enhancing decision-making, and creating intelligent systems that revolutionize the way businesses operate.
        </Description>
        <CardContainer>
          {/* AI Card */}
          <Card>
            <IconContainer>
              <FontAwesomeIcon icon={faRobot} />
            </IconContainer>
            <CardTitle>Artificial Intelligence</CardTitle>
            <CardDescription>
              Leverage our AI expertise to automate workflows, enhance decision-making, and create intelligent solutions that transform businesses.
            </CardDescription>
          </Card>

          {/* Data Analytics Card */}
          <Card>
            <IconContainer>
              <FontAwesomeIcon icon={faNetworkWired} />
            </IconContainer>
            <CardTitle>Data Analytics</CardTitle>
            <CardDescription>
              Unlock the full potential of your data with our advanced analytics services, helping you gain valuable insights for smarter decisions.
            </CardDescription>
          </Card>

          {/* Machine Learning Card */}
          <Card>
            <IconContainer>
              <FontAwesomeIcon icon={faMicrochip} />
            </IconContainer>
            <CardTitle>Machine Learning</CardTitle>
            <CardDescription>
              Build predictive models that learn from data, enabling automated decision-making, risk assessment, and optimization processes.
            </CardDescription>
          </Card>

          {/* AI-Powered Automation Card */}
          <Card>
            <IconContainer>
              <FontAwesomeIcon icon={faCogs} />
            </IconContainer>
            <CardTitle>AI-Powered Automation</CardTitle>
            <CardDescription>
              Automate repetitive tasks and optimize workflows using AI to increase productivity and reduce operational costs.
            </CardDescription>
          </Card>

        </CardContainer>
      </PageContainer>
    </div>
  );
};

export default AISolution;
