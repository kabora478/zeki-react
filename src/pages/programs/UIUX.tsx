import React from "react";
import { motion } from "framer-motion";
import "./UIUX.css";
import Navbar from "@/components/Navbar";
import heroImg from "@/assets/uiux.jpg"; // Save a suitable UI/UX image here

const UIUX: React.FC = () => {
  return (
    <div className="uiux-container">
      <Navbar />

      {/* Hero */}
      <motion.div
        className="uiux-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="uiux-hero-overlay"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h1>UI/UX Design</h1>
          <p>Create elegant, user-centered digital experiences from research to prototype</p>
        </motion.div>
      </motion.div>

      {/* Content */}
      <motion.div
        className="uiux-content"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h2>What You’ll Learn</h2>

        <div className="uiux-grid">
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              className="uiux-card"
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
          className="uiux-info"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          <strong>Duration:</strong> 2–3 months | <strong>Level:</strong> Beginner–Intermediate
        </motion.p>

        <motion.button
          className="uiux-button"
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
  { title: "User Research", desc: "Learn to create personas, journey maps, and user flows" },
  { title: "Wireframing & Prototyping", desc: "Design and iterate quickly using Figma & Adobe XD" },
  { title: "Usability Testing", desc: "Validate designs with real users and feedback" },
  { title: "Redesign Projects", desc: "Work on real-world UI/UX redesigns for your portfolio" },
];

export default UIUX;
