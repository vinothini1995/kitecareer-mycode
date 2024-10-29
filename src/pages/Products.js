import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import propertymanagement from '../images/property.avif';
import cabbooking from '../images/cab.avif';
import jobportal from '../images/jobportal.avif';
import employeemanagement from '../images/employee.avif';
import street from '../images/street.avif';
import styled, { keyframes, css } from 'styled-components';
import background from '../images/gradient.jpg';
import { Helmet } from 'react-helmet';

// Define the fade-in keyframe animation wrapped in css
const slideIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Create the animated div styled component
const AnimatedDiv = styled.div`
  animation: ${props => (props.isLoaded ? css`${slideIn} 6s ease-out` : 'backwards')};
`;

// Define media queries for responsive styling
const ProductContainer = styled.div`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  align-items: center;
  margin-bottom: 40px;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
  }
`;

const ProductImage = styled.img`
  width: 400px;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const ProductText = styled.div`
  padding: 0 20px;
  
  @media (max-width: 768px) {
    padding: 20px 0;
  }
`;
const Paragraph=styled.div`
text-align:justify;

`;
const StyledList = styled.ul`
  list-style-type: circle; /* or circle, square, etc. */
  padding-left: 20px; /* Indent list items */
  margin: 10px 0; /* Margin for the list */
  display: flex; /* Use flexbox to align items in a row */
  flex-wrap: wrap; /* Allow items to wrap if necessary */
`;

const StyledListItem = styled.li`
  margin-bottom: 8px; /* Space between list items */
  margin-right: 19px; /* Space between list items */

  font-size: 16px; /* Adjust font size */
  color: #333; /* Text color */
`;
const products = [
  {
    id: 1,
    name: 'Property Management',
    description: (
      <>
      <Paragraph>
        The Property Management System is a web platform that streamlines the buying, selling, renting, and leasing of properties. It supports three main property categories: Residential, Commercial, and Land, each encompassing various property types such as houses, apartments, shops, warehouses, and plots. Built with React for a dynamic frontend and Python for robust backend processing, the system ensures smooth data management and a responsive user interface.
        <br/><br/>
        The platform features role-based access for Administrators, Vendors, and Customers, allowing for tailored functionalities and field visibility based on the user's role. Vendors can list properties, while customers can browse, inquire, and engage in transactions.
        </Paragraph>
        <StyledList>
          <StyledListItem><b>Comprehensive Property Categorization</b></StyledListItem>
          <StyledListItem><b>Role-Based Access Control</b></StyledListItem>
          <StyledListItem><b>Dynamic and Responsive Frontend</b></StyledListItem>
          <StyledListItem><b>Robust Backend Processing</b></StyledListItem>
        </StyledList>
      </>
    ),
    imageUrl: propertymanagement,
  },
  {
    id: 2,
    name: 'Cab Booking',

    description: (
      <>
      <Paragraph>
      The Travel Cab Booking System is a platform designed to simplify the process of booking cabs for users, enabling them to reserve transportation services seamlessly through a web or mobile application. The system allows users to register, browse available cabs, make bookings, and track their rides in real-time. Additionally, drivers can manage their bookings, while administrators have tools to oversee the entire system, ensuring smooth operations.
      </Paragraph>
        <StyledList>
          <StyledListItem><b>User-Friendly Interface</b></StyledListItem>
          <StyledListItem><b>Real-Time Cab Tracking</b></StyledListItem>
          <StyledListItem><b>Secure Payment Integration</b></StyledListItem>
          <StyledListItem><b>Multi-Role Access Control</b></StyledListItem>
        </StyledList>
      </>
    ),
    imageUrl: cabbooking,
  },
  {
    id: 3,
    name: 'JobPortal',
    description: (
      <>
      <Paragraph>
      The Job Portal is a web-based platform designed to connect job seekers with potential employers. It facilitates the posting of job vacancies by companies and enables candidates to search, apply for jobs, and upload their resumes. The platform supports various functionalities, such as filtering job listings by industry, location, and experience, making it easier for users to find the right match. Role-based access is provided for Administrators, Employers, and Job Seekers, with each role accessing specific features to manage profiles, job postings, and applications.      </Paragraph>
        <StyledList>
          <StyledListItem><b>Comprehensive Job Search
          </b></StyledListItem>
          <StyledListItem><b>Role-Based Access Control
          </b></StyledListItem>
          <StyledListItem><b>Resume and Profile Management
          </b></StyledListItem>
          <StyledListItem><b>Job Alerts and Notifications
          </b></StyledListItem>
        </StyledList>
      </>
    ),
    imageUrl: jobportal,
  },
  {
    id: 4,
    name: 'Employee Management System',
    description: (
      <>
      <Paragraph>
      The Employee Portal is a web-based platform aimed at centralizing and streamlining essential management functions within an organization. It efficiently manages data related to employees, attendance, leave requests, and project management. The portal assigns specific roles such as Admin, Employee, and Trainee, ensuring tailored access and functionality based on user roles. This system simplifies organizational processes by providing a unified platform for data storage and operational management.      </Paragraph>
        <StyledList>
          <StyledListItem><b>Role-Based Access Control
         </b></StyledListItem>
          <StyledListItem><b>Attendance and Leave Management
         </b></StyledListItem>
          <StyledListItem><b>Centralized Employee Data Management
          </b></StyledListItem>
          <StyledListItem><b>Project Management Integration
          </b></StyledListItem>
        </StyledList>
      </>
    ),
    imageUrl: employeemanagement,
  },
  {
    id: 5,
    name: 'Innovative inclusive Streets (AI solutions)',
    description: (
      <>
      <Paragraph>
      The Complete Street Project focuses on improving roadway design in New Castle County using advanced data collection methods and artificial intelligence. The project involves extracting geospatial images, annotating key road features, and training deep learning models to analyze the data. The insights gained from this process aim to enhance road safety, accessibility, and efficiency.      
          </Paragraph>
          <StyledList>
          <StyledListItem><b>Advanced Data Collection

         </b></StyledListItem>
          <StyledListItem><b>AI-Powered Analysis

         </b></StyledListItem>
          <StyledListItem><b>Road Safety Enhancements

          </b></StyledListItem>
          <StyledListItem><b>Accessibility and Efficiency Improvements

          </b></StyledListItem>
        </StyledList>
      </>
    ),imageUrl: street,
  },
];

const Products = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Products</title>
      </Helmet>
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
          <ProductContainer key={product.id} reverse={index % 2 !== 0}>
            <ProductImage src={product.imageUrl} alt={product.name} />
            <ProductText>
              <h2>{product.name}</h2>
                            {product.description} {/* Render description as JSX */}

            </ProductText>
          </ProductContainer>
        ))}
      </AnimatedDiv>
    </div>
  );
};

export default Products;
