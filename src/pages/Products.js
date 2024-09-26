import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import product1 from '../images/generic-square-1.jpg';
import styled, { keyframes, css } from 'styled-components';
import background from '../images/gradient.jpg';

// Define the fade-in keyframe animation wrapped in css
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Create the animated div styled component
const AnimatedDiv = styled.div`
  animation: ${props => props.isLoaded ? css`${fadeIn} 0.5s forwards` : 'none'};
`;

const products = [
  {
    id: 1,
    name: 'Property Management',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum',
    imageUrl: product1,
  },
  {
    id: 2,
    name: 'Cab Booking',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum',
    imageUrl: product1,  },
  {
    id: 3,
    name: 'JobPortal',
    description: 'This product is perfect for managing your workflow and staying organized.Lorem ipsum dolor sit amet consectetur adipisicing elit Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum',
    imageUrl: product1,  },
  {
    id: 4,
    name: 'Employee Management System',
    description: 'Product 4 is known for its reliability and excellent performance in various tasks.Lorem ipsum dolor sit amet consectetur adipisicing elit Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum',
    imageUrl: product1,  },
  {
    id: 5,
    name: 'Complete Street-AI',
    description: 'A cutting-edge product that integrates seamlessly into your tech ecosystem.Lorem ipsum dolor sit amet consectetur adipisicing elit Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum',
    imageUrl: product1,  },
];

const Products = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 10); // You can adjust the timeout duration if needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatedDiv isLoaded={isLoaded}>
      <Header />
      <h2
        style={{
          textAlign: 'justify',
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          color: 'white',
          backgroundPosition: 'center',
          padding: '30px',
          marginTop: '50px',
          textAlign: 'center',
        }}
      >
        Discover Our Innovative Product Lineup
      </h2>
      {products.map((product, index) => (
        <div
          key={product.id}
          style={{
            display: 'flex',
            flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
            alignItems: 'center',
            marginBottom: '40px',
            padding: '20px',
          }}
        >
          <img
            src={product.imageUrl}
            alt={product.name}
            style={{
              width: '400px',
              height: '300px',
              objectFit: 'cover',
              borderRadius: '10px',
            }}
          />
          <div style={{ padding: '0 20px' }}>
            <h2>{product.name}</h2>
            <p style={{ textAlign: 'justify' }}>{product.description}</p>
          </div>
        </div>
      ))}
    </AnimatedDiv>
  );
};

export default Products;
