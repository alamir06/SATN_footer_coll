import React from "react";
import "./footer.css"; 

const Footer = () => {
  return (
    <footer className="footer">
    <div className="all-content">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>
            We are a SAT Tech company dedicated to providing the best services and
            solutions for our customers in development and technology. 
            Our mission is to make your life easier and more productive.
          </p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: SAT@info.com</p>
          <p>Phone: +251921991810</p>
          <p>Address:  Addis Ababa, Ethiopia</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} SAT Tech Compnay. All rights reserved.
        </p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;