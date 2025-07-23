import Navbar from "@/components/Navbar";
import React from "react";

import { motion } from "framer-motion";
import "./WebDevelopment.css";
import heroImg from "@/assets/web.jpg";

const WebDevelopment: React.FC = () => {
  return (
    <div className="webdev-container">
      {/* Hero Section */}
      <motion.div
        className="webdev-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="webdev-hero-overlay"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h1>Web Development Program</h1>
          <p>Unlock the power to build stunning websites and powerful web apps</p>
        </motion.div>
      </motion.div>

      {/* Content */}
      <motion.div
        className="webdev-content"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h2>What You’ll Learn</h2>

        <div className="webdev-grid">
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.2 }}
            >
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="webdev-info"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <strong>Duration:</strong> 3–6 months | <strong>Level:</strong> Beginner–Advanced
        </motion.p>

        <motion.button
          className="webdev-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Enroll Now
        </motion.button>
      </motion.div>
    </div>
  );
};

const cardData = [
  { title: "Frontend Technologies", desc: "HTML, CSS, JavaScript, React" },
  { title: "Backend Stack", desc: "Node.js, Express, MongoDB, REST APIs" },
  { title: "Version Control & Deployment", desc: "Git, GitHub, Netlify, Vercel" },
  { title: "Real-World Projects", desc: "Hands-on apps and project hosting" },
];

export default WebDevelopment;
