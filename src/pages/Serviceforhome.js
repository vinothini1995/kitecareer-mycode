import React from 'react'
import ServiceCard from '../components/ServiceCard';
import {styled,keyframes } from 'styled-components';
import serviceImage1 from '../images/Product.jpg';
import serviceImage2 from '../images/web.jpg';
import serviceImage3 from '../images/Mobileapp.jpg';
import serviceImage4 from '../images/IOT1.jpg';
import serviceImage5 from '../images/cloud1.jpg';
import serviceImage6 from '../images/blockchain.jpg';
import serviceImage7 from '../images/Digitalmarketing.jpg';
import serviceImage8 from '../images/Training2.jpg';
const Serviceforhome = () => {
    const ServiceContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;
  return (
    <div><h1>Our Services</h1>
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
          title="AI and IoT Solutions"
          content="Providing AI and IoT solutions that enhance automation, connectivity, and data-driven decision-making for smarter operations."
          link="/AIandIOTsolution"
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
        /> <ServiceCard
        image={serviceImage7}
        title="Digital Marketing"
        content="Boosting your online presence with data-driven digital marketing strategies that drive engagement, leads, and business growth."
        link="/Digitalmarketing"
      />
      <ServiceCard
        image={serviceImage8}
        title="Training and Consulting"
        content="Training initiatives focus on enhancing the knowledge, skills, and capabilities of individuals within an organization. It aims to improve employee performance, foster growth, and align workforce skills with organizational goals."
        link="/TrainingConsulting"
      />
       {/* <ServiceCard
       
        title="Talent Acquisition"
        content="We identify, attract, and hire qualified individuals to fill specific roles within your IT organization. It is a strategic function that focuses on finding the right talent to meet current and future staffing needs. We go beyond traditional recruitment by encompassing a holistic approach that includes sourcing, screening, evaluating, and selecting candidates who align with the organization culture, values, skill requirements and provide detailed score cards"
        link="/service2"
      /> */}
        {/* Add more ServiceCard components here */}
      </ServiceContainer>
    </div>
  )
}

export default Serviceforhome