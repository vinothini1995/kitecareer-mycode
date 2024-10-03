import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import bgImage from '../images/mobileappbackground1.avif';
import mobile1 from '../images/mobileappbook.png';
import mobile2 from '../images/mobileappcar.png';
import mobile3 from '../images/mobileappcake.png';
import mobile4 from '../images/mobileapptnpsc.png';
import Header from '../components/Header';

// Fade-in animation for the container
const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const MobileAppSection = styled.section`
  position: relative;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  z-index: 1;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('${bgImage}');
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    filter: blur(4px);
    z-index: -1;
  }

  animation: ${fadeIn} 0.8s ease-in-out;
`;

const Heading = styled.h1`
  font-size: 3.5rem;
  color: #384B70;
  margin-bottom: 1rem;
  text-shadow: 8px 4px 5px rgba(4, 4, 0, 0.9);
`;

const AppWrapper = styled.div`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  align-items: center;
  justify-content: center;
  margin: 40px 0;
  width: 100%;
  max-width: 1200px;
  text-align: ${({ reverse }) => (reverse ? 'right' : 'left')};
  animation: ${fadeIn} 0.8s ease-in-out;
  transition: transform 0.5s;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse; /* Display content first, image second on small devices */
    text-align: center;
  }
`;

const AppImage = styled.img`
  width: 45%;
  height: auto;
  border-radius: 15px;
  margin: ${({ reverse }) => (reverse ? '0 0 0 2rem' : '0 2rem 0 0')};

  @media (max-width: 768px) {
    margin: 0;
    width: 80%;
    margin-bottom: 1rem;
  }
`;

const AppDetails = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: ${({ reverse }) => (reverse ? 'flex-start' : 'flex-start')};
  text-align: justify;

  @media (max-width: 768px) {
    align-items: center;
    width: 100%;
  }
`;

const AppTitle = styled.h2`
  font-size: 2.5rem;
  color: #384B70;
  margin-bottom: 0.5rem;
  text-shadow: 2px 2px 2px #2E073F;
`;

const AppDescription = styled.p`
  font-size: 1.2rem;
  color: #384B70;
  max-width: 500px;
`;

const MobileApp = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  return (
    <div>
      <Header />
      <MobileAppSection>
        <Heading>Explore Our Mobile Applications</Heading>

        {/* First App: Image on the right, text on the left */}
        <AppWrapper data-aos="fade-up">
          <AppDetails>
            <AppTitle>Book Reading Application using Android</AppTitle>
            <AppDescription>
            The Offline Book Reading Application is a user-friendly software tool designed for digital reading without the need for a constant internet connection. It allows users to browse through various categories and select books in multiple languages, including Tamil, English, and Malayalam. Users can conveniently read a wide range of books without the hassle of downloads or the necessity of logging in. The app supports various eBook formats, such as PDF, ensuring a versatile reading experience. With customizable settings, the application aims to provide a comfortable and enjoyable reading environment.
            <ul >Key Features:</ul>
<li style={{listStyleType:'square'}} >Multi-Language Support</li>
<li style={{listStyleType:'square'}}>Offline Accessibility</li>
<li style={{listStyleType:'square'}}>No Login Required</li>
 <li style={{listStyleType:'square'}}>Customizable Reading Settings</li>
            </AppDescription>
          </AppDetails>
          <AppImage src={mobile1} alt="Mobile App 1" />
        </AppWrapper>

        {/* Second App: Image on the left, text on the right */}
        <AppWrapper reverse data-aos="fade-up" data-aos-delay="200">
          <AppImage src={mobile2} alt="Mobile App 2" reverse />
          <AppDetails reverse>
            <AppTitle>Cab Booking App using React Native</AppTitle>
            <AppDescription>
            The Cab Booking App is a user-centric mobile application designed to offer a seamless and convenient ride-hailing experience. Users can book cabs quickly and efficiently for local and long-distance travel, with options to choose different types of vehicles based on their needs. The app provides real-time location tracking, fare estimation, and secure payment options to enhance the overall user experience. With a simple and intuitive interface, users can easily book rides, track drivers, and receive updates without hassle.
            <ul >Key Features:</ul>
<li >Real-Time Ride Tracking
</li>
<li>Fare Estimation
</li>
<li>Multiple Vehicle Options
</li>
 <li>Cashless and Secure Payment Options</li>
            </AppDescription>
          </AppDetails>
        </AppWrapper>

        {/* Third App: Image on the right, text on the left */}
        <AppWrapper data-aos="fade-up" data-aos-delay="400">
          <AppDetails>
            <AppTitle>Cake Ordering Application using React Native</AppTitle>
            <AppDescription>
            The Cake Ordering Mobile App offers a convenient and seamless way to satisfy your cravings for delicious cakes and baked goods. Whether you're celebrating a special occasion or simply indulging in a sweet treat, the app provides an easy and enjoyable experience to browse, customize, and order cakes from the comfort of your phone.With just a few taps, your dream cake is on its way—bringing sweetness and joy to every occasion!
            <ul >Key Features:</ul>
<li >Customizable Cakes
</li>
<li>Scheduled Delivery
</li>
<li>Real-Time Order Tracking
</li>
 <li>Exclusive Offers & Discounts</li>
</AppDescription>
          </AppDetails>
          <AppImage src={mobile3} alt="Mobile App 3" />
        </AppWrapper>

        {/* Fourth App: Image on the left, text on the right */}
        <AppWrapper data-aos="fade-up" data-aos-delay="600">
          <AppDetails>
            <AppTitle>TNPSC Preparation App using Android</AppTitle>
            <AppDescription>
            The TNPSC Group 4 Exam Preparation App is designed to help candidates effectively prepare for the highly competitive TNPSC Group 4 exam in Tamil Nadu. This app offers essential study materials, practice tests, and the ability to take notes, all without requiring users to log in. With a user-friendly interface and well-organized content, it simplifies exam preparation by providing materials in both Tamil and English. The application serves as a digital alternative to traditional study methods, making it easier for aspirants to access relevant books and resources in PDF format without the need for downloads.
            <ul >Key Features:</ul>
<li style={{listStyleType:'square'}} >No Login Required

</li>
<li style={{listStyleType:'square'}}>Study Materials in Tamil and English

</li>
<li style={{listStyleType:'square'}}>Practice Tests and Aptitude Sections

</li>
 <li style={{listStyleType:'square'}}>Categorized Books in PDF Format</li>
</AppDescription>
          </AppDetails>
          <AppImage src={mobile4} alt="Mobile App 4" />
        </AppWrapper>
      </MobileAppSection>
    </div>
  );
};

export default MobileApp;
