import React from 'react';
import ashleeImage from '../ashlee.jpg'; 

const AboutMe: React.FC = () => {
  return (
    <section style={{ 
      padding: '50px 20px', 
      textAlign: 'center', 
      backgroundColor: '#FFD1DC', 
      fontFamily: "'Poppins', sans-serif",
      minHeight: '100vh'
    }}>
      <h2 style={{ 
        fontSize: '36px', 
        marginBottom: '20px', 
        color: '#FF69B4',
        fontWeight: 'bold'
      }}>
        About Me
      </h2>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <img
          src={ashleeImage}
          alt="Ashlee Pelzer"
          style={{
            width: '160px',
            height: '160px',
            borderRadius: '50%',
            objectFit: 'cover',
            marginBottom: '20px',
            border: '4px solid #FF69B4', // Cute pink border
          }}
        />
        <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#333' }}>
          Hi! I'm Ashlee Pelzer, a passionate **coding bootcamp student** who is actively learning and refining my web development skills. 
          I love diving into front-end technologies and bringing creative, user-friendly interfaces to life. Every day, I strive to 
          expand my knowledge and push my coding abilities to the next level. 💻✨
        </p>
        <p style={{ fontSize: '18px', marginTop: '20px', color: '#333' }}>
          My dream is to become a **full-time web developer** and contribute to exciting projects that make a difference. 
          I'm excited to join the **tech industry** and collaborate with other developers to build innovative solutions. 
          With each challenge, I grow more confident in my skills and can't wait to see where this journey takes me! 🚀
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
