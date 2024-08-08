import React from 'react';
import '../App.css';

const Contact = () => (
  <div className="center-content">
    <div className="contact-container">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <p>Please fill out the form below if you are interested! You will receive an email soon :)</p>
        <form>
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
          <input type="email" placeholder="Email" required />
          <input type="tel" placeholder="Phone Number" required />
          <input type="number" placeholder="Age" required />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="contact-details">
      <img src="/krishna_quote.jpeg" alt="HKrishna Quote" className="krishna-image" />
        <h2>Our Address</h2>
        <p>Vijaya Kumar Gogineni</p>
        <p>440 Hickory Ct,</p>
        <p>Robins, 1A 52328</p>
        <p>Incorporator</p>
      </div>
    </div>
  </div>
);

export default Contact;
