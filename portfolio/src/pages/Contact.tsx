import React, { useState } from 'react';

const ContactMe: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
   
    alert('Form submitted');
  };

  return (
    <section style={{
      backgroundColor: '#FFB6C1',  
      color: '#fff',
      padding: '50px 20px',
      textAlign: 'center',
      fontFamily: "'Poppins', sans-serif",
    }}>
      <h2 style={{
        fontSize: '36px',
        marginBottom: '20px',
        fontWeight: '600',
        letterSpacing: '2px',  
      }}>Contact Me</h2>
      
      <form onSubmit={handleSubmit} style={{
        maxWidth: '500px', 
        margin: '0 auto',
        backgroundColor: '#fff',
        padding: '30px',
        borderRadius: '15px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      }}>
        <div style={{ marginBottom: '25px' }}>
          <label htmlFor="name" style={{
            fontSize: '18px',
            color: '#333',
            marginBottom: '8px',
            display: 'block',
          }}>Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '12px',
              fontSize: '16px',
              borderRadius: '8px',
              border: 'none',
              marginBottom: '10px',
              backgroundColor: '#f9f9f9',
              boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease-in-out',
            }}
            required
          />
        </div>
        
        <div style={{ marginBottom: '25px' }}>
          <label htmlFor="email" style={{
            fontSize: '18px',
            color: '#333',
            marginBottom: '8px',
            display: 'block',
          }}>Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '12px',
              fontSize: '16px',
              borderRadius: '8px',
              border: 'none',
              marginBottom: '10px',
              backgroundColor: '#f9f9f9',
              boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease-in-out',
            }}
            required
          />
        </div>

        <div style={{ marginBottom: '25px' }}>
          <label htmlFor="message" style={{
            fontSize: '18px',
            color: '#333',
            marginBottom: '8px',
            display: 'block',
          }}>Your Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '12px',
              fontSize: '16px',
              borderRadius: '8px',
              border: 'none',
              marginBottom: '10px',
              backgroundColor: '#f9f9f9',
              boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease-in-out',
              minHeight: '150px',
            }}
            required
          />
        </div>

        <button type="submit" style={{
          padding: '12px 30px',
          fontSize: '18px',
          backgroundColor: '#FF69B4',  
          color: 'white',
          border: 'none',
          borderRadius: '50px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
        }}>
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactMe;
