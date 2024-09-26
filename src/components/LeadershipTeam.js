import React from 'react';
import styled from 'styled-components';
import team1 from '../images/team1.png';
import team2 from '../images/team2.png';
import team3 from '../images/team1.png';
const LeadershipTeamContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 80px;
  padding: 40px;
`;

const TeamMember = styled.div`
  text-align: center;
  width: 200px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.15);
  }
`;

const Image = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  cursor: pointer;
  object-fit:contain;
`;

const Name = styled.h3`
  margin-top: 15px;
  font-size: 18px;
  font-weight: bold;
`;

const Role = styled.p`
  font-size: 16px;
  color: gray;
`;

const LeadershipTeam = () => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "CEO",
      image: team1,
      linkedin: "https://www.linkedin.com/in/",
    },
    {
      name: "Jane Smith",
      role: "CTO",
      image: team2,
      linkedin: "https://www.linkedin.com/in/",
    },
    {
        name: "Daniel Smith",
        role: "Managing Director",
        image: team3,
        linkedin: "https://www.linkedin.com/in/",
      },
    // Add more team members here
  ];

  return (
    <div>
        <h1>OUR LEADERSHIP TEAM</h1>
        <p style={{textAlign:'justify',padding:'2px',margin:'5px'}}>Our leadership team is composed of visionary leaders dedicated to driving innovation and success. With expertise spanning across multiple industries, each team member brings a wealth of experience, strategic thinking, and a commitment to excellence. Together, they lead with a shared passion for delivering cutting-edge solutions that empower businesses and foster growth, ensuring that our organization remains at the forefront of technological advancements.</p>
    <LeadershipTeamContainer>
       
      {teamMembers.map((member, index) => (
        <TeamMember key={index}>
          <Image
            src={member.image}
            alt={member.name}
            onClick={() => window.open(member.linkedin, "_blank")}
          />
          <Name>{member.name}</Name>
          <Role>{member.role}</Role>
        </TeamMember>
      ))}
    </LeadershipTeamContainer>
    </div>
  );
};

export default LeadershipTeam;
