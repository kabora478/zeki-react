import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import heroImg from '@/assets/ourservices.jpeg'; 
import './Programs.css';
import './Services.css';
import ReferEarn from '@/components/ReferEarn';

const services = [
  { name: 'Web Development', description: 'Custom websites and web applications built using modern technologies like React, Node.js, and Django.', route: '/services/web-development' },
  { name: 'Mobile App Development', description: 'Native and cross-platform mobile applications using Flutter and React Native.' },
  { name: 'Graphic Design', description: 'Creative branding, social media content, posters, and logo design for businesses and events.', route: '/services/graphic-design' },
  { name: 'Cybersecurity Solutions', description: 'Security audits, penetration testing, and training to protect your digital assets.', route: '/services/cyber-security' },
  { name: 'Digital Marketing', description: 'Social media campaigns, SEO, and paid advertising to grow your online presence.' },
  { name: 'IT Consultancy', description: 'Professional IT guidance for digital transformation and infrastructure management.' },
  { name: 'E-learning Platform Setup', description: 'Custom LMS systems for schools, colleges, and training centers.' },
  { name: 'Cloud Solutions', description: 'Deploy and manage scalable apps and databases on AWS, Google Cloud, or Azure.' },
  { name: 'Technical Training', description: 'Workshops and courses in software engineering, design, cybersecurity, and more.' },
  { name: 'Data Analytics', description: 'Turn raw data into actionable insights using tools like Power BI, Python, and SQL.' },
];

const Services: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "MyGuys Tech Solutions | Services";
  }, []);

  const handleRequestClick = (route?: string) => {
    if (route) {
      navigate(route);
    } else {
      alert("Please contact us directly for this service.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="hero-section">
        <img src={heroImg} alt="Our Services" className="hero-image" />
        <div className="hero-overlay">
          <h1 className="hero-title">Our Services</h1>
        </div>
      </div>

      <div className="programs-container">
        <div className="program-list">
          {services.map((service, index) => (
            <div className="program-card" key={index}>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <button
                onClick={() => handleRequestClick(service.route)}
                className="btn-request"
              >
                Request This
              </button>
            </div>
          ))}
        </div>
      </div>
      <ReferEarn/>
      <Footer />
    </>
  );
};

export default Services;
