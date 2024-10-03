import styled from 'styled-components';
import bannervdo from '../images/backgroundbanner.webm';
import logo from '../images/kite logo vector png.png';
import { Box, IconButton, Button, CardContent } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBars, faPhone, faEnvelope, faEye, faBullseye, faHandsHelping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import OurClients from './OurClients';
import Serviceforhome from './Serviceforhome';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

// Motion variants for animations
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const slideInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeInOut' } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: 'easeInOut' } },
};

const Navbar = styled.nav`
  position: relative;
  width: 100%;
  z-index: 10;
  display: flex;
  justify-content: flex-end;
  padding: 20px;
  box-sizing: border-box;
  /* Hide the toggle button on larger screens */
  

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
  }
`;

const MenuItem = styled(Link)`
  margin: 0 15px;
  color: #001F3F;
  text-decoration: none;
  font-size: 18px;
  z-index: 1;

  @media (max-width: 768px) {
    display: ${(props) => (props.isOpen ? 'block' : 'none')};
    padding: 10px 0;
  }
`;

const VideoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;

  @media (max-width: 320px) {
    height: 100%;
    width: 100vw;
  }
  
  @media (max-width: 768px) {
    height: 100vh;
    width: 100vw;
  }
`;

const Video = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: auto;
  object-fit: cover;
  transform: translate(-50%, -50%);

  @media (max-width: 768px) {
    height: 100%;
    width: 100vw;
  }

  @media (max-width: 425px) {
    height: 100%;
    width: 100vw;
  }

  @media (max-width: 320px) {
    width: 100%;
  }
`;

const LogoContainer = styled(Box)`
  display: flex;
  justify-content: flex-start;
  flex-grow: 1;
  margin-top: 20px;
  z-index: 1;
`;

const SocialMediaContainer = styled.div`
  position: relative;
  right: 20px;
  display: flex;
  gap: 40px;
  margin-top: 10px;
  z-index: 20;
  color: #001F3F;
`;

const Phone = styled.div`
  position: absolute;
  display: flex;
  color: white;
  flex-direction: row;
  right: 0;
  gap: 8px;
  
  @media (max-width: 768px) {
    font-size: 14px;

  }
`;

const SocialMediaIcon = styled(FontAwesomeIcon)`
  color: #001F3F;
  font-size: 24px;
  cursor: pointer;
 &:hover {
    color: white;
  }

  @media (max-width: 768px) {
    font-size: 14px;

  }
`;

const ContactIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
  color: #001F3F;

  
  @media (max-width: 768px) {
    font-size: 14px;

  }
`;
const Heading=styled.div`
 @media (max-width: 768px) {
    font-size: 4px;
    color:white;
  }
`;

const Container = styled.div`
  width: 100%;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 190px;
  margin-bottom: 300px;
`;

const Card = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin: 10px;
  padding: 20px;
  width: 300px;
  text-align: justify;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-20px);
    background: #384B70;
    color: white;

    h3 {
      color: white;
    }

    svg {
      color: white;
    }
  }
`;

const CardHeading = styled.h3`
  display: flex;
  align-items: center;
  font-size: 20px;
  color: #384B70;

  &:hover {
    transform: translateY(-20px);
  }
`;

const CardIcon = styled.div`
  margin-right: 10px;
  font-size: 24px;
  display: flex;
  align-items: center;
  color: #384B70;

  &:hover {
    transform: translateY(-20px);
    color: white;
  }
`;

const StyledLink = styled.a`
  text-decoration: none !important;
  color: #001F3F;
  font-size: 20px;

  &:hover {
    color: white;
  }
     @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom:10px;

  }
`;

const ToggleIcon = styled(IconButton)`
  display: none;
  color: #001f3f;

  @media (max-width: 768px) {
    display: block;
  }
`;

const iconAnimation = {
  hover: { scale: 1.2, rotate: 360, transition: { duration: 0.5 } },
};

const brochureUrl = "/BrochurePage.pdf";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State for menu open/close

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu open/close state
  };

  return (
    <div>
      <Helmet>
        <title>Kitecareer - Home</title>
      </Helmet>
      <motion.div initial="hidden" animate="visible" variants={fadeIn} >
        <Container>
          <motion.div variants={fadeIn}>
            <SocialMediaContainer>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <SocialMediaIcon icon={faFacebookF} />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <SocialMediaIcon icon={faTwitter} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <SocialMediaIcon icon={faInstagram} />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <SocialMediaIcon icon={faLinkedinIn} />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <SocialMediaIcon icon={faYoutube} />
              </a>
              <Phone>
                <p style={{ color: '#001F3F' }}>
                  <ContactIcon icon={faPhone} /> 9498478472
                </p>
                <p>
                  <ContactIcon icon={faEnvelope} />
                  <StyledLink href="mailto:kitecareer@gmail.com">hr@kitecareer.com</StyledLink>
                </p>
              </Phone>
            </SocialMediaContainer>
          </motion.div>

          <motion.div variants={slideInLeft}>
            <LogoContainer>
              <img src={logo} alt="Logo" style={{ width: '160px', height: '60px' }} />
              <Navbar>
                <ToggleIcon onClick={toggleMenu}>
                  <FontAwesomeIcon icon={faBars} />
                </ToggleIcon>
                <MenuItem to="/" isOpen={menuOpen}>Home</MenuItem>
                <MenuItem to="/about" isOpen={menuOpen}>About</MenuItem>
                <MenuItem to="/service" isOpen={menuOpen}>Services</MenuItem>
                <MenuItem to="/products" isOpen={menuOpen}>Products</MenuItem>
                <MenuItem to="/technology" isOpen={menuOpen}>Technology</MenuItem>
                <MenuItem to="/portfolio" isOpen={menuOpen}>Portfolio</MenuItem>
                <MenuItem to="/career" isOpen={menuOpen}>Career</MenuItem>
                <MenuItem to="/contact" isOpen={menuOpen}>Contact</MenuItem>
                <Button
                  sx={{
                    color: 'white',
                    background: '#001F3F',
                    '&:hover': { background: '#007bff' }
                  }}
                  href={brochureUrl}
                >
                  Brochure
                </Button>
              </Navbar>
            </LogoContainer>
          </motion.div>

          <VideoContainer>
            <Video autoPlay loop muted>
              <source src={bannervdo} type="video/webm" />
              Your browser does not support the video tag.
            </Video>
          </VideoContainer>
          <Heading>
          <motion.h1 style={{ textAlign: 'center',marginTop:'90px', color: '#384B70',fontSize:'55px' }} variants={slideInUp}>
       <b> Innovative Solutions for a Digital World</b>
      </motion.h1>
      </Heading>

      <motion.h3 style={{ textAlign: 'center', color: '#384B70',fontSize:'17px' }} variants={slideInUp}>
        "Delivering cutting-edge, customized software solutions to help businesses thrive in the fast-paced digital landscape."
      </motion.h3>

      <Link to="/contact" style={{ textDecoration: 'none' }}>
        <motion.div variants={slideInUp}>
          <IconButton variant="contained"style={{color:'white',background:'#001f3f',padding:'17px'}}>LET'S TALK</IconButton>
        </motion.div>
      </Link>
   

          <CardContainer>
            <motion.div variants={slideInUp}>
              <Card>
                <CardContent>
                  <CardHeading>
                    <CardIcon>
                      <FontAwesomeIcon icon={faEye} />
                    </CardIcon>
                    <span>Vision</span>
                  </CardHeading>
                  <p>
                    To create value and make a difference by empowering organizations and businesses through strategic planning, innovative technology, and sustainable growth.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={slideInUp}>
              <Card>
                <CardContent>
                  <CardHeading>
                    <CardIcon>
                      <FontAwesomeIcon icon={faBullseye} />
                    </CardIcon>
                    <span>Mission</span>
                  </CardHeading>
                  <p>
                    To be a leader in providing innovative, technology-driven solutions to our clients and partners while fostering a culture of excellence and integrity.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={slideInUp}>
              <Card>
                <CardContent>
                  <CardHeading>
                    <CardIcon>
                      <FontAwesomeIcon icon={faHandsHelping} />
                    </CardIcon>
                    <span>Core Values</span>
                  </CardHeading>
                  <p>
                    Integrity, Quality, Teamwork, Customer Commitment, Innovation, and Social Responsibility.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </CardContainer>

         
          <Serviceforhome />
          <OurClients />
        </Container>
      </motion.div>
    </div>
  );
};

export default Home;
