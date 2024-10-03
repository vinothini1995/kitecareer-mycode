// src/pages/BlockchainDevelopment.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faLock, faCubes, faHandshake, faKey, faChartLine } from '@fortawesome/free-solid-svg-icons';
import blockchainBannerImage from '../images/Blockchainbanner.jpg'; // Adjust the path to your banner image
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
  background: url(${blockchainBannerImage}) no-repeat center center/cover;
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

// Blockchain Development Service Page Component
const Blockchaindevelopment = () => {
  return (
    <div>
      <Helmet>
        <title>Service-Blockchaindevelopment</title>
      </Helmet>
      <Header />

      <PageContainer>
        <Banner />
        <Header1>Blockchain Development Services</Header1>
        <Description>
          Explore our secure and scalable blockchain solutions designed to bring transparency, trust, and innovation to your business processes.
        </Description>
        <CardContainer>
          {/* Smart Contracts Development */}
          <Card>
            <IconContainer>
              <FontAwesomeIcon icon={faLink} />
            </IconContainer>
            <CardTitle>Smart Contracts</CardTitle>
            <CardDescription>
              Develop secure and self-executing smart contracts to automate and streamline transactions.
            </CardDescription>
          </Card>

          {/* Blockchain Security */}
          <Card>
            <IconContainer>
              <FontAwesomeIcon icon={faLock} />
            </IconContainer>
            <CardTitle>Blockchain Security</CardTitle>
            <CardDescription>
              Ensure the highest level of security for your blockchain applications, protecting your data and assets.
            </CardDescription>
          </Card>

          {/* Decentralized Applications (DApps) */}
          <Card>
            <IconContainer>
              <FontAwesomeIcon icon={faCubes} />
            </IconContainer>
            <CardTitle>DApp Development</CardTitle>
            <CardDescription>
              Build decentralized applications (DApps) that leverage blockchain technology for transparency and trust.
            </CardDescription>
          </Card>

          {/* Private Blockchain Solutions */}
          <Card>
            <IconContainer>
              <FontAwesomeIcon icon={faHandshake} />
            </IconContainer>
            <CardTitle>Private Blockchain</CardTitle>
            <CardDescription>
              Deploy private blockchain solutions for secure, permissioned networks within your enterprise.
            </CardDescription>
          </Card>

          {/* Cryptography */}
          <Card>
            <IconContainer>
              <FontAwesomeIcon icon={faKey} />
            </IconContainer>
            <CardTitle>Cryptography</CardTitle>
            <CardDescription>
              Implement advanced cryptographic algorithms to secure your blockchain applications and data.
            </CardDescription>
          </Card>

          {/* Blockchain Consulting */}
          <Card>
            <IconContainer>
              <FontAwesomeIcon icon={faChartLine} />
            </IconContainer>
            <CardTitle>Blockchain Consulting</CardTitle>
            <CardDescription>
              Receive expert guidance on integrating blockchain technology into your business strategy for optimal results.
            </CardDescription>
          </Card>

        </CardContainer>
      </PageContainer>
    </div>
  );
};

export default Blockchaindevelopment;
