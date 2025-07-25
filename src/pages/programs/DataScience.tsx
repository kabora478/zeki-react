import React from "react";
import { motion } from "framer-motion";
import "./DataScience.css";
import Navbar from "@/components/Navbar";
import heroImg from "@/assets/data-science.jpg"; // Add a hero image in this path

const DataScience: React.FC = () => {
  return (
    <div className="ds-container">
      <Navbar />

      {/* Hero Section */}
      <motion.div
        className="ds-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="ds-hero-overlay"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h1>Data Science Program</h1>
          <p>Make sense of data to guide real-world decisions with powerful tools & skills</p>
        </motion.div>
      </motion.div>

      {/* Content */}
      <motion.div
        className="ds-content"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h2>What You’ll Learn</h2>

        <div className="ds-grid">
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              className="ds-card"
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
          className="ds-info"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          <strong>Duration:</strong> 4–6 months | <strong>Level:</strong> Intermediate
        </motion.p>

        <motion.button
          className="ds-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Apply Now
        </motion.button>
      </motion.div>
    </div>
  );
};

const cardData = [
  { title: "Python & Libraries", desc: "Work with Pandas, NumPy, and Jupyter Notebooks" },
  { title: "Data Visualization", desc: "Build visual insights using Matplotlib & Seaborn" },
  { title: "Machine Learning", desc: "Train models for classification, regression & clustering" },
  { title: "Databases & BI Tools", desc: "Master SQL, Tableau, and Power BI for reporting" },
];

export default DataScience;
