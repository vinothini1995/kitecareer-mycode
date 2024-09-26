import React, { useState } from 'react';
import { AppBar, Toolbar, Box, Menu, MenuItem, IconButton, Button } from '@mui/material';
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
`;

const NavMenu = styled(Box)`
  display: flex;
  flex-grow: 1;
  justify-content: end;
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
  background: blue!important;
  color: white!important;
  border-radius: 10px;
  margin-left:10px!important; /* Aligns to the right */
  &:hover {
    background-color: darkblue;
  }
`;

function Header() {
  const brochureUrl = "/BrochurePage.pdf"; // Make sure the path is correct
  const [anchorEl, setAnchorEl] = useState(null);

  // Open the dropdown menu
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget); // Correctly set the anchor element
  };

  // Close the dropdown menu
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <HeaderContainer position="fixed">
      <Toolbar>
        {/* Logo Section */}
        <LogoContainer>
          <img src={logo} alt="Logo" style={{ width: '150px', height: '53px' }} />
        </LogoContainer>

        {/* Navigation Menu */}
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
              onClick={handleMenuClick} 
              sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
            >
              <Link to="/service" style={{ color: 'blue', textDecoration: 'none' }}>
                Service
              </Link>
              <ArrowDropDownIcon sx={{ color: 'blue' }} />
            </Box>
            <Menu
              id="service-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
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
              <MenuItem onClick={handleMenuClose}>
                <Link to="/Productdevelopment" style={{ textDecoration: 'none', }}>
                  Product Development
                </Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link to="/Websitedevelopment" style={{ textDecoration: 'none' }}>
                  Website Development
                </Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link to="/Mobileappdevelopment" style={{ textDecoration: 'none' }}>
                  Mobile App Development
                </Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link to="/AIandIOTsolution" style={{ textDecoration: 'none' }}>
                  AI & IOT Solutions
                </Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link to="/Cloudcomputing" style={{ textDecoration: 'none' }}>
                  Cloud Computing
                </Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link to="/Blockchaindevelopment" style={{ textDecoration: 'none' }}>
                  Blockchain Development
                </Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link to="/Digitalmarketing" style={{ textDecoration: 'none' }}>
                  Digital Marketing
                </Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link to="/TrainingConsulting" style={{ textDecoration: 'none' }}>
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
          <NavItem>
            <Link to="/career">Career</Link>
          </NavItem>
          <NavItem>
            <Link to="/contact">Contact</Link>
          </NavItem>
        </NavMenu>

        {/* Brochure Button */}
        <BrochureButton
          href={brochureUrl}
          rel="noopener noreferrer"
        >
          Brochure
        </BrochureButton>
      </Toolbar>
    </HeaderContainer>
  );
}

export default Header;
