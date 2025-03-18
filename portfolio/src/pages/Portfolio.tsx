import React from 'react';

const Portfolio: React.FC = () => {
  return (
    <section style={{
      padding: '50px 20px',
      textAlign: 'center',
      backgroundColor: '#FFD1DC', 
      fontFamily: "'Poppins', sans-serif",
      minHeight: '100vh',
    }}>
      <h2 style={{
        fontSize: '36px',
        marginBottom: '20px',
        color: '#FF69B4',
        fontWeight: 'bold',
      }}>
        My Portfolio
      </h2>
      
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        maxWidth: '800px',
        margin: '0 auto',
      }}>
        {/* Project Card */}
        <div style={{
          backgroundColor: '#fff',
          borderRadius: '15px',
          padding: '20px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          width: '100%',
          textAlign: 'center',
        }}>
          <img 
            src="/Tracker.jpg" 
            alt="Candidate Search App"
            style={{
              width: '100%',
              borderRadius: '10px',
              objectFit: 'cover',
            }}
          />
          <h3 style={{
            fontSize: '24px',
            margin: '15px 0',
            color: '#FF69B4',
          }}>
            Candidate Search
          </h3>
          <p style={{
            fontSize: '16px',
            color: '#333',
            marginBottom: '15px',
          }}>
            A recruitment search application that helps find the best candidates efficiently.
          </p>
          <div>
            <a 
              href="https://candidate-search-laxp.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: 'none',
                backgroundColor: '#FF69B4',
                color: '#fff',
                padding: '10px 15px',
                borderRadius: '5px',
                fontSize: '16px',
                fontWeight: 'bold',
                marginRight: '10px',
                display: 'inline-block',
              }}>
              View Live
            </a>
            <a 
              href="https://github.com/apelzer53/Candidate-Search"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: 'none',
                backgroundColor: '#FF69B4',
                color: '#fff',
                padding: '10px 15px',
                borderRadius: '5px',
                fontSize: '16px',
                fontWeight: 'bold',
                display: 'inline-block',
              }}>
              GitHub Repo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
