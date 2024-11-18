import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (email) {
      try {
        //  a POST request to save the email
        const response = await fetch("http://localhost:5600/subscribers", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ email })
        });

        if (response.ok) {
          setMessage("Thank you for subscribing!");
          setEmail(''); // Clear the input field
        } else {
          setMessage("Failed to subscribe. Please try again.");
        }
      } catch (error) {
        setMessage("Error: Unable to connect to the server.");
        console.error("Error saving to db.json:", error);
      }
    } else {
      setMessage("Please enter a valid email.");
    }
  };

  return (
    <div className="my-5 p-4 rounded-3 bg-light text-light text-center shadow-lg" id="sub">
      <h3 className="fw-bold text-warning">Subscribe</h3>
      <p className="text-light">
        Leave your email here for regular tips, notifications, and new products!
      </p>
      <form id="subscribeForm" onSubmit={handleSubscribe}>
        <div className="input-group mb-3">
          <input
            type="email"
            name="email"
            id="email"
            size="20"
            className="form-control form-control-lg"
            placeholder="Enter a valid Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-warning btn-lg text-primary fw-semibold">
            Subscribe <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </form>
      {message && <p className="text-warning mt-3">{message}</p>}
      <div id="footer" className="text-warning mt-3">
        &copy; 2024 Mkulima Solutions. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
