import React, { useRef,useState } from 'react';
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';
import '../CSS/Contact.css';
import Header from '../components/Header';
import lady from '../images/Lady.png';
import { Helmet } from 'react-helmet';
const SERVICE_ID = "service_yt4t65d";
const TEMPLATE_ID = "template_tnryv4f";
const USER_ID = "SRXUKRqfG4h7mc1rz";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });

  const form = useRef();
  const sendEmail = (e) => {
      e.preventDefault();
      if (!validateForm()) {
        return; // Stop the function if validation fails
      }
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
          .then((result) => {
              console.log(result.text);
              Swal.fire({
                  icon: 'success',
                  title: 'Message Sent Successfully'
              })
          }, (error) => {
              console.log(error.text);
              Swal.fire({
                  icon: 'error',
                  title: 'Ooops, something went wrong',
                  text: error.text,
              })
          });
      e.target.reset()
  };

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { name, email, mobile, message } = formData;
    let errors = {};
    if (!name) errors.name = 'Name is required';
    if (!email) errors.email = 'Email is required';
    if (!mobile) errors.mobile = 'Mobile number is required';
    if (!message) errors.message = 'Message is required';
    else if (!/\S+@\S+\.\S+/.test(email)) errors.email = 'Email is invalid';
    if (!/^\d{10}$/.test(mobile)) errors.mobile = 'Invalid mobile number';
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };



  return (
    <div>
   <Helmet>
    <title>Contact</title>
   </Helmet>
    <div className="contact-page" style={{background:' linear-gradient(to right, #295F98, #ffffff)'}}>
    <Header/>
      <div className="contact-header" style={{background:' linear-gradient(to right, #295F98, #ffffff)'}}>
        <h1 style={{color:'white'}}>Get In Touch!!!</h1>
        <p style={{color:'white'}}>We’d Love To Hear From You.</p>
      </div>
      <div className="contact-card">
        <div className="contact-image">
          <img src={lady} alt="Contact" />
        </div>
        <div className="contact-form">
        <form ref={form} onSubmit={sendEmail} onClick={validateForm}>
        <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? 'error' : ''}
              />
              {errors.name && <span className="error-text">{errors.name}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="mobile">Mobile Number</label>
              <input
                type="text"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className={errors.mobile ? 'error' : ''}
              />
              {errors.mobile && <span className="error-text">{errors.mobile}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? 'error' : ''}
              />
              {errors.message && <span className="error-text">{errors.message}</span>}
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
      
      <div className="contact-info-card">
        <div className="contact-address">
          <h3>Contact Address</h3>
          <p>VKR complex, <br />
          Behind bus stand,<br />
          Surandai 627859.
          </p>
        </div>
        <div className="contact-details">
          <h3>Contact Details</h3>
          <p>
            <a href="mailto:kitecareer@gmail.com">hr@kitecareer.com</a>
          </p>
          <a href={`https://wa.me/919498478472?text=Hello%20from%20the%20contact%20form`} target="_blank" rel="noopener noreferrer">
            <button className="whatsapp-button">Contact on WhatsApp</button>
          </a>

        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;