import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import "./CyberSecurity.css";
import heroImg from "@/assets/cybersecurity.jpg"; // Save your hero image in this path

const CyberSecurity: React.FC = () => {
  return (
    <div className="cyber-container">
      {/* Hero Section */}
      <motion.div
        className="cyber-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="cyber-hero-overlay"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h1>Cyber Security Program</h1>
          <p>Dive into the world of digital defense and ethical hacking</p>
        </motion.div>
      </motion.div>

      {/* Content */}
      <motion.div
        className="cyber-content"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h2>What You’ll Learn</h2>
        <div className="cyber-grid">
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              className="cyber-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.2 }}
            >
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="cyber-info"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          <strong>Duration:</strong> 3 months | <strong>Level:</strong> Intermediate
        </motion.p>

        <motion.button
          className="cyber-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Join the Program
        </motion.button>
      </motion.div>
    </div>
  );
};

const cardData = [
  { title: "Cybersecurity Fundamentals", desc: "Understand risk, threats, and protection techniques" },
  { title: "Prevent Attacks & Breaches", desc: "Identify vulnerabilities, secure networks & systems" },
  { title: "Ethical Hacking", desc: "Perform penetration testing and vulnerability scans" },
  { title: "Powerful Tools", desc: "Wireshark, Metasploit, Kali Linux & more" },
];

export default CyberSecurity;
