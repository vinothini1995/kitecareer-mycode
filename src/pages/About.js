import React from 'react';
import styled, { keyframes } from 'styled-components';
import background from '../images/gradientabout.avif';
import Header from '../components/Header';
import ServiceImage from '../images/Blockchainbanner.jpg'; // Add your center image here
import LeadershipTeam from '../components/LeadershipTeam'
import OurClients from './OurClients';
import bgimg from '../images/techbg.jpg';
import imageabout from '../images/Mobileapp.jpg';
import CountUp from 'react-countup';
import Workflow from '../pages/WorkFlow';
import ServicesSection from './ServicesSection';
import bgaboutimg from '../images/aboutbg.jpg';
// Animation for section fade-in

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

 
const slideUp = keyframes`
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;
const ProjectContainer = styled.div`
  position: relative;
  // background-image: url(${background});
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  // padding: 100px 0;
  padding-top:40px;
  
  width: 100%;
  display: flex;
  justify-content: left;
  animation: ${fadeIn} 1.5s ease-in-out;
`;

const ContentWrapper = styled.div`
  display: flex;
  margin-top:30px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  
`;
const RightContent = styled.div`
  width: 90%;
  // background:blue;
  height:100vh;
`;

const ProjectHeading = styled.h2`
  color: ${({ textColor }) => textColor || '#000'};
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 50px;
  animation: ${slideUp} 1s ease-in-out;
`;





const StatsContainer = styled.div`
  position: relative; /* Set position relative for child absolute positioning */
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  margin-top: 50px;
  margin-left: 30px;
  height: 100%;
  width: 70%;
  border-radius: 20px;
  overflow: hidden; /* Prevents overflow from the blurred background */
`;
const BackgroundBlur = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  //  width:300px
  height:600px;
  background: url('${bgaboutimg}');
  background-repeat: no-repeat;
   background-position: center;
  background-size: fit;
  // filter: blur(5px); /* Adjust the blur effect as needed */
  z-index: 0; /* Set behind other content */
`;
const StatBox = styled.div`
  position: relative; /* Set position relative for stacking context */
  text-align: center;
 
  margin: 20px;
  z-index: 1; /* Ensure it's above the blurred background */
background: linear-gradient(270deg, #A594F9, #EE66A6, #FFEB55);
  border-radius: 20px;
    background-size: 400% 400%;

    animation: gradientAnimation 10s ease infinite; /* Animation applied here */
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

  padding: 20px; /* Add padding for better spacing */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Optional shadow for depth */
`;

const StatNumber = styled.h2`
  font-size: 25px;
  color: white;
  
`;

const StatLabel = styled.p`
  font-size: 18px;
  color: white;
`;
const FirstSection=styled.div`
 display: flex;
  // justify-content: space-between;
  width: 100px;
  height:200px;
  margin-bottom: 20px;
  
  // background: black;
`;




// About page with workflow diagram
const About = ({ textColor }) => {
  return (
    <div>
      <Header />
      <ProjectContainer>
  <ContentWrapper>
  <StatsContainer>
  <BackgroundBlur />
  {/* <HorizontalLine />
  <VerticalLine /> */}
   
    </StatsContainer>
    {/* <LeftImage src={imageabout} alt="Company Image" /> */}
    <RightContent>
      <ProjectHeading textColor={textColor} style={{ color: 'black' }}>
        About Us
      </ProjectHeading>

      <p style={{ color: 'black', textAlign: 'justify', fontSize: '20px', padding: '10px' }}>
        KiteCareer, a 6-year startup in IT solutions and services, offers a range of services including Professional Services, Managed Services, and Business Process Outsourcing.
        KiteCareer, a 6-year startup in IT solutions and services, offers a range of services including Professional Services, Managed Services, and Business Process Outsourcing.
        </p>
     
      
      <FirstSection>
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
    
     
      {/* <SecondSection> */}
      
      <StatBox>
        <StatNumber>
          <CountUp start={0} end={50} duration={2.5} suffix="+" />
        </StatNumber>
        <StatLabel>Developers</StatLabel>
      </StatBox>

      <StatBox>
        <StatNumber>
          <CountUp start={2011} end={2018} duration={2.5} separator=""  />
        </StatNumber>
        <StatLabel>Founded Year</StatLabel>
      </StatBox>
      </FirstSection>
      {/* </SecondSection> */}
    </RightContent>
  </ContentWrapper>
</ProjectContainer>
<Workflow/>
     <ServicesSection/>
    
      <LeadershipTeam/>
      <OurClients/>
    </div>
  );
};

export default About;
