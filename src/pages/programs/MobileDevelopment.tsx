import React from "react";
import { motion } from "framer-motion";
import "./MobileDevelopment.css";
import Navbar from "@/components/Navbar";
import heroImg from "@/assets/mobiledev.jpg"; // Add a mobile-themed image here

const MobileDevelopment: React.FC = () => {
  return (
    <div className="mobile-container">
      <Navbar />

      {/* Hero Section */}
      <motion.div
        className="mobile-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="mobile-hero-overlay"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h1>Mobile App Development</h1>
          <p>Build apps people use every day — Android, iOS & cross-platform</p>
        </motion.div>
      </motion.div>

      {/* Content */}
      <motion.div
        className="mobile-content"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h2>What You’ll Learn</h2>

        <div className="mobile-grid">
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              className="mobile-card"
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
          className="mobile-info"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          <strong>Duration:</strong> 3–5 months | <strong>Level:</strong> Intermediate
        </motion.p>

        <motion.button
          className="mobile-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </motion.div>
    </div>
  );
};

const cardData = [
  { title: "Native Development", desc: "Android (Java/Kotlin) and iOS (Swift) app building" },
  { title: "Cross-Platform Apps", desc: "Use Flutter and React Native for multi-device support" },
  { title: "Deployment & Testing", desc: "Learn app publishing, debugging, and test automation" },
  { title: "APIs & Firebase", desc: "Integrate real-time databases and external services" },
];

export default MobileDevelopment;
