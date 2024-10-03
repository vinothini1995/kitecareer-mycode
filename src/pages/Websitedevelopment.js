// src/pages/WebsiteDevelopment.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faMobileAlt, faSearch, faLock, faShoppingCart, faWrench } from '@fortawesome/free-solid-svg-icons'; // Added faShoppingCart, faWrench for new cards
import bannerImage from '../images/Webbanner.jpg'; // Adjust the path to your image
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

// WebsiteDevelopment Component
const Websitedevelopment = () => {
  return (
    <div>
      <Helmet>
        <title>Service-Website Development</title>
      </Helmet>
      <Header />
      <PageContainer>
        <Banner />
        <Header1>Website Development</Header1>
        <Description>
          We offer top-notch website development services to help your business establish a strong online presence. Our team specializes in creating responsive, user-friendly websites that drive engagement and deliver exceptional user experiences.
        </Description>
        <CardContainer>
          <Card>
            <IconContainer>
              <FontAwesomeIcon icon={faDesktop} />
            </IconContainer>
            <CardTitle>Custom Website Design</CardTitle>
            <CardDescription>
              We design and develop websites tailored to your brand’s unique needs, ensuring an engaging and intuitive user experience.
            </CardDescription>
          </Card>

          <Card>
            <IconContainer>
              <FontAwesomeIcon icon={faMobileAlt} />
            </IconContainer>
            <CardTitle>Responsive Design</CardTitle>
            <CardDescription>
              Our websites are built to be fully responsive, providing a seamless experience across all devices, from desktops to smartphones.
            </CardDescription>
          </Card>

          <Card>
            <IconContainer>
              <FontAwesomeIcon icon={faSearch} />
            </IconContainer>
            <CardTitle>SEO Optimization</CardTitle>
            <CardDescription>
              We implement SEO best practices to enhance your website’s visibility on search engines and drive more organic traffic.
            </CardDescription>
          </Card>

          <Card>
            <IconContainer>
              <FontAwesomeIcon icon={faLock} />
            </IconContainer>
            <CardTitle>Performance & Security</CardTitle>
            <CardDescription>
              We ensure optimal performance and robust security measures to protect your website and provide a smooth user experience.
            </CardDescription>
          </Card>

          {/* New Card: E-commerce Integration */}
          <Card>
            <IconContainer>
              <FontAwesomeIcon icon={faShoppingCart} />
            </IconContainer>
            <CardTitle>E-commerce Integration</CardTitle>
            <CardDescription>
              We integrate secure and scalable e-commerce solutions into your website, enabling seamless online transactions and enhanced user experience.
            </CardDescription>
          </Card>

          {/* New Card: Website Maintenance */}
          <Card>
            <IconContainer>
              <FontAwesomeIcon icon={faWrench} />
            </IconContainer>
            <CardTitle>Website Maintenance</CardTitle>
            <CardDescription>
              Our ongoing maintenance services ensure your website stays up-to-date, functional, and secure, with regular updates and improvements.
            </CardDescription>
          </Card>

        </CardContainer>
      </PageContainer>
    </div>
  );
};

export default Websitedevelopment;
