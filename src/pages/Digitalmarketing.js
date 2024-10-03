// src/pages/DigitalMarketing.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn, faChartPie, faEnvelope, faSearch, faUsers, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import marketingBannerImage from '../images/Digitalbanner.jpg'; // Adjust the path to your banner image
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
   background: url(${marketingBannerImage}) no-repeat center center/cover;
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

// Digital Marketing Service Page Component
const Digitalmarketing = () => {
  return (
    <div>
      <Helmet>
        <title>Service-Digitalmarketing</title>
      </Helmet>
      <Header />
      <PageContainer>
        <Banner />
        <Header1>Digital Marketing Services</Header1>
        <Description>
          Enhance your brand's digital presence with our comprehensive digital marketing services. From SEO to email marketing, we help you reach and engage your target audience effectively.
        </Description>
        <CardContainer>
          {/* Search Engine Optimization (SEO) */}
          <Card>
            <IconContainer>
              <FontAwesomeIcon icon={faSearch} />
            </IconContainer>
            <CardTitle>SEO Optimization</CardTitle>
            <CardDescription>
              Boost your website’s visibility and ranking on search engines with tailored SEO strategies.
            </CardDescription>
          </Card>

          {/* Social Media Marketing */}
          <Card>
            <IconContainer>
              <FontAwesomeIcon icon={faUsers} />
            </IconContainer>
            <CardTitle>Social Media Marketing</CardTitle>
            <CardDescription>
              Engage your audience through targeted social media campaigns and boost your online presence.
            </CardDescription>
          </Card>

          {/* Email Marketing */}
          <Card>
            <IconContainer>
              <FontAwesomeIcon icon={faEnvelope} />
            </IconContainer>
            <CardTitle>Email Marketing</CardTitle>
            <CardDescription>
              Connect with your customers and nurture leads through effective email marketing campaigns.
            </CardDescription>
          </Card>

          {/* PPC Advertising */}
          <Card>
            <IconContainer>
              <FontAwesomeIcon icon={faChartPie} />
            </IconContainer>
            <CardTitle>PPC Advertising</CardTitle>
            <CardDescription>
              Maximize ROI with data-driven pay-per-click advertising campaigns tailored to your business goals.
            </CardDescription>
          </Card>

          {/* Mobile Marketing */}
          <Card>
            <IconContainer>
              <FontAwesomeIcon icon={faMobileAlt} />
            </IconContainer>
            <CardTitle>Mobile Marketing</CardTitle>
            <CardDescription>
              Reach your audience through personalized mobile marketing strategies including SMS and in-app ads.
            </CardDescription>
          </Card>

          {/* Brand Awareness Campaigns */}
          <Card>
            <IconContainer>
              <FontAwesomeIcon icon={faBullhorn} />
            </IconContainer>
            <CardTitle>Brand Awareness</CardTitle>
            <CardDescription>
              Grow your brand’s visibility with comprehensive strategies designed to increase brand awareness.
            </CardDescription>
          </Card>
        </CardContainer>
      </PageContainer>
    </div>
  );
};

export default Digitalmarketing;
