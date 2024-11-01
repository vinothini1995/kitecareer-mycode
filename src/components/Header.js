import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Menu,
  MenuItem,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import logo from '../images/logo1.png';
import styled from 'styled-components';

const HeaderContainer = styled(AppBar)`
  background: white !important;
  box-shadow: none !important;
  padding: 0 2rem;
`;

const LogoContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 768px) {
    flex-grow: 1; /* Allow logo to take available space */
    justify-content: space-between; /* Space out the logo and toggle button */
  }
`;

const NavMenu = styled(Box)`
  display: flex;
  flex-grow: 1;
  justify-content: end;

  @media (max-width: 768px) {
    display: none; /* Hide NavMenu on small screens */
  }
`;

const NavItem = styled.div`
  margin-left: 1.5rem;

  a {
    color: blue;
    text-decoration: none;
    font-size: 1.1rem;

    &:hover {
      color: #ff6347;
    }
  }
`;

const BrochureButton = styled(Button)`
  background: darkblue !important;
  color: white !important;
  border-radius: 10px;
  margin-left: 10px !important;

  &:hover {
    background-color: white;
  }

  @media (max-width: 768px) {
    display: none; /* Hide BrochureButton on small screens */
  }
`;

const MobileMenuButton = styled(IconButton)`
  display: none; /* Hide by default */

  @media (max-width: 768px) {
    display: block; /* Show MobileMenuButton on small screens */
    color: blue!important; /* Adjust color of the button */
  }
`;

function Header() {
  const brochureUrl = '/BrochurePage.pdf'; // Make sure the path is correct

  // State for Service dropdown menu
  const [serviceAnchorEl, setServiceAnchorEl] = useState(null);

  // State for Career dropdown menu
  const [careerAnchorEl, setCareerAnchorEl] = useState(null);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Open the Service dropdown menu
  const handleServiceMenuClick = (event) => {
    setServiceAnchorEl(event.currentTarget);
  };

  // Close the Service dropdown menu
  const handleServiceMenuClose = () => {
    setServiceAnchorEl(null);
  };

  // Open the Career dropdown menu
  const handleCareerMenuClick = (event) => {
    setCareerAnchorEl(event.currentTarget);
  };

  // Close the Career dropdown menu
  const handleCareerMenuClose = () => {
    setCareerAnchorEl(null);
  };

  // Toggle the drawer menu for mobile view
  const toggleDrawer = (open) => (event) => {
    setIsDrawerOpen(open);
  };

  return (
    <HeaderContainer position="fixed">
      <Toolbar>
        {/* Logo Section */}
        <LogoContainer>
          <img src={logo} alt="Logo" style={{ width: '150px', height: '53px' }} />

          {/* Mobile Menu Toggle Button */}
          <MobileMenuButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </MobileMenuButton>
        </LogoContainer>

        {/* Navigation Menu for Desktop */}
        <NavMenu>
          <NavItem>
            <Link to="/">Home</Link>
          </NavItem>
          <NavItem>
            <Link to="/about">About</Link>
          </NavItem>

          {/* Dropdown for Services */}
          <NavItem>
            <Box
              onClick={handleServiceMenuClick}
              sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
            >
              <Link to="/service" style={{ color: 'blue', textDecoration: 'none' }}>
                Service
              </Link>
              <ArrowDropDownIcon sx={{ color: 'blue' }} />
            </Box>
            <Menu
              id="service-menu"
              anchorEl={serviceAnchorEl}
              keepMounted
              open={Boolean(serviceAnchorEl)}
              onClose={handleServiceMenuClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              sx={{
                '& .MuiPaper-root': {
                  backgroundColor: 'white',
                  color: 'blue',
                },
              }}
            >
              <MenuItem onClick={handleServiceMenuClose} style={{ textDecoration: 'none', display: 'block' }}>
                <Link to="/Productdevelopment" style={{ textDecoration: 'none', display: 'block' }}>
                  Product Development
                </Link>
                <Link to="/Websitedevelopment" style={{ textDecoration: 'none', display: 'block' }}>
                  Website Development
                </Link>
                <Link to="/AISolution" style={{ textDecoration: 'none', display: 'block' }}>
                  AI Solution
                </Link>
                <Link to="/IOTSolution" style={{ textDecoration: 'none', display: 'block' }}>
                  IOT Solution
                </Link>
                <Link to="/Cloudcomputing" style={{ textDecoration: 'none', display: 'block' }}>
                  Cloud Computing
                </Link>
                <Link to="/Blockchaindevelopment" style={{ textDecoration: 'none', display: 'block' }}>
                  Blockchain Development
                </Link>
                <Link to="/Digitalmarketing" style={{ textDecoration: 'none', display: 'block' }}>
                  Digital Marketing
                </Link>
                <Link to="/TrainingConsulting" style={{ textDecoration: 'none', display: 'block' }}>
                  Training & Consulting
                </Link>
              </MenuItem>
            </Menu>
          </NavItem>
          <NavItem>
            <Link to="/products">Products</Link>
          </NavItem>
          <NavItem>
            <Link to="/technology">Technology</Link>
          </NavItem>
          <NavItem>
            <Link to="/portfolio">Portfolio</Link>
          </NavItem>

          {/* Dropdown for Career */}
          <NavItem>
            <Box
              onClick={handleCareerMenuClick}
              sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
            >
              <Link to="/career" style={{ color: 'blue', textDecoration: 'none' }}>
                Career
              </Link>
              <ArrowDropDownIcon sx={{ color: 'blue' }} />
            </Box>
            <Menu
              id="career-menu"
              anchorEl={careerAnchorEl}
              keepMounted
              open={Boolean(careerAnchorEl)}
              onClose={handleCareerMenuClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              sx={{
                '& .MuiPaper-root': {
                  backgroundColor: 'white',
                  color: 'blue',
                },
              }}
            >
              <MenuItem onClick={handleCareerMenuClose}>
                <Link to="/Internship" style={{ textDecoration: 'none', display: 'block' }}>
                  Internship
                </Link>
              </MenuItem>
            </Menu>
          </NavItem>

          <NavItem>
            <Link to="/contact">Contact</Link>
          </NavItem>
          {/* <BrochureButton href={brochureUrl} rel="noopener noreferrer">
            Brochure
          </BrochureButton> */}
          
        </NavMenu>

        {/* Drawer for Mobile View */}
        <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
          <List sx={{ width: 250 }}>
            <ListItem button>
              <Link to="/">Home</Link>
            </ListItem>
            <ListItem button>
              <Link to="/about">About</Link>
            </ListItem>
            <ListItem button>
              <Link to="/service">Service</Link>
            </ListItem>
            <ListItem button>
              <Link to="/products">Products</Link>
            </ListItem>
            <ListItem button>
              <Link to="/technology">Technology</Link>
            </ListItem>
            <ListItem button>
              <Link to="/portfolio">Portfolio</Link>
            </ListItem>
            <ListItem button>
              <Link to="/career">Career</Link>
            </ListItem>
            <ListItem button>
              <Link to="/contact">Contact</Link>
            </ListItem>
          </List>
        </Drawer>
      </Toolbar>
    </HeaderContainer>
  );
}

export default Header;
