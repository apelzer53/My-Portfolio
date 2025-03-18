import React from 'react';

const Resume: React.FC = () => {
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
        My Resume
      </h2>

   
      <div style={{
        marginBottom: '30px',
      }}>
        <a 
          href="./resume.pdf" 
          download="resume.pdf"
          style={{
            textDecoration: 'none',
            backgroundColor: '#FF69B4',
            color: '#fff',
            padding: '12px 20px',
            borderRadius: '8px',
            fontSize: '18px',
            fontWeight: 'bold',
            display: 'inline-block',
          }}>
          📄 Download Resume
        </a>
      </div>


      <div style={{
        backgroundColor: '#fff',
        borderRadius: '15px',
        padding: '20px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        maxWidth: '800px',
        margin: '0 auto',
      }}>
        <h3 style={{
          fontSize: '24px',
          color: '#FF69B4',
          marginBottom: '15px',
        }}>
          Skills & Technologies
        </h3>
        <ul style={{
          listStyle: 'none',
          padding: 0,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
          gap: '15px',
        }}>
          {[
            'JavaScript', 'TypeScript', 'React', 'Node.js', 'Express.js', 
            'PostgreSQL', 'MongoDB', 'Tailwind CSS', 'Git/GitHub', 'Cypress'
          ].map(skill => (
            <li key={skill} style={{
              backgroundColor: '#FF69B4',
              color: '#fff',
              padding: '10px',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: 'bold',
            }}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Resume;
