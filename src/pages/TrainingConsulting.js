// src/pages/TrainingConsulting.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher, faLightbulb, faUserCog, faBriefcase } from '@fortawesome/free-solid-svg-icons'; // Added icons for new content
import bannerImage from '../images/Trainingbannerfinal.jpg'; // Adjust the path to your image
import Header from '../components/Header';

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
 height: 100vh;  background: url(${bannerImage}) no-repeat center center/cover;
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

// TrainingConsulting Component
const TrainingConsulting = () => {
  return (
    <div>
      <Header />
      <PageContainer>
        <Banner />
        <Header1>Training and Consulting Services</Header1>
        <Description>
          Our training and consulting services are designed to equip individuals and businesses with the knowledge and skills they need to succeed in a rapidly evolving technological landscape.
        </Description>
        <CardContainer>
          <Card>
            <IconContainer>
              <FontAwesomeIcon icon={faChalkboardTeacher} />
            </IconContainer>
            <CardTitle>Technical Training</CardTitle>
            <CardDescription>
              We offer expert-led training programs to enhance technical skills, covering the latest in development, cloud, and more.
            </CardDescription>
          </Card>

          <Card>
            <IconContainer>
              <FontAwesomeIcon icon={faLightbulb} />
            </IconContainer>
            <CardTitle>Strategic Consulting</CardTitle>
            <CardDescription>
              Our consulting services help businesses innovate and implement strategies that drive success in the digital age.
            </CardDescription>
          </Card>

          {/* New Card: Business Consulting */}
          {/* <Card>
            <IconContainer>
              <FontAwesomeIcon icon={faBriefcase} />
            </IconContainer>
            <CardTitle>Business Consulting</CardTitle>
            <CardDescription>
              We provide in-depth business consulting to help streamline operations, improve efficiency, and grow sustainably.
            </CardDescription>
          </Card> */}

          {/* New Card: Leadership Development */}
          <Card>
            <IconContainer>
              <FontAwesomeIcon icon={faUserCog} />
            </IconContainer>
            <CardTitle>Leadership Development</CardTitle>
            <CardDescription>
              Our leadership programs are designed to cultivate effective leaders, focusing on strategic thinking, decision-making, and team management.
            </CardDescription>
          </Card>

        </CardContainer>
      </PageContainer>
    </div>
  );
};

export default TrainingConsulting;
