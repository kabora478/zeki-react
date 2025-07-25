import React from "react";
import { motion } from "framer-motion";
import "./Mentership.css";
import Navbar from "@/components/Navbar";
import heroImg from "@/assets/mentership.jpg"; // Save a mentorship-related hero image here

const Mentorship: React.FC = () => {
  return (
    <div className="mentor-container">
      <Navbar />

      {/* Hero */}
      <motion.div
        className="mentor-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="mentor-hero-overlay"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h1>Tech Mentorship Program</h1>
          <p>Get matched with experienced mentors to grow your career faster</p>
        </motion.div>
      </motion.div>

      {/* Content */}
      <motion.div
        className="mentor-content"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h2>What You’ll Gain</h2>

        <div className="mentor-grid">
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              className="mentor-card"
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
          className="mentor-info"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          <strong>Duration:</strong> Flexible | <strong>Level:</strong> All Levels
        </motion.p>

        <motion.button
          className="mentor-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Mentored
        </motion.button>
      </motion.div>
    </div>
  );
};

const cardData = [
  { title: "1:1 Mentorship", desc: "Weekly or bi-weekly sessions with an experienced tech pro" },
  { title: "Career Guidance", desc: "Personalized feedback on your goals, portfolio, and next steps" },
  { title: "Industry Insights", desc: "Learn job search tips, networking skills, and what recruiters want" },
  { title: "Interview Prep", desc: "Mock interviews, resume reviews, and confidence coaching" },
];

export default Mentorship;
