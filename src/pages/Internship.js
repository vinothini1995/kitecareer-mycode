import React, { useState } from 'react';
import styled from 'styled-components';
import internshipImage from '../images/intern.avif'; // Add your internship image
import Header from '../components/Header';
// Styled components for the internship section
const InternshipSection = styled.section`
  padding: 50px 20px;
  background-color: #f5f5f5;
`;

const InternshipHeader = styled.div`
  text-align: center;
  margin-bottom: 40px;

  h2 {
    font-size: 32px;
    color: #333;
  }

  p {
    font-size: 18px;
    color: #666;
    margin-top: 10px;
  }
`;

const InternshipContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const InternshipImage = styled.img`
  width: 45%;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const InternshipDetails = styled.div`
  flex: 1;
  padding-left: 40px;

  @media (max-width: 768px) {
    padding-left: 0;
    text-align: center;
  }

  h3 {
    font-size: 28px;
    color: #333;
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    color: #555;
    margin-bottom: 20px;
    line-height: 1.6;
  }
`;

// Styled components for the form
const InternshipForm = styled.form`
  background: #fff;
  padding: 30px;
  margin-top: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InputField = styled.input`
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
`;

const TextArea = styled.textarea`
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  height: 120px;
`;

const SubmitButton = styled.button`
  padding: 12px;
  background-color: #0056b3;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #00449e;
  }
`;

// Main Internship Component
const Internship = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    resume: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <>
    <Header/>
    <InternshipSection>
      <InternshipHeader>
        <h1>Internship Opportunities</h1>
        <h3>Kickstart your career with hands-on experience in a dynamic environment.</h3>
      </InternshipHeader>

      <InternshipContent>
        <InternshipImage src={internshipImage} alt="Internship Program" />
        <InternshipDetails>
          <h3>Why Join Our Internship Program?</h3>
          <p style={{textAlign:'justify'}}>
            Our internship program provides students and graduates with the opportunity to gain real-world experience in a supportive and collaborative environment. You will work alongside industry professionals and gain valuable skills that will help you in your career.
          </p>
          <p style={{textAlign:'justify'}}>
            We offer internships in various fields such as software development, UI/UX design, marketing, and more. Join us and grow your skills with hands-on projects, mentorship, and flexible working hours.
          </p>
        </InternshipDetails>
      </InternshipContent>

      <InternshipForm onSubmit={handleSubmit}>
        <h3>Apply for Internship</h3>
        <InputField
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <InputField
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <InputField
          type="file"
          name="resume"
          accept=".pdf, .doc, .docx"
          onChange={handleChange}
          required
        />
        <TextArea
          name="message"
          placeholder="Tell us why you'd be a great fit for this internship"
          value={formData.message}
          onChange={handleChange}
        />
        <SubmitButton type="submit">Submit Application</SubmitButton>
      </InternshipForm>
    </InternshipSection>
    </>
  );
};

export default Internship;
