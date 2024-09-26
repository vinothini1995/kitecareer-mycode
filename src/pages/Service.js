// src/pages/Service.js
import React from 'react';
import Header from '../components/Header';
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

import bgimage from '../images/bg.jpg';
// Import other service images here...
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;
const ServiceContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;
const AnimatedDiv = styled.div`
 width: 100%;
  //  max-width: 1200px; /* Control the maximum width */
  background: ${(props) => props.bgColor || 'linear-gradient(to right, #295F98, #ffffff)'}; /* Linear gradient fallback */
  padding: 60px;
    box-sizing: border-box; /* Include padding in the width */

  // margin-bottom: 20px;
  height:190px;
  text-align:center;
  align-item:center;
  justify-content:center;
  color: white;
  // border-radius: 10px;
  animation: ${fadeIn} 1s ease-in-out; /* Add fade-in animation */
  transition: transform 0.3s ease; /* Smooth hover effect */
  

  &:hover {
    transform: scale(1.05); /* Slightly enlarge on hover */
  }
`;
const Wrapper = styled.div`
  overflow: hidden; /* Prevents horizontal scrollbar */
  width: 100%;
`;
const LastSection=styled.div`
padding-bottom:40px;
`;
const Service = () => {
  return (
    <div>
      <Header />
      <Wrapper>
      <AnimatedDiv bgColor="linear-gradient(to right, #295F98, #ffffff)" style={{textAlign:'center'}}>
<h1>"Transforming Ideas into Impactful Solutions"</h1>
        {/* <p>We leverage cutting-edge technologies to create custom solutions that help businesses thrive. Whether it's building intuitive mobile apps, developing secure web platforms, or integrating AI and machine learning into your operations, our services are designed to transform your digital footprint. Our focus is not just on delivering a solution but on ensuring it drives real, measurable value for your business.</p> */}

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
      <LastSection>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
  <div style={{height:'500px',width:'700px',border:'2px solid purple',padding:'30px',margin:'30px',backgroundImage: `url(${bgimage})`,backgroundSize: 'cover',color:'white',borderRadius:'10px'}}>
    <h1>What We Make?</h1>
    <p>We make the web simple for the users. We have made significant changes by the way we relate to the upcoming technologies.</p>
    <div style={{height:'300px',width:'500px',border:'2px solid purple',padding:'30px',margin:'30px'}}>
      <h1>Why Us?</h1>
      <p>We think differently. We like to think that our services stand out from the competition as we are passionate about the performance.</p>
      <div style={{height:'100px',width:'400px',border:'2px solid purple',padding:'30px',margin:'30px'}}>
        <h1>What We Do?</h1>
        <p>We approach the hard-to-reach brand decision, intelligently as an extension of emerging technologies.</p>
      </div>
    </div>
  </div>

  {/* Right-side hello div with cards */}
  <div style={{ alignSelf: 'flex-start', marginRight: '300px', marginTop: '30px' }}>
    {/* Card 1 */}
    <h1>Our Advanced Services</h1>
    <div style={{ backgroundColor: '#295F98', height: '120px', width: '450px', marginBottom: '20px', padding: '10px', borderRadius: '10px', color: 'white',cursor:'pointer'}}>
      <h3>AI/ML</h3><hr />
      <p style={{textAlign:'justify'}}>Enhancing your business with AI/ML services for smart automation and predictive insights.</p>
    </div>

    {/* Card 2 */}
    <div style={{ backgroundColor: '#295F98', height: '120px', width: '450px', marginBottom: '20px', padding: '10px', borderRadius: '10px', color: 'white' }}>
      <h3>CYBERSECURITY</h3><hr />
      <p style={{textAlign:'justify'}}>Protecting your digital assets with advanced cybersecurity solutions that ensure robust defense against evolving threats</p>
    </div>

    {/* Card 3 */}
    <div style={{ backgroundColor: '#295F98', height: '120px', width: '450px', padding: '10px', borderRadius: '10px', color: 'white' }}>
      <h3>Salesforce Development</h3><hr />
      <p style={{textAlign:'justify'}}>Optimizing customer relationships and business processes with tailored Salesforce development and seamless integration.</p>
    </div>
    
  </div>
</div>
</LastSection>
    </div>
  );
};
export default Service;
