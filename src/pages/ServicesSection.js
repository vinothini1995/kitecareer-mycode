import styled, { keyframes } from 'styled-components';
import ServiceImage from '../images/BG.webp';
import ServiceImage1 from '../images/bg1.png';
import ServiceImage2 from '../images/gradient.jpg';
import AIAbout from '../images/AIAbout.jpg';
import IOTAbout from '../images/iot.jpg';
import BlockchainAbout from '../images/blockchainabt.avif';
import MachineAbout from '../images/machine.avif';
import SalesAbout from '../images/salesforce.avif';
import CloudAbout from '../images/cloudabout.avif';
// Define animations
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

// Apply animation to ServiceItem
const ServiceItem = styled.div`
  flex: 1;
  padding: 20px;
  animation: ${fadeIn} 1.5s ease-in-out; /* Fade-in effect on page load */
`;

// Apply animation to CenterImage
const CenterImage = styled.img`
  max-width: 300px;
  border-radius:10px;
  margin: 0 50px;
  animation: ${slideIn} 1.5s ease-in-out; /* Slide-in effect on page load */
`;
const CenterImage1 = styled.img`
  max-width: 300px;
  margin: 0 50px;
    border-radius:10px;

  animation: ${slideIn} 1.5s ease-in-out; /* Slide-in effect on page load */
`;
const CenterImage2 = styled.img`
  max-width: 300px;
  margin: 0 50px;
    border-radius:10px;

  animation: ${slideIn} 1.5s ease-in-out; /* Slide-in effect on page load */
`;
const ServicesWrapper = styled.div`
  display: flex;
  
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
//   background:silver;
`;

const ProjectHeading = styled.h1`
  text-align: center;
  margin-bottom: 40px;
`;

// Your service section component
const ServicesSection = () => (
  <>
    {/* Services Section */}
    <ProjectHeading style={{ color: 'black' }}>We Provide A Wide Range Of Creative Services</ProjectHeading>

    <ServicesWrapper>
      {/* First two services */}
      <ServiceItem>
        <h1>Artifical Intelligence(AI)</h1>
        <p style={{ textAlign: 'justify' }}>
        We lead in AI by leveraging cutting-edge technologies like machine learning, natural language processing (NLP), and predictive analytics to deliver innovative solutions that drive business success. Our AI expertise enables organizations to automate processes, improve decision-making, and gain deep insights into their operations. From personalized customer experiences to intelligent data analytics, our AI solutions are designed to meet the unique needs of each client.
        </p>
      </ServiceItem>
      

      {/* Center image */}
      <CenterImage src={AIAbout} alt="Service Center Image" style={{height:'200px',width:'200px'}} />
      </ServicesWrapper>

      {/* Last two services */}
      <ServicesWrapper>
      <CenterImage src={IOTAbout} alt="Service Center Image" style={{height:'200px',width:'200px',objectFit:'cover'}} />

      <ServiceItem>
        <h1>Internet Of Things(IOT)</h1>
        <p style={{ textAlign: 'justify' }}>
        Our expertise in IoT enables businesses to seamlessly integrate smart devices, sensors, and networks, creating interconnected systems that drive efficiency, enhance data collection, and enable real-time decision-making. By connecting physical devices to the digital world, we help organizations gain valuable insights and improve their overall performance.
        </p>
      </ServiceItem>

      </ServicesWrapper>
    

    {/* Additional services */}
    <ServicesWrapper>
      <ServiceItem>
        <h1>BlockChain</h1>
        <p style={{ textAlign: 'justify' }}>
        Our blockchain expertise helps businesses leverage decentralized, secure, and transparent solutions to revolutionize how they operate. Blockchain is transforming industries by providing tamper-proof records, improving transaction efficiency, and enhancing trust between parties through its distributed ledger technology.        </p>
      </ServiceItem>

      <CenterImage1 src={BlockchainAbout} alt="Service Center Image"  style={{height:'200px',width:'200px',objectFit:'cover'}} />
      </ServicesWrapper>
      <ServicesWrapper>
      <CenterImage1 src={MachineAbout} alt="Service Center Image"style={{height:'200px',width:'200px',objectFit:'cover'}}  />

      <ServiceItem>
        <h1>Machine Learning</h1>
        <p style={{ textAlign: 'justify' }}>
Machine Learning (ML) is at the core of our data-driven solutions, empowering businesses to transform raw data into actionable insights. By developing predictive models, automation systems, and intelligent algorithms, we help organizations leverage the power of ML to make faster, more accurate decisions.        </p>
      </ServiceItem>

      </ServicesWrapper>


    <ServicesWrapper>
      <ServiceItem>
        <h1>Salesforce</h1>
        <p style={{ textAlign: 'justify' }}>
        Transform your business with Salesforce's powerful CRM solutions, enhancing customer relationships and streamlining processes. Maximize efficiency with tailored automation and data-driven insights. Leverage Salesforce's extensive ecosystem to unlock new opportunities for growth and collaboration, ensuring your team has the tools to succeed in a competitive market.</p>
      </ServiceItem>

      <CenterImage2 src={SalesAbout} alt="Service Center Image" style={{height:'200px',width:'200px',objectFit:'cover'}}  />
      </ServicesWrapper>
      <ServicesWrapper>
      <CenterImage1 src={CloudAbout} alt="Service Center Image"style={{height:'200px',width:'200px',objectFit:'cover'}}  />

      <ServiceItem>
        <h1>Cloud Services</h1>
        <p style={{ textAlign: 'justify' }}>
        Harness the power of cloud solutions to scale your business securely and efficiently. With the ever-evolving landscape of technology, adopting cloud services is essential for staying competitive and agile. Empower your organization with innovative tools that enhance productivity and drive growth while adapting to the dynamic demands of your industry.        </p>
      </ServiceItem>

      </ServicesWrapper>

  </>
);

export default ServicesSection;
