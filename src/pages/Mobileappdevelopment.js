// src/pages/MobileAppDevelopment.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile, faCode, faShieldAlt, faTools, faPaintBrush, faPlug } from '@fortawesome/free-solid-svg-icons';
import bannerImage from '../images/Mobilebanner.jpg'; // Adjust the path to your image
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

// MobileAppDevelopment Component
const Mobileappdevelopment = () => {
  return (
    <div>
      <Header />
      <PageContainer>
        <Banner />
        <Header1>Mobile App Development</Header1>
        <Description>
          We provide end-to-end mobile app development services that help businesses bring their ideas to life. From concept to launch, we create user-friendly and engaging mobile applications for both Android and iOS platforms.
        </Description>
        <CardContainer>
          <Card>
            <IconContainer>
              <FontAwesomeIcon icon={faMobile} />
            </IconContainer>
            <CardTitle>Native App Development</CardTitle>
            <CardDescription>
              We build high-performance native apps for Android and iOS that provide seamless user experiences across devices.
            </CardDescription>
          </Card>

          <Card>
            <IconContainer>
              <FontAwesomeIcon icon={faCode} />
            </IconContainer>
            <CardTitle>Cross-Platform Solutions</CardTitle>
            <CardDescription>
              Our cross-platform development approach ensures your app runs smoothly on multiple platforms using a single codebase.
            </CardDescription>
          </Card>

          <Card>
            <IconContainer>
              <FontAwesomeIcon icon={faShieldAlt} />
            </IconContainer>
            <CardTitle>App Security & Testing</CardTitle>
            <CardDescription>
              We prioritize security and thoroughly test each app to ensure it meets the highest standards of performance and safety.
            </CardDescription>
          </Card>

          <Card>
            <IconContainer>
              <FontAwesomeIcon icon={faTools} />
            </IconContainer>
            <CardTitle>Maintenance & Support</CardTitle>
            <CardDescription>
              We provide ongoing support and maintenance to ensure your app remains up-to-date and continues to perform optimally.
            </CardDescription>
          </Card>

          {/* New Card 1 */}
          <Card>
            <IconContainer>
              <FontAwesomeIcon icon={faPaintBrush} />
            </IconContainer>
            <CardTitle>UI/UX Design</CardTitle>
            <CardDescription>
              Our expert designers craft intuitive and visually appealing interfaces that enhance user engagement and satisfaction.
            </CardDescription>
          </Card>

          {/* New Card 2 */}
          <Card>
            <IconContainer>
              <FontAwesomeIcon icon={faPlug} />
            </IconContainer>
            <CardTitle>App Integration</CardTitle>
            <CardDescription>
              We integrate apps with various third-party services like payment gateways, social media, and cloud storage solutions.
            </CardDescription>
          </Card>

        </CardContainer>
      </PageContainer>
    </div>
  );
};

export default Mobileappdevelopment;
