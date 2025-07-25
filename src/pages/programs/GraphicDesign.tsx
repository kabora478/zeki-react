import React from "react";
import { motion } from "framer-motion";
import "./GraphicDesign.css";
import Navbar from "@/components/Navbar";
import heroImg from "@/assets/graphicdesigns.jpg"; // Add a creative hero image here

const GraphicDesign: React.FC = () => {
  return (
    <div className="gd-container">
      <Navbar />

      {/* Hero Section */}
      <motion.div
        className="gd-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="gd-hero-overlay"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h1>Graphic Design Program</h1>
          <p>Design visuals that captivate and communicate with purpose and style</p>
        </motion.div>
      </motion.div>

      {/* Content Section */}
      <motion.div
        className="gd-content"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h2>What You’ll Learn</h2>

        <div className="gd-grid">
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              className="gd-card"
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
          className="gd-info"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          <strong>Duration:</strong> 2–3 months | <strong>Level:</strong> Beginner
        </motion.p>

        <motion.button
          className="gd-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start Creating
        </motion.button>
      </motion.div>
    </div>
  );
};

const cardData = [
  { title: "Design Principles", desc: "Learn the basics of layout, balance, color, and branding" },
  { title: "Pro Tools", desc: "Master Photoshop, Illustrator, and Figma for creative design" },
  { title: "Digital Content Creation", desc: "Create UI mockups, logos, posters, and social media ads" },
  { title: "Build Your Brand", desc: "Craft a portfolio and explore freelancing opportunities" },
];

export default GraphicDesign;
