import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setIsLoading(true);
      try {
        // Send data to backend
        const response = await fetch('http://localhost:5600/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          setIsSubmitted(true);
          setFormData({
             name: '',
             email: '', 
             message: '' 
            }); // Clear form after successful submission
          setError('');
        } else {
          setError('Failed to submit the form. Please try again.');
        }
      } catch (error) {
        console.log(error)
        setError('An error occurred. Please try again.');
      } finally {
        setIsLoading(false);
      }
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <div className="contact-container" style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Please fill out the form below.</p>
      </header>

      <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: 'auto' }}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="name" style={{ display: 'block' }}>Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', fontSize: '16px' }}
            required
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email" style={{ display: 'block' }}>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', fontSize: '16px' }}
            required
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="message" style={{ display: 'block' }}>Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', fontSize: '16px' }}
            rows="5"
            required
          />
        </div>

        <div style={{ textAlign: 'center' }}>
          <button
          className='btn'
            type="submit"
            style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
            disabled={isLoading}
          >
            {isLoading ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>

      {isSubmitted && (
        <div style={{ marginTop: '20px', textAlign: 'center', color: 'green' }}>
          <p>Thank you for reaching out! We'll get back to you shortly.</p>
        </div>
      )}

      {error && (
        <div style={{ marginTop: '20px', textAlign: 'center', color: 'red' }}>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default Contact;
