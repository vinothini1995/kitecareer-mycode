import React from 'react';
import styled, { keyframes, createGlobalStyle } from 'styled-components';
import background from '../images/gradientabout.avif';
import Header from '../components/Header';
import ServiceImage from '../images/aboutbg.jpg'; // Your left-side image
import LeadershipTeam from '../components/LeadershipTeam';
import OurClients from './OurClients';
import bgimg from '../images/techbg.jpg';
import imageabout from '../images/Mobileapp.jpg';
import CountUp from 'react-countup';
import Workflow from '../pages/WorkFlow';
import ServicesSection from './ServicesSection';
import bgaboutimg from '../images/aboutbg.jpg';
import { Helmet } from 'react-helmet';

// Animation for fade-in
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
// Additional CSS Reset
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body, html {
    overflow-x: hidden; /* Ensure no horizontal scroll */
    overflow-y: auto;   /* Manage vertical scroll */
  }
`;
// Container to manage layout
const ProjectContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 40px;
  justify-content: space-between;
  align-items: center;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  animation: ${fadeIn} 1.5s ease-in-out;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack elements vertically on mobile */
    padding: 20px;
  }
`;

// Left-side image that adjusts in mobile
const LeftImage = styled.img`
  width: 50%;
  height: auto; /* Maintain aspect ratio */

  @media (max-width: 768px) {
    width: 100%; /* Full width on mobile */
    margin-bottom: 20px;
  }
`;

// Right-side content container
const RightContent = styled.div`
  width: 50%;
  padding-left: 20px;
  margin-top:20px;
  @media (max-width: 768px) {
    width: 100%;
    padding-left: 0;
  }
`;

// Heading styling
const ProjectHeading = styled.h2`
  color: ${({ textColor }) => textColor || '#000'};
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 320px) {
    font-size: 1.5rem;
  }
`;

// StatBox container
const StatsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack the stats vertically */
  }
`;

// StatBox styling
const StatBox = styled.div`
  width: 20%;
  background: linear-gradient(270deg, #a594f9, #ee66a6, #ffeb55);
  padding: 20px;
  margin: 10px;
   background-size: 400% 400%;
  border-radius: 10px;
  text-align: center;
  color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
   animation: gradientAnimation 4s ease infinite;

  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @media (max-width: 768px) {
    width: 100%; /* Full width on mobile */
    margin: 10px 0;
  }
`;

// Stat number styling
const StatNumber = styled.h2`
  font-size: 25px;

  @media (max-width: 320px) {
    font-size: 20px;
  }
`;

// Stat label styling
const StatLabel = styled.p`
  font-size: 18px;

  @media (max-width: 320px) {
    font-size: 16px;
  }
`;

const About = ({ textColor }) => {
  return (
    <div>
            <GlobalStyle /> {/* Apply the global reset */}

      <Helmet>
        <title>About</title>
      </Helmet>
      <Header />

      {/* Main container with image and content */}
      <ProjectContainer>
        {/* Left-side image */}
        <LeftImage src={ServiceImage} alt="About Us Banner" />

        {/* Right-side content */}
        <RightContent>
          <ProjectHeading textColor={textColor}>About Us</ProjectHeading>
          <p style={{ color: 'black', textAlign: 'justify', fontSize: '20px', padding: '10px' }}>
            KiteCareer, a 6-year startup in IT solutions and services, offers a range of services including Professional Services, Managed Services, and Business Process Outsourcing.
          </p>

          {/* Stat boxes */}
          <StatsContainer>
            <StatBox>
              <StatNumber>
                <CountUp start={0} end={6} duration={2.5} suffix="+" />
              </StatNumber>
              <StatLabel>Years of Experience</StatLabel>
            </StatBox>

            <StatBox>
              <StatNumber>
                <CountUp start={0} end={40} duration={2.5} suffix="+" />
              </StatNumber>
              <StatLabel>Projects Completed</StatLabel>
            </StatBox>

            <StatBox>
              <StatNumber>
                <CountUp start={0} end={50} duration={2.5} suffix="+" />
              </StatNumber>
              <StatLabel>Developers</StatLabel>
            </StatBox>

            <StatBox>
              <StatNumber>
                <CountUp start={2011} end={2018} duration={2.5} separator="" />
              </StatNumber>
              <StatLabel>Founded Year</StatLabel>
            </StatBox>
          </StatsContainer>
        </RightContent>
      </ProjectContainer>

      <Workflow />
      <ServicesSection />
      <LeadershipTeam />
      <OurClients />
    </div>
  );
};

export default About;
