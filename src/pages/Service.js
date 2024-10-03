// src/pages/Service.js
import React from 'react';
import Header from '../components/Header';
import { Helmet } from 'react-helmet';
import ServiceCard from '../components/ServiceCard';
import { styled, keyframes } from 'styled-components';
import serviceImage1 from '../images/Product.jpg';
import serviceImage2 from '../images/web.jpg';
import serviceImage3 from '../images/Mobileapp.jpg';
import serviceImage4 from '../images/AIservice.avif';
import serviceImage5 from '../images/cloud1.jpg';
import serviceImage6 from '../images/blockchain.jpg';
import serviceImage7 from '../images/Digitalmarketing.jpg';
import serviceImage8 from '../images/Training2.jpg';
import serviceImage9 from '../images/IOT.avif';
import bgimage from '../images/bg.jpg';

// Keyframe animation for fade-in effect
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Service container with responsive styling
const ServiceContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

// Animated div for header section with responsive text alignment
const AnimatedDiv = styled.div`
  width: 100%;
  background: ${(props) => props.bgColor || 'linear-gradient(to right, #295F98, #ffffff)'};
  padding: 60px;
  box-sizing: border-box;
  height: auto;
  text-align: center;
  color: white;
  animation: ${fadeIn} 1s ease-in-out;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    padding: 40px;
  }
`;

const Wrapper = styled.div`
  overflow: hidden;
  width: 100%;
`;

// Responsive last section container
const LastSection = styled.div`
  padding: 40px 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  min-width: 300px;
  margin: 20px;
  background: url(${bgimage}) no-repeat center center;
  background-size: cover;
  color: white;
  padding: 30px;
  border-radius: 10px;
  border: 2px solid purple;
  max-width: 100%; // Ensures it doesn't overflow

  h1, p {
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    margin: 0; // Remove margin in small devices
    padding: 20px; // Adjust padding for small screens

  }
`;

const NestedDiv = styled.div`
  background: rgba(0, 0, 0, 0.5);
  padding: 30px;
  border: 2px solid purple;
  margin-top: 30px;
  border-radius: 10px;

  h1, p {
    margin-bottom: 15px;
  }
`;

// Right section containing the advanced services cards
const RightSection = styled.div`
  flex: 1;
  min-width: 300px;
  margin: 20px;

  h1 {
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

// Card styling for services on the right side
const ServiceCardRight = styled.div`
  background-color: #295F98;
  height: auto;
  width: 100%;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 10px;
  color: white;
  cursor: pointer;

  h3 {
    margin-bottom: 10px;
  }

  p {
    text-align: justify;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Service = () => {
  return (
    <div>
      <Helmet>
        <title>Service</title>
      </Helmet>
      <Header />
      <Wrapper>
        <AnimatedDiv bgColor="linear-gradient(to right, #295F98, #ffffff)" style={{ textAlign: 'center' }}>
          <h1>"Transforming Ideas into Impactful Solutions"</h1>
        </AnimatedDiv>
      </Wrapper>

      <ServiceContainer>
        <ServiceCard
          image={serviceImage1}
          title="Product Development"
          content="Delivering tailored software solutions from concept to launch, ensuring innovation and seamless user experiences."
          link="/Productdevelopment"
        />
        <ServiceCard
          image={serviceImage2}
          title="Website Development"
          content="Creating custom, responsive websites designed to elevate your brand and engage your audience."
          link="/Websitedevelopment"
        />
        <ServiceCard
          image={serviceImage3}
          title="Mobile App Development"
          content="Building intuitive, high-performance mobile apps that drive user engagement and business growth."
          link="/Mobileappdevelopment"
        />
        <ServiceCard
          image={serviceImage4}
          title="AI Solutions"
          content="Providing AI solutions that enhance automation, connectivity, and data-driven decision-making for smarter operations."
          link="/AISolution"
        />
        <ServiceCard
          image={serviceImage9}
          title="IOT Solutions"
          content="Providing solutions that enhance automation, connectivity, and data-driven decision-making for smarter operations."
          link="/IOTSolution"
        />
        <ServiceCard
          image={serviceImage5}
          title="Cloud Computing"
          content="Offering scalable cloud computing solutions to optimize performance, enhance security, and streamline business operations."
          link="/Cloudcomputing"
        />
        <ServiceCard
          image={serviceImage6}
          title="Blockchain Development"
          content="Building secure, transparent blockchain solutions to revolutionize transactions, enhance trust, and streamline business operations."
          link="/Blockchaindevelopment"
        />
        <ServiceCard
          image={serviceImage7}
          title="Digital Marketing"
          content="Boosting your online presence with data-driven digital marketing strategies that drive engagement, leads, and business growth."
          link="/Digitalmarketing"
        />
        <ServiceCard
          image={serviceImage8}
          title="Training and Consulting"
          content="Training initiatives focus on enhancing the knowledge, skills, and capabilities of individuals within an organization."
          link="/TrainingConsulting"
        />
      </ServiceContainer>

      <LastSection>
        <LeftSection>
          <h1>What We Make?</h1>
          <p>We make the web simple for the users. We have made significant changes by the way we relate to the upcoming technologies.</p>
          <NestedDiv>
            <h1>Why Us?</h1>
            <p>We think differently. We like to think that our services stand out from the competition as we are passionate about the performance.</p>
            <NestedDiv>
              <h1>What We Do?</h1>
              <p>We approach the hard-to-reach brand decision, intelligently as an extension of emerging technologies.</p>
            </NestedDiv>
          </NestedDiv>
        </LeftSection>

        <RightSection>
          <h1>Our Advanced Services</h1>
          <ServiceCardRight>
            <h3>AI/ML</h3>
            <hr />
            <p>Enhancing your business with AI/ML services for smart automation and predictive insights.</p>
          </ServiceCardRight>
          <ServiceCardRight>
            <h3>CYBERSECURITY</h3>
            <hr />
            <p>Protecting your digital assets with advanced cybersecurity solutions that ensure robust defense against evolving threats.</p>
          </ServiceCardRight>
          <ServiceCardRight>
            <h3>Salesforce Development</h3>
            <hr />
            <p>Optimizing customer relationships and business processes with tailored Salesforce development and seamless integration.</p>
          </ServiceCardRight>
        </RightSection>
      </LastSection>
    </div>
  );
};

export default Service;
