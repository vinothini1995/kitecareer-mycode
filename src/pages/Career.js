import React, { useState } from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import { Button, TextField, Grid, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import Header from '../components/Header';
import emailjs from 'emailjs-com';

const SERVICE_ID = "service_maqggai";
const TEMPLATE_ID = "template_3lh9n5j";
const USER_ID = "Y8DQKzjEUYuG05aCv";

const PageContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  background: linear-gradient(to right, #295F98, #ffffff);
`;

const HeroSection = styled.section`
  background: linear-gradient(to right, #295F98, #ffffff);
  color: white;
  padding: 60px 20px;
  text-align: center;
`;

const HeroHeading = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
`;

const HeroSubheading = styled.h2`
  font-size: 24px;
  margin-bottom: 30px;
`;

const JobListingsSection = styled.section`
  padding: 40px 20px;
  background: #fff;
  margin-top: 20px;
  gap:40px;
`;

const JobCard = styled.div`
  background: silver;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 10px 0;
  padding: 20px;
  display: flex;
  
  flex-direction: column;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    cursor:pointer;
  }
`;

const JobTitle = styled.h3`
  margin: 0;
  font-size: 24px;
`;

const JobDetails = styled.p`
  margin: 10px 0;
`;

const StyledTextField = styled(TextField)`
  width: 100%;
  margin-bottom: 20px;
`;

const SubmitButton = styled(Button)`
  margin-top: 20px;
`;

const Career = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: 'fresher',
    yearsOfExperience: '',
    qualification: '',
    resume: null,
    resumeBase64: null, // Store Base64 version of the resume
  });

  const [errors, setErrors] = useState({});
  const [open, setOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, resume: file }));
    
    // Convert the file to Base64
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prev) => ({ ...prev, resumeBase64: reader.result }));
    };
    if (file) {
      reader.readAsDataURL(file); // Read the file as Base64
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (formData.experience === 'experienced' && !formData.yearsOfExperience) {
      newErrors.yearsOfExperience = 'Years of experience is required for experienced candidates';
    }
    if (!formData.qualification) newErrors.qualification = 'Qualification is required';
    if (!formData.resume) newErrors.resume = 'Resume file is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) {
      Swal.fire({
        icon: 'error',
        title: 'Form Validation Error',
        text: 'Please fill all required fields correctly.'
      });
      return;
    }
  
    const { name, email, phone, experience, yearsOfExperience, qualification, resumeBase64 } = formData;
  
    try {
      const emailData = {
        name,
        email,
        phone,
        experience,
        yearsOfExperience,
        qualification,
        resume: resumeBase64, // Ensure resumeBase64 is set
        resumeName: formData.resume.name, // Include the file name
      };
  
      // Use the send function of emailjs to send the attachment
      const formDataToSend = new FormData();
      formDataToSend.append('service_id', SERVICE_ID);
      formDataToSend.append('template_id', TEMPLATE_ID);
      formDataToSend.append('user_id', USER_ID);
      formDataToSend.append('template_params', JSON.stringify(emailData)); // Correctly send as string
      if (formData.resumeBase64) {
        formDataToSend.append('attachment', new Blob([resumeBase64.split(',')[1]], { type: 'application/pdf' }), formData.resume.name);
      } else {
        console.error("Resume is not converted to Base64 properly");
      }
  
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, formDataToSend, USER_ID);
  
      Swal.fire({
        icon: 'success',
        title: 'Message Sent Successfully'
      });
      resetForm();
      handleClose();
    } catch (error) {
      console.error('Error sending email:', error);
      Swal.fire({
        icon: 'error',
        title: 'Failed to Send Message',
        text: `Error: ${error.message || 'An unknown error occurred'}`,
      });
    }
  };
  

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      experience: 'fresher',
      yearsOfExperience: '',
      qualification: '',
      resume: null,
      resumeBase64: null,
    });
    setErrors({});
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    resetForm(); // Reset form when dialog is closed
  };

  return (
    <PageContainer>
      <Header />
      <HeroSection>
        <HeroHeading>Join Our Team</HeroHeading>
        <HeroSubheading>We're looking for talented individuals to join us in creating innovative solutions.</HeroSubheading>
        <Button variant="contained" color="primary" onClick={handleClickOpen}>Explore Opportunities</Button>
      </HeroSection>

      <JobListingsSection>
        <h2>Current Openings</h2>
        {['Senior Computer Programmer', 'UX Designer', 'Product Manager', 'Network Engineer', 'Front-end Developer', 'Full Stack Developer', 'Senior System Engineer', 'Mobile Developer'].map((title, index) => (
          <JobCard key={index}>
            <JobTitle>{title}</JobTitle>
            <JobDetails>Location: KiteCareer, Surandai</JobDetails>
            <JobDetails>Type: Full-Time</JobDetails>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Button variant="contained" color="primary" onClick={handleClickOpen} sx={{ width: '200px', textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
                Apply Now
              </Button>
            </div>
          </JobCard>
        ))}
      </JobListingsSection>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>Apply Now</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <StyledTextField
                  label="Full Name"
                  name="name"
                  variant="outlined"
                  value={formData.name}
                  onChange={handleInputChange}
                  error={!!errors.name}
                  helperText={errors.name}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <StyledTextField
                  label="Email"
                  name="email"
                  variant="outlined"
                  value={formData.email}
                  onChange={handleInputChange}
                  error={!!errors.email}
                  helperText={errors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <StyledTextField
                  label="Phone Number"
                  name="phone"
                  variant="outlined"
                  value={formData.phone}
                  onChange={handleInputChange}
                  error={!!errors.phone}
                  helperText={errors.phone}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Experience</FormLabel>
                  <RadioGroup
                    aria-label="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                  >
                    <FormControlLabel value="fresher" control={<Radio />} label="Fresher" />
                    <FormControlLabel value="experienced" control={<Radio />} label="Experienced" />
                  </RadioGroup>
                </FormControl>
              </Grid>
              {formData.experience === 'experienced' && (
                <Grid item xs={12}>
                  <StyledTextField
                    label="Years of Experience"
                    name="yearsOfExperience"
                    variant="outlined"
                    value={formData.yearsOfExperience}
                    onChange={handleInputChange}
                    error={!!errors.yearsOfExperience}
                    helperText={errors.yearsOfExperience}
                  />
                </Grid>
              )}
              <Grid item xs={12}>
                <StyledTextField
                  label="Highest Qualification"
                  name="qualification"
                  variant="outlined"
                  value={formData.qualification}
                  onChange={handleInputChange}
                  error={!!errors.qualification}
                  helperText={errors.qualification}
                />
              </Grid>
              <Grid item xs={12}>
                <StyledTextField
                  type="file"
                  variant="outlined"
                  onChange={handleFileChange}
                  error={!!errors.resume}
                  helperText={errors.resume}
                  inputProps={{ accept: '.pdf,.doc,.docx' }} // Allow only specific file formats
                />
              </Grid>
            </Grid>
            <DialogActions>
              <SubmitButton type="submit" variant="contained" color="primary">Submit</SubmitButton>
              <Button onClick={handleClose} color="secondary">Cancel</Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </PageContainer>
  );
};

export default Career;
