// src/pages/services/WebDevelopment.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import './ServiceDetails.css'; // we'll create this next

const WebDevelopment: React.FC = () => {
  return (
    <div className="service-details">
      <h1>Web Development Services</h1>
      <p>Choose the type of website that suits your needs:</p>

      <div className="website-options">

        <div className="website-card">
          <h2>🛒 E-Commerce Website</h2>
          <p>Perfect for selling products online with inventory, cart, and payment integration.</p>
          <p><strong>Price:</strong> KSh 15,000 - 40,000</p>
          <Link to="/get-started?type=ecommerce" className="btn-select">Get Started</Link>
        </div>

        <div className="website-card">
          <h2>🏢 Company Website</h2>
          <p>Showcase your services, portfolio, and contact details professionally.</p>
          <p><strong>Price:</strong> KSh 10,000 - 25,000</p>
          <Link to="/get-started?type=company" className="btn-select">Get Started</Link>
        </div>

        <div className="website-card">
          <h2>📰 Blog or Personal Website</h2>
          <p>Ideal for sharing ideas, articles, and personal branding.</p>
          <p><strong>Price:</strong> KSh 5,000 - 15,000</p>
          <Link to="/get-started?type=blog" className="btn-select">Get Started</Link>
        </div>

        <div className="website-card">
          <h2>📲 Web App</h2>
          <p>Advanced platforms like dashboards, portals, or SaaS tools.</p>
          <p><strong>Price:</strong> KSh 30,000+</p>
          <Link to="/get-started?type=webapp" className="btn-select">Get Started</Link>
        </div>

      </div>
    </div>
  );
};

export default WebDevelopment;
