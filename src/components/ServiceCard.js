import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

// Keyframes for horizontal sliding animation
const slideInFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

// Styled component for the card
const Card = styled.div`
  width: 300px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  cursor: pointer;
  transform: scale(0.98); // Slightly scale down on hover
  transition: transform 0.3s ease;
  animation: ${slideInFromLeft} 0.6s ease-in-out ${({ delay }) => delay}; // Apply animation with delay

  &:hover {
    transform: scale(1.1); // Scale up on hover
    background:#295F98;
    color:white!important;

     h3 {  // Targeting Title (h3)
      color: white;
    }

    p {  // Targeting Description (p)
      color: white;
    }

    button {
      background-color: white;  // Change button background color
      color: #007bff;  // Change button text color
    }
  }
`;

const Image = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
`;

const Content = styled.div`
  padding: 20px;

`;

const Title = styled.h3`
  margin: 0;
  color: #333;
      &:hover{
color:white;
};
`;

const Description = styled.p`
  margin: 10px 0;
  color: #666;
  textalign:justify;
    &:hover{
color:white;
};
`;
const StyledButton = styled.button`
  /* Add your styles here */
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  `;
// ServiceCard component
const ServiceCard = ({ image, title, content, link, delay }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
  };

  return (
    <Card onClick={handleClick} delay={delay}>
      <Image image={image} />
      <Content>
        <Title>{title}</Title>
        <Description style={{textAlign:'justify'}}>{content}</Description>
        <StyledButton variant="contained">VIEW</StyledButton>
        </Content>
    </Card>
  );
};

export default ServiceCard;
