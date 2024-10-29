import React from 'react';
import styled, { keyframes } from 'styled-components';
import AIAbout from '../images/aiabout.avif';
import IOTAbout from '../images/aboutiot.jpg';
import BlockchainAbout from '../images/blockchainabt.avif';
import MachineAbout from '../images/aboutml.jpg';
import SalesAbout from '../images/aboutsales.avif';
import CloudAbout from '../images/cloudabout.avif';

// Define animations
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

// Apply animation to ServiceItem
const ServiceItem = styled.div`
  flex: 1;
  padding: 20px;
  animation: ${fadeIn} 1.5s ease-in-out; /* Fade-in effect on page load */
  text-align: left;
  background:#FFF2D7;
  border-radius:20px;
    margin-left:10px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;
const ServiceItem1 = styled.div`
  flex: 1;
  padding: 20px;
  border-radius:10px;
  margin-right:10px;
  animation: ${fadeIn} 1.5s ease-in-out; /* Fade-in effect on page load */
  text-align: left;
  background:#FFE0B5;
  @media (max-width: 768px) {
    text-align: center;
  }
`;
// Apply animation to CenterImage
const CenterImage = styled.img`
  max-width: 300px;
  width: 100%; /* Ensures the image takes up 100% of the container */
  border-radius: 10px;
  margin: 0 50px;
  animation: ${slideIn} 1.5s ease-in-out; /* Slide-in effect on page load */

  @media (max-width: 768px) {
    max-width: 200px; /* Reduce max-width for small screens */
    margin: 20px 0; /* Adjust image margin for small screens */
  }

  @media (max-width: 480px) {
    max-width: 150px; /* Further reduce size on very small screens */
  }
`;

const ServicesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack the items vertically on small screens */
    margin-bottom: 20px;

    &:nth-child(odd) {
      flex-direction: column-reverse; /* Reverse order for odd services on mobile */
    }
  }
`;

const ProjectHeading = styled.h1`
  text-align: center;
  margin-bottom: 40px;
`;

// Your service section component
const ServicesSection = () => (
  <>
    {/* Services Section */}
    <ProjectHeading style={{ color: 'black' }}>We Provide A Wide Range Of Creative Services</ProjectHeading>

    <ServicesWrapper>
      {/* First service */}
      <ServiceItem>
        <h1>Artificial Intelligence (AI)</h1>
        <p style={{ textAlign: 'justify' }}>
          We lead in AI by leveraging cutting-edge technologies like machine learning, natural language processing (NLP), and predictive analytics to deliver innovative solutions that drive business success. Our AI expertise enables organizations to automate processes, improve decision-making, and gain deep insights into their operations. From personalized customer experiences to intelligent data analytics, our AI solutions are designed to meet the unique needs of each client.
        </p>
      </ServiceItem>

      {/* Center image */}
      <CenterImage src={AIAbout} alt="AI Service Image" />
    </ServicesWrapper>

    {/* Second service */}
    <ServicesWrapper>
      <CenterImage src={IOTAbout} alt="IoT Service Image" />

      <ServiceItem1>
        <h1>Internet Of Things (IoT)</h1>
        <p style={{ textAlign: 'justify' }}>
          Our expertise in IoT enables businesses to seamlessly integrate smart devices, sensors, and networks, creating interconnected systems that drive efficiency, enhance data collection, and enable real-time decision-making. By connecting physical devices to the digital world, we help organizations gain valuable insights and improve their overall performance.
        </p>
      </ServiceItem1>
    </ServicesWrapper>

    {/* Third service */}
    <ServicesWrapper>
      <ServiceItem>
        <h1>Blockchain</h1>
        <p style={{ textAlign: 'justify' }}>
          Our blockchain expertise helps businesses leverage decentralized, secure, and transparent solutions to revolutionize how they operate. Blockchain is transforming industries by providing tamper-proof records, improving transaction efficiency, and enhancing trust between parties through its distributed ledger technology.
        </p>
      </ServiceItem>

      <CenterImage src={BlockchainAbout} alt="Blockchain Service Image" />
    </ServicesWrapper>

    {/* Fourth service */}
    <ServicesWrapper>
      <CenterImage src={MachineAbout} alt="Machine Learning Service Image" />

      <ServiceItem1>
        <h1>Machine Learning</h1>
        <p style={{ textAlign: 'justify' }}>
          Machine Learning (ML) is at the core of our data-driven solutions, empowering businesses to transform raw data into actionable insights. By developing predictive models, automation systems, and intelligent algorithms, we help organizations leverage the power of ML to make faster, more accurate decisions.
        </p>
      </ServiceItem1>
    </ServicesWrapper>

    {/* Fifth service */}
    <ServicesWrapper>
      <ServiceItem>
        <h1>Salesforce</h1>
        <p style={{ textAlign: 'justify' }}>
          Transform your business with Salesforce's powerful CRM solutions, enhancing customer relationships and streamlining processes. Maximize efficiency with tailored automation and data-driven insights. Leverage Salesforce's extensive ecosystem to unlock new opportunities for growth and collaboration, ensuring your team has the tools to succeed in a competitive market.
        </p>
      </ServiceItem>

      <CenterImage src={SalesAbout} alt="Salesforce Service Image" />
    </ServicesWrapper>

    {/* Sixth service */}
    <ServicesWrapper>
      <CenterImage src={CloudAbout} alt="Cloud Service Image" />

      <ServiceItem1>
        <h1>Cloud Services</h1>
        <p style={{ textAlign: 'justify' }}>
          Harness the power of cloud solutions to scale your business securely and efficiently. With the ever-evolving landscape of technology, adopting cloud services is essential for staying competitive and agile. Empower your organization with innovative tools that enhance productivity and drive growth while adapting to the dynamic demands of your industry.
        </p>
      </ServiceItem1>
    </ServicesWrapper>
  </>
);

export default ServicesSection;
