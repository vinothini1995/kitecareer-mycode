// src/pages/CloudComputingService.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faServer, faDatabase, faShieldAlt, faSyncAlt, faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import bannerImage from '../images/Cloudbanner.jpg'; // Adjust the path to your banner image
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

// Cloud Computing Service Page Component
const Cloudcomputing = () => {
  return (
    <div>
      <Header />
      <PageContainer>
        <Banner />
        <Header1>Cloud Computing Services</Header1>
        <Description>
          Discover our cutting-edge cloud computing solutions that provide scalability, security, and efficiency for modern businesses. We offer customized cloud strategies to enhance your IT infrastructure.
        </Description>
        <CardContainer>
          {/* Cloud Infrastructure Card */}
          <Card>
            <IconContainer>
              <FontAwesomeIcon icon={faCloud} />
            </IconContainer>
            <CardTitle>Cloud Infrastructure</CardTitle>
            <CardDescription>
              Build scalable, secure, and highly available cloud infrastructures tailored to meet your business requirements.
            </CardDescription>
          </Card>

          {/* Serverless Architecture Card */}
          <Card>
            <IconContainer>
              <FontAwesomeIcon icon={faServer} />
            </IconContainer>
            <CardTitle>Serverless Architecture</CardTitle>
            <CardDescription>
              Focus on building your application, while we manage the backend infrastructure with our serverless computing solutions.
            </CardDescription>
          </Card>

          {/* Data Storage Card */}
          <Card>
            <IconContainer>
              <FontAwesomeIcon icon={faDatabase} />
            </IconContainer>
            <CardTitle>Cloud Data Storage</CardTitle>
            <CardDescription>
              Store and manage your data securely on the cloud with unlimited scalability and fast access from anywhere.
            </CardDescription>
          </Card>

          {/* Cloud Security Card */}
          <Card>
            <IconContainer>
              <FontAwesomeIcon icon={faShieldAlt} />
            </IconContainer>
            <CardTitle>Cloud Security</CardTitle>
            <CardDescription>
              Protect your cloud environments with comprehensive security solutions, ensuring data integrity and compliance.
            </CardDescription>
          </Card>

          {/* Disaster Recovery Card */}
          <Card>
            <IconContainer>
              <FontAwesomeIcon icon={faSyncAlt} />
            </IconContainer>
            <CardTitle>Disaster Recovery</CardTitle>
            <CardDescription>
              Minimize downtime and protect your data with our robust disaster recovery and backup solutions in the cloud.
            </CardDescription>
          </Card>

          {/* Cloud Migration Card */}
          <Card>
            <IconContainer>
              <FontAwesomeIcon icon={faCloudUploadAlt} />
            </IconContainer>
            <CardTitle>Cloud Migration</CardTitle>
            <CardDescription>
              Seamlessly migrate your existing infrastructure to the cloud with minimal disruption and maximum efficiency.
            </CardDescription>
          </Card>

        </CardContainer>
      </PageContainer>
    </div>
  );
};

export default Cloudcomputing;
