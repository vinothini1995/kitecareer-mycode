import React from 'react';
import '../CSS/Footer.css';
import { Link } from 'react-router-dom'; // Import Link from React Router

import imagebg from '../images/logo1.png'
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section logo">
          <img 
            src={imagebg} 
            alt="Kite Career" 
            className="kite-logo" 
          />
          <p>KiteCareer is a company that provides training and services in a range of areas, including e-commerce, mobile applications, web development, and the construction of various tools and applications.</p>
        </div>
        <div className="footer-section">
          <h4>About Company</h4>
          <ul>
          <li><Link to="/about">About Us</Link></li>
            <li><Link to="/service">Services</Link></li>
            <li><Link to="/technology">Technology</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/career">Career</Link></li>


          </ul>
        </div>
        <div className="footer-section">
          <h4>Our Location</h4>
          <ul>
            <li><p>VKR Complex, Behind Bus Stand, Surandai 627859.</p></li>
            <li><b>Branches</b></li>
            <li><p>Chennai, Tenkasi - Tamil Nadu</p></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Head office</h4>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7881.846617744449!2d77.41207477770998!3d8.979204599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b069dc301286259%3A0x3ce75e35eb627fdf!2sKite%20Career!5e0!3m2!1sen!2sus!4v1726296843736!5m2!1sen!2sus" 
            width="100%" 
            height="300" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="social-icons">
          <a href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
          <a href="https://wa.me/9498478472" aria-label="Whatsapp"><i className="fab fa-whatsapp"></i></a>
          <a href="https://www.instagram.com/kitecareer2018?igsh=bWxwajdvc3IxdnB3" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          <a href="https://www.linkedin.com/company/kitecareer/mycompany/" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
        </div>
        <p>&copy; 2024 KiteCareer. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;