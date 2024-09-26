// Import dependencies
import React, { useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import Header from '../components/Header';
import python from '../images/Tech/python.png';
import java from '../images/Tech/java.png';
import php from '../images/Tech/php.png';
import js from '../images/Tech/javascript.png';
import sql from '../images/Tech/sql.png';
import mongodb from '../images/Tech/mongo-db.png';
import mysql from '../images/Tech/mysql.png';
import oracle from '../images/Tech/oracle.png';
import html from '../images/Tech/html.png';
import boot from '../images/Tech/Boot.png';
import css from '../images/Tech/css.png';
import photoshop from '../images/Tech/adobe-photoshop.png';
import figma from '../images/Tech/figma.png';
import reactnative from '../images/Tech/reactnative.png';
import android from '../images/Tech/android.png';
import flutter from '../images/Tech/flutter.png';
import Django from '../images/Tech/django.png'; 
import FastAPI from '../images/Tech/api.png';
import SpringBoot from '../images/Tech/springboot.png';
import Laravel from '../images/Tech/laravel.png';
import AWS from '../images/Tech/AWS.png';
import Azure from '../images/Tech/Azure.png';
import GCP from '../images/Tech/GCP.png';
import ReactJS from '../images/Tech/reactjs.png';
import NodeJS from '../images/Tech/nodejs.png';
import Angular from '../images/Tech/angularjs.png';
import NextJS from '../images/Tech/nextjs.png';
import VueJS from '../images/Tech/vue.png';
import ExpressJS from '../images/Tech/express.png';
import SoapUI from '../images/Tech/soap.png';
import GraphQL from '../images/Tech/graph.png';
import RestAPI from '../images/Tech/restapi.png';
import Swagger from '../images/Tech/swagge.png';
import Jira from '../images/Tech/jira.png';
import Jenkins from '../images/Tech/jenkins.png';
import Postman from '../images/Tech/postman.png';
import Salesforce from '../images/Tech/salesforce.png';
import Git from '../images/Tech/git.png';
import Flask from '../images/Tech/flask.png';
import bgimg from '../images/techoobg.avif';
// Main container styled component
const TechnologyContainer = styled.div`
  padding: 40px;
  font-family: Arial, sans-serif;
  min-height: 100vh;
  overflow-x: hidden;
  cursor: pointer;
  background-image: url('${bgimg}'); /* Replace with your image URL */
  background-size: cover; /* Ensure the image covers the entire background */
  background-position: center; /* Center the image */
  background-attachment: fixed; /* Keep the background image fixed */
  overflow-x: hidden;
`;

const Heading = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-top:40px;
  color: #384B70;
  margin-bottom: 40px;
`;

// Grid for sections
const SectionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  width: 100%;
  margin-top: 40px;
`;

// Section styled component
const Section = styled.div`
  text-align: center;
  padding: 20px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
`;

// Icon and title styles
const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: #384B70;
  margin-bottom: 20px;
  text-decoration: underline;
`;

// Image grid for technologies
const ImageGrid = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 10px;
`;

const TechImageWrapper = styled.div`
  text-align: center;
`;

const TechImage = styled.img`
  width: 50px;
  height: 50px;
`;

const ImageHeading = styled.h3`
  font-size: 1.2rem;
  color: #384B70;
  margin-top: 10px;
`;

const Technology = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with animation duration
  }, []);

  return (
    <div>
      <Header />
      <TechnologyContainer>
        <Heading data-aos="fade-down">"Empowering Innovation Through Our Advanced Technology"</Heading>
{/* <h3 style={{textAlign:'justify'}}>Technology is the use of knowledge to achieve attainable goals in a repeatable manner. In addition, the term "technology" can be used to describe the products of such efforts, including both tangible objects like equipment or kitchenware and intangible ones like computer software.</h3> */}
        <SectionGrid>
          {/* Programming Section */}
          <Section data-aos="fade-up">
            <SectionTitle>Programming</SectionTitle>
            <ImageGrid>
              <TechImageWrapper>
                <TechImage src={python} alt="Python" />
                <ImageHeading>Python</ImageHeading>
              </TechImageWrapper>

              <TechImageWrapper>
                <TechImage src={java} alt="Java" />
                <ImageHeading>Java</ImageHeading>
              </TechImageWrapper>

              <TechImageWrapper>
                <TechImage src={php} alt="PHP" />
                <ImageHeading>PHP</ImageHeading>
              </TechImageWrapper>

              <TechImageWrapper>
                <TechImage src={js} alt="JavaScript" />
                <ImageHeading>JavaScript</ImageHeading>
              </TechImageWrapper>
            </ImageGrid>
          </Section>

          {/* DB Section */}
          <Section data-aos="zoom-in">
            <SectionTitle>Data Bases</SectionTitle>
            <ImageGrid>
              <TechImageWrapper>
                <TechImage src={sql} alt="SQL" />
                <ImageHeading>SQL</ImageHeading>
              </TechImageWrapper>

              <TechImageWrapper>
                <TechImage src={mysql} alt="MySQL" />
                <ImageHeading>MySQL</ImageHeading>
              </TechImageWrapper>

              <TechImageWrapper>
                <TechImage src={mongodb} alt="MongoDB" />
                <ImageHeading>MongoDB</ImageHeading>
              </TechImageWrapper>

              <TechImageWrapper>
                <TechImage src={oracle} alt="Oracle" />
                <ImageHeading>Oracle</ImageHeading>
              </TechImageWrapper>
            </ImageGrid>
          </Section>

          {/* UI Section */}
          <Section data-aos="flip-right">
            <SectionTitle>UI/UX Design</SectionTitle>
            <ImageGrid>
              <TechImageWrapper>
                <TechImage src={html} alt="HTML" />
                <ImageHeading>HTML</ImageHeading>
              </TechImageWrapper>

              <TechImageWrapper>
                <TechImage src={css} alt="CSS" />
                <ImageHeading>CSS</ImageHeading>
              </TechImageWrapper>

              <TechImageWrapper>
                <TechImage src={boot} alt="Bootstrap" />
                <ImageHeading>Bootstrap</ImageHeading>
              </TechImageWrapper>

              <TechImageWrapper>
                <TechImage src={photoshop} alt="Photoshop" />
                <ImageHeading>Photoshop</ImageHeading>
              </TechImageWrapper>

              <TechImageWrapper>
                <TechImage src={figma} alt="Figma" />
                <ImageHeading>Figma</ImageHeading>
              </TechImageWrapper>
            </ImageGrid>
          </Section>

          {/* Mobile App Section */}
          <Section data-aos="fade-left">
            <SectionTitle>Mobile App</SectionTitle>
            <ImageGrid>
              <TechImageWrapper>
                <TechImage src={reactnative} alt="React Native" />
                <ImageHeading>React Native</ImageHeading>
              </TechImageWrapper>

              <TechImageWrapper>
                <TechImage src={android} alt="Android" />
                <ImageHeading>Android</ImageHeading>
              </TechImageWrapper>

              <TechImageWrapper>
                <TechImage src={flutter} alt="Flutter" />
                <ImageHeading>Flutter</ImageHeading>
              </TechImageWrapper>
            </ImageGrid>
          </Section>

          {/* Frameworks Section */}
          <Section data-aos="flip-up">
            <SectionTitle>Frameworks</SectionTitle>
            <ImageGrid>
              <TechImageWrapper>
                <TechImage src={Django} alt="Django" />
                <ImageHeading>Django</ImageHeading>
              </TechImageWrapper>

              <TechImageWrapper>
                <TechImage src={FastAPI} alt="FastAPI" />
                <ImageHeading>FastAPI</ImageHeading>
              </TechImageWrapper>

              <TechImageWrapper>
                <TechImage src={SpringBoot} alt="SpringBoot" />
                <ImageHeading>SpringBoot</ImageHeading>
              </TechImageWrapper>

              <TechImageWrapper>
                <TechImage src={Laravel} alt="Laravel" />
                <ImageHeading>Laravel</ImageHeading>
              </TechImageWrapper>

              
              <TechImageWrapper>
                <TechImage src={Flask} alt="Flask" />
                <ImageHeading>Flask</ImageHeading>
              </TechImageWrapper>
            </ImageGrid>
          </Section>

           {/* cloudservice Section */}
           <Section data-aos="flip-up">
            <SectionTitle>Cloud Services</SectionTitle>
            <ImageGrid>
              <TechImageWrapper>
                <TechImage src={AWS} alt="AWS" />
                <ImageHeading>AWS</ImageHeading>
              </TechImageWrapper>

              <TechImageWrapper>
                <TechImage src={Azure} alt="Azure" />
                <ImageHeading>Azure</ImageHeading>
              </TechImageWrapper>

              <TechImageWrapper>
                <TechImage src={GCP} alt="GCP" />
                <ImageHeading>GCP</ImageHeading>
              </TechImageWrapper>

              <TechImageWrapper>
                <TechImage src={Salesforce} alt="Salesforce" />
                <ImageHeading>Salesforce</ImageHeading>
              </TechImageWrapper>
            </ImageGrid>
          </Section>


           {/*jsframeworks Section */}
           <Section data-aos="flip-up">
            <SectionTitle>JS Frameworks</SectionTitle>
            <ImageGrid>
              <TechImageWrapper>
                <TechImage src={ReactJS} alt="ReactJS" />
                <ImageHeading>ReactJS</ImageHeading>
              </TechImageWrapper>

              <TechImageWrapper>
                <TechImage src={NodeJS} alt="NodeJS" />
                <ImageHeading>NodeJS</ImageHeading>
              </TechImageWrapper>

              <TechImageWrapper>
                <TechImage src={Angular} alt="Angular" />
                <ImageHeading>Angular</ImageHeading>
              </TechImageWrapper>

              <TechImageWrapper>
                <TechImage src={NextJS} alt="NextJS" />
                <ImageHeading>NextJS</ImageHeading>
              </TechImageWrapper>

              <TechImageWrapper>
                <TechImage src={VueJS} alt="VueJS" />
                <ImageHeading>VueJS</ImageHeading>
              </TechImageWrapper>

              <TechImageWrapper>
                <TechImage src={ExpressJS} alt="ExpressJS" />
                <ImageHeading>ExpressJS</ImageHeading>
              </TechImageWrapper>
            </ImageGrid>
          </Section>

          
           {/* API Section */}
           <Section data-aos="flip-up">
            <SectionTitle>API Services</SectionTitle>
            <ImageGrid>
              <TechImageWrapper>
                <TechImage src={RestAPI} alt="RestAPI" />
                <ImageHeading>RestAPI</ImageHeading>
              </TechImageWrapper>

              <TechImageWrapper>
                <TechImage src={GraphQL} alt="GraphQL" />
                <ImageHeading>GraphQL</ImageHeading>
              </TechImageWrapper>

              <TechImageWrapper>
                <TechImage src={SoapUI} alt="SoapUI" />
                <ImageHeading>SoapUI</ImageHeading>
              </TechImageWrapper>

            
            </ImageGrid>
          </Section>

           {/* Tools Section */}
           <Section data-aos="flip-up">
            <SectionTitle>Tools</SectionTitle>
            <ImageGrid>
              <TechImageWrapper>
                <TechImage src={Jira} alt="Jira" />
                <ImageHeading>Jira</ImageHeading>
              </TechImageWrapper>

              <TechImageWrapper>
                <TechImage src={Jenkins} alt="Jenkins" />
                <ImageHeading>Jenkins</ImageHeading>
              </TechImageWrapper>

              <TechImageWrapper>
                <TechImage src={Postman} alt="Postman" />
                <ImageHeading>Postman</ImageHeading>
              </TechImageWrapper>

              <TechImageWrapper>
                <TechImage src={Swagger} alt="Swagger" />
                <ImageHeading>Swagger</ImageHeading>
              </TechImageWrapper>

              <TechImageWrapper>
                <TechImage src={Git} alt="Git" />
                <ImageHeading>Git</ImageHeading>
              </TechImageWrapper>
            </ImageGrid>
          </Section>
        </SectionGrid>
      </TechnologyContainer>
    </div>
  );
};

export default Technology;
