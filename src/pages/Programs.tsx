// src/pages/Services.tsx
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar'; // ✅ Adjust path if needed
import './Programs.css'; // ✅ Reuse styles for now

const services = [
  { name: 'Web Development', description: 'Custom websites and web applications built using modern technologies like React, Node.js, and Django.' },
  { name: 'Mobile App Development', description: 'Native and cross-platform mobile applications using Flutter and React Native.' },
  { name: 'Graphic Design', description: 'Creative branding, social media content, posters, and logo design for businesses and events.' },
  { name: 'Cybersecurity Solutions', description: 'Security audits, penetration testing, and training to protect your digital assets.' },
  { name: 'Digital Marketing', description: 'Social media campaigns, SEO, and paid advertising to grow your online presence.' },
  { name: 'IT Consultancy', description: 'Professional IT guidance for digital transformation and infrastructure management.' },
  { name: 'E-learning Platform Setup', description: 'Custom LMS systems for schools, colleges, and training centers.' },
  { name: 'Cloud Solutions', description: 'Deploy and manage scalable apps and databases on AWS, Google Cloud, or Azure.' },
  { name: 'Technical Training', description: 'Workshops and courses in software engineering, design, cybersecurity, and more.' },
  { name: 'Data Analytics', description: 'Turn raw data into actionable insights using tools like Power BI, Python, and SQL.' },
];

const Services: React.FC = () => {
  useEffect(() => {
    document.title = "Zeki Tech Solutions | Services";
  }, []);

  return (
    <>
      <Navbar />
      <div className="programs-container">
        <h1>Our Services</h1>
        <div className="programs-list">
          {services.map((service, index) => (
            <div className="program-card" key={index}>
              <h2>{service.name}</h2>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
