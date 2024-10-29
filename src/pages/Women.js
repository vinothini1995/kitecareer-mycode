import React from 'react';
import styled from 'styled-components';
import women from '../images/womens.jpeg'; // Import your image

// Container for the whole section
const WomenContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
  background-color: #f9f9f9;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`;

// Container for the image with animation
const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column; /* Stack images vertically */
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  max-width: 400px;
  margin-right: 40px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

// Styled image with hover effects
const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.5s ease-in-out;

  // Hover effect for zoom animation
  &:hover {
    transform: scale(1.05);
  }

  &:not(:last-child) {
    margin-bottom: 20px; /* Space between images */
  }
`;

// Container for the content section
const ContentSection = styled.div`
  flex: 2;
  padding-left: 40px;

  @media (max-width: 768px) {
    padding-left: 0;
    text-align: center;
  }
`;

// Styled titles and paragraphs
const Title = styled.h2`
  color:blue;
  margin-bottom: 30px;
  text-align:left;
`;

const Text = styled.p`
  font-size: 18px;
  line-height: 1.6;
  text-align: justify;
  color: #333;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Women = () => {
  return (
    <WomenContainer>
      <ImageContainer>
        <StyledImage src={women} alt="Women Empowerment" />
        <StyledImage src={women} alt="Women Empowerment" />
      </ImageContainer>
      
      <ContentSection>
        <h1 style={{ color: 'black' }}>WOMEN’S EMPLOYMENT - BRIDGING THE GAP</h1>
        <Title>INTRODUCING WOMEN WING</Title>
        <Text>
          To give women complete autonomy, we have introduced a women’s wing. This initiative is dedicated to empowering women within our organization by creating a supportive environment that fosters growth, development, and leadership opportunities. Through this platform, we actively encourage women to take charge of their career paths, offering mentorship programs, leadership training, and tailored career development opportunities.
        </Text>

        <Title>EQUAL BENEFITS</Title>
        <Text>
          Women play an important role in the development of the company, and we ensure that they receive equal pay, appraisals, promotions, and other benefits. We are committed to eliminating any form of gender bias by enforcing transparent and fair policies. 
        </Text>

        <Title>DIVERSITY LEADERSHIP</Title>
        <Text>
          Women hold equal importance in decision-making and leadership roles at our company, and their perspectives are vital to shaping our strategic direction. We actively promote female leaders into executive positions, ensuring that our leadership team reflects the diversity of our workforce. 
        </Text>
      </ContentSection>
    </WomenContainer>
  );
};

export default Women;
