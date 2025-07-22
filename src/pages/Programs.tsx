// src/pages/Programs.tsx
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar'; // ✅ Adjust path if needed
import './Programs.css'; // ✅ Your custom styles

const programs = [
  { name: 'Web Development', description: 'Build websites using HTML, CSS, and JS.' },
  { name: 'Graphic Design', description: 'Design logos, posters, and social content.' },
  { name: 'Cybersecurity', description: 'Learn to protect digital infrastructure.' },
];

const Programs: React.FC = () => {
  useEffect(() => {
    document.title = "Zekis Tech Solutions | Programs";
  }, []);

  return (
    <>
      <Navbar />
      <div className="programs-container">
        <h1>Our Programs</h1>
        <div className="programs-list">
          {programs.map((program, index) => (
            <div className="program-card" key={index}>
              <h2>{program.name}</h2>
              <p>{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Programs;
