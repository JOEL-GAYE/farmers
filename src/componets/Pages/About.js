import React from 'react';

const About = () => {
  return (
    <div className="about-container" style={{ padding: '30px', fontFamily: 'Arial, sans-serif', }}>
      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1>Welcome to Mkulima solutions</h1>
        <p>Your trusted partner in quality poultry and farming solutions.</p>
      </header>

      <section style={{ marginBottom: '20px' }}>
        <h2 className='us'>About Us</h2>
        <p>
          At Mkulima solutions, we have been providing high-quality poultry products for over five years. 
          Our farm is dedicated to breeding and raising healthy chickens, turkeys, ducks, and other poultry with the best 
          practices in animal husbandry. We are passionate about sustainable farming and bringing fresh, local poultry 
          products to your table.
        </p>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h2 className='us'>Our Mission</h2>
        <p>
          Our mission is to provide customers with fresh, nutritious poultry products, while promoting ethical farming practices 
          and supporting local agriculture. We aim to ensure that our customers receive top-quality products that meet their 
          needs and contribute to the health and well-being of their families.
        </p>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h2 className='us'>What We Offer</h2>
        <ul>
          <li>Fresh, locally sourced poultry</li>
          <li>Organic feed and free-range chickens</li>
          <li>Farm fresh eggs</li>
          <li>Poultry farming equipment and supplies</li>
          <li>Consultation services for new poultry farmers</li>
        </ul>
      </section>

      <section>
        <h2 className='us'>Our Commitment to Sustainability</h2>
        <p>
          We are committed to sustainable farming practices that protect the environment and ensure the health of our poultry. 
          We use eco-friendly farming methods, minimize waste, and provide our birds with clean, comfortable living conditions 
          to ensure that we produce the best products for our customers.
        </p>
      </section>
      
      <footer style={{ marginTop: '30px', textAlign: 'center' }}>
        <p>Contact us today to learn more or visit our store!</p>
      </footer>
    </div>
  );
};

export default About;
