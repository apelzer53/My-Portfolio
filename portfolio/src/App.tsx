// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio'; 
import Resume from './pages/Resume'; 
import ContactMe from './pages/Contact'; // Import ContactMe page
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<ContactMe />} /> {/* Add route for ContactMe */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
