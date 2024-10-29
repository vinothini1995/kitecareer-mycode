import React, { useEffect } from 'react';
import styled from 'styled-components';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';
import Header from '../components/Header';
import { Helmet } from 'react-helmet';

import bannerImage from '../images/AI&IOTbanner.jpg'; // Adjust your image
import { Link } from 'react-router-dom';
import QuaentNutrision from '../images/Portfolio/quant.jpg';
import surandaicab from '../images/Portfolio/surandaicab.png';
import thedal from '../images/Portfolio/thedal.jpg';
import dsr from '../images/Portfolio/dsr.jpg';
import anbu from '../images/Portfolio/anbu.jpg';
import surandaii from '../images/Portfolio/surandaiii.jpg';
import printmys from '../images/Portfolio/print.jpg';
import wonderart from '../images/Portfolio/wonderart.jpg';
import eera from '../images/Portfolio/eera.jpg';
import transcloud from '../images/Portfolio/transcloud.jpg';
import nimir from '../images/Portfolio/nimir.jpg';
import subha from '../images/Portfolio/subha.jpg';
import beauty from '../images/Portfolio/beauty.jpg';
import cake from '../images/Portfolio/cake.jpg';
// Initialize AOS


// Styled components
const PageContainer = styled.div`
  padding: 40px 20px;
  background:linear-gradient(to right, #295F98, #ffffff);
    min-height: 100vh;
  overflow-x:hidden;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header1 = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: center;
`;

const Description = styled.p`
  font-size: 1.5rem;
  text-align: justify;
  max-width: 800px;
  margin-bottom: 40px;
`;

const PortfolioItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 80px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  color: #333;
  transition: transform 0.3s ease;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const PortfolioText = styled.div`
  flex: 1;
  margin-right: 40px;
  
  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const ProjectTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #666;
  textalign:justify!important;
`;

const ProjectInfo = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  color: #444;
`;

const PortfolioImage = styled.img`
  width: 45%;
  height: auto;
  border-radius: 10px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
const LearnMoreButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1rem;
  margin-top: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

// Portfolio Page Component
const Portfolio = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200 });
  }, []);
  return (
    <div>
      <Helmet>
        <title>Portfolio</title>
      </Helmet>
      <Header />
      <PageContainer>
        <Header1>Our Portfolio</Header1>
        <Description>Explore our impactful projects using modern technologies.</Description>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px',marginBottom:'10px'}}>
        <Link to="/mobileapp" style={{ display: 'flex',textDecoration:'none' }}>
        <button style={{borderRadius:'40px'}}>
          Mobile App
        </button>
      </Link>

      <Link to="/portfolio" style={{ display: 'flex',textDecoration:'none' }}>
        <button style={{borderRadius:'40px'}}>
          Website
        </button>
      </Link>
    </div>


        <PortfolioItem data-aos="fade-right">
          <PortfolioText>
            <ProjectTitle>Quaent Nutrision</ProjectTitle>
            <ProjectDescription>
              A scalable e-commerce platform developed to handle millions of products and real-time transactions. Integrated with payment gateways and a robust backend.
            </ProjectDescription>
            <ProjectInfo>
              <span><strong>Duration:</strong> 6 months</span>
              <span><strong>Technologies:</strong> React, Node.js</span>
              <LearnMoreButton href="https://kitecareer.com/ecommerce/" target="_blank" rel="noopener noreferrer">View
</LearnMoreButton>
            </ProjectInfo>
          </PortfolioText>
          <PortfolioImage src={QuaentNutrision} alt="quant" />
        </PortfolioItem>

        <PortfolioItem data-aos="fade-left">
          <PortfolioText>
            <ProjectTitle>Surandai Cab Booking</ProjectTitle>
            <ProjectDescription>
              An intuitive mobile app designed for tracking user health metrics in real-time. Syncs seamlessly with wearable devices to monitor fitness and well-being.
            </ProjectDescription>
            <ProjectInfo>
              <span><strong>Duration:</strong> 4 months</span>
              <span><strong>Technologies:</strong> Flutter, Firebase</span>
              <LearnMoreButton href="https://kitecareer.com/carbooking/" target="_blank" rel="noopener noreferrer">View
              </LearnMoreButton>
            </ProjectInfo>
          </PortfolioText>
          <PortfolioImage src={surandaicab} alt="cab booking" />
        </PortfolioItem>

        <PortfolioItem data-aos="fade-right">
          <PortfolioText>
            <ProjectTitle>Thedal Website</ProjectTitle>
            <ProjectDescription>
              A secure cloud-based CRM system enabling businesses to manage customer relationships efficiently, offering real-time analytics and data management.
            </ProjectDescription>
            <ProjectInfo>
              <span><strong>Duration:</strong> 8 months</span>
              <span><strong>Technologies:</strong> AWS, Angular</span>
              <LearnMoreButton href="https://www.thedal.co.in/" target="_blank" rel="noopener noreferrer">View
              </LearnMoreButton>
            </ProjectInfo>
          </PortfolioText>
          <PortfolioImage src={thedal} alt="Thedal" />
        </PortfolioItem>

        <PortfolioItem data-aos="fade-left">
          <PortfolioText>
            <ProjectTitle>DSR Construction</ProjectTitle>
            <ProjectDescription>
              Blockchain solution for enhancing transparency and security in supply chain management. Provides immutable records of transactions and ensures trust.
            </ProjectDescription>
            <ProjectInfo>
              <span><strong>Duration:</strong> 10 months</span>
              <span><strong>Technologies:</strong> Ethereum, Solidity</span>
              <LearnMoreButton href="https://kitecareer.com/dsrconstruction/" target="_blank" rel="noopener noreferrer">View
              </LearnMoreButton>
            </ProjectInfo>
          </PortfolioText>
          <PortfolioImage src={dsr} alt="dsr" />
        </PortfolioItem>

        <PortfolioItem data-aos="fade-left">
          <PortfolioText>
            <ProjectTitle>Anbu Samrajiyam</ProjectTitle>
            <ProjectDescription>
              Blockchain solution for enhancing transparency and security in supply chain management. Provides immutable records of transactions and ensures trust.
            </ProjectDescription>
            <ProjectInfo>
              <span><strong>Duration:</strong> 10 months</span>
              <span><strong>Technologies:</strong> Ethereum, Solidity</span>
              <LearnMoreButton href="https://kitecareer.com/anbusamrajyam/" target="_blank" rel="noopener noreferrer">View
              </LearnMoreButton>
            </ProjectInfo>
          </PortfolioText>
          <PortfolioImage src={anbu} alt="anbu " />
        </PortfolioItem>

        <PortfolioItem data-aos="fade-left">
          <PortfolioText>
            <ProjectTitle>Surandai.in</ProjectTitle>
            <ProjectDescription>
              Blockchain solution for enhancing transparency and security in supply chain management. Provides immutable records of transactions and ensures trust.
            </ProjectDescription>
            <ProjectInfo>
              <span><strong>Duration:</strong> 10 months</span>
              <span><strong>Technologies:</strong> Ethereum, Solidity</span>
              <LearnMoreButton href="https://kitecareer.com/surandai/" target="_blank" rel="noopener noreferrer">View
              </LearnMoreButton>
            </ProjectInfo>
          </PortfolioText>
          <PortfolioImage src={surandaii} alt="surandai.in" />
        </PortfolioItem>

        <PortfolioItem data-aos="fade-left">
          <PortfolioText>
            <ProjectTitle>Printmys</ProjectTitle>
            <ProjectDescription>
              Blockchain solution for enhancing transparency and security in supply chain management. Provides immutable records of transactions and ensures trust.
            </ProjectDescription>
            <ProjectInfo>
              <span><strong>Duration:</strong> 10 months</span>
              <span><strong>Technologies:</strong> Ethereum, Solidity</span>
              <LearnMoreButton href="https://kitecareer.com/calendar/home.php" target="_blank" rel="noopener noreferrer">View
              </LearnMoreButton>
            </ProjectInfo>
          </PortfolioText>
          <PortfolioImage src={printmys} alt="printsmy" />
        </PortfolioItem>

        <PortfolioItem data-aos="fade-left">
          <PortfolioText>
            <ProjectTitle>Wonderart</ProjectTitle>
            <ProjectDescription>
              Blockchain solution for enhancing transparency and security in supply chain management. Provides immutable records of transactions and ensures trust.
            </ProjectDescription>
            <ProjectInfo>
              <span><strong>Duration:</strong> 10 months</span>
              <span><strong>Technologies:</strong> Ethereum, Solidity</span>
              <LearnMoreButton href="https://kitecareer.com/wonderart/" target="_blank" rel="noopener noreferrer">View
              </LearnMoreButton>
            </ProjectInfo>
          </PortfolioText>
          <PortfolioImage src={wonderart} alt="wonderart" />
        </PortfolioItem>

        <PortfolioItem data-aos="fade-left">
          <PortfolioText>
            <ProjectTitle>EERA Technology</ProjectTitle>
            <ProjectDescription>
              Blockchain solution for enhancing transparency and security in supply chain management. Provides immutable records of transactions and ensures trust.
            </ProjectDescription>
            <ProjectInfo>
              <span><strong>Duration:</strong> 10 months</span>
              <span><strong>Technologies:</strong> Ethereum, Solidity</span>
              <LearnMoreButton href="https://kitecareer.com/eeratechnology/" target="_blank" rel="noopener noreferrer">View
              </LearnMoreButton>
            </ProjectInfo>
          </PortfolioText>
          <PortfolioImage src={eera} alt="eera" />
        </PortfolioItem>

        <PortfolioItem data-aos="fade-left">
          <PortfolioText>
            <ProjectTitle>Transcloud Services</ProjectTitle>
            <ProjectDescription>
              Blockchain solution for enhancing transparency and security in supply chain management. Provides immutable records of transactions and ensures trust.
            </ProjectDescription>
            <ProjectInfo>
              <span><strong>Duration:</strong> 10 months</span>
              <span><strong>Technologies:</strong> Ethereum, Solidity</span>
              <LearnMoreButton href="http://transcloudservices.com/" target="_blank" rel="noopener noreferrer">View
              </LearnMoreButton>
            </ProjectInfo>
          </PortfolioText>
          <PortfolioImage src={transcloud} alt="transcloud" />
        </PortfolioItem>

        <PortfolioItem data-aos="fade-left">
          <PortfolioText>
            <ProjectTitle>Nimir Corporation</ProjectTitle>
            <ProjectDescription>
              Blockchain solution for enhancing transparency and security in supply chain management. Provides immutable records of transactions and ensures trust.
            </ProjectDescription>
            <ProjectInfo>
              <span><strong>Duration:</strong> 10 months</span>
              <span><strong>Technologies:</strong> Ethereum, Solidity</span>
              <LearnMoreButton href="https://nimircorp.com/" target="_blank" rel="noopener noreferrer">View
              </LearnMoreButton>
            </ProjectInfo>
          </PortfolioText>
          <PortfolioImage src={nimir} alt="nimir" />
        </PortfolioItem>

        <PortfolioItem data-aos="fade-left">
          <PortfolioText>
            <ProjectTitle>Subha Hardwares</ProjectTitle>
            <ProjectDescription>
              Blockchain solution for enhancing transparency and security in supply chain management. Provides immutable records of transactions and ensures trust.
            </ProjectDescription>
            <ProjectInfo>
              <span><strong>Duration:</strong> 10 months</span>
              <span><strong>Technologies:</strong> Ethereum, Solidity</span>
              <LearnMoreButton href="https://kitecareer.com/subhahardware/index.html" target="_blank" rel="noopener noreferrer">View
              </LearnMoreButton>
            </ProjectInfo>
          </PortfolioText>
          <PortfolioImage src={subha} alt="subha" />
        </PortfolioItem>

        <PortfolioItem data-aos="fade-left">
          <PortfolioText>
            <ProjectTitle>Glam Haven Beauty Parlour</ProjectTitle>
            <ProjectDescription>
              Blockchain solution for enhancing transparency and security in supply chain management. Provides immutable records of transactions and ensures trust.
            </ProjectDescription>
            <ProjectInfo>
              <span><strong>Duration:</strong> 10 months</span>
              <span><strong>Technologies:</strong> Ethereum, Solidity</span>
              <LearnMoreButton href="https://kitecareer.com/beauty/" target="_blank" rel="noopener noreferrer">View
              </LearnMoreButton>
            </ProjectInfo>
          </PortfolioText>
          <PortfolioImage src={beauty} alt="beauty" />
        </PortfolioItem>

        <PortfolioItem data-aos="fade-left">
          <PortfolioText>
            <ProjectTitle>Haven Cake</ProjectTitle>
            <ProjectDescription>
              Blockchain solution for enhancing transparency and security in supply chain management. Provides immutable records of transactions and ensures trust.
            </ProjectDescription>
            <ProjectInfo>
              <span><strong>Duration:</strong> 10 months</span>
              <span><strong>Technologies:</strong> Ethereum, Solidity</span>
              <LearnMoreButton href="https://kitecareer.com/Havencake/" target="_blank" rel="noopener noreferrer">View
              </LearnMoreButton>
            </ProjectInfo>
          </PortfolioText>
          <PortfolioImage src={cake} alt="beauty" />
        </PortfolioItem>
      </PageContainer>
    </div>
  );
};

export default Portfolio;
