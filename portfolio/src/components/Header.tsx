import React from 'react';

const Header: React.FC = () => {
  return (
    <header style={{
      backgroundColor: '#FF69B4',  
      color: 'white',
      padding: '20px 50px',
      width: '100%',
      position: 'fixed',
      top: 0,
      left: 0,
      display: 'flex',
      justifyContent: 'flex-start', 
      alignItems: 'center',
      zIndex: 1000,
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
      fontFamily: "'Poppins', sans-serif", 
      marginBottom: '20px',
    }}>
      <h1 style={{
        margin: 0,
        fontSize: '32px',
        fontWeight: '600',
        letterSpacing: '2px',  
      }}>
        Ashlee
      </h1>
      
      <nav style={{ marginLeft: '40px' }}> 
        <ul style={{
          display: 'flex',
          listStyleType: 'none',
          margin: 0,
          padding: 0,
        }}>
          <li style={{ margin: '0 25px' }}>
            <a href="/about" style={{
              color: 'white', 
              textDecoration: 'none', 
              fontSize: '18px',
              fontWeight: '500',
              transition: 'color 0.3s ease',
              padding: '5px 10px',
              borderRadius: '5px',
            }}>About Me</a>
          </li>
          <li style={{ margin: '0 25px' }}>
            <a href="/portfolio" style={{
              color: 'white', 
              textDecoration: 'none', 
              fontSize: '18px',
              fontWeight: '500',
              transition: 'color 0.3s ease',
              padding: '5px 10px',
              borderRadius: '5px',
            }}>Portfolio</a>
          </li>
          <li style={{ margin: '0 25px' }}>
            <a href="/resume" style={{
              color: 'white', 
              textDecoration: 'none', 
              fontSize: '18px',
              fontWeight: '500',
              transition: 'color 0.3s ease',
              padding: '5px 10px',
              borderRadius: '5px',
            }}>Resume</a>
          </li>
          <li style={{ margin: '0 25px' }}>
            <a href="/contact" style={{
              color: 'white', 
              textDecoration: 'none', 
              fontSize: '18px',
              fontWeight: '500',
              transition: 'color 0.3s ease',
              padding: '5px 10px',
              borderRadius: '5px',
            }}>Contact Me</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
