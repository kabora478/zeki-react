import React from 'react';
import './Departments.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const departments = [
  {
    name: 'Web Development',
    description: 'Building fast, responsive, and modern web applications using the latest technologies.',
    icon: '🌐',
  },
  {
    name: 'Graphic Design',
    description: 'Creating eye-catching graphics, logos, and promotional materials.',
    icon: '🎨',
  },
  {
    name: 'Cyber Security',
    description: 'Protecting systems and data from cyber threats and breaches.',
    icon: '🛡️',
  },
  {
    name: 'App Development',
    description: 'Designing and developing user-friendly mobile applications.',
    icon: '📱',
  },
  {
    name: 'Digital Marketing',
    description: 'Promoting businesses online using SEO, content creation, and social media.',
    icon: '📣',
  },
];

const Departments: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="departments-container">
        <h1 className="departments-title">Our Departments</h1>
        <div className="departments-grid">
          {departments.map((dept, index) => (
            <div key={index} className="department-card">
              <div className="department-icon">{dept.icon}</div>
              <h2 className="department-name">{dept.name}</h2>
              <p className="department-description">{dept.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Departments;
