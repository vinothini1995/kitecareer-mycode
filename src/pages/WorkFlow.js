import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import styled from 'styled-components';
import bgimg from '../images/gradient.jpg'; // Background image

const WorkflowContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 40px;
  background: url(${bgimg}) no-repeat center center;
  background-size: cover;
  min-height: 100vh;
  box-sizing: border-box;
  position: relative; /* Add this line */

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
    min-height: auto;
  }
`;


const Step = styled.div`
  margin: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 22px;
  padding: 20px;
  // background: rgba(0, 0, 0, 0.6); /* Semi-transparent background for readability */
  border-radius: 10px;
  color: white;
  // box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    margin: 10px 0;
    padding: 15px;
  }
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
  animation: blink 1.5s infinite;

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

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 20px;
  }
`;

const StepHeading = styled.h3`
  margin: 10px 0;
  color: white;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const StepContent = styled.p`
  font-size: 16px;
  max-width: 300px;
  text-align: left;
  color: white;

  @media (max-width: 768px) {
    max-width: 100%; /* Allow content to take full width on small screens */
    font-size: 14px;
  }
`;

const ProjectHeading = styled.h2`
  margin: 0px 0 40px 0;
  font-size: 32px;
  text-align: center;
  color: black;

  @media (max-width: 768px) {
    font-size: 24px; /* Reduce font size on smaller screens */
  }
`;
const Arrow = styled.div`
  position: relative;
  width: 150px; /* Width of the arrow line */
  height: 5px; /* Height of the arrow line */
  background-color: white;
  margin-top:70px;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 100%; /* Position the arrow head at the end of the line */
    transform: translateY(-50%);
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 10px solid white; /* Right-facing arrow */
  }
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
      <ProjectHeading>Our Work Process</ProjectHeading>
      <WorkflowContainer>
        <Step data-aos="fade-up">
          
          <StepCircle color="#f44336" hoverColor="orange">1</StepCircle>

          <StepHeading>Discovery</StepHeading>
          <StepContent>
            We begin with an in-depth discovery phase to understand the client's needs, business goals, and the project requirements. This helps us tailor the solution to meet your specific needs.
          </StepContent>
        </Step>
        <Arrow left="calc(20% + 20px)" /> {/* Arrow between steps 1 and 2 */}

        <Step data-aos="fade-up" data-aos-delay="200">
          <StepCircle color="#2196f3" hoverColor="orange">2</StepCircle>
          <StepHeading>Planning</StepHeading>
          <StepContent>
            Once we have a clear understanding of your requirements, we move into planning. We outline the project scope, timeline, and resources needed to bring the vision to life.
          </StepContent>
        </Step>
        <Arrow left="calc(40% + -10px)" /> {/* Arrow between steps 2 and 3 */}

        <Step data-aos="fade-up" data-aos-delay="400">
          <StepCircle color="#4caf50" hoverColor="orange">3</StepCircle>
          <StepHeading>Design</StepHeading>
          <StepContent>
            Our design team crafts intuitive and aesthetically pleasing interfaces that offer seamless user experiences. Every element is carefully chosen to reflect your brand identity.
          </StepContent>
        </Step>
        <Arrow left="calc(60% + -20px)" /> {/* Arrow between steps 3 and 4 */}

        <Step data-aos="fade-up" data-aos-delay="600">
          <StepCircle color="#ff9800" hoverColor="green">4</StepCircle>
          <StepHeading>Development</StepHeading>
          <StepContent>
            With the design approved, our development team builds the solution using the latest technologies. We ensure that the product is scalable, secure, and performs efficiently.
          </StepContent>
        </Step>
        <Arrow left="calc(80% + -40px)" /> {/* Arrow between steps 4 and 5 */}

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
