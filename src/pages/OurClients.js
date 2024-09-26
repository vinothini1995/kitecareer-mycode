import React from 'react';
import styled from 'styled-components';
import thedal from '../images/Client/Thedaledit.png';
import bjmm from '../images/Client/BJMMedit.png';
import dsr from '../images/Client/DSRedit.png';
import grafin from '../images/Client/Grafin Deliveryedit.png';
import reios from '../images/Client/Reios_edit.png';
import nutech from '../images/Client/n u Technologyedit.png';
import surabhi from '../images/Client/Surabhi.png';
import printsmy from '../images/Client/Printmysedit.png';
import transcloud from '../images/Client/Trandcloudedit.png';
import nimir from '../images/Client/Nimir_edit.png';
import surandai from '../images/Client/Surandai. inedit.png';
import centri from '../images/Client/Centri Lifeedit.png';
import dhuvaraga from '../images/Client/Duvaraha Buildersedit.png' ;
import breeze from '../images/Client/Breezeedit.png';
// Import more logos as needed

const ClientsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: 150px;
  background-color: #f9f9f9;
  padding: 20px 0;
`;

const LogoWrapper = styled.div`
  display: flex;
  animation: scroll 50s linear infinite;

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;

const ClientLogo = styled.img`
  height: 100px;
  margin: 0 30px;
`;

function OurClients() {
  return (
    <ClientsContainer>
      <LogoWrapper>
        <ClientLogo src={thedal} alt="Client 1" />
        <ClientLogo src={bjmm} alt="Client 2" />
        <ClientLogo src={dsr} alt="Client 3" />
        <ClientLogo src={grafin} alt="Client 4" />
        <ClientLogo src={reios} alt="Client 5" />
        <ClientLogo src={nutech} alt="Client 6" />
        <ClientLogo src={surabhi} alt="Client 7" />
        <ClientLogo src={printsmy} alt="Client 8" />
        <ClientLogo src={transcloud} alt="Client 9" />
        <ClientLogo src={nimir} alt="Client 10" />
        <ClientLogo src={surandai} alt="Client 11" />
        <ClientLogo src={centri} alt="Client 12" />
        <ClientLogo src={dhuvaraga} alt="Client 13" />
        <ClientLogo src={breeze} alt="Client 14" />
        {/* Add more logos as needed */}
      </LogoWrapper>
    </ClientsContainer>
  );
}

export default OurClients;
