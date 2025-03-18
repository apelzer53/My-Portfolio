import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{
      backgroundColor: '#FF69B4',  
      color: 'white',
      padding: '10px 50px',
      width: '100%',
      position: 'fixed',
      bottom: 0,
      left: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
      boxShadow: '0 -4px 15px rgba(0, 0, 0, 0.1)',
      fontFamily: "'Poppins', sans-serif", 
    }}>
      <div style={{ textAlign: 'center' }}>
        <p style={{
          margin: 0,
          fontSize: '12px',
          fontWeight: '500',
        }}>
          Connect with me on: 
        </p>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          marginTop: '5px',
        }}>
          <a
            href="https://github.com/apelzer53"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'white',
              fontSize: '16px',
              textDecoration: 'none',
              transition: 'color 0.3s ease',
            }}
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ashlee-pelzer/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'white',
              fontSize: '16px',
              textDecoration: 'none',
              transition: 'color 0.3s ease',
            }}
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/ashdawwn"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'white',
              fontSize: '16px',
              textDecoration: 'none',
              transition: 'color 0.3s ease',
            }}
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
