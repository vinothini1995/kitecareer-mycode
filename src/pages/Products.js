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

const products = [
  {
    id: 1,
    name: 'Property Management',
    description: `The Property Management System is a web platform that streamlines the buying, selling, renting, and leasing of properties. It supports three main property categories: Residential, Commercial, and Land, each encompassing various property types such as houses, apartments, shops, warehouses, and plots. Built with React for a dynamic frontend and Python for robust backend processing, the system ensures smooth data management and a responsive user interface.
<br><br>The platform features role-based access for Administrators, Vendors, and Customers, allowing for tailored functionalities and field visibility based on the user's role. Vendors can list properties, while customers can browse, inquire, and engage in transactions.
<ul><li>Comprehensive Property Categorization</li><li>Role-Based Access Control
</li><li>Dynamic and Responsive Frontend</li><li>Robust Backend Processing</li>
</ul>`,
    imageUrl: propertymanagement,
  },
  {
    id: 2,
    name: 'Cab Booking',
    description: `The Travel Cab Booking System is a platform designed to simplify the process of booking cabs for users, enabling them to reserve transportation services seamlessly through a web or mobile application. The system allows users to register, browse available cabs, make bookings, and track their rides in real-time. Additionally, drivers can manage their bookings, while administrators have tools to oversee the entire system, ensuring smooth operations.
<ul>
<li>User-Friendly Interface</li>
<li> Real-Time Cab Tracking</li>
<li>Secure Payment Integration</li>
<li>Multi-Role Access Control</li>
</ul>`,
    imageUrl: cabbooking,
  },
  {
    id: 3,
    name: 'JobPortal',
    description: `The Job Portal is a web-based platform designed to connect job seekers with potential employers. It facilitates the posting of job vacancies by companies and enables candidates to search, apply for jobs, and upload their resumes. The platform supports various functionalities, such as filtering job listings by industry, location, and experience, making it easier for users to find the right match. Role-based access is provided for Administrators, Employers, and Job Seekers, with each role accessing specific features to manage profiles, job postings, and applications.
   <ul><li> Comprehensive Job Search</li><li>Role-Based Access Control</li><li>Resume and Profile Management
</li><li>Job Alerts and Notifications</li>
</ul>`,
    imageUrl: jobportal,
  },
  {
    id: 4,
    name: 'Employee Management System',
    description: `The Employee Portal is a web-based platform aimed at centralizing and streamlining essential management functions within an organization. It efficiently manages data related to employees, attendance, leave requests, and project management. The portal assigns specific roles such as Admin, Employee, and Trainee, ensuring tailored access and functionality based on user roles. This system simplifies organizational processes by providing a unified platform for data storage and operational management.
<ul><li>Role-Based Access Control</li>
<li>Attendance and Leave Management</li>
<li>Centralized Employee Data Management</li>
<li>Project Management Integration</li></ul>`,
    imageUrl: employeemanagement,
  },
  {
    id: 5,
    name: 'Innovative inclusive Streets (AI solutions)',
    description: `The Complete Street Project focuses on improving roadway design in New Castle County using advanced data collection methods and artificial intelligence. The project involves extracting geospatial images, annotating key road features, and training deep learning models to analyze the data. The insights gained from this process aim to enhance road safety, accessibility, and efficiency.
<ul><li>Advanced Data Collection</li>
<li> AI-Powered Analysis</li>
<li>Road Safety Enhancements</li><li>Accessibility and Efficiency Improvements</li></ul>`,
    imageUrl: street,
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
              <div
                dangerouslySetInnerHTML={{ __html: product.description }}
                style={{ textAlign: 'justify' }}
              />
            </ProductText>
          </ProductContainer>
        ))}
      </AnimatedDiv>
    </div>
  );
};

export default Products;
