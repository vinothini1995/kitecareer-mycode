import styled from 'styled-components';
import bannervdo from '../images/backgroundbanner.webm';
import logo from '../images/kite logo vector png.png';
import { Box, CardContent } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn,faYoutube  } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faEye, faBullseye, faHandsHelping } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Service from './Service';
import OurClients from './OurClients';
import Serviceforhome from './Serviceforhome';
import { motion } from 'framer-motion'; // Import framer-motion

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
  justify-content: end;
  padding: 20px;
  box-sizing: border-box;
`;

const MenuItem = styled.a`
  margin: 0 15px;
  color: #001F3F;
  
  text-decoration: none;
  font-size: 18px;
  z-index: 1;
`;

const VideoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
`;

const Video = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  // margin-top: -90px;
  height: auto;
  object-fit: cover;
  transform: translate(-50%, -50%);
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
  color:#001F3F;
`;

const Phone = styled.div`
  position: absolute;
  display: flex;
  color: white;
  flex-direction: row;
  right: 0;
  gap: 8px;
`;

const SocialMediaIcon = styled(FontAwesomeIcon)`
  color: #001F3F;
  font-size: 24px;
  cursor: pointer;
  justify-content: end;

  &:hover {
    color: white;
  }
`;

const ContactIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
   color:#001F3F;
`;

const Container = styled.div`
  width: 100%;
`;

const IconButton = styled(Button)`
  margin: 0 570px !important;
  color:white !important;
  background-color:#001F3F!important;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 50px;
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
  position: relative;
  top: 260px;
  cursor: pointer;

  &:hover {
    transform: translateY(-20px);
    background: #295f98;
    color: white;
      h3 { /* Targeting CardHeading */
      color: white;
    }

    svg { /* Targeting FontAwesomeIcon inside CardIcon */
      color: white;
    }
  }
`;

const CardHeading = styled.h3`
  display: flex;
  align-items: center;
  font-size: 20px;
  color:blue;
  &:hover {
    transform: translateY(-20px);
  }
`;

const CardIcon = styled.div`
  margin-right: 10px;
  font-size: 24px;
  display: flex;
  align-items: center;
  color: blue;

  &:hover {
    transform: translateY(-20px);
    color:white;
  }
`;


const StyledLink = styled.a`
  text-decoration: none !important;
  color: #001F3F;
  font-size:20px;

  &:hover {
    color: white;
  }
`;
const iconAnimation = {
  hover: { scale: 1.2, rotate: 360, transition: { duration: 0.5 } },
};
const brochureUrl = "/BrochurePage.pdf";

const App = () => (
  <motion.div initial="hidden" animate="visible" variants={fadeIn}>
    <Container>
      <motion.div variants={fadeIn}>
        <SocialMediaContainer >
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <SocialMediaIcon icon={faFacebookF} style={{color:'#001F3F'}} />
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
            <p style={{color:'#001F3F'}}><ContactIcon icon={faPhone} /> 9498478472</p>
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
          <Navbar >
            <MenuItem as={Link} to="/">Home</MenuItem>
            <MenuItem as={Link} to="/about">About</MenuItem>
            <MenuItem as={Link} to="/service">Services</MenuItem>
            <MenuItem as={Link} to="/products">Products</MenuItem>

            <MenuItem as={Link} to="/technology">Technology</MenuItem>
            <MenuItem as={Link} to="/portfolio">Portfolio</MenuItem>
            <MenuItem as={Link} to="/career">Career</MenuItem>
            <MenuItem as={Link} to="/contact">Contact</MenuItem>

            <Button
              sx={{
                color: 'white',
                background: '#001F3F',
                '&:hover': {
                  backgroundColor: 'white',
                  color: '#001F3F',
                },
              }}
              href={brochureUrl}
              rel="noopener noreferrer"
            >
              Brochure
            </Button>
          </Navbar>
        </LogoContainer>
      </motion.div>

      <VideoContainer>
        <motion.div variants={fadeIn}>
          <Video autoPlay loop muted>
            <source src={bannervdo} type="video/mp4" />
          </Video>
        </motion.div>
      </VideoContainer>

      <motion.h1 style={{ textAlign: 'center',marginTop:'90px', color: '#384B70',fontSize:'55px' }} variants={slideInUp}>
       <b> Innovative Solutions for a Digital World</b>
      </motion.h1>

      <motion.h3 style={{ textAlign: 'center', color: '#384B70',fontSize:'17px' }} variants={slideInUp}>
        "Delivering cutting-edge, customized software solutions to help businesses thrive in the fast-paced digital landscape."
      </motion.h3>

      <Link to="/contact" style={{ textDecoration: 'none' }}>
        <motion.div variants={slideInUp}>
          <IconButton variant="contained">LET'S TALK</IconButton>
        </motion.div>
      </Link>
    </Container>

    <CardContainer>
  <motion.div initial="hidden" animate="visible" variants={slideInUp}>
    <Card>
      <CardHeading>
        <CardIcon whileHover="hover" variants={iconAnimation}>
          <FontAwesomeIcon icon={faEye} />
        </CardIcon>
        Vision
      </CardHeading>
      <CardContent>
        KiteCareer aims to drive technological progress by fostering innovation and excellence, creating a global
        community of skilled professionals in AI, Machine Learning, IoT, and more.
      </CardContent>
    </Card>
  </motion.div>

  <motion.div variants={slideInUp}>
    <Card>
      <CardHeading>
        <CardIcon whileHover="hover" variants={iconAnimation}>
          <FontAwesomeIcon icon={faBullseye} />
        </CardIcon>
        Mission
      </CardHeading>
      <CardContent>
        At KiteCareer, we empower future generations to solve real-world challenges by providing comprehensive and
        industry-relevant training.
      </CardContent>
    </Card>
  </motion.div>

  <motion.div variants={slideInUp}>
    <Card>
      <CardHeading>
        <CardIcon whileHover="hover" variants={iconAnimation}>
          <FontAwesomeIcon icon={faHandsHelping} />
        </CardIcon>
        Values
      </CardHeading>
      <CardContent>
        Our core values of innovation, integrity, and inclusiveness guide us in delivering top-notch training programs
        that are accessible to all.
      </CardContent>
    </Card>
  </motion.div>
</CardContainer>


    <Serviceforhome />
    <OurClients />
  </motion.div>
);

export default App;
