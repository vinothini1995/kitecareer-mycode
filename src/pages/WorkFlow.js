import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import styled from 'styled-components';
import bgimg from '../images/gradient.jpg'
// Styles for your workflow section

const WorkflowContainer = styled.div`
  display: flex;
  flex-direction: row;
//   align-items: center;
  padding: 40px;
  background:url(${bgimg});
  background-position:fit;
  background-repeat:norepeat;

`;

const Step = styled.div`
  margin-bottom: 30px;
  text-align: center;
//   background:blue;
  display:flex;
  flex-direction:column;
  width:100%;
  gap:22px;
  padding:20px;
`;

const StepCircle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 24px;
  transition: background-color 0.3s ease-in-out;
animation: blink 1.5s infinite; /* Add the animation */


  &:hover {
    background-color: ${(props) => props.hoverColor};
  }
      /* Blinking animation */
  @keyframes blink {
    0% {
      opacity: 0.5;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;

const StepHeading = styled.h3`
  margin: 10px 0;
  display:flex;
  color:white;
`;

const StepContent = styled.p`
  font-size: 16px;
  max-width: 300px;
  text-align:justify;
  color:white;
`;

const ProjectHeading = styled.h2`
  margin-top: 70px;
  font-size: 32px;
`;

// Main component
const Workflow = () => {
  // Initialize AOS animations
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out',
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <>
      {/* Workflow Diagram Section */}
      <ProjectHeading style={{ color: 'black' }}>Our Work Process</ProjectHeading>
      <WorkflowContainer>
        <Step data-aos="fade-up">
          <StepCircle color="#f44336" hoverColor="orange">1</StepCircle>
          <StepHeading>Discovery</StepHeading>
          <StepContent>
            We begin with an in-depth discovery phase to understand the client's needs, business goals, and the project requirements. This helps us tailor the solution to meet your specific needs.
          </StepContent>
        </Step>

        <Step data-aos="fade-up" data-aos-delay="200">
          <StepCircle color="#2196f3" hoverColor="orange">2</StepCircle>
          <StepHeading>Planning</StepHeading>
          <StepContent>
            Once we have a clear understanding of your requirements, we move into planning. We outline the project scope, timeline, and resources needed to bring the vision to life.
          </StepContent>
        </Step>

        <Step data-aos="fade-up" data-aos-delay="400">
          <StepCircle color="#4caf50" hoverColor="orange">3</StepCircle>
          <StepHeading>Design</StepHeading>
          <StepContent>
            Our design team crafts intuitive and aesthetically pleasing interfaces that offer seamless user experiences. Every element is carefully chosen to reflect your brand identity.
          </StepContent>
        </Step>

        <Step data-aos="fade-up" data-aos-delay="600">
          <StepCircle color="#ff9800" hoverColor="green">4</StepCircle>
          <StepHeading>Development</StepHeading>
          <StepContent>
            With the design approved, our development team builds the solution using the latest technologies. We ensure that the product is scalable, secure, and performs efficiently.
          </StepContent>
        </Step>

        <Step data-aos="fade-up" data-aos-delay="800">
          <StepCircle color="#9c27b0" hoverColor="orange">5</StepCircle>
          <StepHeading>Testing & Launch</StepHeading>
          <StepContent>
            Before going live, we rigorously test the solution to eliminate any bugs or issues. Once everything is tested and approved, we launch the project and provide ongoing support.
          </StepContent>
        </Step>
      </WorkflowContainer>
    </>
  );
};

export default Workflow;
